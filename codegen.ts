import type { CodegenConfig } from '@graphql-codegen/cli';


const config: CodegenConfig = {
  schema: 'http://localhost:4444/graphql',
  // "documents": ["./src/graphql/*.ts"],
  "generates": {
    // "src/graphql/schema.graphql": {
    //   "plugins": ["schema-ast"]
    // },
    "src/@types-exported/graphqlSchemaTypes.ts": {
      "config": {
        "useIndexSignature": true,
        gqlTagName: "gql",
      },
      "plugins": ["typescript", "typescript-resolvers"]},
    // "src/@types-exported": {
    //   "plugins": ["typescript-operations"],
    //   "preset": "near-operation-file",
    //   "presetConfig": {
    //     "baseTypesPath": "graphqlSchemaTypes.ts",
    //     "folder": "graphqlTypes"
    //   }
    // }
  }
}

export default config;
