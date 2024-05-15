import {queues} from "./bootstrapBullMq";
import {JobinJobCodenameT} from "@jobin-cloud/shared-schema";
import {Job} from "bullmq";
import {JobinJobCodename} from "../schema/jobinJobs/JobCodenameEnum";


export function getQueueByJobCodename (codename: JobinJobCodenameT) {
    const queueName = queueMap.find(q => q.codename === codename)?.queue
    if(!queueName) return

    return queues[queueName]
}

export type QueueNameT =
    'jobinJobEmailQueue' |
    'jobinJobBulkEnrichContactsQueue' |
    'jobinJobConditionQueue' |
    'jobinJobAssignQueue' |
    'jobinJobZapierQueue'

type QueueMapT = {
    codename: JobinJobCodename,
    queue: QueueNameT,
    localWorker?: (job: Job) => Promise<void>
}

export const queueMap: QueueMapT[] = [
    {
        codename: JobinJobCodename.sendBulkEmails,
        queue: 'jobinJobEmailQueue'
    },
    {
        codename: JobinJobCodename.bulkEnrichContacts,
        queue: 'jobinJobBulkEnrichContactsQueue',
        // todo implement
    },
    {
        codename: JobinJobCodename.condition,
        queue: 'jobinJobConditionQueue',
    },
    {
        codename: JobinJobCodename.assign,
        queue: 'jobinJobAssignQueue'
    },
    {
        codename: JobinJobCodename.zapier,
        queue: 'jobinJobZapierQueue'
    }

    // Linkedin Operations are directly sent to extension (no queue)
    // {
    //     codenames: [
    //         'sendLinkedinInvite',
    //         'sendLinkedinMessage',
    //         'sendSingleLinkedinMessage',
    //         'sendSingleSalesNavMessage',
    //         'salesSendMessage',
    //         'sendSingleTalentMessage',
    //         'talentSendMessage',
    //         'fullProfileImportWithEmail',
    //         'fullProfileImport',
    //         'withdrawLinkedinInvite',
    //     ],
    //     queues: ['jobinJobEmailQueue']
    // }
]