import {ConnectionOptions, Queue, QueueEvents} from "bullmq";
import {splitRedisId} from "../utils/redisIdHelper";
import {JobinJobModel} from "../schema/jobinJobs/JobinJob";
import {publishMessage} from "@jobin-cloud/inter-service-communication";

export const queues: {[key: string]: Queue} = {}
export const queueEvents: {[key: string]: QueueEvents} = {}
export let redisConnection: ConnectionOptions

export async function bootstrapBullMq () {
    // =========== REDIS ===========
    redisConnection = {
        host: process.env.REDIS_HOST, // Replace with IP address or hostname
        port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : undefined, // Default Redis port
        // password: 'YOUR_REDIS_PASSWORD', // If authentication is enabled
    }

    queues.jobinJobEmailQueue = new Queue('jobinJobEmailQueue', { connection: redisConnection });
    queueEvents.jobinJobEmailQueue = new QueueEvents('jobinJobEmailQueue', {connection: redisConnection});



    queueEvents.jobinJobEmailQueue.on('completed', async ({ jobId }) => {
        console.log(`job ${jobId} completed!`)

        const jobinJobId = splitRedisId(jobId).entityId

        const jobinJob = await JobinJobModel.findOneAndUpdate({
            _id: jobinJobId
        }, {
            status: 'success'
        })

        if(!jobinJob || !jobinJob.contactId || !jobinJob.campaignStage || !jobinJob.campaignStage.stagePositionCode) {
            return console.error(`JobinJob ${jobinJob?._id} -- is not compatible with outreach sequence or not found`)
        }

        publishMessage('contactSequencePositionUpdated', {
            userId: jobinJob.userId,
            workGroupId: jobinJob.workGroupId,
            contactId: jobinJob.contactId,
            campaignId: jobinJob.campaignStage.campaignId,
            positionCode: jobinJob.campaignStage.stagePositionCode
        })
    })

    queueEvents.jobinJobEmailQueue.on('failed', async ({ jobId, failedReason }) => {
        console.log(`job ${jobId} failed!`)

        const jobinJobId = splitRedisId(jobId).entityId

        const jobinJob = await JobinJobModel.findOneAndUpdate({
            _id: jobinJobId
        }, {
            status: 'failed',
            error: failedReason
        })

        if(!jobinJob || !jobinJob.contactId || !jobinJob.campaignStage || !jobinJob.campaignStage.stagePositionCode) {
            return console.error(`JobinJob ${jobinJob?._id} -- is not compatible with outreach sequence or not found`)
        }

        publishMessage('contactExitCampaign', {
            userId: jobinJob.userId,
            workGroupId: jobinJob.workGroupId,
            contactId: jobinJob.contactId,
            campaignId: jobinJob.campaignStage.campaignId,
            positionCode: jobinJob.campaignStage.stagePositionCode
        })
    })

}