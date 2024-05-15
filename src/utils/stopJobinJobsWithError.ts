import {ObjectId} from "mongodb";
import {JobinJobModel} from "../schema/jobinJobs/JobinJob";
import {getQueueByJobCodename} from "../mq/queueMap";
import {getRedisId} from "./redisIdHelper";
import {isWithinNextDay} from "./isWithinNextDay";
import {JobinJobCodenameT} from "@jobin-cloud/shared-schema";

export async function stopJobinJobsWithError (dripCampaignId: ObjectId, contactId: ObjectId, error?: string): Promise<void> {
    const singleJobinJobs = await JobinJobModel.find({
        'contact._id': contactId,
        'campaignStage.campaignId': dripCampaignId,
        error: null!,
        $or: [
            {nextRunAt: {$ne: null!}},
            {lockedAt: {$ne: null!}}
        ]
    }, {
        _id: true,
        codename: true,
        nextRunAt: true
    })

    if(!singleJobinJobs.length) return

    // const promises: Promise<any>[] = [
        // If we want to be able to resume we should not remove the contacts from the campaign
        // ContactModel.updateMany({_id: {$in: contactIds}}, { $unset: { campaignStage: true} }) as unknown as Promise<any>
    // ]

    const singleJobinJobIds = singleJobinJobs.map(r => r._id)

    for (const jobinJob of singleJobinJobs) {
        if(!jobinJob.nextRunAt || !isWithinNextDay(jobinJob.nextRunAt)) continue
        const queue = getQueueByJobCodename(jobinJob.codename as JobinJobCodenameT)
        if(!queue) continue

        queue.getJob(getRedisId('jobinJob', jobinJob._id)).then(j => { j?.remove() })
    }

    if(error) JobinJobModel.updateMany({_id: {$in: singleJobinJobIds}}, {error, stop: true, nextRunAt: null!})
    else JobinJobModel.deleteMany({_id: {$in: singleJobinJobIds}})
}