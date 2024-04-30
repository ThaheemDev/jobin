import {ObjectId} from 'mongodb'
import {Field, ObjectType} from 'type-graphql'
import {TimeStamps} from '@typegoose/typegoose/lib/defaultClasses'
import {JobinJobContact} from './JobinJobContact'
import {GraphqlArrayField, GraphqlDateTime, GraphqlField, GraphqlId} from "@jobin-cloud/subgraph-mongodb";

// ============================= STATUS =============================
// Status is unneccessary because it will be available through it's Fielderties
// queued = nextRunAt !== null
// running = lockedAt !== null
// completed = nextRunAt !== null && error === null
// failed = nextRunAt !== null && error !== null

@ObjectType()
export class JobinJobSubscription extends TimeStamps {
    @GraphqlId()
    _id!: Readonly<ObjectId>

    // owner of this contact
    @GraphqlField()
    userId?: ObjectId;

    @Field()
    workGroupId!: ObjectId;

    @GraphqlField()
    priority?: number

    @GraphqlField()
    codename?: string // code name for the job (ex. dedup)

    @GraphqlField()
    title?: string // display name for the job (ex. Deduplicate profiles)

    @GraphqlField()
    error?: string

    // nullify is necessary to distinguish between setting to null or not knowing the value
    @GraphqlField()
    nullifyError?: boolean

    @GraphqlField()
    queue?: string // linkedinSales, linkedin, jobin

    @GraphqlField()
    totalCount?: number

    @GraphqlField()
    operationType?: string // linkedinSales (if not specified normal linkedin free)

    @GraphqlField()
    loaded?: number

    // this option is used to create the "overview" progress bar grouping all "similar" as one operation
    // it will be used in order to filter out single completes (displayable statically) with grouped completes (updated)
    // @GraphqlField(Boolean)
    // autoGroupSimilar?: boolean

    // type is used for displaying icon and tabs
    @GraphqlField(String)
    iconName?: string

    // @GraphqlField(String)
    // status?: string // queue | running | complete | failed

    // necessary for linkedin and all operations that require to wait before they actually start processing
    // this is also useful when an operation is interrupted. Operations that were "waiting" can be re-added to
    // the queue while already processing operations must be added to failed and retried manually
    @GraphqlField()
    waitTimeMs?: number

    @GraphqlArrayField(JobinJobContact)
    contactStatuses?: JobinJobContact[]

    @GraphqlField(JobinJobContact)
    updateContactStatus?: JobinJobContact

    @GraphqlField()
    stop?: boolean;

    @GraphqlField()
    noResume?: boolean;

    // Idempotence is the Fielderty of certain operations in mathematics and computer science whereby they can be applied multiple times without changing the result beyond the initial application.
    @GraphqlField()
    isIdempotent?: boolean;

    @GraphqlField()
    hasNothingToProcess?: boolean;

    // indicates when a given Job should run. If set to null it will never process
    @GraphqlField()
    nextRunAt?: Date;

    // nullify is necessary to distinguish between setting to null or not knowing the value
    @GraphqlField()
    nullifyNextRunAt?: boolean

    // indicates when a given Job is processing and locks it so no other job will process it
    @GraphqlField()
    lockedAt?: Date;

    // nullify is necessary to distinguish between setting to null or not knowing the value
    @GraphqlField()
    nullifyLockedAt?: boolean

    // all information necessary to execute the given operation (parameters)
    @GraphqlField()
    data?: string

    // ------------------------
    @GraphqlDateTime()
    declare createdAt?: Date

    @GraphqlDateTime()
    declare updatedAt?: Date
}
