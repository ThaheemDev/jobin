import {Arg, Args, Authorized, Ctx, GraphQLISODateTime, Int, Mutation, Query, Resolver} from 'type-graphql'
import {ObjectId} from 'mongodb'
import {FilterQuery} from 'mongoose'
import dayjs from 'dayjs'
import {DocumentType} from '@typegoose/typegoose/lib/types'
import {updateJobinJob} from '../../utils/updateJobinJob'
import {JobinJob, JobinJobModel} from './JobinJob'
import {JobinJobsFilterArgs} from './JobinJobsFilterArgs'
import {completeJobinJob} from '../../utils/completeJobinJob'
import {JobinJobSubscription} from './JobinJobSubscription'
import {Context} from "@jobin-cloud/verify-jwt";
import {ObjectIdScalar, SkipTakeArgs} from "@jobin-cloud/subgraph-mongodb";
import {FeatureCodenameT} from '../../data/pricingConsts'
import {getJobinJobsFilter} from '../../utils/getJobinJobsFilter'
import {JobinCompletedJobModel} from '../jobinCompletedJobs/JobinCompletedJob'
import {CodeNameT} from "../../data/jobinJobTypes.db";
import {getRedisId} from "../../utils/redisIdHelper";
import {isWithinNextDay} from '../../utils/isWithinNextDay'
import {getQueueByJobCodename} from "../../mq/queueMap";
import {JobinJobInput} from "@jobin-cloud/shared-schema";

function getFeatureCodeNameFromJobinJob (jobinJob: {codename: string}): FeatureCodenameT | null {
  if(jobinJob.codename === 'sendLinkedinInvite') return 'normalInvite'
  // if(jobinJob.codename === 'sendLinkedinInvite' && (jobinJob.data && JSON.parse(jobinJob.data).bypass)) return 'normalInvite'
  if(jobinJob.codename === 'withdrawPending') return 'autoWithdraw'
  if(jobinJob.codename === 'sendLinkedinMessage') return 'bulkDirectMessage'
  if(jobinJob.codename === 'salesSendMessage') return 'bulkDirectMessage'
  if(jobinJob.codename === 'sendBulkEmails') return 'bulkEmail'
  if(jobinJob.codename === 'bulkEnrichContacts') return 'enrichmentCredits'

  return null
}


async function checkPrivileges (jobinJob: any, userId: ObjectId, workGroupId: ObjectId) {
  const codename = getFeatureCodeNameFromJobinJob(jobinJob)
  if(!codename) return

  // @DanielUrgent Inter-microservice communication
  // const limitExceeded = await checkAndAddPrivilegeLimit(codename, userId, workGroupId, jobinJob.totalCount)
  // if(limitExceeded instanceof Error) throw limitExceeded
}

@Resolver(_of => JobinJob)
export class JobinJobResolver {
  @Authorized()
  @Mutation(_returns => ObjectIdScalar, { nullable: true })
  protected async createJobinJob (
      @Arg('jobinJob', _type => JobinJobInput) jobinJob: JobinJobInput,
      @Ctx() ctx: Context
  ) {
    const { userId, workGroupId } = ctx
    if (!userId || !workGroupId) throw new Error('Permission Denied')

    jobinJob = Object.assign({}, jobinJob, { userId, workGroupId })
    await checkPrivileges(jobinJob, userId, workGroupId)

    if (jobinJob.queue === 'jobin') return (await JobinJobModel.create<JobinJobInput>(jobinJob))._id
    if (jobinJob.queue === 'linkedin' || jobinJob.queue === 'linkedinPriority') {
      // @DanielUrgent Inter-microservice communication
      // @DanielUrgent this is only a quick temporary solution. In future linkedinUrl should be added to ctx
      // jobinJob.userLinkedinUrl = (await UserModel.findOne({ _id: userId }, { linkedinUrl: true}))?.linkedinUrl
      return (await JobinJobModel.create<JobinJobInput>(jobinJob))._id
    }
    return null
  }

