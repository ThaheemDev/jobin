import {ArgsType} from 'type-graphql'
import {ObjectId} from 'mongodb'
import {GraphqlField, ObjectIdScalar} from "@jobin-cloud/subgraph-mongodb";

@ArgsType()
export class JobinJobsFilterArgs {
    @GraphqlField(ObjectIdScalar)
    selectedUserId?: ObjectId

    @GraphqlField(String)
    codename?: string

    @GraphqlField(String)
    operationType?: string

    @GraphqlField(String)
    status?: string

    @GraphqlField(String)
    queue?: string
}
