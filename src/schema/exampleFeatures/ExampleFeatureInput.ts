import {InputType} from 'type-graphql'
import {ObjectId} from "bson";
import {GraphqlArrayField, GraphqlField, GraphqlId, RequiredGraphqlField} from "@jobin-cloud/subgraph-mongodb";

@InputType()
export class ExampleFeatureInput {
    @GraphqlId()
    id?: ObjectId;

    @GraphqlField(String)
    title?: string;

    @GraphqlField(String)
    description?: string;

    @RequiredGraphqlField(Date)
    creationDate!: Date;

    @GraphqlArrayField(String)
    ingredients?: string[];
}
