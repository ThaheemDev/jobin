import {ObjectId} from 'mongodb'
import {InputType} from 'type-graphql'
import {GraphqlField, NullableGraphqlId, ObjectIdScalar, RequiredGraphqlField} from "@jobin-cloud/subgraph-mongodb";

@InputType()
export class CampaignStageInput {
    @NullableGraphqlId()
    _id!: ObjectId;

    // in the document:"Field" we have all needed to point a Jobin DB field
    @RequiredGraphqlField(ObjectIdScalar)
    campaignId!: ObjectId;

    @GraphqlField(String)
    stagePositionCode?: string;
}
