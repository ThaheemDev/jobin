import {Directive, InputType, ObjectType} from "type-graphql";
import {ObjectId} from "mongodb";
import {GraphqlId} from "@jobin-cloud/subgraph-mongodb";

@InputType()
export class ExternalInput {

    @GraphqlId()
    _id!: ObjectId

}

@Directive("@extends")
@Directive('@key(fields: "_id", resolvable: false)')
@ObjectType()
export class User {

    @Directive("@external")
    @GraphqlId()
    _id!: ObjectId

}

@Directive("@extends")
@Directive('@key(fields: "_id", resolvable: false)')
@ObjectType()
export class Contact {

    @Directive("@external")
    @GraphqlId()
    _id!: ObjectId

}

@Directive("@extends")
@Directive('@key(fields: "_id", resolvable: false)')
@ObjectType()
export class JobinAccount {

    @Directive("@external")
    @GraphqlId()
    _id!: ObjectId

}