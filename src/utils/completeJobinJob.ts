import {ObjectId} from 'mongodb'
import {JobinJobUpdateInput} from '../schema/jobinJobs/JobinJobUpdateInput'
import {updateJobinJob} from "./updateJobinJob";

// type DripOperationOptionT = {
//   campaignId: ObjectId | undefined,
//   positionCode: string | undefined,
//   contactIds: ObjectId[],
//   failedContactIds: ObjectId[]
// }

// export function getDripOperationOption (jobinJob: Pick<JobinJob, 'campaignStage' | 'contactStatuses' | 'campaignProcessedNr'>): DripOperationOptionT {
//   const contactStatuses = jobinJob?.contactStatuses?.slice(jobinJob.campaignProcessedNr || 0) || []
//
//   return {
//     campaignId: jobinJob.campaignStage?.campaignId,
//     positionCode: jobinJob.campaignStage?.stagePositionCode,
//     contactIds: contactStatuses.filter(c => c.status === 'success').map(c => c.contactId!) || [],
//     failedContactIds: contactStatuses.filter(c => c.status !== 'success').map(c => c.contactId!) || [],
//   }
// }


// dripOperationOption?: DripOperationOptionT
export async function completeJobinJob (jobinJobId: ObjectId, userId: ObjectId, workGroupId: ObjectId, error?: string, hasNothingToProcess?: boolean) {
  const upd = { lockedAt: null!, nextRunAt: null! } as JobinJobUpdateInput

  if (error) upd.error = error
  if (hasNothingToProcess) {
    upd.hasNothingToProcess = true
    upd.loaded = 0
    upd.totalCount = 0
  }

  // if(dripOperationOption && (dripOperationOption.contactIds.length || dripOperationOption.failedContactIds.length)) {
  //   getAgenda().now('runDripOperations', {
  //     userId,
  //     workGroupId,
  //     campaignId: dripOperationOption.campaignId,
  //     positionCode: dripOperationOption.positionCode,
  //     contactIds: dripOperationOption.contactIds,
  //     failedContactIds: dripOperationOption.failedContactIds,
  //   })
  // }

  return (await updateJobinJob(
    workGroupId,
    { _id: jobinJobId },
    Object.assign({}, { _id: jobinJobId, workGroupId, userId }, upd)
  )).modifiedCount
}
