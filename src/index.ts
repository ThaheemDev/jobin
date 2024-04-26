import 'reflect-metadata'
import {resolvers} from './resolvers'
import { runBasicApolloServer } from '@jobin-cloud/subgraph-mongodb';

async function bootstrap () {
  await runBasicApolloServer({
    resolvers,
    port: 4005
  })
}

bootstrap()