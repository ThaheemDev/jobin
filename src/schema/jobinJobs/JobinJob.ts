import {ObjectId} from 'mongodb'
import {Directive, ObjectType} from 'type-graphql'
import {getModelForClass, index, prop} from '@typegoose/typegoose'
import {TimeStamps} from '@typegoose/typegoose/lib/defaultClasses'
import {JobinJobContact} from './JobinJobContact'
import {
    GraphqlArrayProp, GraphqlDateTime,
    GraphqlField,
    GraphqlId,
    GraphqlProp,
    RequiredGraphqlProp
} from "@jobin-cloud/subgraph-mongodb";
import {CampaignStage} from "../campaignStages/CampaignStage";
import {User} from "../../external";

// ============================= STATUS =============================
// Status is unneccessary because it will be available through it's properties
// queued = nextRunAt !== null
// running = lockedAt !== null
// completed = nextRunAt !== null && error === null
// failed = nextRunAt !== null && error !== null

@index({ workGroupId: 1, userLinkedinUrl: 1, userId: 1 }, { background: true })
@index({ workGroupId: 1, queue: 1, userLinkedinUrl: 1, lockedAt: 1, nextRunAt: 1 }, { background: true })

@Directive(`@key(fields: "_id")`)
@ObjectType()
export class JobinJob extends TimeStamps {
    @GraphqlId()
    _id!: Readonly<ObjectId>

    // owner of this contact
    @GraphqlProp()
    userId!: ObjectId;

    @prop()
    workGroupId!: ObjectId;

    @GraphqlProp()
    isInRedis!: boolean;

    @RequiredGraphqlProp(undefined, undefined, { default: 0 })
    priority!: number

    @RequiredGraphqlProp()
    codename!: string // code name for the job (ex. dedup)

    @RequiredGraphqlProp()
    title!: string // display name for the job (ex. Deduplicate profiles)

    @GraphqlProp()
    userLinkedinUrl?: string

    @GraphqlField(User)
    linkedinUser?: User;

    @GraphqlProp()
    error?: string

    @GraphqlProp(CampaignStage)
    campaignStage?: CampaignStage;

    @RequiredGraphqlProp()
    queue!: string // linkedinSales, linkedin, jobin

    @RequiredGraphqlProp(undefined, undefined, { default: 1 })
    totalCount!: number

    @GraphqlProp()
    operationType?: string // linkedinSales (if not specified normal linkedin free)

    @RequiredGraphqlProp(undefined, undefined, { default: 1 })
    loaded!: number

    // this option is used to create the "overview" progress bar grouping all "similar" as one operation
    // it will be used in order to filter out single completes (displayable statically) with grouped completes (updated)
    // @GraphqlProp(Boolean)
    // autoGroupSimilar?: boolean

    // type is used for displaying icon and tabs
    @RequiredGraphqlProp(String)
    iconName!: string

    // @RequiredGraphqlProp(String)
    // status!: string // queue | running | complete | failed

    // necessary for linkedin and all operations that require to wait before they actually start processing
    // this is also useful when an operation is interrupted. Operations that were "waiting" can be re-added to
    // the queue while already processing operations must be added to failed and retried manually
    @GraphqlProp()
    waitTimeMs?: number

    @GraphqlArrayProp(JobinJobContact)
    contactStatuses?: JobinJobContact[]

    @GraphqlProp()
    stop?: boolean;

    @GraphqlProp()
    noResume?: boolean;

    // Idempotence is the property of certain operations in mathematics and computer science whereby they can be applied multiple times without changing the result beyond the initial application.
    @GraphqlProp()
    isIdempotent?: boolean;

    @GraphqlProp()
    hasNothingToProcess?: boolean;

    // indicates when a given Job should run. If set to null it will never process
    @GraphqlProp()
    nextRunAt?: Date;

    // keeps memory of the nextRunAt when removed (in case of Sequence pause)
    @GraphqlProp()
    previousNextRunAt?: Date;

    // indicates when a given Job is processing and locks it so no other job will process it
    @GraphqlProp()
    lockedAt?: Date;

    // all information necessary to execute the given operation (parameters)
    @GraphqlProp()
    data?: string

    // ------------------------
    @GraphqlDateTime()
    declare createdAt: Date

    @GraphqlDateTime()
    declare updatedAt: Date
}

export const JobinJobModel = getModelForClass(JobinJob)

export async function resolveJobinJobReference(reference: Pick<JobinJob, "_id">): Promise<JobinJob | null> {
    return JobinJobModel.findOne({_id: reference._id})
}