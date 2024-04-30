import {InputType} from 'type-graphql'
import {ObjectId} from 'mongodb'
import {GraphqlField, ObjectIdScalar} from "@jobin-cloud/subgraph-mongodb";

@InputType()
export class MessageSendInput {
    @GraphqlField(String)
    subject?: string

    @GraphqlField(String)
    message?: string

    @GraphqlField(ObjectIdScalar)
    jobspecId?: ObjectId

    @GraphqlField(Boolean)
    chatGptPostCleaning?: boolean
}