import {Arg, Args, Ctx, Query, Resolver} from 'type-graphql'
import {ExampleFeature, ExampleFeatureModel} from "./ExampleFeature";
import {SkipTakeArgs} from "../SkipTakeArgs";
import {Context} from "@jobin-cloud/verify-jwt";

@Resolver(_of => ExampleFeature)
export class ExampleFeatureResolver {

    @Query(_returns => [ExampleFeature])
    async getExampleFeatures (
        @Args() { skip, take }: SkipTakeArgs,
        @Ctx() ctx: Context,
        @Arg('title', _type => String, {nullable: true}) title: string,
    ) {
        return ExampleFeatureModel.find({ title }).skip(skip).limit(take)
    }

}