  // @FieldResolver(_returns => User, { nullable: true })
  // async linkedinUser (@Root() jobinJob: JobinJob) {
  //   if (!jobinJob.userLinkedinUrl) return
  //   return UserModel.findOne({ linkedinUrl: jobinJob.userLinkedinUrl })
  // }


  @Authorized()
  @Mutation(_returns => Boolean)
  protected async runScheduledOperationNow (
      @Arg('jobinJobId', _type => ObjectIdScalar) jobinJobId: ObjectId,
      @Arg('queue', _type => String) queue: string,
      @Ctx() ctx: Context
  ): Promise<boolean> {
    const { userId, workGroupId } = ctx
    if (!userId || !workGroupId) throw new Error('Permission Denied')

    const jobinJob = await JobinJobModel.findOneAndUpdate({_id: jobinJobId}, {
      nextRunAt: new Date()
    })

    if(!jobinJob) return false
    const codename = jobinJob.codename as CodeNameT

    if(queue === 'jobin' && codename) {
      await getQueueByJobCodename(codename).add(
          codename,
          {
            jobinJobId: jobinJobId,
          },
          {
            jobId: getRedisId('jobinJob', jobinJobId)
          }
      )
    }
    
    return true
  }


  @Authorized()
  @Mutation(_returns => Boolean)
  protected async scheduleOperation (
      @Arg('jobinJobId', _type => ObjectIdScalar) jobinJobId: ObjectId,
      @Arg('queue', _type => String) queue: string,
      @Arg('date', _type => GraphQLISODateTime) date: Date,
      @Ctx() ctx: Context
  ): Promise<boolean> {
    const { userId, workGroupId } = ctx
    if (!userId || !workGroupId) throw new Error('Permission Denied')

    const jobinJob = await JobinJobModel.findOneAndUpdate({_id: jobinJobId}, {
      nextRunAt: date
    })

    if(!jobinJob) return false

    const codename = jobinJob.codename as CodeNameT

    if(queue === 'jobin' && codename && jobinJob.nextRunAt && isWithinNextDay(jobinJob.nextRunAt)) {
        await getQueueByJobCodename(codename).add(
            codename,
            {
              jobinJobId: jobinJobId,
            },
            {
              jobId: getRedisId('jobinJob', jobinJobId),
              delay: dayjs(date).diff(dayjs(), 'milliseconds')
            }
        )
    }

    return true
  }

  @Authorized()
  @Query(_returns => [JobinJob])
  protected async jobinJobs (
    @Args() { skip, take }: SkipTakeArgs,
    @Args() filter: JobinJobsFilterArgs,
    @Ctx() ctx: Context
  ) {
    const { userId, workGroupId } = ctx
    if (!userId || !workGroupId) throw new Error('Permission Denied')

    // @DanielUrgent this is only a quick temporary solution. In future linkedinUrl should be added to ctx
    // @DanielUrgent Inter-microservice communication
    // const userLinkedinUrl = filter.selectedUserId ? (await UserModel.findOne({ _id: filter.selectedUserId }, { linkedinUrl: true}))?.linkedinUrl : undefined
    const userLinkedinUrl = undefined

    const resultFilter = getJobinJobsFilter(workGroupId, filter, userLinkedinUrl)
    return JobinJobModel.find(resultFilter).sort({ priority: -1, nextRunAt: 1 }).skip(skip).limit(take).maxTimeMS(30000)
  }

  // @Authorized()
  @Query(_returns => Int)
  protected async countJobinJobs (
      @Args() filter: JobinJobsFilterArgs,
      @Ctx() ctx: Context
  ) {
    const { userId, workGroupId } = ctx
    if (!userId || !workGroupId) throw new Error('Permission Denied')

    // @DanielUrgent Inter-microservice communication
    // const userLinkedinUrl = filter.selectedUserId ? (await UserModel.findOne({ _id: filter.selectedUserId }, { linkedinUrl: true}))?.linkedinUrl : undefined
    const userLinkedinUrl = undefined

    const resultFilter = getJobinJobsFilter(workGroupId, filter, userLinkedinUrl)
    return JobinJobModel.find(resultFilter).maxTimeMS(30000).count()
  }

