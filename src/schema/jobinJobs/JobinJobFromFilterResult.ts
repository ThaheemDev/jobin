import {Int, ObjectType} from 'type-graphql'
import {ObjectId} from 'mongodb'
import {GraphqlArrayProp, GraphqlProp, NullableGraphqlId} from "@jobin-cloud/subgraph-mongodb";

@ObjectType()
export class JobinJobFromFilterResult {
    @NullableGraphqlId()
    _id?: ObjectId;

    @GraphqlProp(Int)
    totalContacts?: number

    @GraphqlArrayProp(ObjectId)
    totalContactIds?: ObjectId[]
}
