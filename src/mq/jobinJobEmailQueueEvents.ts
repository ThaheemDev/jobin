import { QueueEvents } from 'bullmq';
import {JobinJobModel} from "../schema/jobinJobs/JobinJob";
import {splitRedisId} from "../utils/redisIdHelper";
import {publishMessage} from "@jobin-cloud/inter-service-communication";

const jobinJobEmailQueueEvents = new QueueEvents('jobinJobEmailQueue');

jobinJobEmailQueueEvents.on('completed', async ({ jobId }) => {
    const jobinJobId = splitRedisId(jobId).entityId

    const jobinJob = await JobinJobModel.findOneAndUpdate({
        _id: jobinJobId
    }, {
        'contactStatuses.status': 'success'
    })

    if(!jobinJob || !jobinJob.contactStatuses || !jobinJob.contactStatuses[0].contactId || !jobinJob.campaignStage || !jobinJob.campaignStage.stagePositionCode) {
        return console.error(`JobinJob ${jobinJob?._id} -- is not compatible with outreach sequence or not found`)
    }

    publishMessage('contactSequencePositionUpdated', {
        userId: jobinJob.userId,
        workGroupId: jobinJob.workGroupId,
        contactId: jobinJob.contactStatuses[0].contactId,
        campaignId: jobinJob.campaignStage.campaignId,
        positionCode: jobinJob.campaignStage.stagePositionCode
    })
})

jobinJobEmailQueueEvents.on('failed', async ({ jobId, failedReason }) => {
    const jobinJobId = splitRedisId(jobId).entityId

    const jobinJob = await JobinJobModel.findOneAndUpdate({
        _id: jobinJobId
    }, {
        'contactStatuses.status': 'failed',
        'contactStatuses.errorMsg': failedReason,
        error: failedReason
    })

    if(!jobinJob || !jobinJob.contactStatuses || !jobinJob.contactStatuses[0].contactId || !jobinJob.campaignStage || !jobinJob.campaignStage.stagePositionCode) {
        return console.error(`JobinJob ${jobinJob?._id} -- is not compatible with outreach sequence or not found`)
    }

    publishMessage('contactExitCampaign', {
        userId: jobinJob.userId,
        workGroupId: jobinJob.workGroupId,
        contactId: jobinJob.contactStatuses[0].contactId,
        campaignId: jobinJob.campaignStage.campaignId,
        positionCode: jobinJob.campaignStage.stagePositionCode
    })
})