  @Authorized()
  @Query(_returns => JobinJob, { nullable: true })
  protected async findAndLockJobinJob (
      @Arg('queue', _type => String) queue: string,
      @Ctx() ctx: Context
  ) {
    const { userId, workGroupId } = ctx
    if (!userId || !workGroupId) throw new Error('Permission Denied')

    const baseFilter: FilterQuery<DocumentType<JobinJob>> = { workGroupId, queue }

    // @DanielUrgent Inter-microservice communication
    // const userLinkedinUrl = (await UserModel.findOne({ _id: userId }, { linkedinUrl: true }))?.linkedinUrl
    const userLinkedinUrl = undefined

    if(userLinkedinUrl) baseFilter.userLinkedinUrl = userLinkedinUrl
    else baseFilter.userId = userId

    const lockedJob = await JobinJobModel.findOne(Object.assign({}, baseFilter, {lockedAt: { $ne: null! }, nextRunAt: { $ne: null! }}))
    if (lockedJob) {
      // This number must be exaggerated -> no slow operation should trigger double send.
      // max value is 1.5 minutes for messages (min allowed timeout is 3min)
      const timeoutDate = dayjs().subtract(10, 'minutes').toDate()

      if (+lockedJob.lockedAt! > +timeoutDate) return null

      // if locked job is stopped and and timeout date is reached. Set Job As failed
      // if (lockedJob.stop) {
      //   // undefined, getDripOperationOption(lockedJob)
      //
      //
      //   // @DANIEL PUBSUB ->
      //   // await completeJobinJob(pubSub, lockedJob._id, userId, workGroupId, 'Operation Interrupted By User.')
      //   return null
      // }

      // If operation cannot restart it should be closed
      // if (lockedJob.noResume && !lockedJob.isIdempotent) {
      //   // , undefined, getDripOperationOption(lockedJob)
      //   // @DANIEL PUBSUB ->
      //   // await completeJobinJob(pubSub, lockedJob._id, userId, workGroupId, 'Operation Timed Out')
      //   return null
      // }

      // If not stopped retry...
      return lockedJob
    }

    return JobinJobModel.findOneAndUpdate(Object.assign({}, baseFilter, {lockedAt: null!, nextRunAt: { $lte: new Date() }}), { lockedAt: new Date() }).sort({ priority: -1, nextRunAt: 1 }).maxTimeMS(15000)
  }

  @Authorized()
  @Query(_returns => JobinJob)
  protected jobinJob (
      @Arg('_id', _type => ObjectIdScalar) _id: ObjectId,
      @Ctx() ctx: Context) {
    const { userId, workGroupId } = ctx
    if (!userId || !workGroupId) throw new Error('Permission Denied')
    return JobinJobModel.findOne({ _id }).maxTimeMS(30000)
  }


