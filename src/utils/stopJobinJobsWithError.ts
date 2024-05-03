import {ObjectId} from "mongodb";
import {JobinJobModel} from "../schema/jobinJobs/JobinJob";
import {getQueueByJobCodename} from "../mq/queueMap";
import {CodeNameT} from "../data/jobinJobTypes.db";
import {getRedisId} from "./redisIdHelper";
import {isWithinNextDay} from "./isWithinNextDay";

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

    if(singleJobinJobs.length) {
        const singleJobinJobIds = singleJobinJobs.map(r => r._id)

        for (const jobinJob of singleJobinJobs) {
            if(!jobinJob.nextRunAt || !isWithinNextDay(jobinJob.nextRunAt)) continue
            getQueueByJobCodename(jobinJob.codename as CodeNameT)
                .getJob(getRedisId('jobinJob', jobinJob._id))
                .then(j => { j?.remove() })
        }

        if(error) JobinJobModel.updateMany({_id: {$in: singleJobinJobIds}}, {error, stop: true, nextRunAt: null!})
        else JobinJobModel.deleteMany({_id: {$in: singleJobinJobIds}})
    }
}