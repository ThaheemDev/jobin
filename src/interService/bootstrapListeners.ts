import {listenForMessagesByTopic} from "@jobin-cloud/inter-service-communication";
import {stopJobinJobsWithError} from "../utils/stopJobinJobsWithError";
import {CodeNameT, jobinJobTypesDb} from "../data/jobinJobTypes.db";
import dayjs from "dayjs";
import {JobinJobModel} from "../schema/jobinJobs/JobinJob";
import {ObjectId} from "mongodb";
import {getQueueByJobCodename} from "../mq/queueMap";
import {getRedisId} from "../utils/redisIdHelper";

export function bootstrapListeners () {

    // ============ PUB SUB ============
    listenForMessagesByTopic('runSequenceAction', async (data) => {
        const jobType = jobinJobTypesDb[data.job.codename as CodeNameT]
        const nextRunAt = dayjs().add(data.waitMinutes, 'minute').toDate()

        /**
         * 1440 == 1 day
         * If the operation is scheduled within 1 day,
         * the operation must be added to the Redis Queue for immediate processing
         */
        const isInRedis = data.waitMinutes < 1440

        const jobinJobId = (await JobinJobModel.create({
            _id: new ObjectId(),
            user: {
                _id: data.userId
            },
            workGroup: {
                _id: data.workGroupId
            },
            queue: jobType.queue,
            iconName: jobType.iconName,
            codename: jobType.codename,
            title: jobType.title,
            isInRedis,
            nextRunAt,
            campaignStage: {
                _id: new ObjectId(),
                campaignId: data.campaignStage.campaignId,
                stagePositionCode: data.campaignStage.stagePositionCode
            },
            contact: {
                _id: data.contactId
            },
            status: 'pending',
            data: JSON.stringify(data.job.data)
        }))._id

        if(isInRedis) {
            const queue = getQueueByJobCodename(jobType.codename)
            if(!queue) throw new Error('No Queue available for Given Codename')

            await queue.add(
                'dripOperation',
                {
                    userId: data.userId,
                    workGroupId: data.workGroupId,
                    jobinJobId: jobinJobId,
                    contactId: data.contactId,
                    data: data.job.data
                },
                {
                    jobId: getRedisId('jobinJob', jobinJobId),
                    delay: dayjs(nextRunAt).diff(dayjs(), 'milliseconds')
                }
            )
        }
    })


    listenForMessagesByTopic('contactExitCampaign', async (data) => {
        await stopJobinJobsWithError(data.campaignId, data.contactId, data.errorMsg)
    })

    listenForMessagesByTopic('createJobinJob', async (jobinJob) => {
        await JobinJobModel.create(jobinJob)
    })

}