  @Authorized()
  @Query(_returns => Int, {nullable: true})
  protected async dailyThrottleLimitJobinJob (
      @Arg('_id', _type => ObjectIdScalar) _id: ObjectId,
      @Args() { skip, take }: SkipTakeArgs,
      @Ctx() ctx: Context
  ): Promise<number | null> {
    const { userId, workGroupId } = ctx
    if (!userId || !workGroupId) throw new Error('Permission Denied')

    // @DanielUrgent Inter-microservice communication
    throw new Error('Not implemented')



    // const [jobinJob, userWorkGroup, user] = await Promise.all([
    //   JobinJobModel.findOne({ _id }, {contactStatuses: true, codename: true}).maxTimeMS(30000),
    //   UserWorkGroupSettingModel.findOne({ userId, workGroupId }) as unknown as UserWorkGroupSetting,
    //   // @DanielUrgent this is only a quick temporary solution. In future linkedinUrl should be added to ctx
    //   UserModel.findOne({ _id: userId }, { linkedinUrl: true })
    // ])
    //
    // if(!jobinJob || !user?.linkedinUrl) {
    //   console.error(ctx, `getDailyThrottleLimitJobinJob() -- JobinJob = ${jobinJob} || linkedinUrl = ${user?.linkedinUrl}`)
    //   return null
    // }
    //
    // const map = {
    //   fullTalentProfileImport: 'fullProfileImport',
    //   fullSalesNavProfileImport: 'fullProfileImport',
    //   fullTalentProfileImportWithEmail: 'fullProfileImportWithEmail',
    //   fullSalesNavProfileImportWithEmail: 'fullProfileImportWithEmail',
    //   sendLinkedinMessage: 'messages',
    //   sendSingleLinkedinMessage: 'messages',
    //   sendLinkedinConnectionFollowUp: 'messages',
    //   sendSingleTalentMessage: 'messages',
    //   sendSingleSalesNavMessage: 'messages',
    //   sendLinkedinInvite: 'invitations',
    //   // sendLinkedinNoTxtInvite: 'invitations'
    // }
    //
    // // ===MAPPING===
    // const throttleCodename = (map[jobinJob.codename as 'sendSingleLinkedinMessage'] || jobinJob.codename) as keyof Omit<LinkedinThrottlingSetting, '_id'>
    //
    // const throttle: number | null = userWorkGroup?.linkedinThrottling?.[throttleCodename] || null
    // if(throttle == null) return null
    //
    // let eventTypeIds = eventTypesFromOperationCodename(jobinJob.codename as OperationCodeNamesT).map(e => e._id)
    //
    // if(throttleCodename === 'messages') {
    //   eventTypeIds = [
    //     eventTypesDb.linkedinMessage._id,
    //     eventTypesDb.linkedinInMail._id,
    //     eventTypesDb.linkedinFollowUp._id,
    //     eventTypesDb.talentMessage._id,
    //     eventTypesDb.talentInMail._id,
    //     eventTypesDb.salesMessage._id,
    //     eventTypesDb.salesInMail._id
    //   ]
    // }
    //
    // if(throttleCodename === 'invitations') {
    //   eventTypeIds = [
    //     eventTypesDb.linkedinConnectionRequest._id,
    //     eventTypesDb.linkedinBypassConnectionRequest._id
    //   ]
    // }
    //
    // const dailyAlreadySent = (await JobinEventModel.aggregate([
    //   {$match: {userLinkedinUrl: user.linkedinUrl, 'type._id': {$in: eventTypeIds},  eventCreatedAt: {$gte: dayjs().subtract(1, 'day').toDate()}}},
    //   {$unwind: '$toContactIds'},
    //   {
    //     $group: {
    //       _id: null,
    //       count: {$sum: 1}
    //     }
    //   }
    // ]))[0]?.count || 0
    //
    // const result = throttle - dailyAlreadySent
    // return result > 0 ? result : 0
  }

