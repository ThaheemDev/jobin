import {publishMessage, TopicPayloadSchemaT} from "@jobin-cloud/inter-service-communication";
import {Job} from "bullmq";

export async function forwardJobToPubSub (topic: keyof TopicPayloadSchemaT, job: Job): Promise<void> {

    console.log('forwarding...')

    await publishMessage(topic, job.data)
}