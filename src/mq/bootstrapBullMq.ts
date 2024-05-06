import {ConnectionOptions, Queue, QueueEvents} from "bullmq";
import {splitRedisId} from "../utils/redisIdHelper";
import {JobinJobModel} from "../schema/jobinJobs/JobinJob";
import {publishMessage} from "@jobin-cloud/inter-service-communication";
import {queueMap, QueueNameT} from "./queueMap";

export let queues: {[key in QueueNameT]: Queue}
export let queueEvents: {[key in QueueNameT]: QueueEvents}
export let redisConnection: ConnectionOptions

async function onSequenceJobinJobCompleted (jobId: string) {
    console.log(`job ${jobId} completed!`)

    const jobinJobId = splitRedisId(jobId).entityId

    const jobinJob = await JobinJobModel.findOneAndUpdate({
        _id: jobinJobId
    }, {
        status: 'success'
    })

    if(!jobinJob || !jobinJob.contact?._id || !jobinJob.campaignStage || !jobinJob.campaignStage.stagePositionCode) {
        return console.error(`JobinJob ${jobinJob?._id} -- is not compatible with outreach sequence or not found`)
    }

    publishMessage('contactSequencePositionUpdated', {
        userId: jobinJob.user._id,
        workGroupId: jobinJob.workGroup._id,
        contactId: jobinJob.contact._id,
        campaignId: jobinJob.campaignStage.campaignId,
        positionCode: jobinJob.campaignStage.stagePositionCode
    })
}


async function onSequenceJobinJobFailed (jobId: string, failedReason: string) {
    {
        console.log(`job ${jobId} failed!`, failedReason)

        const jobinJobId = splitRedisId(jobId).entityId

        const jobinJob = await JobinJobModel.findOneAndUpdate({
            _id: jobinJobId
        }, {
            status: 'failed',
            error: failedReason
        })

        if(!jobinJob || !jobinJob.contact?._id || !jobinJob.campaignStage || !jobinJob.campaignStage.stagePositionCode) {
            return console.error(`JobinJob ${jobinJob?._id} -- is not compatible with outreach sequence or not found`)
        }

        publishMessage('contactExitCampaign', {
            userId: jobinJob.user._id,
            workGroupId: jobinJob.workGroup._id,
            contactId: jobinJob.contact._id,
            campaignId: jobinJob.campaignStage.campaignId,
            positionCode: jobinJob.campaignStage.stagePositionCode
        })
    }
}


function createBasicSequenceQueue (queueName: QueueNameT) {
    queues[queueName] = new Queue(queueName, { connection: redisConnection });
    queueEvents[queueName] = new QueueEvents(queueName, {connection: redisConnection});
    queueEvents[queueName].on('completed', async ({ jobId }) => onSequenceJobinJobCompleted(jobId))
    queueEvents[queueName].on('failed', async ({ jobId, failedReason }) => onSequenceJobinJobFailed(jobId,failedReason))
}


export async function bootstrapBullMq () {
    // =========== REDIS ===========
    redisConnection = {
        host: process.env.REDIS_HOST, // Replace with IP address or hostname
        port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : undefined, // Default Redis port
        // password: 'YOUR_REDIS_PASSWORD', // If authentication is enabled
    }

    for (const queue of queueMap) {
        createBasicSequenceQueue(queue.queue)
    }
}