  @Authorized()
  @Mutation(_returns => Boolean)
  protected async throttleJobinJob429 (
      @Arg('_id', _type => ObjectIdScalar) _id: ObjectId,
      @Ctx() ctx: Context
  ): Promise<boolean> {
    const { userId, workGroupId } = ctx
    if (!userId || !workGroupId) throw new Error('Permission Denied')

    // @DanielUrgent Inter-microservice communication
    throw new Error('Not implemented')

    //   const pubSubOnly: JobinJobSubscription = {
  //     _id,
  //     userId,
  //     workGroupId
  //   }
  //
  //   const newDate = dayjs().add(1, 'day').toDate()
  //   return Boolean((await updateJobinJob(workGroupId, { _id }, {lockedAt: null!, nextRunAt: newDate}, undefined, pubSubOnly)).modifiedCount)
  // }
  //
  // @Authorized()
  // @Mutation(_returns => Boolean)
  // protected async throttleJobinJob (
  //     @Arg('_id', _type => ObjectIdScalar) _id: ObjectId,
  //     @Ctx() ctx: Context
  //   ): Promise<boolean> {
  //   const { userId, workGroupId } = ctx
  //   if (!userId || !workGroupId) throw new Error('Permission Denied')
  //
  //   const pubSubOnly: JobinJobSubscription = {
  //     _id,
  //     userId,
  //     workGroupId
  //   }
  //
  //   // user
  //   const [jobinJob] = await Promise.all([
  //     JobinJobModel.findOne({ _id }, { codename: true}).maxTimeMS(30000),
  //     // @DanielUrgent this is only a quick temporary solution. In future linkedinUrl should be added to ctx
  //     // @DanielUrgent Inter-microservice communication
  //     // UserModel.findOne({ _id: userId }, { linkedinUrl: true, linkedinThrottling: true })
  //   ])
  //
  //   const user = { linkedinUrl: ''}
  //
  //   if(!jobinJob || !user?.linkedinUrl) {
  //     console.error(ctx, `getDailyThrottleLimitJobinJob() -- JobinJob = ${jobinJob} || linkedinUrl = ${user?.linkedinUrl}`)
  //     return false
  //   }
  //
  //   const eventTypeIds = eventTypesFromOperationCodename(jobinJob.codename as OperationCodeNamesT).map(e => e._id)
  //
  //   const firstTimeInDay = await JobinEventModel.findOne({
  //     userLinkedinUrl: user.linkedinUrl, 'type._id': {$in: eventTypeIds}, eventCreatedAt: {$gte: dayjs().subtract(1, 'day').toDate()}
  //   }, {eventCreatedAt: true}).sort({eventCreatedAt: 1})
  //
  //   // getAgenda().now('proceedDripByJobinJobId', {jobinJobId: _id})
  //   const newDate = dayjs(firstTimeInDay?.eventCreatedAt).add(1, 'day').toDate()
  //   return Boolean((await updateJobinJob(workGroupId, { _id }, {lockedAt: null!, nextRunAt: newDate}, undefined, pubSubOnly)).modifiedCount)
  }

  // @FieldResolver(_returns => [JobinJobContact])
  // contactStatuses (
  //     @Root() jobinJob: JobinJob,
  //     @Args() { skip, take }: SkipTakeArgs,
  //     @Arg('isLive', _type => Boolean, { nullable: true }) isLive?: boolean
  // ) {
  //   if (!isLive) return jobinJob.contactStatuses?.slice(skip, skip + take)
  //
  //   const contactStatuses = skip ? jobinJob.contactStatuses?.slice(skip) : jobinJob.contactStatuses
  //   if (!contactStatuses) return []
  //
  //   const allNotPending = contactStatuses.filter(j => j.status !== 'pending')
  //
  //   if (!allNotPending || !allNotPending.length) return contactStatuses.splice(0, take) || []
  //
  //   const allNotPendingLeng = allNotPending?.length || 0
  //   if (allNotPendingLeng > take) {
  //     const pending = contactStatuses.find(f => f.status === 'pending')
  //
  //     if (pending) {
  //       const successfulStatuses = allNotPending.slice((allNotPendingLeng - take) || 0)
  //       return [...successfulStatuses, pending]
  //     } else {
  //       return allNotPending.slice((allNotPendingLeng - take) || 0)
  //     }
  //   }
  //
  //   const successfulStatuses = allNotPending.slice(0, take)
  //   const leng = take - (successfulStatuses?.length || 0)
  //
  //   return [...(successfulStatuses || []), ...(contactStatuses?.filter(j => j.status !== 'success').splice(0, leng) || [])]
  // }

  @Authorized()
  @Query(_returns => Boolean)
  protected async checkJobinJobIsStopped (
      @Arg('_id', _type => ObjectIdScalar) _id: ObjectId,
      @Ctx() ctx: Context): Promise<boolean> {
    const { userId, workGroupId } = ctx
    if (!userId || !workGroupId) throw new Error('Permission Denied')
    return (await JobinJobModel.find({ _id, stop: true }).limit(1).maxTimeMS(30000)).length === 1
  }

