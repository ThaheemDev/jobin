import {Directive, ObjectType} from "type-graphql";
import {ObjectId} from "mongodb";
import {GraphqlId} from "@jobin-cloud/subgraph-mongodb";



@Directive("@extends")
@Directive('@key(fields: "_id")')
@ObjectType()
export class User {

    @GraphqlId()
    _id!: ObjectId

}

@Directive("@extends")
@Directive('@key(fields: "_id")')
@ObjectType()
export class WorkGroup {

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