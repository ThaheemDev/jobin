import 'reflect-metadata'
import {resolvers} from './resolvers'
import {runBasicApolloServer} from '@jobin-cloud/subgraph-mongodb';
import {resolveJobinJobReference} from "./schema/jobinJobs/JobinJob";
import cron from 'node-cron'
import {bootstrapListeners} from "./interService/bootstrapListeners";
import {bootstrapBullMq} from "./mq/bootstrapBullMq";


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

  bootstrapBullMq()
}


bootstrap()