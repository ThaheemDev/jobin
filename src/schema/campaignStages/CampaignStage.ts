import {ObjectType} from 'type-graphql'
import {ObjectId} from 'mongodb'
import {GraphqlId, GraphqlProp, ObjectIdScalar, RequiredGraphqlProp} from "@jobin-cloud/subgraph-mongodb";

@ObjectType()
export class CampaignStage {
    @GraphqlId()
    _id!: Readonly<ObjectId>

    @RequiredGraphqlProp(ObjectIdScalar)
    campaignId!: ObjectId;

    @GraphqlProp(String)
    stagePositionCode?: string;
}
