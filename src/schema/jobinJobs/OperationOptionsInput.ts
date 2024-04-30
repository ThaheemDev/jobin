import {InputType} from 'type-graphql'
import {MessageSendWithDelayInput} from "./MessageSendWithDelayInput";
import {GraphqlField} from "@jobin-cloud/subgraph-mongodb";

@InputType()
export class OperationOptionsInput {
    @GraphqlField(Boolean)
    bypass?: boolean

    @GraphqlField(MessageSendWithDelayInput)
    messageSend?: MessageSendWithDelayInput

    @GraphqlField(MessageSendWithDelayInput)
    followUp?: MessageSendWithDelayInput
}
