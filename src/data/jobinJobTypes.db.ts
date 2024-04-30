import {JobinJob} from "../schema/jobinJobs/JobinJob";

export type CodeNameT = 'sendBulkEmails'

type JobinJobT = {[key in CodeNameT]: Pick<(JobinJob & {codename: CodeNameT}), 'queue' | 'iconName' | 'codename' | 'title'>}

export const jobinJobTypesDb: JobinJobT = {
  sendBulkEmails: {
    queue: 'jobin',
    iconName: 'email',
    codename: 'sendBulkEmails',
    title: 'Send Emails in bulk'
  }
}