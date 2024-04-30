import {InputType, Int} from 'type-graphql'
import {MessageSendInput} from "./MessageSendInput";
import {GraphqlField} from "@jobin-cloud/subgraph-mongodb";

@InputType()
export class MessageSendWithDelayInput extends MessageSendInput {
    @GraphqlField(Int)
    delay?: number

    @GraphqlField(String)
    label?: string

    @GraphqlField(Boolean)
    connectionRequestWithMessage?: boolean

}
