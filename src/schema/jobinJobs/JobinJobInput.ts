import {InputType, Int} from 'type-graphql'
import {ObjectId} from 'mongodb'
import {JobinJobContactInput} from './JobinJobContactInput'
import {GraphqlArrayField, GraphqlField, NullableGraphqlId, RequiredGraphqlField} from "@jobin-cloud/subgraph-mongodb";
import {CampaignStageInput} from "../campaignStages/CampaignStageInput";

@InputType()
export class JobinJobInput {
    @NullableGraphqlId()
    _id!: ObjectId;

    userId!: ObjectId
    workGroupId!: ObjectId

    @GraphqlField()
    priority?: number

    @RequiredGraphqlField()
    codename!: string // code name for the job (ex. dedup)

    @RequiredGraphqlField()
    title!: string // display name for the job (ex. Deduplicate profiles)

    @GraphqlField()
    userLinkedinUrl?: string

    @GraphqlField()
    error?: string

    @GraphqlField(CampaignStageInput)
    campaignStage?: CampaignStageInput;

    @RequiredGraphqlField()
    queue!: string // linkedin, jobin

    @GraphqlField()
    operationType?: string // linkedinSales (if not specified normal linkedin free)

    @RequiredGraphqlField(Int, { defaultValue: -1 })
    totalCount!: number

    @RequiredGraphqlField()
    loaded!: number

    @RequiredGraphqlField(String)
    iconName!: string

    // @RequiredGraphqlField(String)
    // status!: JobStatusT // queue | processing | complete | failed

    // necessary for linkedin and all operations that require to wait before they actually start processing
    // this is also useful when an operation is interrupted. Operations that were "waiting" can be re-added to
    // the queue while already processing operations must be added to failed and retried manually
    @GraphqlField()
    waitTimeMs?: number

    // === used for scheduling events ===
    // indicates when a given Job should run.
    // If set to null it will never process.
    @GraphqlField()
    nextRunAt?: Date;

    // keeps memory of the nextRunAt when removed (in case of Sequence pause)
    @GraphqlField()
    previousNextRunAt?: Date;

    // indicates when a given Job is processing and locks it so no other job will process it
    @GraphqlField()
    lockedAt?: Date;

    @GraphqlArrayField(JobinJobContactInput)
    contactStatuses?: JobinJobContactInput[];

    @GraphqlField()
    stop?: boolean;

    @GraphqlField()
    noResume?: boolean;

    @GraphqlField()
    isIdempotent?: boolean;

    @GraphqlField()
    hasNothingToProcess?: boolean;

    // all information necessary to execute the given operation (parameters)
    @GraphqlField()
    data?: string
}
