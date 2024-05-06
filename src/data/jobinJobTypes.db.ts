import {JobinJob} from "../schema/jobinJobs/JobinJob";
import {JobinJobCodenameT} from "@jobin-cloud/shared-schema";

export type QueueT = 'linkedin' | 'jobin'

type JobinJobT = {[key in JobinJobCodenameT]: Pick<(JobinJob & {codename: key, queue: QueueT}), 'queue' | 'iconName' | 'codename' | 'title' | 'operationType'>}

export const jobinJobTypesDb: JobinJobT = {
  sendBulkEmails: {
    queue: 'jobin',
    iconName: 'email',
    codename: 'sendBulkEmails',
    title: 'Send Emails in bulk'
  },
  sendLinkedinInvite: {
    queue: 'linkedin',
    iconName: 'linkedin',
    codename: 'sendLinkedinInvite',
    title: 'LinkedIn Connection Request'
  },
  sendSingleLinkedinMessage: {
    queue: 'linkedin',
    iconName: 'linkedin',
    codename: 'sendSingleLinkedinMessage',
    title: 'Send Linkedin Message' // `${accountName} ${inMail ? 'InMail/Messaging' : 'Messaging'} Sequence`
  },
  sendLinkedinMessage: {
    queue: 'linkedin',
    iconName: 'linkedin',
    codename: 'sendLinkedinMessage',
    title: 'Send Linkedin Messages in bulk' // `${accountName} ${inMail ? 'InMail/Messaging' : 'Messaging'} Sequence`
  },
  sendSingleSalesNavMessage: {
    queue: 'linkedin',
    iconName: 'linkedin-sales-navigator',
    codename: 'sendSingleSalesNavMessage',
    title: 'Send Sales Navigator Messages in bulk', // `${accountName} ${inMail ? 'InMail/Messaging' : 'Messaging'} Sequence`
    operationType: 'linkedinSales'
  },
  salesSendMessage: {
    queue: 'linkedin',
    iconName: 'linkedin-sales-navigator',
    codename: 'salesSendMessage',
    title: 'Send Sales Navigator Messages in bulk', // `${accountName} ${inMail ? 'InMail/Messaging' : 'Messaging'} Sequence`
    operationType: 'linkedinSales'
  },
  sendSingleTalentMessage: {
    queue: 'linkedin',
    iconName: 'linkedin-recruiter',
    codename: 'sendSingleTalentMessage',
    title: 'Send Linkedin Talent Solutions Messages in bulk', // `${accountName} ${inMail ? 'InMail/Messaging' : 'Messaging'} Sequence`
    operationType: 'linkedinRecruiter'
  },
  talentSendMessage: {
    queue: 'linkedin',
    iconName: 'linkedin-recruiter',
    codename: 'talentSendMessage',
    title: 'Send Linkedin Talent Solutions Messages in bulk', // `${accountName} ${inMail ? 'InMail/Messaging' : 'Messaging'} Sequence`
    operationType: 'linkedinRecruiter'
  },
  bulkEnrichContacts: {
    queue: 'jobin',
    iconName: 'at-symbol',
    codename: 'bulkEnrichContacts',
    title: 'Enrich Contacts'
  },
  fullProfileImportWithEmail: {
    queue: 'linkedin',
    iconName: 'linkedin',
    codename: 'fullProfileImportWithEmail',
    title: 'Contact Auto Update (+Contact Info)'
  },
  fullProfileImport: {
    queue: 'linkedin',
    iconName: 'linkedin',
    codename: 'fullProfileImport',
    title: 'Contact Auto Update'
  },
  withdrawLinkedinInvite: {
    queue: 'linkedin',
    iconName: 'linkedin',
    codename: 'withdrawLinkedinInvite',
    title: 'Withdraw connection invitations Sequence'
  },
  condition: {
    queue: 'jobin',
    iconName: 'question-mark',
    codename: 'condition',
    title: 'Condition'
  },
  assign: {
    queue: 'jobin',
    iconName: 'question-mark',
    codename: 'assign',
    title: 'Assign'
  }
}