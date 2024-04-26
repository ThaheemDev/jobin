import {ArgsType, Field, Int} from 'type-graphql'

@ArgsType()
export class SkipTakeArgs {
    @Field(_type => Int, {nullable: true, defaultValue: 0})
    skip: number = 0;

    @Field(_type => Int, {nullable: true, defaultValue: 30})
        // @Length, @Min and @ArrayMaxSize are decorators from class-validator that automatically perform field validation in TypeGraphQL.
        // @Min(1)
        // @Max(50)
    take: number = 30;
}
