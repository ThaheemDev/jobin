import 'reflect-metadata'
import {resolvers} from './resolvers'
import { runBasicApolloServer } from '@jobin-cloud/subgraph-mongodb';
import {resolveJobinJobReference} from "./schema/jobinJobs/JobinJob";
import cron from 'node-cron'
import {Queue} from "bullmq";
import {bootstrapListeners} from "./interService/bootstrapListeners";

async function bootstrap () {
  await runBasicApolloServer({
    schemaOptions: {
      resolvers
    },
    port: 4011,
    referenceResolvers: {
      JobinJob: {
        __resolveReference: resolveJobinJobReference
      },
    }
  })

  bootstrapListeners()

  const copyOperationsToRedis = await import('./utils/copyOperationsToRedis').then(res => res.copyOperationsToRedis)
  cron.schedule('0 0 * * *', () => copyOperationsToRedis()); // Run at midnight every day
  console.log('Cron job started for copying operations.');
}


bootstrap()

export const redisConnection = {
  host: process.env.REDIS_HOST, // Replace with IP address or hostname
  port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : undefined, // Default Redis port
  // password: 'YOUR_REDIS_PASSWORD', // If authentication is enabled
};

export const jobinJobEmailQueue = new Queue('jobinJobEmailQueue', { connection: redisConnection });