  @Authorized()
  @Mutation(_returns => Int)
  protected async completeJobinJob (
      @Arg('jobinJobId', _type => ObjectIdScalar) jobinJobId: ObjectId,
      @Ctx() ctx: Context,
      @Arg('error', _type => String, { nullable: true }) error?: string,
  ) {
    const { userId, workGroupId } = ctx
    if (!userId || !workGroupId) throw new Error('Permission Denied')

    // const jobinJob = await JobinJobModel.findOne({_id: jobinJobId}, {campaignStage: true, contactStatuses: true, campaignProcessedNr: true})
    // jobinJob ? getDripOperationOption(jobinJob) : undefined

    return completeJobinJob(jobinJobId, userId, workGroupId, error)
  }

  @Authorized()
  @Mutation(_returns => Int)
  protected async updateJobinJob (
      @Arg('_id', _type => ObjectIdScalar) _id: ObjectId,
      @Arg('jobinJob', _type => JobinJobInput) jobinJob: JobinJobInput,
      @Ctx() ctx: Context,
      @Arg('updateLockedAt', _type => Boolean, { nullable: true, defaultValue: true }) updateLockedAt: boolean = true,
      // @Arg('contactStatus', _type => JobinJobContactInput, { nullable: true }) contactStatus?: JobinJobContactInput,
      // @Arg('contactStatuses', _type => [JobinJobContactInput], { nullable: true }) contactStatuses?: JobinJobContactInput[],
  ) {
    const { userId, workGroupId } = ctx
    if (!userId || !workGroupId) throw new Error('Permission Denied')

    const upd: JobinJobInput = jobinJob

    const pubSubOnly: JobinJobSubscription = {
      _id,
      userId,
      workGroupId
    }

    if (updateLockedAt) upd.lockedAt = new Date()
    const filter: FilterQuery<DocumentType<JobinJob>> = { _id }

    // if (contactStatus && (contactStatus.contactId || contactStatus.accountId)) {
    //   if (contactStatus.contactId) filter['contactStatuses.contactId'] = contactStatus.contactId
    //   else filter['contactStatuses.accountId'] = contactStatus.accountId
    //
    //   dbOnly = {}
    //   dbOnly['contactStatuses.$.status'] = contactStatus.status
    //   dbOnly['contactStatuses.$.errorMsg'] = contactStatus.errorMsg
    //
    //   pubSubOnly.updateContactStatus = {
    //     _id: new ObjectId(),
    //     contactId: contactStatus.contactId,
    //     accountId: contactStatus.accountId,
    //     status: contactStatus.status,
    //     errorMsg: contactStatus.errorMsg
    //   }
    // }

    // if(contactStatuses?.length) {
    //   const jobinJob = await JobinJobModel.findOne({_id}, {contactStatuses: true}).lean()
    //
    //   if(jobinJob?.contactStatuses) {
    //     const newContactStatuses: JobinJobContactInput[] = [...jobinJob.contactStatuses]
    //
    //     for (const index in contactStatuses) {
    //       const contactStatus = contactStatuses[index]
    //       const newIndex = newContactStatuses.findIndex(c => c.contactId?.toHexString() === contactStatus.contactId?.toHexString())
    //       if(newIndex !== -1) newContactStatuses[newIndex] = contactStatus
    //     }
    //
    //     upd.contactStatuses = newContactStatuses
    //   }
    // }

    return (await updateJobinJob(workGroupId, filter, upd, undefined, pubSubOnly)).modifiedCount
  }

  // @Authorized()
  // @Mutation(_returns => Int)
  // protected async setContactStatusesToPending (
  //     @Arg('_id', _type => ObjectIdScalar) _id: ObjectId,
  //     @Arg('linkedinUrls', _type => [String]) linkedinUrls: string[],
  //     @Ctx() ctx: Context,
  // ) {
  //   const { userId, workGroupId } = ctx
  //   if (!userId || !workGroupId) throw new Error('Permission Denied')
  //
  //   const jobinJob = await JobinJobModel.findOne({_id}, {contactStatuses: true}).lean()
  //   if(!jobinJob) throw new Error('JobinJob not found')
  //
  //   const upd: any = jobinJob
  //
  //   if(jobinJob?.contactStatuses) {
  //     for (const index in linkedinUrls) {
  //       const linkedinUrl = linkedinUrls[index]
  //       const contactStatusIndex = jobinJob.contactStatuses.findIndex(c => c.linkedinUrl === linkedinUrl)
  //       if(contactStatusIndex !== -1) upd.contactStatuses[contactStatusIndex].status = 'pending'
  //     }
  //   }
  //
  //   return (await updateJobinJob(workGroupId, {_id}, upd)).modifiedCount
  // }

