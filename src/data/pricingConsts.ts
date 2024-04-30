/**
 * Reason to exist
 * 1) use a unified name to connect client-side with server in order to identify weather a given features is available
 *    or not for a given user (privileges collection)
 * 2) use in jobinProducts collection to keep a "history" of what was offered on subscription creation date.
 *    this history is important when adding new users (each newly added user will have privileges generated
 *    based on the activeFeatures field in the jobinProducts collection
 * 3) in jobinFeatures collection it is only used to help us (developers) understand what activeFeature is
 *    associated to the feature promoted on the pricing page [no other use at the time of writing]
 *
 * Also remember to create an array with all the fields to display each active feature when selecting privileges
 */

export type QueryFeatureCodeNameT = 'jobOpenings' | 'emailSenders' | ClientOnlyQueryFeatureCodenameT
export type ClientOnlyQueryFeatureCodenameT = 'contactsInWorkgroup' // Only blocked client-side (NOT SECURE)

export type FeatureCodenameT = 'none' | // none is filler for those that are available on the free plan

    // ========================================================
    // =========== CODENAMES MUST NEVER BE ALTERED ===========
    // ========================================================

    // ===== LI Automation + ATS shared =====
    'autoUpdate' |
    'teamCollaboration' |
    'exportCsv' |                   //limit -> isInfinite
    'bukTagging' |
    'currentPastFilter' |
    'sortingFilter' |
    'keywordScore' |
    'keywordThreshold' |
    'advancedFilters' |
    'dashboardTimeline' |
    'socialSellingIndex' |
    'messagingEventsTimeline' |
    'salesNavigatorIntegration' |
    'recruiterIntegration' |
    'sandbox' |
    // ===== LI Automation exclusive =====
    'normalInvite' |                //isDaily -> isInfinite
    'autoWithdraw' |                //limit -> isInfinite
    // ^^^ in free plan ^^^
    'seamlessImport' |
    'bulkDirectMessage' |           //isDaily -> isInfinite
    'singleInmail' |
    'bulkInmail' |
    'followUp' |
    'unlimitedInvite' |             //isDaily -> isInfinite
    // ===== ATS exclusive =====
    'bulkEmail' |                   //isDaily -> isInfinite
    // ^^^ in free plan ^^^
    'emailAttachment' |
    'removeEmailBranding' |
    'emailSignature' |
    'jobSeekingInfo' |
    'profileCvEmbed' |
    'customPipeline' |
    'kanban' |
    'idealCandidate' |
    // ===== Contact Finder exclusive =====
    'enrichmentCredits' |
    'searchCredits' |
    // ^^^ in free plan ^^^
    'bulkEnrichment' |
    // ===== ChatGPT exclusive =====
    'chatGptTokens' |

    QueryFeatureCodeNameT |
    ClientOnlyQueryFeatureCodenameT