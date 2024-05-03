import {ObjectId} from 'mongodb'
import {Directive, ObjectType} from 'type-graphql'
import {getModelForClass, index} from '@typegoose/typegoose'
import {TimeStamps} from '@typegoose/typegoose/lib/defaultClasses'
import {
    GraphqlDateTime,
    GraphqlId,
    GraphqlProp,
    RequiredGraphqlProp
} from "@jobin-cloud/subgraph-mongodb";
import {Contact, JobinAccount, User, WorkGroup} from "../../external";
import {CampaignStage} from "@jobin-cloud/shared-schema";

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
    @GraphqlProp(User)
    user!: User;

    @GraphqlProp(WorkGroup)
    workGroup!: WorkGroup;

    @GraphqlProp()
    isInRedis!: boolean;

    @RequiredGraphqlProp()
    codename!: string // code name for the job (ex. dedup)

    @RequiredGraphqlProp()
    title!: string // display name for the job (ex. Deduplicate profiles)

    @GraphqlProp()
    error?: string

    @GraphqlProp(CampaignStage)
    campaignStage?: CampaignStage;

    @RequiredGraphqlProp()
    queue!: string // linkedinSales, linkedin, jobin

    @GraphqlProp()
    operationType?: string // linkedinSales (if not specified normal linkedin free)

    // type is used for displaying icon and tabs
    @RequiredGraphqlProp(String)
    iconName!: string

    @GraphqlProp(String)
    status?: string // queue | running | complete | failed

    @GraphqlProp(Contact)
    contact?: Contact

    @GraphqlProp(JobinAccount)
    account?: JobinAccount

    // Idempotence is the property of certain operations in mathematics and computer science whereby they can be applied multiple times without changing the result beyond the initial application.
    @GraphqlProp()
    isIdempotent?: boolean;

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



    // ========= DEPRECATED ===========

    // @RequiredGraphqlProp(undefined, {deprecationReason: 'Never Implemented / Zombie'}, { default: 0 })
    // priority!: number
    //
    // @RequiredGraphqlProp(undefined, {deprecationReason: 'Every Job contains a single action/contact'}, { default: 1 })
    // totalCount!: number
    //
    // @RequiredGraphqlProp(undefined, {deprecationReason: 'Every Job contains a single action/contact'}, { default: 1 })
    // loaded!: number
    //
    // // necessary for linkedin and all operations that require to wait before they actually start processing
    // // this is also useful when an operation is interrupted. Operations that were "waiting" can be re-added to
    // // the queue while already processing operations must be added to failed and retried manually
    // @GraphqlProp(Int, {deprecationReason: 'Never Implemented / Zombie'})
    // waitTimeMs?: number
    //
    // @GraphqlProp(Boolean, {deprecationReason: 'Every Job contains a single action/contact'})
    // hasNothingToProcess?: boolean;
    //
    // @GraphqlProp(Boolean, {deprecationReason: 'Every Job contains a single action/contact'})
    // stop?: boolean;
    //
    // @GraphqlProp(Boolean, {deprecationReason: 'Every Job contains a single action/contact'})
    // noResume?: boolean;
    //
    // @GraphqlArrayProp(JobinJobContact, {deprecationReason: 'Every Job contains a single action/contact'})
    // contactStatuses?: JobinJobContact[]
    //
    // @GraphqlProp(String, {deprecationReason: 'all operations will rely on userId, userId will have only 1 linkedin account'})
    // userLinkedinUrl?: string
    //
    // @GraphqlField(User, {deprecationReason: 'all operations will rely on userId, userId will have only 1 linkedin account'})
    // linkedinUser?: User;
}

export const JobinJobModel = getModelForClass(JobinJob)

export async function resolveJobinJobReference(reference: Pick<JobinJob, "_id">): Promise<JobinJob | null> {
    return JobinJobModel.findOne({_id: reference._id})
}