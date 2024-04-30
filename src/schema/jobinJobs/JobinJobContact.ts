import {ObjectType} from 'type-graphql'
import {ObjectId} from 'mongodb'
import {GraphqlId, GraphqlProp, ObjectIdScalar, RequiredGraphqlProp} from "@jobin-cloud/subgraph-mongodb";
import {Contact, JobinAccount} from "../../external";

@ObjectType()
export class JobinJobContact {
    @GraphqlId()
    _id!: Readonly<ObjectId>

    // fail / success / pending / processing
    @RequiredGraphqlProp()
    status!: string;

    @GraphqlProp(ObjectIdScalar, {deprecationReason: 'Should be moved to account._id'})
    accountId?: ObjectId

    @GraphqlProp(ObjectIdScalar, {deprecationReason: 'Should be moved to contact._id'})
    contactId?: ObjectId

    // ==== Denormalized Urls ====
    @GraphqlProp(String)
    linkedinUrl?: string

    @GraphqlProp(String)
    linkedinSalesUrl?: string

    @GraphqlProp(String)
    linkedinTalentId?: string

    @GraphqlProp(String)
    email?: string

    @GraphqlProp(String)
    profileId?: string
    // ============================

    @GraphqlProp(Contact)
    contact?: Contact

    @GraphqlProp(JobinAccount)
    account?: JobinAccount

    @GraphqlProp(String)
    altText?: string // replaces contact miniProfile if it doesn't exist

    @GraphqlProp(String)
    errorMsg?: string // displays error on hover or if no altText/contactId is specified
}
