import {ObjectId} from "mongodb";
import {FilterQuery} from "mongoose";
import {DocumentType} from "@typegoose/typegoose/lib/types";
import {JobinJobsFilterArgs} from "../schema/jobinJobs/JobinJobsFilterArgs";
import {JobinJob} from "../schema/jobinJobs/JobinJob";

export function getJobinJobsFilter (workGroupId: ObjectId, { selectedUserId, status, queue, operationType, codename }: JobinJobsFilterArgs): FilterQuery<DocumentType<JobinJob>> {
    const filter: FilterQuery<DocumentType<JobinJob>> = { 'workGroup._id': workGroupId }

    // if (selectedUserId && userLinkedinUrl) {
    //     filter.$or = [
    //         ...filter.$or || [],
    //         {userLinkedinUrl},
    //         {userLinkedinUrl: null!, userId: selectedUserId},
    //     ]
    // } else


    if (selectedUserId) filter['user._id'] = selectedUserId

    if (queue) filter.queue = queue
    if (operationType) filter.operationType = operationType
    if (codename) filter.codename = codename
    if (status) filter.status = status

    // if (status) {
    //     if (status === 'queued') {
    //         filter.nextRunAt = { $ne: null! }
    //         filter.lockedAt = null!
    //         filter.error = null!
    //     } else if (status === 'running') filter.lockedAt = { $ne: null! }
    //     else if (status === 'completed') {
    //         filter.nextRunAt = null!
    //         filter.error = null!
    //     } else if (status === 'failed') filter.error = { $ne: null! }
    // }

    return filter
}
