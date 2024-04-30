import {InputType} from 'type-graphql'
import {ObjectId} from 'mongodb'
import {GraphqlField, NullableGraphqlId, ObjectIdScalar, RequiredGraphqlField} from "@jobin-cloud/subgraph-mongodb";

@InputType()
export class JobinJobContactInput {
    @NullableGraphqlId()
    _id?: ObjectId;

    // fail / success / pending / processing
    @RequiredGraphqlField()
    status!: string;

    @GraphqlField(ObjectIdScalar, {deprecationReason: 'Should be moved to account._id'})
    accountId?: ObjectId

    @GraphqlField(ObjectIdScalar, {deprecationReason: 'Should be moved to contact._id'})
    contactId?: ObjectId

    // ==== Denormalized Urls ====
    @GraphqlField(String)
    linkedinUrl?: string

    @GraphqlField(String)
    linkedinSalesUrl?: string

    @GraphqlField(String)
    linkedinTalentId?: string

    @GraphqlField(String)
    email?: string

    @GraphqlField(String)
    profileId?: string
    // ============================

    @GraphqlField(String)
    altText?: string // replaces contact miniProfile if it doesn't exist

    @GraphqlField(String)
    errorMsg?: string // displays error on hover or if no altText/contactId is specified
}
