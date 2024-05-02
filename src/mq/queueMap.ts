import {CodeNameT} from "../data/jobinJobTypes.db";
import {queues} from "./bootstrapBullMq";

export function getQueueByJobCodename (codename: CodeNameT) {
    const queueName = queueMap[codename]
    return queues[queueName]
}

const queueMap: {[key in CodeNameT]: string} = {
    sendBulkEmails: 'jobinJobEmailQueue'
}

