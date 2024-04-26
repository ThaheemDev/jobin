import {ObjectType} from "type-graphql";
import {getModelForClass} from "@typegoose/typegoose";
import {ObjectId} from "bson";
import {GraphqlArrayProp, GraphqlId, GraphqlProp, RequiredGraphqlProp} from "@jobin-cloud/subgraph-mongodb";

@ObjectType()
export class ExampleFeature {
    @GraphqlId()
    id?: ObjectId;

    @GraphqlProp(String)
    title?: string;

    @GraphqlProp(String)
    description?: string;

    @RequiredGraphqlProp(Date)
    creationDate!: Date;

    @GraphqlArrayProp(String)
    ingredients?: string[];
}

export const ExampleFeatureModel = getModelForClass(ExampleFeature)
