import {ObjectType} from 'type-graphql'
import {getModelForClass} from '@typegoose/typegoose'
import {JobinJob} from "../jobinJobs/JobinJob";

@ObjectType()
export class JobinCompletedJob extends JobinJob {}

export const JobinCompletedJobModel = getModelForClass(JobinCompletedJob)
