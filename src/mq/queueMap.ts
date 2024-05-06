import {queues} from "./bootstrapBullMq";
import {JobinJobCodenameT} from "@jobin-cloud/shared-schema";


export function getQueueByJobCodename (codename: JobinJobCodenameT) {
    const queueName = queueMap.find(q => q.codename === codename)?.queue
    if(!queueName) return

    return queues[queueName]
}

export type QueueNameT =
    'jobinJobEmailQueue' |
    'jobinJobBulkEnrichContactsQueue' |
    'jobinJobConditionQueue' |
    'jobinJobAssignQueue'

type QueueMapT = {codename: JobinJobCodenameT, queue: QueueNameT}

export const queueMap: QueueMapT[] = [
    {
        codename: 'sendBulkEmails',
        queue: 'jobinJobEmailQueue'
    },
    {
        codename: 'bulkEnrichContacts',
        queue: 'jobinJobBulkEnrichContactsQueue'
    },
    {
        codename: 'condition',
        queue: 'jobinJobConditionQueue'
    },
    {
        codename: 'assign',
        queue: 'jobinJobAssignQueue'
    },

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