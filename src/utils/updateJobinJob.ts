import {ReturnModelType} from '@typegoose/typegoose'
import {FilterQuery, UpdateQuery} from 'mongoose'
import {DocumentType} from '@typegoose/typegoose/lib/types'
import {ObjectId} from 'mongodb'
import {JobinJob, JobinJobModel} from "../schema/jobinJobs/JobinJob";
import {JobinJobSubscription} from "../schema/jobinJobs/JobinJobSubscription";
import {JobinJobInput} from "@jobin-cloud/shared-schema";

export async function updateJobinJob (workGroupId: ObjectId, filter: FilterQuery<DocumentType<JobinJob>>, upd: JobinJobInput, dbOnly?: UpdateQuery<JobinJob>, pubSubOnly?: JobinJobSubscription): Promise<ReturnModelType<any>> {
  if (upd.lockedAt === null) {
    if (!pubSubOnly) pubSubOnly = { _id: upd._id!, userId: upd.userId, workGroupId: upd.workGroupId! }
    pubSubOnly.nullifyLockedAt = true
  }

  if (upd.error === null) {
    if (!pubSubOnly) pubSubOnly = { _id: upd._id!, userId: upd.userId, workGroupId: upd.workGroupId! }
    pubSubOnly.nullifyError = true
  }

  if (upd.nextRunAt === null) {
    if (!pubSubOnly) pubSubOnly = { _id: upd._id!, userId: upd.userId, workGroupId: upd.workGroupId! }
    pubSubOnly.nullifyNextRunAt = true
  }

  const res = await JobinJobModel.updateOne(
    filter,
    Object.assign({}, upd, dbOnly)
  )

  // @DanielUrgent Inter-microservice communication
  // await pubSub.publish('jobinJobUpdated', JSON.stringify(Object.assign({}, upd, pubSubOnly, {workGroupId: workGroupId.toHexString()})))
  return res
}