  @Authorized()
  @Mutation(_returns => Int)
  protected async retryJobinJob (
      @Arg('_id', _type => ObjectIdScalar) _id: ObjectId,
      @Ctx() ctx: Context,
      @Arg('nextRunAt', _type => GraphQLISODateTime, { nullable: true }) nextRunAt?: Date,
      @Arg('reset', _type => Boolean, { nullable: true }) reset?: boolean
  ) {
    const { userId, workGroupId } = ctx
    if (!userId || !workGroupId) throw new Error('Permission Denied')

    const upd: any = { $unset: { error: true, stop: true }, status: 'pending', nextRunAt: nextRunAt ?? new Date() }

    // Problem in order to pub/sub these values we must distinguish a null (not defined in given query vs set to null)
    // No pub/sub because it needs a full refetch after running
    const jobinJob = await JobinJobModel.findOneAndUpdate({ _id }, upd)

    if(jobinJob?.queue === 'jobin') JobinJobModel.create<JobinJobInput>(jobinJob)

    return jobinJob ? 1 : 0
  }

  @Authorized()
  @Mutation(_returns => Int)
  protected async deleteJobinLocalJob (
      @Arg('_id', _type => ObjectIdScalar) _id: ObjectId,
      @Ctx() ctx: Context
  ) {
    const { userId, workGroupId } = ctx
    if (!userId || !workGroupId) throw new Error('Permission Denied')

    const [jobinJob] = await Promise.all([
      JobinJobModel.findOneAndDelete({ _id }),
      // @DanielUrgent Inter-microservice communication
      // AgendaJobModel.deleteOne({ 'data.jobinJobId': _id })
    ])

    if(!jobinJob) return 0

    await stopDripCampaignIfConnected(userId, workGroupId, jobinJob)

    return 1
  }

  @Authorized()
  @Mutation(_returns => Int)
  protected async deleteJobinJob (
      @Arg('_id', _type => ObjectIdScalar) _id: ObjectId,
      @Ctx() ctx: Context
  ) {
    const { userId, workGroupId } = ctx
    if (!userId || !workGroupId) throw new Error('Permission Denied')

    const jobinJob = await JobinJobModel.findOneAndDelete({ _id })

    if(!jobinJob) return 0

    const codename = getFeatureCodeNameFromJobinJob(jobinJob)
    if(codename) {
      // @DanielUrgent Inter-microservice communication
      // await PrivilegeModel.updateOne({userId, workGroupId, activeFeatureCodename: codename, used: {$gte: jobinJob.totalCount}}, {$inc: { used: -jobinJob.totalCount} })
    }

    await stopDripCampaignIfConnected(userId, workGroupId, jobinJob)

    return 1
  }

  @Authorized()
  @Mutation(_returns => ObjectIdScalar)
  protected async archiveJobinJob (
      @Arg('_id', _type => ObjectIdScalar) _id: ObjectId,
      @Ctx() ctx: Context
  ) {
    const { userId, workGroupId } = ctx
    if (!userId || !workGroupId) throw new Error('Permission Denied')
    const job = await JobinJobModel.findOneAndDelete({ _id }).lean()

    if (!job) return _id

    // @DanielUrgent Inter-microservice communication
    // await AgendaJobModel.deleteOne({ 'data.jobinJobId': _id })

    const promise = stopDripCampaignIfConnected(userId, workGroupId, job)
    const codename = getFeatureCodeNameFromJobinJob(job)

    // let failed = 0
    // for(let contactStatus of job.contactStatuses || []) {
    //   if(contactStatus.status === 'fail')
    //     failed++;
    // }
    //
    // const pending = job.totalCount - job.loaded + failed
    if(codename) {
      // @DanielUrgent Inter-microservice communication
      // await PrivilegeModel.updateOne({userId, workGroupId, activeFeatureCodename: codename, used: {$gte: pending}}, {$inc: { used: -pending} })
    }

    await promise

    return (await JobinCompletedJobModel.create(
        Object.assign({}, job, {_id: new ObjectId()})
    ))._id
  }

