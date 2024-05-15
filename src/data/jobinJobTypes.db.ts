import {JobinJob} from "../schema/jobinJobs/JobinJob";
import {JobinJobCodename} from "../schema/jobinJobs/JobCodenameEnum";

export type QueueT = 'linkedin' | 'jobin'

type JobinJobT = {[key in JobinJobCodename]: Pick<(JobinJob & {codename: key, queue: QueueT}), 'queue' | 'iconName' | 'codename' | 'title' | 'operationType'>}

export const jobinJobTypesDb: JobinJobT = {
  sendBulkEmails: {
    queue: 'jobin',
    iconName: 'email',
    codename: JobinJobCodename.sendBulkEmails,
    title: 'Send Emails in bulk'
  },
  sendLinkedinInvite: {
    queue: 'linkedin',
    iconName: 'linkedin',
    codename: JobinJobCodename.sendLinkedinInvite,
    title: 'LinkedIn Connection Request'
  },
  sendSingleLinkedinMessage: {
    queue: 'linkedin',
    iconName: 'linkedin',
    codename: JobinJobCodename.sendSingleLinkedinMessage,
    title: 'Send Linkedin Message' // `${accountName} ${inMail ? 'InMail/Messaging' : 'Messaging'} Sequence`
  },
  sendLinkedinMessage: {
    queue: 'linkedin',
    iconName: 'linkedin',
    codename: JobinJobCodename.sendLinkedinMessage,
    title: 'Send Linkedin Messages in bulk' // `${accountName} ${inMail ? 'InMail/Messaging' : 'Messaging'} Sequence`
  },
  sendSingleSalesNavMessage: {
    queue: 'linkedin',
    iconName: 'linkedin-sales-navigator',
    codename: JobinJobCodename.sendSingleSalesNavMessage,
    title: 'Send Sales Navigator Messages in bulk', // `${accountName} ${inMail ? 'InMail/Messaging' : 'Messaging'} Sequence`
    operationType: 'linkedinSales'
  },
  salesSendMessage: {
    queue: 'linkedin',
    iconName: 'linkedin-sales-navigator',
    codename: JobinJobCodename.salesSendMessage,
    title: 'Send Sales Navigator Messages in bulk', // `${accountName} ${inMail ? 'InMail/Messaging' : 'Messaging'} Sequence`
    operationType: 'linkedinSales'
  },
  sendSingleTalentMessage: {
    queue: 'linkedin',
    iconName: 'linkedin-recruiter',
    codename: JobinJobCodename.sendSingleTalentMessage,
    title: 'Send Linkedin Talent Solutions Messages in bulk', // `${accountName} ${inMail ? 'InMail/Messaging' : 'Messaging'} Sequence`
    operationType: 'linkedinRecruiter'
  },
  talentSendMessage: {
    queue: 'linkedin',
    iconName: 'linkedin-recruiter',
    codename: JobinJobCodename.talentSendMessage,
    title: 'Send Linkedin Talent Solutions Messages in bulk', // `${accountName} ${inMail ? 'InMail/Messaging' : 'Messaging'} Sequence`
    operationType: 'linkedinRecruiter'
  },
  bulkEnrichContacts: {
    queue: 'jobin',
    iconName: 'at-symbol',
    codename: JobinJobCodename.bulkEnrichContacts,
    title: 'Enrich Contacts'
  },
  fullProfileImportWithEmail: {
    queue: 'linkedin',
    iconName: 'linkedin',
    codename: JobinJobCodename.fullProfileImportWithEmail,
    title: 'Contact Auto Update (+Contact Info)'
  },
  fullProfileImport: {
    queue: 'linkedin',
    iconName: 'linkedin',
    codename: JobinJobCodename.fullProfileImport,
    title: 'Contact Auto Update'
  },
  withdrawLinkedinInvite: {
    queue: 'linkedin',
    iconName: 'linkedin',
    codename: JobinJobCodename.withdrawLinkedinInvite,
    title: 'Withdraw connection invitations Sequence'
  },
  condition: {
    queue: 'jobin',
    iconName: 'question-mark',
    codename: JobinJobCodename.condition,
    title: 'Condition'
  },
  assign: {
    queue: 'jobin',
    iconName: 'question-mark',
    codename: JobinJobCodename.assign,
    title: 'Assign'
  },
  zapier: {
    queue: 'jobin',
    iconName: 'zapier-logo',
    codename: JobinJobCodename.zapier,
    title: 'Send to Zapier'
  }
}