import {ObjectId} from 'mongodb'
import {updateJobinJob} from "./updateJobinJob";
import {JobinJobInput} from "@jobin-cloud/shared-schema";

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
export async function completeJobinJob (jobinJobId: ObjectId, userId: ObjectId, workGroupId: ObjectId, error?: string) {
  const upd = { lockedAt: null, nextRunAt: null } as unknown as JobinJobInput

  if (error) upd.error = error

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
