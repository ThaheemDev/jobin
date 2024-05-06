import {ConnectionOptions, Job, Queue, QueueEvents, Worker} from "bullmq";
import {splitRedisId} from "../utils/redisIdHelper";
import {JobinJobModel} from "../schema/jobinJobs/JobinJob";
import {publishMessage} from "@jobin-cloud/inter-service-communication";
import {queueMap, QueueNameT} from "./queueMap";

export let queues: {[key in QueueNameT]: Queue} = {} as {[key in QueueNameT]: Queue}
export let queueEvents: {[key in QueueNameT]: QueueEvents} = {} as {[key in QueueNameT]: QueueEvents}
export let workers: {[key in QueueNameT]: Worker} = {} as {[key in QueueNameT]: Worker}
export let redisConnection: ConnectionOptions

async function onSequenceJobinJobCompleted (jobId: string, returnValue?: string | null | undefined) {
    console.log(`job ${jobId} completed! - returned ${returnValue}`)

    const jobinJobId = splitRedisId(jobId).entityId

    const jobinJob = await JobinJobModel.findOneAndUpdate({
        _id: jobinJobId
    }, {
        status: 'success'
    })

    if(!jobinJob || !jobinJob.contact?._id || !jobinJob.campaignStage || !jobinJob.campaignStage.stagePositionCode) {
        return console.error(`JobinJob ${jobinJob?._id} -- is not compatible with outreach sequence or not found`)
    }

    let positionCode = jobinJob.campaignStage.stagePositionCode
    if(returnValue?.includes('changeBranch:')) positionCode = `${returnValue.split(':')[1]}00`

    await publishMessage('contactSequencePositionUpdated', {
        userId: jobinJob.user._id,
        workGroupId: jobinJob.workGroup._id,
        contactId: jobinJob.contact._id,
        campaignId: jobinJob.campaignStage.campaignId,
        positionCode
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
    queueEvents[queueName].on('completed', async ({ jobId, returnvalue }) => onSequenceJobinJobCompleted(jobId, returnvalue))
    queueEvents[queueName].on('failed', async ({ jobId, failedReason }) => onSequenceJobinJobFailed(jobId,failedReason))
}

function createBasicWorker (queueName: QueueNameT, fn: (job: Job) => Promise<void>) {
    workers[queueName] = new Worker(queueName, fn, {
        connection: redisConnection,
        autorun: true,
        removeOnComplete: { count: 0 },
        removeOnFail: { count: 5000 }
    });

    workers[queueName].on('error', err => {
        // log the error
        console.error(err);
    });
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
        if(queue.localWorker) createBasicWorker(queue.queue, queue.localWorker)
    }
}