import {JobinJobModel} from "../schema/jobinJobs/JobinJob";
import {ObjectId} from "mongodb";
import {BulkJobOptions} from "bullmq/dist/esm/interfaces";
import dayjs from "dayjs";
import {getRedisId} from "./redisIdHelper";
import {getQueueByJobCodename} from "../mq/queueMap";
import {JobinJobCodenameT} from "@jobin-cloud/shared-schema";

export async function copyOperationsToRedis(skip: number = 0) {
    console.info(`copying operations to Redis queue [Skip = ${skip}]`);

    const limit = 100
    const threshold = new Date();
    threshold.setHours(threshold.getHours() + 24); // Operations due in next 24 hours

    const operations = await JobinJobModel
        .find({ nextRunAt: { $lte: threshold } })
        .sort({codename: -1})
        .skip(skip)
        .limit(limit)
        .lean()

    const operationIds: ObjectId[] = []
    const queueJobs: {[key in JobinJobCodenameT]?: {name: string, data: any, options?: BulkJobOptions}[]} = {}

    for (const operation of operations) {
        const codename = operation.codename as JobinJobCodenameT

        operationIds.push(operation._id)
        if(!queueJobs[codename]) queueJobs[codename] = []

        queueJobs[codename]!.push(
            {
                name: codename,
                data: {
                    userId: operation.user._id,
                    workGroupId: operation.workGroup._id,
                    jobinJobId: operation._id,
                    contactId: operation.contact?._id,
                    data: operation.data
                },
                options: {
                    jobId: getRedisId('jobinJob', operation._id),
                    delay: dayjs(operation.nextRunAt).diff(dayjs(), 'milliseconds')
                }
            }
        )

    }

    let promises: Promise<any>[] = []

    for (const codename in queueJobs) {
        const queue = getQueueByJobCodename(codename as JobinJobCodenameT)
        if(!queue) continue

        promises.push(queue.addBulk(queueJobs[codename as JobinJobCodenameT]!))
    }

    await Promise.all([
        ...promises,
        JobinJobModel.updateMany({_id: {$in: operationIds}}, { isInRedis: true })
    ])


    if(operations.length < limit) {
        console.info('Copied All operations to Redis queue');
        return
    }

    setImmediate(() => copyOperationsToRedis())
}