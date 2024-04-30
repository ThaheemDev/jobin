import {jobinJobEmailQueue} from "../index";
import {CodeNameT} from "../data/jobinJobTypes.db";
import {Queue} from "bullmq";

export const queueMap: {[key in CodeNameT]: Queue} = {
    sendBulkEmails: jobinJobEmailQueue
}

