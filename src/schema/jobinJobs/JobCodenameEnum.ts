import {registerEnumType} from "type-graphql";

export enum JobinJobCodename {
    sendBulkEmails = 'sendBulkEmails',
    sendLinkedinInvite = 'sendLinkedinInvite',
    sendLinkedinMessage = 'sendLinkedinMessage',
    sendSingleLinkedinMessage = 'sendSingleLinkedinMessage',
    sendSingleSalesNavMessage = 'sendSingleSalesNavMessage',
    salesSendMessage = 'salesSendMessage',
    sendSingleTalentMessage = 'sendSingleTalentMessage',
    talentSendMessage = 'talentSendMessage',
    bulkEnrichContacts = 'bulkEnrichContacts',
    fullProfileImportWithEmail = 'fullProfileImportWithEmail',
    fullProfileImport = 'fullProfileImport',
    withdrawLinkedinInvite = 'withdrawLinkedinInvite',
    condition = 'condition',
    assign = 'assign',
    zapier = 'zapier'
}

registerEnumType(JobinJobCodename, {
    name: "JobinJobCodename"
});