  @Authorized()
  @Mutation(_returns => Int)
  protected async archiveAllCompletedJobinJobs (@Ctx() ctx: Context) {
    const { userId, workGroupId } = ctx
    if (!userId || !workGroupId) throw new Error('Permission Denied')

    // @DanielUrgent Inter-microservice communication
    // @DanielUrgent this is only a quick temporary solution. In future linkedinUrl should be added to ctx
    // const userLinkedinUrl = await UserModel.findOne({ _id: userId }, { linkedinUrl: true }).then(res => res?.linkedinUrl)
    const userLinkedinUrl = undefined

    const jobinJobs = await JobinJobModel.find({
      workGroupId,
      // $and: [
      //   {
          $or: [
            {userLinkedinUrl},
            {userLinkedinUrl: null!, userId},
          ],
        // },
        // {
        //   $or: [
        //     {$expr: { $ne: ['$totalCount', '$loaded'] }},
        //     { 'contactStatuses.status': 'fail' }
        //   ]
        // }
      // ],
      nextRunAt: null!,
      error: null!,
    }, {totalCount: true, loaded: true, codename: true, contactStatuses: true})

    const ops: any[] = []
    const promises: Promise<any>[] = []

    for(const job of jobinJobs) {
      promises.push(stopDripCampaignIfConnected(userId, workGroupId, job))
      const codename = getFeatureCodeNameFromJobinJob(job)

      // let failed = 0
      // for(let contactStatus of job.contactStatuses || []){
      //   if(contactStatus.status === 'fail')
      //     failed++;
      // }
      //
      // const pending = job.totalCount - job.loaded + failed
      //
      // if(pending < 0) continue

      // ops.push({
      //   updateOne: {
      //     filter: {userId, workGroupId, activeFeatureCodename: codename, used: {$gte: pending}},
      //     update: {$inc: { used: -pending} }
      //   }
      // })
    }

    await Promise.all(promises)

    // @DanielUrgent Inter-microservice communication
    // if(ops.length) await PrivilegeModel.bulkWrite(ops)

    try {
      await JobinJobModel.aggregate([
        {
          // userId,
          // workGroupId,
          // nextRunAt: null,
          // error: null

          $match: {
            _id: {$in: jobinJobs.map(j => j._id)}
          }
        },
        {
          $project: {
            _id: false
          }
        },
        { $merge: { into: { db: 'jobin', coll: 'jobincompletedjobs' } } }
      ])
    } catch (e) {
      console.error(e)
    }


    return (await JobinJobModel.deleteMany({ userId, workGroupId, nextRunAt: null!, error: null! })).deletedCount
  }
}

/**
 *
 * When aborting a jobinJob delete related Sequence if exists
 *
 */
async function stopDripCampaignIfConnected (userId: ObjectId, workGroupId: ObjectId, jobinJob: JobinJob) {
  if(!jobinJob.campaignStage) return

  // @DanielUrgent Inter-microservice communication
  // await AgendaJobModel.create({
  //   name: 'exitCampaign',
  //   nextRunAt: new Date(),
  //   data: {
  //     userId,
  //     workGroupId,
  //     dripCampaignId: jobinJob.campaignStage.campaignId,
  //     contactIds: jobinJob?.contactStatuses?.filter(c => c.status !== 'success').map(c => c.contactId!),
  //     positionCode: jobinJob.campaignStage.stagePositionCode
  //   }
  // })
}