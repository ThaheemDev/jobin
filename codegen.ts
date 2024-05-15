import type { CodegenConfig } from '@graphql-codegen/cli';
require('dotenv').config()

const config: CodegenConfig = {
  schema: process.env.GATEWAY_URL,
  // "documents": ["./src/graphql/*.ts"],
  "generates": {
    "src/@types-exported/graphqlSchemaTypes.ts": {
      "config": {
        "useIndexSignature": true,
        gqlTagName: "gql",
      },
      "plugins": ["typescript", "typescript-resolvers"]},
    "src/@types-exported": {
      "plugins": ["typescript-operations"],
      "preset": "near-operation-file",
      "presetConfig": {
        "baseTypesPath": "graphqlSchemaTypes.ts",
        "folder": "graphqlTypes"
      }
    }
  }
}

export default config;
