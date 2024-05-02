import {Field, InputType} from 'type-graphql'
import {ObjectId} from 'mongodb'
import {
    GraphqlField,
    GraphqlId,
    RequiredGraphqlField
} from "@jobin-cloud/subgraph-mongodb";
import {ExternalInput} from "../../external";
import {CampaignStageInput} from "../campaignStages/CampaignStageInput";

@InputType()
export class JobinJobInput {
    @GraphqlId()
    _id!: Readonly<ObjectId>

    // owner of this contact
    @GraphqlField()
    userId!: ObjectId;

    @Field()
    workGroupId!: ObjectId;

    @GraphqlField()
    isInRedis!: boolean;

    @RequiredGraphqlField()
    codename!: string // code name for the job (ex. dedup)

    @RequiredGraphqlField()
    title!: string // display name for the job (ex. Deduplicate profiles)

    @GraphqlField()
    error?: string

    @GraphqlField(CampaignStageInput)
    campaignStage?: CampaignStageInput;

    @RequiredGraphqlField()
    queue!: string // linkedinSales, linkedin, jobin

    @GraphqlField()
    operationType?: string // linkedinSales (if not specified normal linkedin free)

    // type is used for displaying icon and tabs
    @RequiredGraphqlField(String)
    iconName!: string

    @GraphqlField(String)
    status?: string // queue | running | complete | failed

    @GraphqlField(ExternalInput)
    contact?: ExternalInput

    @GraphqlField(ExternalInput)
    account?: ExternalInput

    // Idempotence is the Fielderty of certain operations in mathematics and computer science whereby they can be applied multiple times without changing the result beyond the initial application.
    @GraphqlField()
    isIdempotent?: boolean;

    // indicates when a given Job should run. If set to null it will never process
    @GraphqlField()
    nextRunAt?: Date;

    // keeps memory of the nextRunAt when removed (in case of Sequence pause)
    @GraphqlField()
    previousNextRunAt?: Date;

    // indicates when a given Job is processing and locks it so no other job will process it
    @GraphqlField()
    lockedAt?: Date;

    // all information necessary to execute the given operation (parameters)
    @GraphqlField()
    data?: string
}
