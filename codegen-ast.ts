import type { CodegenConfig } from '@graphql-codegen/cli';
require('dotenv').config()


const config: CodegenConfig = {
  schema: process.env.GATEWAY_URL,
  "generates": {
    "src/graphql/schema.graphql": {
      "plugins": ["schema-ast"]
    }
  }
}

export default config;
