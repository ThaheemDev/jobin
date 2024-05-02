import {Arg, Args, Authorized, Ctx, FieldResolver, Query, Resolver, Root} from 'type-graphql'
import {ObjectId} from 'mongodb'
import {JobinJobContact} from '../jobinJobs/JobinJobContact'
import {JobinCompletedJob, JobinCompletedJobModel} from './JobinCompletedJob'
import {getJobinJobsFilter} from "../../utils/getJobinJobsFilter";
import {Context} from "@jobin-cloud/verify-jwt";
import {ObjectIdScalar, SkipTakeArgs} from "@jobin-cloud/subgraph-mongodb";

@Resolver(_of => JobinCompletedJob)
export class JobinCompletedJobResolver {
    @Authorized()
    @Query(_returns => JobinCompletedJob)
  protected jobinCompletedJob (
        @Arg('_id', _type => ObjectIdScalar) _id: ObjectId,
        @Ctx() ctx: Context) {
    const { userId, workGroupId } = ctx
    if (!userId || !workGroupId) throw new Error('Permission Denied')
    return JobinCompletedJobModel.findOne({ _id }).maxTimeMS(30000)
  }

  // @FieldResolver(_returns => [JobinJobContact])
  //   contactStatuses (
  //     @Root() jobinCompletedJob: JobinCompletedJob,
  //     @Args() { skip, take }: SkipTakeArgs
  //   ) {
  //     return jobinCompletedJob.contactStatuses?.slice(skip, skip + take)
  //   }

    @Authorized()
    @Query(_returns => [JobinCompletedJob])
  protected async jobinCompletedJobs (
    @Args() { skip, take }: SkipTakeArgs,
    @Ctx() ctx: Context,
    @Arg('selectedUserId', _type => ObjectIdScalar, { nullable: true }) selectedUserId?: ObjectId
  ) {
    const { userId, workGroupId } = ctx
    if (!userId || !workGroupId) throw new Error('Permission Denied')

      // @DanielUrgent Inter-microservice communication
      // @DanielUrgent this is only a quick temporary solution. In future linkedinUrl should be added to ctx
      // const userLinkedinUrl = selectedUserId ? (await UserModel.findOne({ _id: selectedUserId }, { linkedinUrl: true}))?.linkedinUrl : undefined

      const userLinkedinUrl = undefined

    const resultFilter = getJobinJobsFilter(workGroupId, {selectedUserId}, userLinkedinUrl)
    return JobinCompletedJobModel.find(resultFilter).sort({ updatedAt: -1  }).skip(skip).limit(take).maxTimeMS(30000)
  }
}
