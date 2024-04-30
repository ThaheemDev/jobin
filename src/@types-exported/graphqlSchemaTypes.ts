import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
  ObjectId: { input: any; output: any; }
};

export type AbstractContact = {
  __typename?: 'AbstractContact';
  _id: Scalars['ObjectId']['output'];
  academicTitle?: Maybe<Scalars['String']['output']>;
  accomplishments?: Maybe<Array<Accomplishment>>;
  attachments?: Maybe<Array<UploadedFile>>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  calendlyUrl?: Maybe<Scalars['String']['output']>;
  communicationChannels?: Maybe<Array<CommunicationChannel>>;
  /** e.g. BestTimeToCall, preferredSN, Origin, etc. */
  contactSpecification?: Maybe<ContactSpecification>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  cvExtRepoUrl?: Maybe<Scalars['String']['output']>;
  cvFile?: Maybe<UploadedFile>;
  educExperiences?: Maybe<Array<EducExperience>>;
  facebookId?: Maybe<Scalars['String']['output']>;
  facebookUrl?: Maybe<Scalars['String']['output']>;
  facebookUsername?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  githubUrl?: Maybe<Scalars['String']['output']>;
  githubUsername?: Maybe<Scalars['String']['output']>;
  gravatarCheckTimestamp?: Maybe<Scalars['Int']['output']>;
  gravatarUrl?: Maybe<Scalars['String']['output']>;
  hasEmail?: Maybe<Scalars['Boolean']['output']>;
  hasMobilePhone?: Maybe<Scalars['Boolean']['output']>;
  hasPageUrls?: Maybe<Scalars['Boolean']['output']>;
  hasPhone?: Maybe<Scalars['Boolean']['output']>;
  industry?: Maybe<Scalars['String']['output']>;
  instagramUrl?: Maybe<Scalars['String']['output']>;
  jobseekerCriterion?: Maybe<JobseekerCriterion>;
  languageUsed?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<Array<Language>>;
  lastLinkedinUpdate?: Maybe<Scalars['DateTimeISO']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  linkedinDetail?: Maybe<LinkedinDetail>;
  linkedinSalesUrl?: Maybe<Scalars['String']['output']>;
  linkedinTalentId?: Maybe<Scalars['String']['output']>;
  linkedinUrl?: Maybe<Scalars['String']['output']>;
  mainLocation?: Maybe<MainLocation>;
  mainProfExperience?: Maybe<ProfExperience>;
  mainRoleTitle?: Maybe<Scalars['String']['output']>;
  mediumUrl?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  oldLinkedinUrls?: Maybe<Array<Scalars['String']['output']>>;
  otherEmails?: Maybe<Array<Scalars['String']['output']>>;
  otherMobilePhones?: Maybe<Array<Scalars['String']['output']>>;
  otherPhones?: Maybe<Array<Scalars['String']['output']>>;
  pageUrls?: Maybe<Array<Scalars['String']['output']>>;
  pdlId?: Maybe<Scalars['String']['output']>;
  /** DoB, Nationality, marital status, etc */
  personalDetail?: Maybe<PersonalDetail>;
  personalInterest?: Maybe<Scalars['String']['output']>;
  privateEmail?: Maybe<Scalars['String']['output']>;
  privateMobilePhone?: Maybe<Scalars['String']['output']>;
  privatePhone?: Maybe<Scalars['String']['output']>;
  profExperiences?: Maybe<Array<ProfExperience>>;
  quoraUrl?: Maybe<Scalars['String']['output']>;
  skills?: Maybe<Array<Skill>>;
  summary?: Maybe<Scalars['String']['output']>;
  tiktokUrl?: Maybe<Scalars['String']['output']>;
  twitterUrl?: Maybe<Scalars['String']['output']>;
  twitterUsername?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  voluntExperiences?: Maybe<Array<VoluntExperience>>;
  want?: Maybe<Scalars['String']['output']>;
  wechatUrl?: Maybe<Scalars['String']['output']>;
  workEmail?: Maybe<Scalars['String']['output']>;
  workMobilePhone?: Maybe<Scalars['String']['output']>;
  workPhone?: Maybe<Scalars['String']['output']>;
  xingUrl?: Maybe<Scalars['String']['output']>;
  yearsInCurrentRole?: Maybe<Scalars['Int']['output']>;
  yearsOfExperience?: Maybe<Scalars['Int']['output']>;
  youtubeUrl?: Maybe<Scalars['String']['output']>;
};

export type AbstractContactInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  academicTitle?: InputMaybe<Scalars['String']['input']>;
  accomplishments?: InputMaybe<Array<AccomplishmentInput>>;
  attachments?: InputMaybe<Array<UploadedFileInput>>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  calendlyUrl?: InputMaybe<Scalars['String']['input']>;
  communicationChannels?: InputMaybe<Array<CommunicationChannelInput>>;
  /** e.g. BestTimeToCall, preferredSN, Origin, etc. */
  contactSpecification?: InputMaybe<ContactSpecificationInput>;
  cvExtRepoUrl?: InputMaybe<Scalars['String']['input']>;
  cvFile?: InputMaybe<UploadedFileInput>;
  educExperiences?: InputMaybe<Array<EducExperienceInput>>;
  facebookId?: InputMaybe<Scalars['String']['input']>;
  facebookUrl?: InputMaybe<Scalars['String']['input']>;
  facebookUsername?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  githubUrl?: InputMaybe<Scalars['String']['input']>;
  githubUsername?: InputMaybe<Scalars['String']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  instagramUrl?: InputMaybe<Scalars['String']['input']>;
  jobseekerCriterion?: InputMaybe<JobseekerCriterionInput>;
  languageUsed?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<LanguageInput>>;
  lastLinkedinUpdate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  linkedinDetail?: InputMaybe<LinkedinDetailInput>;
  linkedinSalesUrl?: InputMaybe<Scalars['String']['input']>;
  linkedinTalentId?: InputMaybe<Scalars['String']['input']>;
  linkedinUrl?: InputMaybe<Scalars['String']['input']>;
  mainLocation?: InputMaybe<MainLocationInput>;
  mainProfExperience?: InputMaybe<ProfExperienceInput>;
  mainRoleTitle?: InputMaybe<Scalars['String']['input']>;
  mediumUrl?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  oldLinkedinUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  otherEmails?: InputMaybe<Array<Scalars['String']['input']>>;
  otherMobilePhones?: InputMaybe<Array<Scalars['String']['input']>>;
  otherPhones?: InputMaybe<Array<Scalars['String']['input']>>;
  pageUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  pdlId?: InputMaybe<Scalars['String']['input']>;
  /** DoB, Nationality, marital status, etc */
  personalDetail?: InputMaybe<PersonalDetailInput>;
  personalInterest?: InputMaybe<Scalars['String']['input']>;
  privateEmail?: InputMaybe<Scalars['String']['input']>;
  privateMobilePhone?: InputMaybe<Scalars['String']['input']>;
  privatePhone?: InputMaybe<Scalars['String']['input']>;
  profExperiences?: InputMaybe<Array<ProfExperienceInput>>;
  quoraUrl?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<SkillInput>>;
  summary?: InputMaybe<Scalars['String']['input']>;
  tiktokUrl?: InputMaybe<Scalars['String']['input']>;
  twitterUrl?: InputMaybe<Scalars['String']['input']>;
  twitterUsername?: InputMaybe<Scalars['String']['input']>;
  voluntExperiences?: InputMaybe<Array<VoluntExperienceInput>>;
  want?: InputMaybe<Scalars['String']['input']>;
  wechatUrl?: InputMaybe<Scalars['String']['input']>;
  workEmail?: InputMaybe<Scalars['String']['input']>;
  workMobilePhone?: InputMaybe<Scalars['String']['input']>;
  workPhone?: InputMaybe<Scalars['String']['input']>;
  xingUrl?: InputMaybe<Scalars['String']['input']>;
  youtubeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AbstractContactsFilter = {
  __typename?: 'AbstractContactsFilter';
  _id: Scalars['ObjectId']['output'];
  _ids?: Maybe<Array<Scalars['ObjectId']['output']>>;
  companyEmployeeCountRanges?: Maybe<Array<StrCurrentOrPastAdvancedFilter>>;
  contactsAvailability?: Maybe<ContactsAvailabilityFilter>;
  contactsCareer?: Maybe<ContactsCareerFilter>;
  contactsEducation?: Maybe<ContactsEducationFilter>;
  contactsLastEvent?: Maybe<ContactsDateRangeFilter>;
  contactsLastInteraction?: Maybe<ContactsDateRangeFilter>;
  contactsLastUnansweredReply?: Maybe<ContactsDateRangeFilter>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  dripCampaignFilter?: Maybe<DripCampaignFilter>;
  dripCampaignsFilter?: Maybe<Array<IdAdvancedFilter>>;
  gender?: Maybe<StrAdvancedFilter>;
  hasCv?: Maybe<Scalars['Boolean']['output']>;
  hasInteraction?: Maybe<Scalars['Boolean']['output']>;
  hasLinkedinId?: Maybe<Scalars['Boolean']['output']>;
  hasUnansweredReply?: Maybe<Scalars['Boolean']['output']>;
  insertionDate?: Maybe<InsertionDateFilter>;
  isMiniProfile?: Maybe<Scalars['Boolean']['output']>;
  jobseekerStatuses?: Maybe<Array<StrAdvancedFilter>>;
  jobspecFilter?: Maybe<ContactsJobspecFilter>;
  languageNames?: Maybe<Array<StrAdvancedFilter>>;
  linkedinTagsFilter?: Maybe<LinkedinTagsFilter>;
  locations?: Maybe<Array<MainLocationFilter>>;
  minShouldMatch?: Maybe<MinShouldMatch>;
  ownerId?: Maybe<Scalars['ObjectId']['output']>;
  searchName?: Maybe<Scalars['String']['output']>;
  searchSurname?: Maybe<Scalars['String']['output']>;
  searchValue?: Maybe<Scalars['String']['output']>;
  showNoCurrentCompany?: Maybe<Scalars['Boolean']['output']>;
  showUnsubscribed?: Maybe<Scalars['Boolean']['output']>;
  skillNames?: Maybe<Array<StrAdvancedFilter>>;
  sortBy?: Maybe<ContactsSortBy>;
  summary?: Maybe<Array<StrAdvancedFilter>>;
  tags?: Maybe<Array<IdAdvancedFilter>>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
  yearsInCurrentRole?: Maybe<Array<ContactsTimeRangeFilter>>;
  yearsOfExperience?: Maybe<Array<ContactsTimeRangeFilter>>;
};

export type Accomplishment = {
  __typename?: 'Accomplishment';
  _id: Scalars['ObjectId']['output'];
  accomplishmentType?: Maybe<BaseTemplateIconName>;
  /** When this accomplishment happened */
  date?: Maybe<Scalars['DateTimeISO']['output']>;
  /** Longer description of this accomplishment */
  description?: Maybe<Scalars['String']['output']>;
  issuer?: Maybe<Scalars['String']['output']>;
  organizationLogo?: Maybe<OrganizationLogoLinkedin>;
  /** Main name/title of this accomplishment */
  value?: Maybe<Scalars['String']['output']>;
};

export type AccomplishmentInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  accomplishmentType?: InputMaybe<BaseTemplateIconNameInput>;
  /** When this accomplishment happened */
  date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  /** Longer description of this accomplishment */
  description?: InputMaybe<Scalars['String']['input']>;
  issuer?: InputMaybe<Scalars['String']['input']>;
  organizationLogo?: InputMaybe<OrganizationLogoLinkedinInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type AccomplishmentType = {
  __typename?: 'AccomplishmentType';
  _id: Scalars['ObjectId']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  iconName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  value: Scalars['String']['output'];
};

export type AccomplishmentTypeInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  iconName?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type AccountLogo = {
  __typename?: 'AccountLogo';
  _id: Scalars['ObjectId']['output'];
  /** The Full organization) */
  accountId?: Maybe<Scalars['ObjectId']['output']>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AccountLogoInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  accountId?: InputMaybe<Scalars['ObjectId']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AccountTag = {
  __typename?: 'AccountTag';
  _id: Scalars['ObjectId']['output'];
  color?: Maybe<Scalars['String']['output']>;
  iconName?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type AccountTagInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  iconName?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type AccountType = {
  __typename?: 'AccountType';
  _id: Scalars['ObjectId']['output'];
  value: Scalars['String']['output'];
};

export type AccountWithJobspecs = {
  __typename?: 'AccountWithJobspecs';
  _id: Scalars['ObjectId']['output'];
  /** The Employer Organization for this Jobspec */
  accountLogo?: Maybe<AccountLogo>;
  jobspecs?: Maybe<Array<Jobspec>>;
};

export type ActiveFeature = {
  __typename?: 'ActiveFeature';
  _id: Scalars['ObjectId']['output'];
  codename: Scalars['String']['output'];
  isDaily?: Maybe<Scalars['Boolean']['output']>;
  isFixed?: Maybe<Scalars['Boolean']['output']>;
  isInfinite?: Maybe<Scalars['Boolean']['output']>;
  isPerWorkGroup?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
};

export type ActiveFeatureLabel = {
  __typename?: 'ActiveFeatureLabel';
  _id: Scalars['ObjectId']['output'];
  activeFeature: ActiveFeature;
  featureLabel: Scalars['String']['output'];
  queryForUsed?: Maybe<Scalars['Boolean']['output']>;
  used?: Maybe<Scalars['Int']['output']>;
};

export type ActivePipelineStage = {
  __typename?: 'ActivePipelineStage';
  _id: Scalars['ObjectId']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** @deprecated Necessary due to extension update */
  fittingIndex?: Maybe<Scalars['Int']['output']>;
  jobspec?: Maybe<Jobspec>;
  pipelineId: Scalars['ObjectId']['output'];
  pipelineStage?: Maybe<FullPipelineStage>;
  stage?: Maybe<Scalars['String']['output']>;
  subStage?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId: Scalars['ObjectId']['output'];
};

export type ActivePipelineStageInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  pipelineId: Scalars['ObjectId']['input'];
  stage?: InputMaybe<Scalars['String']['input']>;
  subStage?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ObjectId']['input']>;
};

export type ActivePipelineStageWithEventIdAndTitle = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  activePipelineStage: ActivePipelineStageInput;
  jobinEventId: Scalars['ObjectId']['input'];
  jobspecTitle?: InputMaybe<Scalars['String']['input']>;
};

export type ActiveSubscription = {
  __typename?: 'ActiveSubscription';
  _id: Scalars['ObjectId']['output'];
  activeSubscriptionFeatures: Array<ActiveFeatureLabel>;
  assignedSeatIds: Array<Scalars['ObjectId']['output']>;
  assignedSeatsCount: Scalars['Int']['output'];
  currency: Scalars['String']['output'];
  currencyCode: Scalars['String']['output'];
  currentPlanId: Scalars['ObjectId']['output'];
  currentPlanName: Scalars['String']['output'];
  iconName: Scalars['String']['output'];
  isBilledMonthly: Scalars['Boolean']['output'];
  monthlyCost: Scalars['Int']['output'];
  productId: Scalars['ObjectId']['output'];
  solutionId: Scalars['ObjectId']['output'];
  solutionName: Scalars['String']['output'];
  totalSeats: Scalars['Int']['output'];
  userHasAssignedSeat: Scalars['Boolean']['output'];
};

export type AdditionalField = {
  __typename?: 'AdditionalField';
  _id: Scalars['ObjectId']['output'];
  default?: Maybe<Scalars['String']['output']>;
  /** label displayed on GUIs. If undefined == do not display on GUI */
  display?: Maybe<Scalars['String']['output']>;
  isBoolean?: Maybe<Scalars['Boolean']['output']>;
  isNumber?: Maybe<Scalars['Boolean']['output']>;
  isPlural?: Maybe<Scalars['Boolean']['output']>;
  path: Scalars['String']['output'];
};

export type AffiliateCodeAvailability = {
  __typename?: 'AffiliateCodeAvailability';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  affiliateCouponCodeIsAvailable?: Maybe<Scalars['Boolean']['output']>;
  affiliateLinkIsAvailable?: Maybe<Scalars['Boolean']['output']>;
};

export type AffiliateLead = {
  __typename?: 'AffiliateLead';
  _id: Scalars['ObjectId']['output'];
  country?: Maybe<Scalars['String']['output']>;
  couponPercentage?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstPaymentDate?: Maybe<Scalars['DateTimeISO']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
  jobinInvoiceId?: Maybe<Scalars['ObjectId']['output']>;
  jobinSubscriptionId?: Maybe<Scalars['ObjectId']['output']>;
  linkClickedDate?: Maybe<Scalars['DateTimeISO']['output']>;
  linkedinUrl?: Maybe<Scalars['String']['output']>;
  originalUserId?: Maybe<Scalars['ObjectId']['output']>;
  overwriteMessage?: Maybe<Scalars['String']['output']>;
  payableAmount?: Maybe<Scalars['Int']['output']>;
  payableAmountCurrency?: Maybe<Currency>;
  referredUserAvatar?: Maybe<Avatar>;
  referredUserId?: Maybe<Scalars['ObjectId']['output']>;
  signupDate?: Maybe<Scalars['DateTimeISO']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalAffiliateFeeLost?: Maybe<Scalars['Int']['output']>;
  totalAffiliateFeeReceived?: Maybe<Scalars['Int']['output']>;
  userId: Scalars['ObjectId']['output'];
  wasCanceled?: Maybe<Scalars['Boolean']['output']>;
  wasRefunded?: Maybe<Scalars['Boolean']['output']>;
};

export type AffiliateLeadTotals = {
  __typename?: 'AffiliateLeadTotals';
  _id: Scalars['ObjectId']['output'];
  cancelled?: Maybe<Scalars['Int']['output']>;
  clicks?: Maybe<Scalars['Int']['output']>;
  customers?: Maybe<Scalars['Int']['output']>;
  inGracePeriod?: Maybe<Scalars['Int']['output']>;
  signups?: Maybe<Scalars['Int']['output']>;
};

export type AffiliatePayout = {
  __typename?: 'AffiliatePayout';
  _id: Scalars['ObjectId']['output'];
  payoutBatchId: Scalars['String']['output'];
  payoutItem: PayoutItem;
  payoutItemFee: MoneyAmountObj;
  payoutItemId: Scalars['String']['output'];
  timeProcessed?: Maybe<Scalars['DateTimeISO']['output']>;
  transactionId?: Maybe<Scalars['String']['output']>;
  transactionStatus: Scalars['String']['output'];
  userId: Scalars['ObjectId']['output'];
};

export type AffiliateTotalPayout = {
  __typename?: 'AffiliateTotalPayout';
  _id: Scalars['ObjectId']['output'];
  totalPastPayouts?: Maybe<Array<MoneyAmountObj>>;
  totalPendingNext2Payouts?: Maybe<Array<MoneyAmountObj>>;
  totalPendingNextPayouts?: Maybe<Array<MoneyAmountObj>>;
  totalPendingPayouts?: Maybe<Array<MoneyAmountObj>>;
};

export type AssignSeatPrivilegeInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  jobinProductId: Scalars['ObjectId']['input'];
  userId: Scalars['ObjectId']['input'];
};

export type AvailabilityPeriod = {
  __typename?: 'AvailabilityPeriod';
  _id: Scalars['ObjectId']['output'];
  availableOn?: Maybe<Scalars['DateTimeISO']['output']>;
  isNegotiable?: Maybe<Scalars['Boolean']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type AvailabilityPeriodInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  availableOn?: InputMaybe<Scalars['DateTimeISO']['input']>;
  isNegotiable?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type AvailabilityRow = {
  __typename?: 'AvailabilityRow';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  searchValue?: Maybe<Scalars['String']['output']>;
};

export type AvailabilityRowInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
};

export type Avatar = {
  __typename?: 'Avatar';
  _id: Scalars['ObjectId']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  fullAvatarUrl?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type AvatarWithValue = {
  __typename?: 'AvatarWithValue';
  _id: Scalars['ObjectId']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  fullAvatarUrl?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type BaseTemplate = {
  __typename?: 'BaseTemplate';
  _id: Scalars['ObjectId']['output'];
  value: Scalars['String']['output'];
};

export type BaseTemplateColorIconName = {
  __typename?: 'BaseTemplateColorIconName';
  _id: Scalars['ObjectId']['output'];
  color?: Maybe<Scalars['String']['output']>;
  iconName?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type BaseTemplateColorIconNameInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  iconName?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type BaseTemplateIconName = {
  __typename?: 'BaseTemplateIconName';
  _id: Scalars['ObjectId']['output'];
  iconName?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type BaseTemplateIconNameInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  iconName?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type BaseTemplateLevel = {
  __typename?: 'BaseTemplateLevel';
  _id: Scalars['ObjectId']['output'];
  level?: Maybe<Scalars['Int']['output']>;
  value: Scalars['String']['output'];
};

export type BaseTemplateLevelInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  value: Scalars['String']['input'];
};

export type BaseTemplateStyleIconName = {
  __typename?: 'BaseTemplateStyleIconName';
  _id: Scalars['ObjectId']['output'];
  iconName?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type BaseTemplateStyleIconNameInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  iconName?: InputMaybe<Scalars['String']['input']>;
  style?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type Benefit = {
  __typename?: 'Benefit';
  _id: Scalars['ObjectId']['output'];
  benefitType?: Maybe<BaseTemplateIconName>;
  value?: Maybe<Scalars['String']['output']>;
};

export type BenefitInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  benefitType?: InputMaybe<BaseTemplateIconNameInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type BenefitTemplate = {
  __typename?: 'BenefitTemplate';
  _id: Scalars['ObjectId']['output'];
  benefitType?: Maybe<BaseTemplateIconName>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  iconName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  value: Scalars['String']['output'];
};

export type BenefitTemplateInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  benefitType?: InputMaybe<BaseTemplateIconNameInput>;
  iconName?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type BenefitType = {
  __typename?: 'BenefitType';
  _id: Scalars['ObjectId']['output'];
  iconName?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type BillingDetail = {
  __typename?: 'BillingDetail';
  _id: Scalars['ObjectId']['output'];
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  companyName: Scalars['String']['output'];
  companyRegistrationNr?: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  countryCode: Scalars['String']['output'];
  currency: Currency;
  invoiceEmail?: Maybe<Scalars['String']['output']>;
  removeCountryCodeOnVatId?: Maybe<Scalars['Boolean']['output']>;
  stateProvinceRegion?: Maybe<Scalars['String']['output']>;
  vatCompanyName?: Maybe<Scalars['String']['output']>;
  vatId?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type BillingDetailInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  companyName: Scalars['String']['input'];
  companyRegistrationNr?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['String']['input'];
  countryCode: Scalars['String']['input'];
  currency: CurrencyInput;
  invoiceEmail?: InputMaybe<Scalars['String']['input']>;
  removeCountryCodeOnVatId?: InputMaybe<Scalars['Boolean']['input']>;
  stateProvinceRegion?: InputMaybe<Scalars['String']['input']>;
  vatCompanyName?: InputMaybe<Scalars['String']['input']>;
  vatId?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type CampaignStage = {
  __typename?: 'CampaignStage';
  _id: Scalars['ObjectId']['output'];
  campaignId: Scalars['ObjectId']['output'];
  stagePositionCode?: Maybe<Scalars['String']['output']>;
};

export type CampaignStageInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  campaignId: Scalars['ObjectId']['input'];
  stagePositionCode?: InputMaybe<Scalars['String']['input']>;
};

export type CareerOverview = {
  __typename?: 'CareerOverview';
  _id: Scalars['ObjectId']['output'];
  careerLevel?: Maybe<BaseTemplateLevel>;
  careerPath?: Maybe<Scalars['String']['output']>;
  careerSubPath?: Maybe<Scalars['String']['output']>;
  monthsOfExperience?: Maybe<Scalars['Int']['output']>;
};

export type CareerOverviewInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  careerLevel?: InputMaybe<BaseTemplateLevelInput>;
  careerPath?: InputMaybe<Scalars['String']['input']>;
  careerSubPath?: InputMaybe<Scalars['String']['input']>;
  monthsOfExperience?: InputMaybe<Scalars['Int']['input']>;
};

export type ChatGptMessage = {
  content: Scalars['String']['input'];
  role: Scalars['String']['input'];
};

export type ChatGptPrompt = {
  __typename?: 'ChatGptPrompt';
  _id: Scalars['ObjectId']['output'];
  code: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frequencyPenalty?: Maybe<Scalars['Float']['output']>;
  label: Scalars['String']['output'];
  listOf3?: Maybe<Scalars['Boolean']['output']>;
  maxTokens?: Maybe<Scalars['Int']['output']>;
  noWordLimit?: Maybe<Scalars['Boolean']['output']>;
  numOfWords?: Maybe<Scalars['Int']['output']>;
  presencePenalty?: Maybe<Scalars['Float']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
  text: Scalars['String']['output'];
  topP?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  useChatGPT4?: Maybe<Scalars['Boolean']['output']>;
  writeAsExpert?: Maybe<Scalars['String']['output']>;
  writingStyle?: Maybe<Scalars['String']['output']>;
};

export type ChatGptPromptInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  code: Scalars['String']['input'];
  frequencyPenalty?: InputMaybe<Scalars['Float']['input']>;
  label: Scalars['String']['input'];
  listOf3?: InputMaybe<Scalars['Boolean']['input']>;
  maxTokens?: InputMaybe<Scalars['Int']['input']>;
  noWordLimit?: InputMaybe<Scalars['Boolean']['input']>;
  numOfWords?: InputMaybe<Scalars['Int']['input']>;
  presencePenalty?: InputMaybe<Scalars['Float']['input']>;
  temperature?: InputMaybe<Scalars['Float']['input']>;
  text: Scalars['String']['input'];
  topP?: InputMaybe<Scalars['Float']['input']>;
  useChatGPT4?: InputMaybe<Scalars['Boolean']['input']>;
  writeAsExpert?: InputMaybe<Scalars['String']['input']>;
  writingStyle?: InputMaybe<Scalars['String']['input']>;
};

export type ChatGptPublicPrompt = {
  __typename?: 'ChatGptPublicPrompt';
  _id: Scalars['ObjectId']['output'];
  categoryCode: Scalars['String']['output'];
  contentExample?: Maybe<Scalars['String']['output']>;
  contentPlaceholder?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  label: Scalars['String']['output'];
  language?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  tone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  writeAsExpert?: Maybe<Scalars['String']['output']>;
  writingStyle?: Maybe<Scalars['String']['output']>;
};


export type ChatGptPublicPromptTextArgs = {
  strLength?: InputMaybe<Scalars['Int']['input']>;
};

export type CheckoutAmount = {
  __typename?: 'CheckoutAmount';
  _id: Scalars['ObjectId']['output'];
  alreadyPaid?: Maybe<Scalars['Int']['output']>;
  alreadyPaidFull?: Maybe<Scalars['Int']['output']>;
  billingDetail: BillingDetail;
  bundleDiscountAmount?: Maybe<Scalars['Int']['output']>;
  bundleDiscountPercentage?: Maybe<Scalars['Int']['output']>;
  coupon?: Maybe<Coupon>;
  couponAmount?: Maybe<Scalars['Int']['output']>;
  currency: Currency;
  isReverseCharged?: Maybe<Scalars['Boolean']['output']>;
  nrOfMonths: Scalars['Float']['output'];
  solutionWithProducts: Array<SolutionWithProduct>;
  stripePaymentMethod?: Maybe<StripePaymentMethod>;
  subscriptionIsMonthly?: Maybe<Scalars['Boolean']['output']>;
  taxAmount?: Maybe<Scalars['Int']['output']>;
  taxRatePercentage?: Maybe<Scalars['Int']['output']>;
  totalToPay: Scalars['Int']['output'];
  yearlyDiscountAmount?: Maybe<Scalars['Int']['output']>;
};

export type CommunicationChannel = {
  __typename?: 'CommunicationChannel';
  _id: Scalars['ObjectId']['output'];
  communicationChannelType?: Maybe<Scalars['String']['output']>;
  contactSubtype?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CommunicationChannelInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  communicationChannelType?: InputMaybe<Scalars['String']['input']>;
  contactSubtype?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type CommunicationChannelType = {
  __typename?: 'CommunicationChannelType';
  _id: Scalars['ObjectId']['output'];
  value: Scalars['String']['output'];
};

export type CommunicationChannelTypeInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  value: Scalars['String']['input'];
};

export type CompletedContactDripCampaignStage = {
  __typename?: 'CompletedContactDripCampaignStage';
  _id: Scalars['ObjectId']['output'];
  bulkPaused?: Maybe<Scalars['Boolean']['output']>;
  campaignId: Scalars['ObjectId']['output'];
  campaignName: Scalars['String']['output'];
  contactId: Scalars['ObjectId']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  endStagePositionCode?: Maybe<Scalars['String']['output']>;
  goalReached: Scalars['Boolean']['output'];
  stopped: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
  workGroupId?: Maybe<Scalars['ObjectId']['output']>;
};

export type CompletedContactDripCampaignStageInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  bulkPaused?: InputMaybe<Scalars['Boolean']['input']>;
  campaignId: Scalars['ObjectId']['input'];
  campaignName: Scalars['String']['input'];
  contactId?: InputMaybe<Scalars['ObjectId']['input']>;
  endStagePositionCode?: InputMaybe<Scalars['String']['input']>;
  goalReached: Scalars['Boolean']['input'];
  stopped: Scalars['Boolean']['input'];
  userId?: InputMaybe<Scalars['ObjectId']['input']>;
  workGroupId?: InputMaybe<Scalars['ObjectId']['input']>;
};

export type Contact = {
  __typename?: 'Contact';
  _id: Scalars['ObjectId']['output'];
  academicTitle?: Maybe<Scalars['String']['output']>;
  accomplishments?: Maybe<Array<Accomplishment>>;
  activePipelineStage?: Maybe<ActivePipelineStage>;
  activePipelineStages?: Maybe<Array<ActivePipelineStage>>;
  activePipelineStagesNr?: Maybe<Scalars['Int']['output']>;
  alwaysKeepOriginalOnOverwrite?: Maybe<Scalars['Boolean']['output']>;
  attachments?: Maybe<Array<UploadedFile>>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  calendlyUrl?: Maybe<Scalars['String']['output']>;
  campaignStage?: Maybe<CampaignStage>;
  communicationChannels?: Maybe<Array<CommunicationChannel>>;
  /** e.g. BestTimeToCall, preferredSN, Origin, etc. */
  contactSpecification?: Maybe<ContactSpecification>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  customFieldList?: Maybe<Array<CustomField>>;
  cvExtRepoUrl?: Maybe<Scalars['String']['output']>;
  cvFile?: Maybe<UploadedFile>;
  educExperiences?: Maybe<Array<EducExperience>>;
  facebookId?: Maybe<Scalars['String']['output']>;
  facebookUrl?: Maybe<Scalars['String']['output']>;
  facebookUsername?: Maybe<Scalars['String']['output']>;
  firstLinesOfMostRecentNote?: Maybe<ContactNote>;
  firstName?: Maybe<Scalars['String']['output']>;
  fittingIndex?: Maybe<Scalars['Int']['output']>;
  fittingIndexes?: Maybe<Array<FittingIndex>>;
  fullAvatarUrl?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  githubUrl?: Maybe<Scalars['String']['output']>;
  githubUsername?: Maybe<Scalars['String']['output']>;
  gravatarCheckTimestamp?: Maybe<Scalars['Int']['output']>;
  gravatarUrl?: Maybe<Scalars['String']['output']>;
  hasBeenManuallyUpdated?: Maybe<Scalars['Boolean']['output']>;
  hasDuplicate?: Maybe<Scalars['Boolean']['output']>;
  hasEmail?: Maybe<Scalars['Boolean']['output']>;
  hasMobilePhone?: Maybe<Scalars['Boolean']['output']>;
  hasPageUrls?: Maybe<Scalars['Boolean']['output']>;
  hasPendingInvitation?: Maybe<Scalars['Boolean']['output']>;
  hasPhone?: Maybe<Scalars['Boolean']['output']>;
  industry?: Maybe<Scalars['String']['output']>;
  instagramUrl?: Maybe<Scalars['String']['output']>;
  jobseekerCriterion?: Maybe<JobseekerCriterion>;
  languageUsed?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<Array<Language>>;
  last4JobinEvents?: Maybe<Array<JobinEvent>>;
  lastEventDate?: Maybe<Scalars['DateTimeISO']['output']>;
  lastInteractionDate?: Maybe<Scalars['DateTimeISO']['output']>;
  lastLinkedinUpdate?: Maybe<Scalars['DateTimeISO']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  lastUnansweredReplyDate?: Maybe<Scalars['DateTimeISO']['output']>;
  linkedinConnectionLevel?: Maybe<Scalars['String']['output']>;
  linkedinConnectionLevelAvatars?: Maybe<Array<AvatarWithValue>>;
  linkedinConnectionLevels?: Maybe<Array<UserLinkedinUrlOwnedBaseTemplate>>;
  linkedinDetail?: Maybe<LinkedinDetail>;
  linkedinSalesUrl?: Maybe<Scalars['String']['output']>;
  linkedinTalentId?: Maybe<Scalars['String']['output']>;
  linkedinUrl?: Maybe<Scalars['String']['output']>;
  mainExperienceStudent?: Maybe<MainExperienceStudent>;
  mainLocation?: Maybe<MainLocation>;
  mainProfExperience?: Maybe<ProfExperience>;
  mainRoleTitle?: Maybe<Scalars['String']['output']>;
  mediumUrl?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Array<ContactNote>>;
  oldLinkedinUrls?: Maybe<Array<Scalars['String']['output']>>;
  otherEmails?: Maybe<Array<Scalars['String']['output']>>;
  otherMobilePhones?: Maybe<Array<Scalars['String']['output']>>;
  otherPhones?: Maybe<Array<Scalars['String']['output']>>;
  pageUrls?: Maybe<Array<Scalars['String']['output']>>;
  pdlId?: Maybe<Scalars['String']['output']>;
  /** DoB, Nationality, marital status, etc */
  personalDetail?: Maybe<PersonalDetail>;
  personalInterest?: Maybe<Scalars['String']['output']>;
  privateEmail?: Maybe<Scalars['String']['output']>;
  privateMobilePhone?: Maybe<Scalars['String']['output']>;
  privatePhone?: Maybe<Scalars['String']['output']>;
  profExperienceHasBeenManuallyUpdated?: Maybe<Scalars['Boolean']['output']>;
  profExperiences?: Maybe<Array<ProfExperience>>;
  quoraUrl?: Maybe<Scalars['String']['output']>;
  refereeId?: Maybe<Scalars['ObjectId']['output']>;
  skills?: Maybe<Array<Skill>>;
  summary?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<BaseTemplateColorIconName>>;
  tiktokUrl?: Maybe<Scalars['String']['output']>;
  twitterUrl?: Maybe<Scalars['String']['output']>;
  twitterUsername?: Maybe<Scalars['String']['output']>;
  unsubscribed?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
  voluntExperiences?: Maybe<Array<VoluntExperience>>;
  want?: Maybe<Scalars['String']['output']>;
  wechatUrl?: Maybe<Scalars['String']['output']>;
  workEmail?: Maybe<Scalars['String']['output']>;
  workMobilePhone?: Maybe<Scalars['String']['output']>;
  workPhone?: Maybe<Scalars['String']['output']>;
  xingUrl?: Maybe<Scalars['String']['output']>;
  yearsInCurrentRole?: Maybe<Scalars['Int']['output']>;
  yearsOfExperience?: Maybe<Scalars['Int']['output']>;
  youtubeUrl?: Maybe<Scalars['String']['output']>;
};


export type ContactActivePipelineStageArgs = {
  activePipelineId?: InputMaybe<Scalars['ObjectId']['input']>;
};


export type ContactFittingIndexArgs = {
  activePipelineId?: InputMaybe<Scalars['ObjectId']['input']>;
};

export type ContactEnrichmentObj = {
  __typename?: 'ContactEnrichmentObj';
  _id: Scalars['ObjectId']['output'];
  enrichedData?: Maybe<AbstractContact>;
  status: Scalars['String']['output'];
};

export type ContactInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  academicTitle?: InputMaybe<Scalars['String']['input']>;
  accomplishments?: InputMaybe<Array<AccomplishmentInput>>;
  activePipelineStages?: InputMaybe<Array<ActivePipelineStageInput>>;
  activePipelineStagesNr?: InputMaybe<Scalars['Int']['input']>;
  alwaysKeepOriginalOnOverwrite?: InputMaybe<Scalars['Boolean']['input']>;
  attachments?: InputMaybe<Array<UploadedFileInput>>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  calendlyUrl?: InputMaybe<Scalars['String']['input']>;
  campaignStage?: InputMaybe<CampaignStageInput>;
  communicationChannels?: InputMaybe<Array<CommunicationChannelInput>>;
  /** e.g. BestTimeToCall, preferredSN, Origin, etc. */
  contactSpecification?: InputMaybe<ContactSpecificationInput>;
  cvExtRepoUrl?: InputMaybe<Scalars['String']['input']>;
  cvFile?: InputMaybe<UploadedFileInput>;
  educExperiences?: InputMaybe<Array<EducExperienceInput>>;
  facebookId?: InputMaybe<Scalars['String']['input']>;
  facebookUrl?: InputMaybe<Scalars['String']['input']>;
  facebookUsername?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  fittingIndexes?: InputMaybe<Array<FittingIndexInput>>;
  gender?: InputMaybe<Scalars['String']['input']>;
  githubUrl?: InputMaybe<Scalars['String']['input']>;
  githubUsername?: InputMaybe<Scalars['String']['input']>;
  gravatarCheckTimestamp?: InputMaybe<Scalars['Int']['input']>;
  gravatarUrl?: InputMaybe<Scalars['String']['input']>;
  hasBeenManuallyUpdated?: InputMaybe<Scalars['Boolean']['input']>;
  hasDuplicate?: InputMaybe<Scalars['Boolean']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  instagramUrl?: InputMaybe<Scalars['String']['input']>;
  jobseekerCriterion?: InputMaybe<JobseekerCriterionInput>;
  languageUsed?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<LanguageInput>>;
  lastEventDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lastInteractionDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lastLinkedinUpdate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastUnansweredReplyDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  linkedinConnectionLevels?: InputMaybe<Array<UserLinkedinUrlOwnedBaseTemplateInput>>;
  linkedinDetail?: InputMaybe<LinkedinDetailInput>;
  linkedinSalesUrl?: InputMaybe<Scalars['String']['input']>;
  linkedinTalentId?: InputMaybe<Scalars['String']['input']>;
  linkedinUrl?: InputMaybe<Scalars['String']['input']>;
  mainLocation?: InputMaybe<MainLocationInput>;
  mainProfExperience?: InputMaybe<ProfExperienceInput>;
  mainRoleTitle?: InputMaybe<Scalars['String']['input']>;
  mediumUrl?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  oldLinkedinUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  otherEmails?: InputMaybe<Array<Scalars['String']['input']>>;
  otherMobilePhones?: InputMaybe<Array<Scalars['String']['input']>>;
  otherPhones?: InputMaybe<Array<Scalars['String']['input']>>;
  pageUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  pdlId?: InputMaybe<Scalars['String']['input']>;
  /** DoB, Nationality, marital status, etc */
  personalDetail?: InputMaybe<PersonalDetailInput>;
  personalInterest?: InputMaybe<Scalars['String']['input']>;
  privateEmail?: InputMaybe<Scalars['String']['input']>;
  privateMobilePhone?: InputMaybe<Scalars['String']['input']>;
  privatePhone?: InputMaybe<Scalars['String']['input']>;
  profExperienceHasBeenManuallyUpdated?: InputMaybe<Scalars['Boolean']['input']>;
  profExperiences?: InputMaybe<Array<ProfExperienceInput>>;
  quoraUrl?: InputMaybe<Scalars['String']['input']>;
  refereeId?: InputMaybe<Scalars['ObjectId']['input']>;
  skills?: InputMaybe<Array<SkillInput>>;
  summary?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<BaseTemplateColorIconNameInput>>;
  tiktokUrl?: InputMaybe<Scalars['String']['input']>;
  twitterUrl?: InputMaybe<Scalars['String']['input']>;
  twitterUsername?: InputMaybe<Scalars['String']['input']>;
  unsubscribed?: InputMaybe<Scalars['Boolean']['input']>;
  voluntExperiences?: InputMaybe<Array<VoluntExperienceInput>>;
  want?: InputMaybe<Scalars['String']['input']>;
  wechatUrl?: InputMaybe<Scalars['String']['input']>;
  workEmail?: InputMaybe<Scalars['String']['input']>;
  workMobilePhone?: InputMaybe<Scalars['String']['input']>;
  workPhone?: InputMaybe<Scalars['String']['input']>;
  xingUrl?: InputMaybe<Scalars['String']['input']>;
  youtubeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ContactNote = {
  __typename?: 'ContactNote';
  _id: Scalars['ObjectId']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  privacyLevel?: Maybe<PrivacyLevel>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
  value: Scalars['String']['output'];
};

export type ContactNoteInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  contactId?: InputMaybe<Scalars['String']['input']>;
  privacyLevel?: InputMaybe<PrivacyLevelInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type ContactPerson = {
  __typename?: 'ContactPerson';
  _id: Scalars['ObjectId']['output'];
  accountId?: Maybe<Scalars['ObjectId']['output']>;
  contactId: Scalars['ObjectId']['output'];
  dealId?: Maybe<Scalars['ObjectId']['output']>;
  jobspecId?: Maybe<Scalars['ObjectId']['output']>;
};

export type ContactPersonInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  accountId?: InputMaybe<Scalars['ObjectId']['input']>;
  contactId: Scalars['ObjectId']['input'];
  dealId?: InputMaybe<Scalars['ObjectId']['input']>;
  jobspecId?: InputMaybe<Scalars['ObjectId']['input']>;
};

export type ContactSpecialInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  contactId?: InputMaybe<Scalars['ObjectId']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ContactSpecification = {
  __typename?: 'ContactSpecification';
  _id: Scalars['ObjectId']['output'];
  bestTimeToCall?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  fullProfileDisclosed?: Maybe<Scalars['Boolean']['output']>;
  /** Personal Data can be kept in DB for the reasonable time needed to perform the service (GDPR Art.e) */
  gdprExpiryDate?: Maybe<Scalars['String']['output']>;
  origin?: Maybe<Origin>;
  preferredContactTypes?: Maybe<Array<CommunicationChannel>>;
  preferredSocialNetworks?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type ContactSpecificationInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  bestTimeToCall?: InputMaybe<Scalars['String']['input']>;
  fullProfileDisclosed?: InputMaybe<Scalars['Boolean']['input']>;
  gdprExpiryDate?: InputMaybe<Scalars['String']['input']>;
  origin?: InputMaybe<OriginInput>;
  preferredContactTypes?: InputMaybe<CommunicationChannelInput>;
  preferredSocialNetworks?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ContactSubtype = {
  __typename?: 'ContactSubtype';
  _id: Scalars['ObjectId']['output'];
  value: Scalars['String']['output'];
};

export type ContactTag = {
  __typename?: 'ContactTag';
  _id: Scalars['ObjectId']['output'];
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  iconName?: Maybe<Scalars['String']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  value: Scalars['String']['output'];
};

export type ContactTagInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  iconName?: InputMaybe<Scalars['String']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type ContactsAvailabilityFilter = {
  __typename?: 'ContactsAvailabilityFilter';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  calendlyUrl?: Maybe<AvailabilityRow>;
  email?: Maybe<AvailabilityRow>;
  facebookUrl?: Maybe<AvailabilityRow>;
  githubUrl?: Maybe<AvailabilityRow>;
  instagramUrl?: Maybe<AvailabilityRow>;
  linkedinSalesUrl?: Maybe<AvailabilityRow>;
  linkedinTalentId?: Maybe<AvailabilityRow>;
  linkedinUrl?: Maybe<AvailabilityRow>;
  mediumUrl?: Maybe<AvailabilityRow>;
  mobilePhone?: Maybe<AvailabilityRow>;
  pageUrls?: Maybe<AvailabilityRow>;
  phone?: Maybe<AvailabilityRow>;
  quoraUrl?: Maybe<AvailabilityRow>;
  tiktokUrl?: Maybe<AvailabilityRow>;
  twitterUrl?: Maybe<AvailabilityRow>;
  wechatUrl?: Maybe<AvailabilityRow>;
  xingUrl?: Maybe<AvailabilityRow>;
  youtubeUrl?: Maybe<AvailabilityRow>;
};

export type ContactsAvailabilityFilterInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  calendlyUrl?: InputMaybe<AvailabilityRowInput>;
  email?: InputMaybe<AvailabilityRowInput>;
  facebookUrl?: InputMaybe<AvailabilityRowInput>;
  githubUrl?: InputMaybe<AvailabilityRowInput>;
  instagramUrl?: InputMaybe<AvailabilityRowInput>;
  linkedinSalesUrl?: InputMaybe<AvailabilityRowInput>;
  linkedinTalentId?: InputMaybe<AvailabilityRowInput>;
  linkedinUrl?: InputMaybe<AvailabilityRowInput>;
  mediumUrl?: InputMaybe<AvailabilityRowInput>;
  mobilePhone?: InputMaybe<AvailabilityRowInput>;
  pageUrls?: InputMaybe<AvailabilityRowInput>;
  phone?: InputMaybe<AvailabilityRowInput>;
  quoraUrl?: InputMaybe<AvailabilityRowInput>;
  tiktokUrl?: InputMaybe<AvailabilityRowInput>;
  twitterUrl?: InputMaybe<AvailabilityRowInput>;
  wechatUrl?: InputMaybe<AvailabilityRowInput>;
  xingUrl?: InputMaybe<AvailabilityRowInput>;
  youtubeUrl?: InputMaybe<AvailabilityRowInput>;
};

export type ContactsCareerFilter = {
  __typename?: 'ContactsCareerFilter';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  careerLevels?: Maybe<Array<StrCurrentOrPastAdvancedFilter>>;
  careerPaths?: Maybe<Array<StrCurrentOrPastAdvancedFilter>>;
  employmentTypes?: Maybe<Array<StrCurrentOrPastAdvancedFilter>>;
  industries?: Maybe<Array<StrCurrentOrPastAdvancedFilter>>;
  jobDescriptionKeywords?: Maybe<Array<StrCurrentOrPastAdvancedFilter>>;
  managementLevels?: Maybe<Array<StrCurrentOrPastAdvancedFilter>>;
  organizations?: Maybe<Array<StrCurrentOrPastAdvancedFilter>>;
  roleTitles?: Maybe<Array<StrCurrentOrPastAdvancedFilter>>;
};

export type ContactsCareerFilterInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  careerLevels?: InputMaybe<Array<StrCurrentOrPastAdvancedFilterInput>>;
  careerPaths?: InputMaybe<Array<StrCurrentOrPastAdvancedFilterInput>>;
  employmentTypes?: InputMaybe<Array<StrCurrentOrPastAdvancedFilterInput>>;
  industries?: InputMaybe<Array<StrCurrentOrPastAdvancedFilterInput>>;
  jobDescriptionKeywords?: InputMaybe<Array<StrCurrentOrPastAdvancedFilterInput>>;
  managementLevels?: InputMaybe<Array<StrCurrentOrPastAdvancedFilterInput>>;
  organizations?: InputMaybe<Array<StrCurrentOrPastAdvancedFilterInput>>;
  roleTitles?: InputMaybe<Array<StrCurrentOrPastAdvancedFilterInput>>;
};

export type ContactsDateRangeFilter = {
  __typename?: 'ContactsDateRangeFilter';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  boost?: Maybe<Scalars['Float']['output']>;
  fromDate?: Maybe<Scalars['DateTimeISO']['output']>;
  toDate?: Maybe<Scalars['DateTimeISO']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContactsDateRangeFilterInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  boost?: InputMaybe<Scalars['Float']['input']>;
  fromDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  toDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ContactsEducationFilter = {
  __typename?: 'ContactsEducationFilter';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  accomplishments?: Maybe<Array<StrAdvancedFilter>>;
  fieldOfStudies?: Maybe<Array<StrAdvancedFilter>>;
  schoolNames?: Maybe<Array<StrAdvancedFilter>>;
};

export type ContactsEducationFilterInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  accomplishments?: InputMaybe<Array<StrAdvancedFilterInput>>;
  fieldOfStudies?: InputMaybe<Array<StrAdvancedFilterInput>>;
  schoolNames?: InputMaybe<Array<StrAdvancedFilterInput>>;
};

export type ContactsFilter = {
  __typename?: 'ContactsFilter';
  _id: Scalars['ObjectId']['output'];
  _ids?: Maybe<Array<Scalars['ObjectId']['output']>>;
  companyEmployeeCountRanges?: Maybe<Array<StrCurrentOrPastAdvancedFilter>>;
  contactsAvailability?: Maybe<ContactsAvailabilityFilter>;
  contactsCareer?: Maybe<ContactsCareerFilter>;
  contactsEducation?: Maybe<ContactsEducationFilter>;
  contactsLastEvent?: Maybe<ContactsDateRangeFilter>;
  contactsLastInteraction?: Maybe<ContactsDateRangeFilter>;
  contactsLastUnansweredReply?: Maybe<ContactsDateRangeFilter>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  dripCampaignFilter?: Maybe<DripCampaignFilter>;
  dripCampaignsFilter?: Maybe<Array<IdAdvancedFilter>>;
  filterName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<StrAdvancedFilter>;
  hasCv?: Maybe<Scalars['Boolean']['output']>;
  hasInteraction?: Maybe<Scalars['Boolean']['output']>;
  hasLinkedinId?: Maybe<Scalars['Boolean']['output']>;
  hasUnansweredReply?: Maybe<Scalars['Boolean']['output']>;
  insertionDate?: Maybe<InsertionDateFilter>;
  isMiniProfile?: Maybe<Scalars['Boolean']['output']>;
  jobseekerStatuses?: Maybe<Array<StrAdvancedFilter>>;
  jobspecFilter?: Maybe<ContactsJobspecFilter>;
  languageNames?: Maybe<Array<StrAdvancedFilter>>;
  linkedinTagsFilter?: Maybe<LinkedinTagsFilter>;
  locations?: Maybe<Array<MainLocationFilter>>;
  minShouldMatch?: Maybe<MinShouldMatch>;
  ownerId?: Maybe<Scalars['ObjectId']['output']>;
  searchName?: Maybe<Scalars['String']['output']>;
  searchSurname?: Maybe<Scalars['String']['output']>;
  searchValue?: Maybe<Scalars['String']['output']>;
  showNoCurrentCompany?: Maybe<Scalars['Boolean']['output']>;
  showUnsubscribed?: Maybe<Scalars['Boolean']['output']>;
  skillNames?: Maybe<Array<StrAdvancedFilter>>;
  sortBy?: Maybe<ContactsSortBy>;
  summary?: Maybe<Array<StrAdvancedFilter>>;
  tags?: Maybe<Array<IdAdvancedFilter>>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
  yearsInCurrentRole?: Maybe<Array<ContactsTimeRangeFilter>>;
  yearsOfExperience?: Maybe<Array<ContactsTimeRangeFilter>>;
};

export type ContactsFilterInput = {
  _ids?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  companyEmployeeCountRanges?: InputMaybe<Array<StrCurrentOrPastAdvancedFilterInput>>;
  contactsAvailability?: InputMaybe<ContactsAvailabilityFilterInput>;
  contactsCareer?: InputMaybe<ContactsCareerFilterInput>;
  contactsEducation?: InputMaybe<ContactsEducationFilterInput>;
  contactsLastEvent?: InputMaybe<ContactsDateRangeFilterInput>;
  contactsLastInteraction?: InputMaybe<ContactsDateRangeFilterInput>;
  contactsLastUnansweredReply?: InputMaybe<ContactsDateRangeFilterInput>;
  customField?: InputMaybe<CustomFieldFilterInput>;
  dripCampaignFilter?: InputMaybe<DripCampaignFilterInput>;
  dripCampaignsFilter?: InputMaybe<Array<IdAdvancedFilterInput>>;
  gender?: InputMaybe<StrAdvancedFilterInput>;
  hasCv?: InputMaybe<Scalars['Boolean']['input']>;
  hasInteraction?: InputMaybe<Scalars['Boolean']['input']>;
  hasLinkedinId?: InputMaybe<Scalars['Boolean']['input']>;
  hasUnansweredReply?: InputMaybe<Scalars['Boolean']['input']>;
  insertionDate?: InputMaybe<InsertionDateFilterInput>;
  isMiniProfile?: InputMaybe<Scalars['Boolean']['input']>;
  jobseekerStatuses?: InputMaybe<Array<StrAdvancedFilterInput>>;
  jobspecFilter?: InputMaybe<ContactsJobspecFilterInput>;
  languageNames?: InputMaybe<Array<StrAdvancedFilterInput>>;
  linkedinTagsFilter?: InputMaybe<LinkedinTagsFilterInput>;
  locations?: InputMaybe<Array<MainLocationFilterInput>>;
  minShouldMatch?: InputMaybe<MinShouldMatchInput>;
  ownerId?: InputMaybe<Scalars['ObjectId']['input']>;
  recentSearchId?: InputMaybe<Scalars['ObjectId']['input']>;
  savedSearchId?: InputMaybe<Scalars['ObjectId']['input']>;
  searchName?: InputMaybe<Scalars['String']['input']>;
  searchSurname?: InputMaybe<Scalars['String']['input']>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  showNoCurrentCompany?: InputMaybe<Scalars['Boolean']['input']>;
  showUnsubscribed?: InputMaybe<Scalars['Boolean']['input']>;
  skillNames?: InputMaybe<Array<StrAdvancedFilterInput>>;
  sortBy?: InputMaybe<ContactsSortByInput>;
  summary?: InputMaybe<Array<StrAdvancedFilterInput>>;
  tags?: InputMaybe<Array<IdAdvancedFilterInput>>;
  yearsInCurrentRole?: InputMaybe<Array<ContactsTimeRangeFilterInput>>;
  yearsOfExperience?: InputMaybe<Array<ContactsTimeRangeFilterInput>>;
};

export type ContactsFilterSaveInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  _ids?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  companyEmployeeCountRanges?: InputMaybe<Array<StrCurrentOrPastAdvancedFilterInput>>;
  contactsAvailability?: InputMaybe<ContactsAvailabilityFilterInput>;
  contactsCareer?: InputMaybe<ContactsCareerFilterInput>;
  contactsEducation?: InputMaybe<ContactsEducationFilterInput>;
  contactsLastEvent?: InputMaybe<ContactsDateRangeFilterInput>;
  contactsLastInteraction?: InputMaybe<ContactsDateRangeFilterInput>;
  contactsLastUnansweredReply?: InputMaybe<ContactsDateRangeFilterInput>;
  customField?: InputMaybe<CustomFieldFilterInput>;
  dripCampaignFilter?: InputMaybe<DripCampaignFilterInput>;
  dripCampaignsFilter?: InputMaybe<Array<IdAdvancedFilterInput>>;
  filterName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<StrAdvancedFilterInput>;
  hasCv?: InputMaybe<Scalars['Boolean']['input']>;
  hasInteraction?: InputMaybe<Scalars['Boolean']['input']>;
  hasLinkedinId?: InputMaybe<Scalars['Boolean']['input']>;
  hasUnansweredReply?: InputMaybe<Scalars['Boolean']['input']>;
  insertionDate?: InputMaybe<InsertionDateFilterInput>;
  isMiniProfile?: InputMaybe<Scalars['Boolean']['input']>;
  jobseekerStatuses?: InputMaybe<Array<StrAdvancedFilterInput>>;
  jobspecFilter?: InputMaybe<ContactsJobspecFilterInput>;
  languageNames?: InputMaybe<Array<StrAdvancedFilterInput>>;
  linkedinTagsFilter?: InputMaybe<LinkedinTagsFilterInput>;
  locations?: InputMaybe<Array<MainLocationFilterInput>>;
  minShouldMatch?: InputMaybe<MinShouldMatchInput>;
  ownerId?: InputMaybe<Scalars['ObjectId']['input']>;
  recentSearchId?: InputMaybe<Scalars['ObjectId']['input']>;
  savedSearchId?: InputMaybe<Scalars['ObjectId']['input']>;
  searchName?: InputMaybe<Scalars['String']['input']>;
  searchSurname?: InputMaybe<Scalars['String']['input']>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  showNoCurrentCompany?: InputMaybe<Scalars['Boolean']['input']>;
  showUnsubscribed?: InputMaybe<Scalars['Boolean']['input']>;
  skillNames?: InputMaybe<Array<StrAdvancedFilterInput>>;
  sortBy?: InputMaybe<ContactsSortByInput>;
  summary?: InputMaybe<Array<StrAdvancedFilterInput>>;
  tags?: InputMaybe<Array<IdAdvancedFilterInput>>;
  yearsInCurrentRole?: InputMaybe<Array<ContactsTimeRangeFilterInput>>;
  yearsOfExperience?: InputMaybe<Array<ContactsTimeRangeFilterInput>>;
};

export type ContactsJobspecFilter = {
  __typename?: 'ContactsJobspecFilter';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  activePipelineId?: Maybe<Scalars['ObjectId']['output']>;
  exclStages?: Maybe<Array<Scalars['String']['output']>>;
  minFittingIndexPercentage?: Maybe<Scalars['Int']['output']>;
  showCandidates: Scalars['String']['output'];
  showExitStages?: Maybe<Scalars['Boolean']['output']>;
  stages?: Maybe<Array<Scalars['String']['output']>>;
  subStages?: Maybe<Array<Scalars['String']['output']>>;
};

export type ContactsJobspecFilterInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  activePipelineId?: InputMaybe<Scalars['ObjectId']['input']>;
  exclStages?: InputMaybe<Array<Scalars['String']['input']>>;
  minFittingIndexPercentage?: InputMaybe<Scalars['Int']['input']>;
  showCandidates: Scalars['String']['input'];
  showExitStages?: InputMaybe<Scalars['Boolean']['input']>;
  stages?: InputMaybe<Array<Scalars['String']['input']>>;
  subStages?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ContactsSortBy = {
  __typename?: 'ContactsSortBy';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  fieldName: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
};

export type ContactsSortByInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  fieldName: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type ContactsTimeRangeFilter = {
  __typename?: 'ContactsTimeRangeFilter';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  boost?: Maybe<Scalars['Float']['output']>;
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContactsTimeRangeFilterInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  boost?: InputMaybe<Scalars['Float']['input']>;
  max?: InputMaybe<Scalars['Int']['input']>;
  min?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ConversationMessageGroupInput = {
  linkedinMessages: Array<LinkedinMessageInput>;
  participantLinkedinUrls: Array<Scalars['String']['input']>;
};

export type Coord = {
  __typename?: 'Coord';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  coordinates: Array<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
};

export type CoordInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  coordinates: Array<Scalars['Float']['input']>;
  type: Scalars['String']['input'];
};

export type CoordWithRadius = {
  __typename?: 'CoordWithRadius';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  coord: Coord;
  radius: Scalars['Int']['output'];
};

export type CoordWithRadiusInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  coord: CoordInput;
  radius: Scalars['Int']['input'];
};

export type Country = {
  __typename?: 'Country';
  ISO: Scalars['String']['output'];
  ISO3: Scalars['String']['output'];
  ISOnr: Scalars['Int']['output'];
  _id: Scalars['ObjectId']['output'];
  area: Scalars['Int']['output'];
  capital?: Maybe<Scalars['String']['output']>;
  continent: Scalars['String']['output'];
  country: Scalars['String']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  currencyCode?: Maybe<Scalars['String']['output']>;
  fips?: Maybe<Scalars['String']['output']>;
  fullCurrency?: Maybe<CurrencyTemplate>;
  languages?: Maybe<Array<Scalars['String']['output']>>;
  neighbours?: Maybe<Array<Scalars['String']['output']>>;
  phone?: Maybe<Scalars['Int']['output']>;
  population: Scalars['Int']['output'];
  postalCodeFormat?: Maybe<Scalars['String']['output']>;
  postalCodeRegex?: Maybe<Scalars['String']['output']>;
  tld?: Maybe<Scalars['String']['output']>;
};

export type Coupon = {
  __typename?: 'Coupon';
  _id: Scalars['ObjectId']['output'];
  affiliate?: Maybe<User>;
  expireDate: Scalars['DateTimeISO']['output'];
  isFirstPayment?: Maybe<Scalars['Boolean']['output']>;
  isYearly?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  overwriteYearlyDiscount?: Maybe<Scalars['Boolean']['output']>;
  percentage: Scalars['Int']['output'];
  planId?: Maybe<Scalars['ObjectId']['output']>;
  recurrentDurationMonths?: Maybe<Scalars['Int']['output']>;
  solutionId?: Maybe<Scalars['ObjectId']['output']>;
};

export type CsvColumnAssociation = {
  __typename?: 'CsvColumnAssociation';
  _id: Scalars['ObjectId']['output'];
  csvInputs: Array<CsvInput>;
  fieldId: Scalars['ObjectId']['output'];
};

export type CsvColumnAssociationGroup = {
  __typename?: 'CsvColumnAssociationGroup';
  _id: Scalars['ObjectId']['output'];
  csvAssociations: Array<CsvColumnAssociation>;
  csvHeaders: Scalars['String']['output'];
  inputObjectName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CsvColumnAssociationGroupInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  csvAssociations?: InputMaybe<Array<CsvColumnAssociationInput>>;
  csvHeaders?: InputMaybe<Scalars['String']['input']>;
  inputObjectName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CsvColumnAssociationInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  csvInputs?: InputMaybe<Array<CsvInputInput>>;
  fieldId?: InputMaybe<Scalars['ObjectId']['input']>;
};

export type CsvInput = {
  __typename?: 'CsvInput';
  _id: Scalars['ObjectId']['output'];
  additionalFieldValues?: Maybe<Array<Scalars['String']['output']>>;
  header?: Maybe<Scalars['String']['output']>;
  obj?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CsvInputInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  additionalFieldValues?: InputMaybe<Array<Scalars['String']['input']>>;
  header?: InputMaybe<Scalars['String']['input']>;
  obj?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Currency = {
  __typename?: 'Currency';
  _id: Scalars['ObjectId']['output'];
  code: Scalars['String']['output'];
  nameFullPlural?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type CurrencyInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  code: Scalars['String']['input'];
  nameFullPlural?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type CurrencyTemplate = {
  __typename?: 'CurrencyTemplate';
  _id: Scalars['ObjectId']['output'];
  code: Scalars['String']['output'];
  currencySymbolFull: Scalars['String']['output'];
  decimalDigits: Scalars['Int']['output'];
  importanceOrder?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  nameFullPlural: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type CustomField = {
  __typename?: 'CustomField';
  _id: Scalars['ObjectId']['output'];
  fieldName?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CustomFieldFilterInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  customFields?: InputMaybe<Array<StrAdvancedFilterInput>>;
  hasSome?: InputMaybe<Scalars['Boolean']['input']>;
  noField?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomFieldInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  contactId?: InputMaybe<Scalars['ObjectId']['input']>;
  fieldName?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type DateObj = {
  __typename?: 'DateObj';
  _id: Scalars['ObjectId']['output'];
  day?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type DateObjInput = {
  _id: Scalars['ObjectId']['input'];
  day?: InputMaybe<Scalars['Int']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type Department = {
  __typename?: 'Department';
  _id: Scalars['ObjectId']['output'];
  /** Company that added this record */
  organizationId?: Maybe<Scalars['ObjectId']['output']>;
  value: Scalars['String']['output'];
};

export type DripAssignOption = {
  __typename?: 'DripAssignOption';
  _id: Scalars['ObjectId']['output'];
  activePipelineStage?: Maybe<ActivePipelineStage>;
  categories?: Maybe<Array<Scalars['String']['output']>>;
  tagIds?: Maybe<Array<Scalars['ObjectId']['output']>>;
};

export type DripAssignOptionInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  activePipelineStage?: InputMaybe<ActivePipelineStageInput>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  tagIds?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
};

export type DripCampaign = {
  __typename?: 'DripCampaign';
  _id: Scalars['ObjectId']['output'];
  contactSubtype?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  dripStages?: Maybe<Array<DripStage>>;
  emailSender?: Maybe<EmailSender>;
  emailSenderId?: Maybe<Scalars['ObjectId']['output']>;
  fromLinkedinUrl?: Maybe<Scalars['String']['output']>;
  fromLinkedinUser?: Maybe<User>;
  goal?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  pendingEmailCheck?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  useAnyAsFallback?: Maybe<Scalars['Boolean']['output']>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
  workGroupId?: Maybe<Scalars['ObjectId']['output']>;
};

export type DripCampaignAndContact = {
  __typename?: 'DripCampaignAndContact';
  campaignName?: Maybe<Scalars['String']['output']>;
  campaignStage?: Maybe<CampaignStage>;
  dripStages?: Maybe<Array<DripStage>>;
  firstName?: Maybe<Scalars['String']['output']>;
  fullAvatarUrl?: Maybe<Scalars['String']['output']>;
  jobinJob?: Maybe<JobinJob>;
  lastName?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
};

export type DripCampaignFilter = {
  __typename?: 'DripCampaignFilter';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  dripCampaignId?: Maybe<Scalars['ObjectId']['output']>;
  isNull?: Maybe<Scalars['Boolean']['output']>;
  positionCode?: Maybe<Scalars['String']['output']>;
};

export type DripCampaignFilterInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  dripCampaignId?: InputMaybe<Scalars['ObjectId']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  positionCode?: InputMaybe<Scalars['String']['input']>;
};

export type DripCampaignInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  contactSubtype?: InputMaybe<Scalars['String']['input']>;
  dripStages?: InputMaybe<Array<DripStageInput>>;
  emailSenderId?: InputMaybe<Scalars['ObjectId']['input']>;
  fromLinkedinUrl?: InputMaybe<Scalars['String']['input']>;
  goal?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pendingEmailCheck?: InputMaybe<Scalars['Boolean']['input']>;
  useAnyAsFallback?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['ObjectId']['input']>;
  workGroupId?: InputMaybe<Scalars['ObjectId']['input']>;
};

export type DripConditionOption = {
  __typename?: 'DripConditionOption';
  _id: Scalars['ObjectId']['output'];
  hasEmail?: Maybe<Scalars['Boolean']['output']>;
  hasLinkedinSalesUrl?: Maybe<Scalars['Boolean']['output']>;
  hasLinkedinTalentId?: Maybe<Scalars['Boolean']['output']>;
  hasLinkedinUrl?: Maybe<Scalars['Boolean']['output']>;
  hasMobile?: Maybe<Scalars['Boolean']['output']>;
  hasPageUrl?: Maybe<Scalars['Boolean']['output']>;
  hasPhone?: Maybe<Scalars['Boolean']['output']>;
  is1stConnection?: Maybe<Scalars['Boolean']['output']>;
  is2ndConnection?: Maybe<Scalars['Boolean']['output']>;
  is3rdConnection?: Maybe<Scalars['Boolean']['output']>;
  isLinkedinPremium?: Maybe<Scalars['Boolean']['output']>;
  isOpenProfile?: Maybe<Scalars['Boolean']['output']>;
  isOpenToWork?: Maybe<Scalars['Boolean']['output']>;
  isPendingConnection?: Maybe<Scalars['Boolean']['output']>;
  mustHaveTagIds?: Maybe<Array<Scalars['ObjectId']['output']>>;
  mustNotHaveTagIds?: Maybe<Array<Scalars['ObjectId']['output']>>;
};

export type DripConditionOptionInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  hasEmail?: InputMaybe<Scalars['Boolean']['input']>;
  hasLinkedinSalesUrl?: InputMaybe<Scalars['Boolean']['input']>;
  hasLinkedinTalentId?: InputMaybe<Scalars['Boolean']['input']>;
  hasLinkedinUrl?: InputMaybe<Scalars['Boolean']['input']>;
  hasMobile?: InputMaybe<Scalars['Boolean']['input']>;
  hasPageUrl?: InputMaybe<Scalars['Boolean']['input']>;
  hasPhone?: InputMaybe<Scalars['Boolean']['input']>;
  is1stConnection?: InputMaybe<Scalars['Boolean']['input']>;
  is2ndConnection?: InputMaybe<Scalars['Boolean']['input']>;
  is3rdConnection?: InputMaybe<Scalars['Boolean']['input']>;
  isLinkedinPremium?: InputMaybe<Scalars['Boolean']['input']>;
  isOpenProfile?: InputMaybe<Scalars['Boolean']['input']>;
  isOpenToWork?: InputMaybe<Scalars['Boolean']['input']>;
  isPendingConnection?: InputMaybe<Scalars['Boolean']['input']>;
  mustHaveTagIds?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  mustNotHaveTagIds?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
};

export type DripEmailOption = {
  __typename?: 'DripEmailOption';
  _id: Scalars['ObjectId']['output'];
  attachments?: Maybe<Array<UploadedFile>>;
  jobspecId?: Maybe<Scalars['ObjectId']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type DripEmailOptionInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  attachments?: InputMaybe<Array<UploadedFileInput>>;
  jobspecId?: InputMaybe<Scalars['ObjectId']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type DripLinkedinConnectionOption = {
  __typename?: 'DripLinkedinConnectionOption';
  _id: Scalars['ObjectId']['output'];
  bypass?: Maybe<Scalars['Boolean']['output']>;
  jobspecId?: Maybe<Scalars['ObjectId']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type DripLinkedinConnectionOptionInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  bypass?: InputMaybe<Scalars['Boolean']['input']>;
  jobspecId?: InputMaybe<Scalars['ObjectId']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type DripLinkedinMessageOption = {
  __typename?: 'DripLinkedinMessageOption';
  _id: Scalars['ObjectId']['output'];
  attachment?: Maybe<UploadedFile>;
  jobspecId?: Maybe<Scalars['ObjectId']['output']>;
  method?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type DripLinkedinMessageOptionInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  attachment?: InputMaybe<UploadedFileInput>;
  jobspecId?: InputMaybe<Scalars['ObjectId']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type DripStage = {
  __typename?: 'DripStage';
  _id: Scalars['ObjectId']['output'];
  dripActionTypeId?: Maybe<Scalars['ObjectId']['output']>;
  name: Scalars['String']['output'];
  positionCode?: Maybe<Scalars['String']['output']>;
  selectedBranches?: Maybe<Array<Scalars['String']['output']>>;
};

export type DripStageInput = {
  _id: Scalars['ObjectId']['input'];
  dripActionTypeId?: InputMaybe<Scalars['ObjectId']['input']>;
  name: Scalars['String']['input'];
  positionCode?: InputMaybe<Scalars['String']['input']>;
  selectedBranches?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type DripStageOption = {
  __typename?: 'DripStageOption';
  _id: Scalars['ObjectId']['output'];
  continueOnPermanentFailure?: Maybe<Scalars['Boolean']['output']>;
  dripAssignOption?: Maybe<DripAssignOption>;
  dripAutoUpdateNoEmail?: Maybe<Scalars['Boolean']['output']>;
  dripCampaign?: Maybe<DripCampaign>;
  dripCampaignId?: Maybe<Scalars['ObjectId']['output']>;
  dripConditionOption?: Maybe<DripConditionOption>;
  dripEmailOption?: Maybe<DripEmailOption>;
  dripGoalReached?: Maybe<Scalars['Boolean']['output']>;
  dripLinkedinConnectionOption?: Maybe<DripLinkedinConnectionOption>;
  dripLinkedinMessageOption?: Maybe<DripLinkedinMessageOption>;
  dripStage?: Maybe<DripStage>;
  dripStageId?: Maybe<Scalars['ObjectId']['output']>;
  dripWaitMinutes?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
  workGroupId?: Maybe<Scalars['ObjectId']['output']>;
};

export type DripStageOptionInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  continueOnPermanentFailure?: InputMaybe<Scalars['Boolean']['input']>;
  dripAssignOption?: InputMaybe<DripAssignOptionInput>;
  dripAutoUpdateNoEmail?: InputMaybe<Scalars['Boolean']['input']>;
  dripCampaignId?: InputMaybe<Scalars['ObjectId']['input']>;
  dripConditionOption?: InputMaybe<DripConditionOptionInput>;
  dripEmailOption?: InputMaybe<DripEmailOptionInput>;
  dripGoalReached?: InputMaybe<Scalars['Boolean']['input']>;
  dripLinkedinConnectionOption?: InputMaybe<DripLinkedinConnectionOptionInput>;
  dripLinkedinMessageOption?: InputMaybe<DripLinkedinMessageOptionInput>;
  dripStageId?: InputMaybe<Scalars['ObjectId']['input']>;
  dripWaitMinutes?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['ObjectId']['input']>;
  workGroupId?: InputMaybe<Scalars['ObjectId']['input']>;
};

export type Duplicate = {
  __typename?: 'Duplicate';
  _id: Scalars['ObjectId']['output'];
  duplicateId: Scalars['ObjectId']['output'];
  mainId: Scalars['ObjectId']['output'];
  mergeErrors: Array<MergeError>;
};

export type DuplicateContainer = {
  __typename?: 'DuplicateContainer';
  _id: Scalars['ObjectId']['output'];
  duplicate: Duplicate;
  duplicateContact: Contact;
  mainContact: Contact;
};

export type EducExperience = {
  __typename?: 'EducExperience';
  _id: Scalars['ObjectId']['output'];
  course?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  degrees?: Maybe<Array<Scalars['String']['output']>>;
  description?: Maybe<Scalars['String']['output']>;
  educationalLevel?: Maybe<BaseTemplateIconName>;
  fieldOfStudy?: Maybe<Scalars['String']['output']>;
  gpa?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['String']['output']>;
  mainLocation?: Maybe<MainLocation>;
  majors?: Maybe<Array<Scalars['String']['output']>>;
  minors?: Maybe<Array<Scalars['String']['output']>>;
  organization?: Maybe<OrganizationLogoLinkedin>;
  period: Period;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type EducExperienceInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  course?: InputMaybe<Scalars['String']['input']>;
  degrees?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  educationalLevel?: InputMaybe<BaseTemplateIconNameInput>;
  fieldOfStudy?: InputMaybe<Scalars['String']['input']>;
  gpa?: InputMaybe<Scalars['Float']['input']>;
  grade?: InputMaybe<Scalars['String']['input']>;
  mainLocation?: InputMaybe<MainLocationInput>;
  majors?: InputMaybe<Array<Scalars['String']['input']>>;
  minors?: InputMaybe<Array<Scalars['String']['input']>>;
  organization?: InputMaybe<OrganizationLogoLinkedinInput>;
  period?: InputMaybe<PeriodInput>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type EducationalLevel = {
  __typename?: 'EducationalLevel';
  _id: Scalars['ObjectId']['output'];
  iconName?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type EducationalLevelInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  iconName?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type EmailSender = {
  __typename?: 'EmailSender';
  _id: Scalars['ObjectId']['output'];
  addUnsubscribeButton?: Maybe<Scalars['Boolean']['output']>;
  applyRandomDelay?: Maybe<Scalars['Boolean']['output']>;
  emailAddress: Scalars['String']['output'];
  imapDownloadFrom?: Maybe<Scalars['Int']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  latestMicrosoftEmailId?: Maybe<Scalars['String']['output']>;
  oauthSetting?: Maybe<OauthSetting>;
  perDayLimit?: Maybe<Scalars['Int']['output']>;
  perHourLimit?: Maybe<Scalars['Int']['output']>;
  perMinuteLimit?: Maybe<Scalars['Int']['output']>;
  signature?: Maybe<Scalars['String']['output']>;
  smtpSetting?: Maybe<SmtpSetting>;
};

export type EmailSenderInput = {
  _id: Scalars['ObjectId']['input'];
  addUnsubscribeButton?: InputMaybe<Scalars['Boolean']['input']>;
  applyRandomDelay?: InputMaybe<Scalars['Boolean']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  oauthSetting?: InputMaybe<OauthSettingInput>;
  perDayLimit?: InputMaybe<Scalars['Int']['input']>;
  perHourLimit?: InputMaybe<Scalars['Int']['input']>;
  perMinuteLimit?: InputMaybe<Scalars['Int']['input']>;
  signature?: InputMaybe<Scalars['String']['input']>;
  smtpSetting?: InputMaybe<SmtpSettingInput>;
};

export type EmailSendersByWorkGroup = {
  __typename?: 'EmailSendersByWorkGroup';
  _id: Scalars['ObjectId']['output'];
  emailSenders?: Maybe<Array<EmailSender>>;
  workGroup?: Maybe<WorkGroup>;
};

export type EmailTemplate = {
  __typename?: 'EmailTemplate';
  _id: Scalars['ObjectId']['output'];
  contactSubtype: Scalars['String']['output'];
  emailTemplateTypeId?: Maybe<Scalars['ObjectId']['output']>;
  label: Scalars['String']['output'];
  privacyLevel?: Maybe<PrivacyLevel>;
  subject?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  useAnyAsFallback?: Maybe<Scalars['Boolean']['output']>;
};

export type EmailTemplateInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  contactSubtype: Scalars['String']['input'];
  emailTemplateTypeId?: InputMaybe<Scalars['ObjectId']['input']>;
  label: Scalars['String']['input'];
  privacyLevel?: InputMaybe<PrivacyLevelInput>;
  subject?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  useAnyAsFallback?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmailTemplateType = {
  __typename?: 'EmailTemplateType';
  _id: Scalars['ObjectId']['output'];
  color?: Maybe<Scalars['String']['output']>;
  iconName?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type EmployeeCountRange = {
  __typename?: 'EmployeeCountRange';
  _id: Scalars['ObjectId']['output'];
  value: Scalars['String']['output'];
};

export type EvaluationStage = {
  __typename?: 'EvaluationStage';
  _id: Scalars['ObjectId']['output'];
  value: Scalars['String']['output'];
};

export type EventAttachment = {
  __typename?: 'EventAttachment';
  _id: Scalars['ObjectId']['output'];
  byteSize?: Maybe<Scalars['Int']['output']>;
  mediaType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
};

export type EventAttachmentInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  byteSize?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
};

export type EventType = {
  __typename?: 'EventType';
  _id: Scalars['ObjectId']['output'];
  bckColor?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  foreColor?: Maybe<Scalars['String']['output']>;
  iconName?: Maybe<Scalars['String']['output']>;
  isInteraction?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated replaced by isInteraction */
  isMessage?: Maybe<Scalars['Boolean']['output']>;
  value: Scalars['String']['output'];
};

export type EventTypeInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  bckColor?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  foreColor?: InputMaybe<Scalars['String']['input']>;
  iconName?: InputMaybe<Scalars['String']['input']>;
  isInteraction?: InputMaybe<Scalars['Boolean']['input']>;
  value: Scalars['String']['input'];
};

export type ExitStageTemplate = {
  __typename?: 'ExitStageTemplate';
  _id: Scalars['ObjectId']['output'];
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type ExitStageTemplateInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Field = {
  __typename?: 'Field';
  _id: Scalars['ObjectId']['output'];
  additionalFields?: Maybe<Array<AdditionalField>>;
  display: Scalars['String']['output'];
  fieldGroupId?: Maybe<Scalars['ObjectId']['output']>;
  inputObjectName: Scalars['String']['output'];
  isBoolean?: Maybe<Scalars['Boolean']['output']>;
  isNotSeparatedByComma?: Maybe<Scalars['Boolean']['output']>;
  isNumber?: Maybe<Scalars['Boolean']['output']>;
  isPlural?: Maybe<Scalars['Boolean']['output']>;
  parentFieldName?: Maybe<Scalars['String']['output']>;
  parentObjectName?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  referenceFields?: Maybe<Array<ReferenceField>>;
  templateCodeName?: Maybe<Scalars['String']['output']>;
  tooltipModalText?: Maybe<Array<Scalars['String']['output']>>;
};

export type FieldGroup = {
  __typename?: 'FieldGroup';
  _id: Scalars['ObjectId']['output'];
  fieldGroupTypeId: Scalars['ObjectId']['output'];
  value: Scalars['String']['output'];
};

export type FittingIndex = {
  __typename?: 'FittingIndex';
  _id: Scalars['ObjectId']['output'];
  fittingIndex?: Maybe<Scalars['Int']['output']>;
  normalizedFittingIndex?: Maybe<Scalars['Int']['output']>;
  pipelineId: Scalars['ObjectId']['output'];
};

export type FittingIndexInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  fittingIndex?: InputMaybe<Scalars['Int']['input']>;
  normalizedFittingIndex?: InputMaybe<Scalars['Int']['input']>;
  pipelineId: Scalars['ObjectId']['input'];
};

export type FollowUpMessageInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  connectionRequestWithMessage?: InputMaybe<Scalars['Boolean']['input']>;
  delay?: InputMaybe<Scalars['Int']['input']>;
  jobspecId?: InputMaybe<Scalars['ObjectId']['input']>;
  label: Scalars['String']['input'];
  text: Scalars['String']['input'];
};

export type FrequentlyAskedQuestion = {
  __typename?: 'FrequentlyAskedQuestion';
  _id: Scalars['ObjectId']['output'];
  answer: Scalars['String']['output'];
  question: Scalars['String']['output'];
  questionTags?: Maybe<Array<Scalars['String']['output']>>;
  questionType?: Maybe<Scalars['String']['output']>;
  sortNumber: Scalars['Int']['output'];
};

export type FrequentlyAskedQuestionType = {
  __typename?: 'FrequentlyAskedQuestionType';
  _id: Scalars['ObjectId']['output'];
  value: Scalars['String']['output'];
};

export type FullContactPerson = {
  __typename?: 'FullContactPerson';
  _id: Scalars['ObjectId']['output'];
  account?: Maybe<JobinAccount>;
  accountId?: Maybe<Scalars['ObjectId']['output']>;
  contact: Contact;
  contactId: Scalars['ObjectId']['output'];
  dealId?: Maybe<Scalars['ObjectId']['output']>;
  jobspec?: Maybe<Jobspec>;
  jobspecId?: Maybe<Scalars['ObjectId']['output']>;
};

export type FullPipelineStage = {
  __typename?: 'FullPipelineStage';
  _id: Scalars['ObjectId']['output'];
  stage?: Maybe<Stage>;
  subStage?: Maybe<SubStage>;
};

export type Funnel = {
  __typename?: 'Funnel';
  _id: Scalars['ObjectId']['output'];
  funnelBlocks: Array<FunnelBlock>;
  successfulExits: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  unsuccessfulExits: Scalars['Int']['output'];
};

export type FunnelBlock = {
  __typename?: 'FunnelBlock';
  _id: Scalars['ObjectId']['output'];
  stage: Stage;
  total: Scalars['Int']['output'];
};

export type GroupScore = {
  __typename?: 'GroupScore';
  _id: Scalars['ObjectId']['output'];
  change?: Maybe<Scalars['Int']['output']>;
  groupSize?: Maybe<Scalars['Int']['output']>;
  groupType?: Maybe<Scalars['String']['output']>;
  industry?: Maybe<Scalars['String']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
  score?: Maybe<Score>;
};

export type GroupScoreInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  change?: InputMaybe<Scalars['Int']['input']>;
  groupSize?: InputMaybe<Scalars['Int']['input']>;
  groupType?: InputMaybe<Scalars['String']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<ScoreInput>;
};

export type HelpdeskMessage = {
  __typename?: 'HelpdeskMessage';
  _id: Scalars['ObjectId']['output'];
  answeredToAutoMessageId?: Maybe<Scalars['ObjectId']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  threadId?: Maybe<Scalars['ObjectId']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
  workGroup?: Maybe<WorkGroup>;
  workGroupId?: Maybe<Scalars['ObjectId']['output']>;
};

export type HelpdeskMessageInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  answeredToAutoMessageId?: InputMaybe<Scalars['ObjectId']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  threadId?: InputMaybe<Scalars['ObjectId']['input']>;
};

export type IdAdvancedFilter = {
  __typename?: 'IdAdvancedFilter';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  boost?: Maybe<Scalars['Float']['output']>;
  guiValue?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ObjectId']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IdAdvancedFilterInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  boost?: InputMaybe<Scalars['Float']['input']>;
  guiValue?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ObjectId']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type IdealCandidateFilter = {
  __typename?: 'IdealCandidateFilter';
  _id: Scalars['ObjectId']['output'];
  _ids?: Maybe<Array<Scalars['ObjectId']['output']>>;
  assignedJobspecId: Scalars['ObjectId']['output'];
  companyEmployeeCountRanges?: Maybe<Array<StrCurrentOrPastAdvancedFilter>>;
  contactsAvailability?: Maybe<ContactsAvailabilityFilter>;
  contactsCareer?: Maybe<ContactsCareerFilter>;
  contactsEducation?: Maybe<ContactsEducationFilter>;
  contactsLastEvent?: Maybe<ContactsDateRangeFilter>;
  contactsLastInteraction?: Maybe<ContactsDateRangeFilter>;
  contactsLastUnansweredReply?: Maybe<ContactsDateRangeFilter>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  dripCampaignFilter?: Maybe<DripCampaignFilter>;
  dripCampaignsFilter?: Maybe<Array<IdAdvancedFilter>>;
  gender?: Maybe<StrAdvancedFilter>;
  hasCv?: Maybe<Scalars['Boolean']['output']>;
  hasInteraction?: Maybe<Scalars['Boolean']['output']>;
  hasLinkedinId?: Maybe<Scalars['Boolean']['output']>;
  hasUnansweredReply?: Maybe<Scalars['Boolean']['output']>;
  insertionDate?: Maybe<InsertionDateFilter>;
  isMiniProfile?: Maybe<Scalars['Boolean']['output']>;
  jobseekerStatuses?: Maybe<Array<StrAdvancedFilter>>;
  jobspecFilter?: Maybe<ContactsJobspecFilter>;
  languageNames?: Maybe<Array<StrAdvancedFilter>>;
  linkedinTagsFilter?: Maybe<LinkedinTagsFilter>;
  locations?: Maybe<Array<MainLocationFilter>>;
  minShouldMatch?: Maybe<MinShouldMatch>;
  ownerId?: Maybe<Scalars['ObjectId']['output']>;
  searchName?: Maybe<Scalars['String']['output']>;
  searchSurname?: Maybe<Scalars['String']['output']>;
  searchValue?: Maybe<Scalars['String']['output']>;
  showNoCurrentCompany?: Maybe<Scalars['Boolean']['output']>;
  showUnsubscribed?: Maybe<Scalars['Boolean']['output']>;
  skillNames?: Maybe<Array<StrAdvancedFilter>>;
  sortBy?: Maybe<ContactsSortBy>;
  summary?: Maybe<Array<StrAdvancedFilter>>;
  tags?: Maybe<Array<IdAdvancedFilter>>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
  yearsInCurrentRole?: Maybe<Array<ContactsTimeRangeFilter>>;
  yearsOfExperience?: Maybe<Array<ContactsTimeRangeFilter>>;
};

export type IdealCandidateFilterInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  _ids?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  assignedJobspecId: Scalars['ObjectId']['input'];
  companyEmployeeCountRanges?: InputMaybe<Array<StrCurrentOrPastAdvancedFilterInput>>;
  contactsAvailability?: InputMaybe<ContactsAvailabilityFilterInput>;
  contactsCareer?: InputMaybe<ContactsCareerFilterInput>;
  contactsEducation?: InputMaybe<ContactsEducationFilterInput>;
  contactsLastEvent?: InputMaybe<ContactsDateRangeFilterInput>;
  contactsLastInteraction?: InputMaybe<ContactsDateRangeFilterInput>;
  contactsLastUnansweredReply?: InputMaybe<ContactsDateRangeFilterInput>;
  customField?: InputMaybe<CustomFieldFilterInput>;
  dripCampaignFilter?: InputMaybe<DripCampaignFilterInput>;
  dripCampaignsFilter?: InputMaybe<Array<IdAdvancedFilterInput>>;
  filterName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<StrAdvancedFilterInput>;
  hasCv?: InputMaybe<Scalars['Boolean']['input']>;
  hasInteraction?: InputMaybe<Scalars['Boolean']['input']>;
  hasLinkedinId?: InputMaybe<Scalars['Boolean']['input']>;
  hasUnansweredReply?: InputMaybe<Scalars['Boolean']['input']>;
  insertionDate?: InputMaybe<InsertionDateFilterInput>;
  isMiniProfile?: InputMaybe<Scalars['Boolean']['input']>;
  jobseekerStatuses?: InputMaybe<Array<StrAdvancedFilterInput>>;
  jobspecFilter?: InputMaybe<ContactsJobspecFilterInput>;
  languageNames?: InputMaybe<Array<StrAdvancedFilterInput>>;
  linkedinTagsFilter?: InputMaybe<LinkedinTagsFilterInput>;
  locations?: InputMaybe<Array<MainLocationFilterInput>>;
  minShouldMatch?: InputMaybe<MinShouldMatchInput>;
  ownerId?: InputMaybe<Scalars['ObjectId']['input']>;
  recentSearchId?: InputMaybe<Scalars['ObjectId']['input']>;
  savedSearchId?: InputMaybe<Scalars['ObjectId']['input']>;
  searchName?: InputMaybe<Scalars['String']['input']>;
  searchSurname?: InputMaybe<Scalars['String']['input']>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  showNoCurrentCompany?: InputMaybe<Scalars['Boolean']['input']>;
  showUnsubscribed?: InputMaybe<Scalars['Boolean']['input']>;
  skillNames?: InputMaybe<Array<StrAdvancedFilterInput>>;
  sortBy?: InputMaybe<ContactsSortByInput>;
  summary?: InputMaybe<Array<StrAdvancedFilterInput>>;
  tags?: InputMaybe<Array<IdAdvancedFilterInput>>;
  yearsInCurrentRole?: InputMaybe<Array<ContactsTimeRangeFilterInput>>;
  yearsOfExperience?: InputMaybe<Array<ContactsTimeRangeFilterInput>>;
};

export type Indicator = {
  __typename?: 'Indicator';
  _id: Scalars['ObjectId']['output'];
  iconName: Scalars['String']['output'];
  style: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Industry = {
  __typename?: 'Industry';
  _id: Scalars['ObjectId']['output'];
  value: Scalars['String']['output'];
};

export type IndustrySector = {
  __typename?: 'IndustrySector';
  _id: Scalars['ObjectId']['output'];
  industries?: Maybe<Array<Scalars['String']['output']>>;
  value: Scalars['String']['output'];
};

export type InsertionDateFilter = {
  __typename?: 'InsertionDateFilter';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  fromDate?: Maybe<Scalars['DateTimeISO']['output']>;
  isUpdatedAt?: Maybe<Scalars['Boolean']['output']>;
  toDate?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type InsertionDateFilterInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  fromDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  isUpdatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  toDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type JobinAccount = {
  __typename?: 'JobinAccount';
  _id: Scalars['ObjectId']['output'];
  calendlyUrl?: Maybe<Scalars['String']['output']>;
  communicationChannels?: Maybe<Array<CommunicationChannel>>;
  companyCrunchbaseUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  departments?: Maybe<Array<Scalars['String']['output']>>;
  description?: Maybe<Scalars['String']['output']>;
  emailDomainsAssociated?: Maybe<Scalars['Boolean']['output']>;
  emails?: Maybe<Array<Scalars['String']['output']>>;
  employeeCount?: Maybe<Scalars['Float']['output']>;
  employeeCountRange?: Maybe<Scalars['String']['output']>;
  facebookUrl?: Maybe<Scalars['String']['output']>;
  foundedOn?: Maybe<Scalars['DateTimeISO']['output']>;
  githubUrl?: Maybe<Scalars['String']['output']>;
  headquarter?: Maybe<MainLocation>;
  incorporationType?: Maybe<Scalars['String']['output']>;
  industries?: Maybe<Array<Scalars['String']['output']>>;
  industrySectors?: Maybe<Array<Scalars['String']['output']>>;
  instagramUrl?: Maybe<Scalars['String']['output']>;
  isHiring?: Maybe<Scalars['Boolean']['output']>;
  isSchool?: Maybe<Scalars['Boolean']['output']>;
  isStaffingCompany?: Maybe<Scalars['Boolean']['output']>;
  jobSearchLinkedinPageUrl?: Maybe<Scalars['String']['output']>;
  linkedinDetail?: Maybe<LinkedinDetail>;
  linkedinSalesUrl?: Maybe<Scalars['String']['output']>;
  linkedinUrl?: Maybe<Scalars['String']['output']>;
  locations?: Maybe<Array<MainLocation>>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  mobilePhones?: Maybe<Array<Scalars['String']['output']>>;
  name?: Maybe<Scalars['String']['output']>;
  operatingStatus?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['ObjectId']['output']>;
  organizationTypes?: Maybe<Array<Scalars['String']['output']>>;
  pageUrls?: Maybe<Array<Scalars['String']['output']>>;
  phones?: Maybe<Array<Scalars['String']['output']>>;
  revenueAmount?: Maybe<Scalars['Float']['output']>;
  revenueCurrencyCode?: Maybe<Scalars['String']['output']>;
  tagline?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<BaseTemplateColorIconName>>;
  tiktokUrl?: Maybe<Scalars['String']['output']>;
  twitterUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  xingUrl?: Maybe<Scalars['String']['output']>;
  youtubeUrl?: Maybe<Scalars['String']['output']>;
};

export type JobinAccountInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  calendlyUrl?: InputMaybe<Scalars['String']['input']>;
  communicationChannels?: InputMaybe<Array<CommunicationChannelInput>>;
  companyCrunchbaseUrl?: InputMaybe<Scalars['String']['input']>;
  departments?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  emailDomainsAssociated?: InputMaybe<Scalars['Boolean']['input']>;
  emails?: InputMaybe<Array<Scalars['String']['input']>>;
  employeeCount?: InputMaybe<Scalars['Float']['input']>;
  employeeCountRange?: InputMaybe<Scalars['String']['input']>;
  facebookUrl?: InputMaybe<Scalars['String']['input']>;
  foundedOn?: InputMaybe<Scalars['DateTimeISO']['input']>;
  githubUrl?: InputMaybe<Scalars['String']['input']>;
  headquarter?: InputMaybe<MainLocationInput>;
  incorporationType?: InputMaybe<Scalars['String']['input']>;
  industries?: InputMaybe<Array<Scalars['String']['input']>>;
  industrySectors?: InputMaybe<Array<Scalars['String']['input']>>;
  instagramUrl?: InputMaybe<Scalars['String']['input']>;
  isHiring?: InputMaybe<Scalars['Boolean']['input']>;
  isSchool?: InputMaybe<Scalars['Boolean']['input']>;
  isStaffingCompany?: InputMaybe<Scalars['Boolean']['input']>;
  jobSearchLinkedinPageUrl?: InputMaybe<Scalars['String']['input']>;
  linkedinDetail?: InputMaybe<LinkedinDetailInput>;
  linkedinSalesUrl?: InputMaybe<Scalars['String']['input']>;
  linkedinUrl?: InputMaybe<Scalars['String']['input']>;
  locations?: InputMaybe<Array<MainLocationInput>>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  mobilePhones?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  operatingStatus?: InputMaybe<Scalars['String']['input']>;
  organizationDetail?: InputMaybe<Scalars['ObjectId']['input']>;
  organizationId?: InputMaybe<Scalars['ObjectId']['input']>;
  organizationTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  pageUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  phones?: InputMaybe<Array<Scalars['String']['input']>>;
  revenueAmount?: InputMaybe<Scalars['Float']['input']>;
  revenueCurrencyCode?: InputMaybe<Scalars['String']['input']>;
  tagline?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<BaseTemplateColorIconNameInput>>;
  tiktokUrl?: InputMaybe<Scalars['String']['input']>;
  twitterUrl?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  xingUrl?: InputMaybe<Scalars['String']['input']>;
  youtubeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type JobinAccountNote = {
  __typename?: 'JobinAccountNote';
  _id: Scalars['ObjectId']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  privacyLevel?: Maybe<PrivacyLevel>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
  value: Scalars['String']['output'];
};

export type JobinAccountNoteInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  jobinAccountId?: InputMaybe<Scalars['String']['input']>;
  privacyLevel?: InputMaybe<PrivacyLevelInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type JobinCompletedJob = {
  __typename?: 'JobinCompletedJob';
  _id: Scalars['ObjectId']['output'];
  campaignStage?: Maybe<CampaignStage>;
  codename: Scalars['String']['output'];
  contactStatuses: Array<JobinJobContact>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  hasNothingToProcess?: Maybe<Scalars['Boolean']['output']>;
  iconName: Scalars['String']['output'];
  isIdempotent?: Maybe<Scalars['Boolean']['output']>;
  linkedinUser?: Maybe<User>;
  loaded: Scalars['Float']['output'];
  lockedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  nextRunAt?: Maybe<Scalars['DateTimeISO']['output']>;
  noResume?: Maybe<Scalars['Boolean']['output']>;
  operationType?: Maybe<Scalars['String']['output']>;
  previousNextRunAt?: Maybe<Scalars['DateTimeISO']['output']>;
  priority: Scalars['Float']['output'];
  queue: Scalars['String']['output'];
  stop?: Maybe<Scalars['Boolean']['output']>;
  title: Scalars['String']['output'];
  totalCount: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
  userLinkedinUrl?: Maybe<Scalars['String']['output']>;
  waitTimeMs?: Maybe<Scalars['Float']['output']>;
};


export type JobinCompletedJobContactStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type JobinDailyQuotas = {
  __typename?: 'JobinDailyQuotas';
  emailSenderEmail?: Maybe<Scalars['String']['output']>;
  emailSenderId?: Maybe<Scalars['ObjectId']['output']>;
  emails: JobinQuotaAndLimit;
  fullProfileImport: JobinQuotaAndLimit;
  fullProfileImportWithEmail: JobinQuotaAndLimit;
  invitations: JobinQuotaAndLimit;
  messages: JobinQuotaAndLimit;
};

export type JobinEvent = {
  __typename?: 'JobinEvent';
  _id: Scalars['ObjectId']['output'];
  accountId?: Maybe<Scalars['ObjectId']['output']>;
  arguments?: Maybe<Array<Scalars['String']['output']>>;
  attachments?: Maybe<Array<EventAttachment>>;
  content?: Maybe<Scalars['String']['output']>;
  dealId?: Maybe<Scalars['ObjectId']['output']>;
  emailSenderId?: Maybe<Scalars['ObjectId']['output']>;
  eventCreatedAt: Scalars['DateTimeISO']['output'];
  fromContactId?: Maybe<Scalars['ObjectId']['output']>;
  indicators?: Maybe<Array<BaseTemplateStyleIconName>>;
  jobspecId?: Maybe<Scalars['ObjectId']['output']>;
  participantAvatars?: Maybe<Array<Avatar>>;
  participantsNr?: Maybe<Scalars['Int']['output']>;
  sender?: Maybe<Avatar>;
  subject?: Maybe<Scalars['String']['output']>;
  temporary?: Maybe<Scalars['Boolean']['output']>;
  toContactIds?: Maybe<Array<Scalars['ObjectId']['output']>>;
  toUserIds?: Maybe<Array<Scalars['ObjectId']['output']>>;
  type: EventType;
  userId?: Maybe<Scalars['ObjectId']['output']>;
  userLinkedinUrl?: Maybe<Scalars['String']['output']>;
};

export type JobinEventInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  accountId?: InputMaybe<Scalars['ObjectId']['input']>;
  arguments?: InputMaybe<Array<Scalars['String']['input']>>;
  attachments?: InputMaybe<Array<EventAttachmentInput>>;
  content?: InputMaybe<Scalars['String']['input']>;
  dealId?: InputMaybe<Scalars['ObjectId']['input']>;
  emailSenderId?: InputMaybe<Scalars['ObjectId']['input']>;
  eventCreatedAt: Scalars['DateTimeISO']['input'];
  fromContactId?: InputMaybe<Scalars['ObjectId']['input']>;
  indicators?: InputMaybe<Array<BaseTemplateStyleIconNameInput>>;
  jobspecId?: InputMaybe<Scalars['ObjectId']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  temporary?: InputMaybe<Scalars['Boolean']['input']>;
  toContactIds?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  toUserIds?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  type?: InputMaybe<EventTypeInput>;
  userLinkedinUrl?: InputMaybe<Scalars['String']['input']>;
};

export type JobinFeature = {
  __typename?: 'JobinFeature';
  _id: Scalars['ObjectId']['output'];
  codename: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  featurePlans: Array<JobinFeaturePlan>;
  hasSubFeatures?: Maybe<Scalars['Boolean']['output']>;
  jobinFeatureGroupId: Scalars['ObjectId']['output'];
  name: Scalars['String']['output'];
  sortOrder?: Maybe<Scalars['Int']['output']>;
};

export type JobinFeatureGroup = {
  __typename?: 'JobinFeatureGroup';
  _id: Scalars['ObjectId']['output'];
  name: Scalars['String']['output'];
  solutionId: Scalars['ObjectId']['output'];
  sortOrder?: Maybe<Scalars['Int']['output']>;
};

export type JobinFeaturePlan = {
  __typename?: 'JobinFeaturePlan';
  _id: Scalars['ObjectId']['output'];
  description?: Maybe<Scalars['String']['output']>;
  isDaily?: Maybe<Scalars['Boolean']['output']>;
  isFixed?: Maybe<Scalars['Boolean']['output']>;
  isInfinite?: Maybe<Scalars['Boolean']['output']>;
  isPerWorkGroup?: Maybe<Scalars['Boolean']['output']>;
  planId: Scalars['ObjectId']['output'];
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type JobinInvoice = {
  __typename?: 'JobinInvoice';
  _id: Scalars['ObjectId']['output'];
  checkoutAmount: CheckoutAmount;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  periodFrom: Scalars['DateTimeISO']['output'];
  periodTo: Scalars['DateTimeISO']['output'];
};

export type JobinJob = {
  __typename?: 'JobinJob';
  _id: Scalars['ObjectId']['output'];
  campaignStage?: Maybe<CampaignStage>;
  codename: Scalars['String']['output'];
  contactStatuses?: Maybe<Array<JobinJobContact>>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  hasNothingToProcess?: Maybe<Scalars['Boolean']['output']>;
  iconName: Scalars['String']['output'];
  isIdempotent?: Maybe<Scalars['Boolean']['output']>;
  linkedinUser?: Maybe<User>;
  loaded: Scalars['Float']['output'];
  lockedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  nextRunAt?: Maybe<Scalars['DateTimeISO']['output']>;
  noResume?: Maybe<Scalars['Boolean']['output']>;
  operationType?: Maybe<Scalars['String']['output']>;
  previousNextRunAt?: Maybe<Scalars['DateTimeISO']['output']>;
  priority: Scalars['Float']['output'];
  queue: Scalars['String']['output'];
  stop?: Maybe<Scalars['Boolean']['output']>;
  title: Scalars['String']['output'];
  totalCount: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
  userLinkedinUrl?: Maybe<Scalars['String']['output']>;
  waitTimeMs?: Maybe<Scalars['Float']['output']>;
};


export type JobinJobContactStatusesArgs = {
  isLive?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type JobinJobContact = {
  __typename?: 'JobinJobContact';
  _id: Scalars['ObjectId']['output'];
  account?: Maybe<JobinAccount>;
  accountId?: Maybe<Scalars['ObjectId']['output']>;
  altText?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<Contact>;
  contactId?: Maybe<Scalars['ObjectId']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  errorMsg?: Maybe<Scalars['String']['output']>;
  linkedinSalesUrl?: Maybe<Scalars['String']['output']>;
  linkedinTalentId?: Maybe<Scalars['String']['output']>;
  linkedinUrl?: Maybe<Scalars['String']['output']>;
  profileId?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type JobinJobContactInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  accountId?: InputMaybe<Scalars['ObjectId']['input']>;
  altText?: InputMaybe<Scalars['String']['input']>;
  contactId?: InputMaybe<Scalars['ObjectId']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  errorMsg?: InputMaybe<Scalars['String']['input']>;
  linkedinSalesUrl?: InputMaybe<Scalars['String']['input']>;
  linkedinTalentId?: InputMaybe<Scalars['String']['input']>;
  linkedinUrl?: InputMaybe<Scalars['String']['input']>;
  profileId?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
};

export type JobinJobFromFilterResult = {
  __typename?: 'JobinJobFromFilterResult';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  totalContactIds?: Maybe<Array<Scalars['ObjectId']['output']>>;
  totalContacts?: Maybe<Scalars['Int']['output']>;
};

export type JobinJobInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  campaignStage?: InputMaybe<CampaignStageInput>;
  codename: Scalars['String']['input'];
  contactStatuses?: InputMaybe<Array<JobinJobContactInput>>;
  data?: InputMaybe<Scalars['String']['input']>;
  error?: InputMaybe<Scalars['String']['input']>;
  hasNothingToProcess?: InputMaybe<Scalars['Boolean']['input']>;
  iconName: Scalars['String']['input'];
  isIdempotent?: InputMaybe<Scalars['Boolean']['input']>;
  loaded: Scalars['Float']['input'];
  lockedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  nextRunAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  noResume?: InputMaybe<Scalars['Boolean']['input']>;
  operationType?: InputMaybe<Scalars['String']['input']>;
  previousNextRunAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  priority?: InputMaybe<Scalars['Float']['input']>;
  queue: Scalars['String']['input'];
  stop?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
  totalCount?: Scalars['Int']['input'];
  userLinkedinUrl?: InputMaybe<Scalars['String']['input']>;
  waitTimeMs?: InputMaybe<Scalars['Float']['input']>;
};

export type JobinJobSubscription = {
  __typename?: 'JobinJobSubscription';
  _id: Scalars['ObjectId']['output'];
  codename?: Maybe<Scalars['String']['output']>;
  contactStatuses?: Maybe<Array<JobinJobContact>>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  hasNothingToProcess?: Maybe<Scalars['Boolean']['output']>;
  iconName?: Maybe<Scalars['String']['output']>;
  isIdempotent?: Maybe<Scalars['Boolean']['output']>;
  loaded?: Maybe<Scalars['Float']['output']>;
  lockedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  nextRunAt?: Maybe<Scalars['DateTimeISO']['output']>;
  noResume?: Maybe<Scalars['Boolean']['output']>;
  nullifyError?: Maybe<Scalars['Boolean']['output']>;
  nullifyLockedAt?: Maybe<Scalars['Boolean']['output']>;
  nullifyNextRunAt?: Maybe<Scalars['Boolean']['output']>;
  operationType?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Float']['output']>;
  queue?: Maybe<Scalars['String']['output']>;
  stop?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  totalCount?: Maybe<Scalars['Float']['output']>;
  updateContactStatus?: Maybe<JobinJobContact>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
  waitTimeMs?: Maybe<Scalars['Float']['output']>;
  workGroupId: Scalars['ObjectId']['output'];
};

export type JobinJobUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  codename?: InputMaybe<Scalars['String']['input']>;
  contactStatuses?: InputMaybe<Array<JobinJobContactInput>>;
  data?: InputMaybe<Scalars['String']['input']>;
  error?: InputMaybe<Scalars['String']['input']>;
  hasNothingToProcess?: InputMaybe<Scalars['Boolean']['input']>;
  iconName?: InputMaybe<Scalars['String']['input']>;
  isIdempotent?: InputMaybe<Scalars['Boolean']['input']>;
  loaded?: InputMaybe<Scalars['Float']['input']>;
  lockedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  nextRunAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  noResume?: InputMaybe<Scalars['Boolean']['input']>;
  priority?: InputMaybe<Scalars['Float']['input']>;
  queue?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  stop?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  totalCount?: InputMaybe<Scalars['Float']['input']>;
  waitTimeMs?: InputMaybe<Scalars['Float']['input']>;
};

export type JobinPrice = {
  __typename?: 'JobinPrice';
  _id: Scalars['ObjectId']['output'];
  currency?: Maybe<Currency>;
  currencyCode: Scalars['String']['output'];
  price: Scalars['Int']['output'];
};

export type JobinProduct = {
  __typename?: 'JobinProduct';
  _id: Scalars['ObjectId']['output'];
  activeFeatures: Array<ActiveFeature>;
  deprecated?: Maybe<Scalars['DateTimeISO']['output']>;
  features: Array<Scalars['String']['output']>;
  featuresOverview: Array<Scalars['String']['output']>;
  monthlyPrices?: Maybe<Array<JobinPrice>>;
  planId: Scalars['ObjectId']['output'];
  price?: Maybe<JobinPrice>;
  prices?: Maybe<Array<JobinPrice>>;
  replaceWithProductId?: Maybe<Scalars['ObjectId']['output']>;
  solutionId: Scalars['ObjectId']['output'];
  sortOrder?: Maybe<Scalars['Int']['output']>;
};


export type JobinProductPriceArgs = {
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  isMonthly: Scalars['Boolean']['input'];
  noIp?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JobinQuotaAndLimit = {
  __typename?: 'JobinQuotaAndLimit';
  limit?: Maybe<Scalars['Int']['output']>;
  usedQuota: Scalars['Int']['output'];
};

export type JobinSolution = {
  __typename?: 'JobinSolution';
  _id: Scalars['ObjectId']['output'];
  description: Scalars['String']['output'];
  iconName: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type JobinSubFeature = {
  __typename?: 'JobinSubFeature';
  _id: Scalars['ObjectId']['output'];
  description?: Maybe<Scalars['String']['output']>;
  jobinFeatureId: Scalars['ObjectId']['output'];
  name: Scalars['String']['output'];
};

export type JobinSubscription = {
  __typename?: 'JobinSubscription';
  _id: Scalars['ObjectId']['output'];
  alreadyPaid?: Maybe<Scalars['Int']['output']>;
  cancelAtPeriodEnd?: Maybe<Scalars['Boolean']['output']>;
  checkoutAmount?: Maybe<CheckoutAmount>;
  countryCode: Scalars['String']['output'];
  couponName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  currency?: Maybe<Currency>;
  currencyCode: Scalars['String']['output'];
  currentPeriodEnd?: Maybe<Scalars['DateTimeISO']['output']>;
  currentPeriodStart?: Maybe<Scalars['DateTimeISO']['output']>;
  doNotReplaceOnRenewal?: Maybe<Scalars['Boolean']['output']>;
  endedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  enterprisePrice?: Maybe<Scalars['Int']['output']>;
  fullAccess?: Maybe<Scalars['Boolean']['output']>;
  isBilledMonthly: Scalars['Boolean']['output'];
  paymentFailCode?: Maybe<Scalars['String']['output']>;
  paymentFailReason?: Maybe<Scalars['String']['output']>;
  paymentItems: Array<PaymentItem>;
  status: Scalars['String']['output'];
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  stripePaymentMethod?: Maybe<StripePaymentMethod>;
  stripePaymentMethodId?: Maybe<Scalars['String']['output']>;
  totalPaidAmount: Scalars['Int']['output'];
  trialEnd?: Maybe<Scalars['DateTimeISO']['output']>;
  trialEndEmail?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  vatId?: Maybe<Scalars['String']['output']>;
};

export type JobseekerAim = {
  __typename?: 'JobseekerAim';
  _id: Scalars['ObjectId']['output'];
  value: Scalars['String']['output'];
};

export type JobseekerCriterion = {
  __typename?: 'JobseekerCriterion';
  _id: Scalars['ObjectId']['output'];
  availabilityPeriod?: Maybe<AvailabilityPeriod>;
  benefits?: Maybe<Array<Benefit>>;
  careerAspirationNote?: Maybe<Scalars['String']['output']>;
  careerLevels?: Maybe<Array<Scalars['String']['output']>>;
  careerPaths?: Maybe<Array<Scalars['String']['output']>>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  desiredLocations?: Maybe<Array<MainLocation>>;
  /** desired company size(s) */
  employeeCountRanges?: Maybe<Array<Scalars['String']['output']>>;
  employmentTypes?: Maybe<Array<Scalars['String']['output']>>;
  /** desired industries */
  industries?: Maybe<Array<Scalars['String']['output']>>;
  /** Indicate which are the moving factors for a jobseeker into the next job */
  jobseekerAims?: Maybe<Array<Scalars['String']['output']>>;
  jobseekerStatus?: Maybe<BaseTemplateLevel>;
  managementLevels?: Maybe<Array<Scalars['String']['output']>>;
  mobilityArea?: Maybe<Scalars['String']['output']>;
  moneyAmount?: Maybe<MoneyAmount>;
  motivationForChange?: Maybe<Scalars['String']['output']>;
  noticePeriod?: Maybe<NoticePeriod>;
  organizationTypes?: Maybe<Array<Scalars['String']['output']>>;
  quietOffice?: Maybe<Scalars['Int']['output']>;
  remoteWork?: Maybe<RemoteWork>;
  roleTitles?: Maybe<Array<Scalars['String']['output']>>;
  travelRequired?: Maybe<TravelRequired>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type JobseekerCriterionInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  availabilityPeriod?: InputMaybe<AvailabilityPeriodInput>;
  benefits?: InputMaybe<Array<BenefitInput>>;
  careerAspirationNote?: InputMaybe<Scalars['String']['input']>;
  careerLevels?: InputMaybe<Array<Scalars['String']['input']>>;
  careerPaths?: InputMaybe<Array<Scalars['String']['input']>>;
  desiredLocations?: InputMaybe<Array<MainLocationInput>>;
  /** desired company size(s) */
  employeeCountRanges?: InputMaybe<Array<Scalars['String']['input']>>;
  employmentTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** desired industries */
  industries?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Indicate which are the moving factors for a jobseeker into the next job */
  jobseekerAims?: InputMaybe<Array<Scalars['String']['input']>>;
  jobseekerStatus?: InputMaybe<BaseTemplateLevelInput>;
  managementLevels?: InputMaybe<Array<Scalars['String']['input']>>;
  mobilityArea?: InputMaybe<Scalars['String']['input']>;
  moneyAmount?: InputMaybe<MoneyAmountInput>;
  motivationForChange?: InputMaybe<Scalars['String']['input']>;
  noticePeriod?: InputMaybe<NoticePeriodInput>;
  organizationTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  quietOffice?: InputMaybe<Scalars['Int']['input']>;
  remoteWork?: InputMaybe<RemoteWorkInput>;
  roleTitles?: InputMaybe<Array<Scalars['String']['input']>>;
  travelRequired?: InputMaybe<TravelRequiredInput>;
};

export type JobseekerStatus = {
  __typename?: 'JobseekerStatus';
  _id: Scalars['ObjectId']['output'];
  level?: Maybe<Scalars['Int']['output']>;
  value: Scalars['String']['output'];
};

export type Jobspec = {
  __typename?: 'Jobspec';
  _id: Scalars['ObjectId']['output'];
  careerOverview?: Maybe<CareerOverview>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  desiredSkills?: Maybe<Array<Scalars['String']['output']>>;
  /** The Employer Organization for this Jobspec */
  employerOrganization?: Maybe<AccountLogo>;
  employmentType?: Maybe<Scalars['String']['output']>;
  funnel?: Maybe<Funnel>;
  hasCandidates?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Obsolete due to new IdealCandidate system */
  idealCandidateId?: Maybe<Scalars['ObjectId']['output']>;
  industries?: Maybe<Array<Scalars['String']['output']>>;
  /** subDocument with a list of details used for internal admin */
  internalDetail?: Maybe<JobspecInternalDetail>;
  jobspecDescriptions?: Maybe<Array<JobspecDescription>>;
  jobspecStatus?: Maybe<JobspecStatus>;
  /** Job vacancy type e.g. only for internal employees, public, etc */
  jobspecType?: Maybe<Scalars['String']['output']>;
  lastEventDate?: Maybe<Scalars['DateTimeISO']['output']>;
  latestEvent?: Maybe<JobinEvent>;
  locations?: Maybe<Array<MainLocation>>;
  moneyAmount?: Maybe<MoneyAmount>;
  notes?: Maybe<Array<JobspecNote>>;
  pipeline?: Maybe<Pipeline>;
  pipelineId?: Maybe<Scalars['ObjectId']['output']>;
  /** Do not show Logo and Name of the employer in the Job Advertising */
  publishingAnonymously?: Maybe<Scalars['Boolean']['output']>;
  /** the Logo to be used in the Job Advertising (sometimes a Jobspec is published with the Logo of the Recruiting Agency instead of the real employer company) */
  publishingLogo?: Maybe<Scalars['String']['output']>;
  /** List of Recruiters (and their roles) assigned to this Jobspec */
  recruiters?: Maybe<Array<Scalars['ObjectId']['output']>>;
  /** Each Jobspec can be supported by a number of Referees (People that help searching for Candidates) */
  referees?: Maybe<Array<Scalars['ObjectId']['output']>>;
  remoteWork?: Maybe<RemoteWork>;
  requiredSkills?: Maybe<Array<Scalars['String']['output']>>;
  shortJobAdvText?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
  travelRequired?: Maybe<TravelRequired>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
};

export type JobspecDescription = {
  __typename?: 'JobspecDescription';
  _id: Scalars['ObjectId']['output'];
  heading?: Maybe<Scalars['String']['output']>;
  jobspecDescriptionTemplateTypeId?: Maybe<Scalars['ObjectId']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type JobspecDescriptionInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  jobspecDescriptionTemplateTypeId?: InputMaybe<Scalars['ObjectId']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type JobspecDescriptionTemplate = {
  __typename?: 'JobspecDescriptionTemplate';
  _id: Scalars['ObjectId']['output'];
  heading?: Maybe<Scalars['String']['output']>;
  jobspecDescriptionTemplateTypeId?: Maybe<Scalars['ObjectId']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type JobspecDescriptionTemplateInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  jobspecDescriptionTemplateTypeId?: InputMaybe<Scalars['ObjectId']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type JobspecDescriptionType = {
  __typename?: 'JobspecDescriptionType';
  _id: Scalars['ObjectId']['output'];
  value: Scalars['String']['output'];
};

export type JobspecInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  careerOverview?: InputMaybe<CareerOverviewInput>;
  desiredSkills?: InputMaybe<Array<Scalars['String']['input']>>;
  employerOrganization?: InputMaybe<AccountLogoInput>;
  employmentType?: InputMaybe<Scalars['String']['input']>;
  industries?: InputMaybe<Array<Scalars['String']['input']>>;
  /** subDocument with a list of details used for internal admin */
  internalDetail?: InputMaybe<JobspecInternalDetailInput>;
  jobspecDescriptions?: InputMaybe<Array<JobspecDescriptionInput>>;
  jobspecStatus?: InputMaybe<JobspecStatusInput>;
  jobspecType?: InputMaybe<Scalars['String']['input']>;
  lastEventDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  locations?: InputMaybe<Array<MainLocationInput>>;
  moneyAmount?: InputMaybe<MoneyAmountInput>;
  pipelineId?: InputMaybe<Scalars['ObjectId']['input']>;
  publishingAnonymously?: InputMaybe<Scalars['Boolean']['input']>;
  /** the Logo to be used in the Job Advertising (sometimes a Jobspec is published with the Logo of the Recruiting Agency instead of the real employer company) */
  publishingLogo?: InputMaybe<Scalars['String']['input']>;
  /** List of Recruiters (and their roles) assigned to this Jobspec */
  recruiters?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  referees?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  remoteWork?: InputMaybe<RemoteWorkInput>;
  requiredSkills?: InputMaybe<Array<Scalars['String']['input']>>;
  shortJobAdvText?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  travelRequired?: InputMaybe<TravelRequiredInput>;
  userId?: InputMaybe<Scalars['ObjectId']['input']>;
};

export type JobspecInternalDetail = {
  __typename?: 'JobspecInternalDetail';
  _id: Scalars['ObjectId']['output'];
  closingDeadline?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  isPublicContactPerson?: Maybe<Scalars['Boolean']['output']>;
  jobInsight?: Maybe<Scalars['String']['output']>;
  jobReferenceCode?: Maybe<Scalars['String']['output']>;
  nrVacantPositions?: Maybe<Scalars['Int']['output']>;
  /** In which URLs this Jobspec is published */
  pageUrls?: Maybe<Array<Scalars['String']['output']>>;
  website?: Maybe<Scalars['String']['output']>;
};

export type JobspecInternalDetailInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  closingDeadline?: InputMaybe<Scalars['String']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isPublicContactPerson?: InputMaybe<Scalars['Boolean']['input']>;
  jobInsight?: InputMaybe<Scalars['String']['input']>;
  jobReferenceCode?: InputMaybe<Scalars['String']['input']>;
  nrVacantPositions?: InputMaybe<Scalars['Int']['input']>;
  pageUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type JobspecNote = {
  __typename?: 'JobspecNote';
  _id: Scalars['ObjectId']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  privacyLevel?: Maybe<PrivacyLevel>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
  value: Scalars['String']['output'];
};

export type JobspecNoteInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  privacyLevel?: InputMaybe<PrivacyLevelInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type JobspecStatus = {
  __typename?: 'JobspecStatus';
  _id: Scalars['ObjectId']['output'];
  color?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type JobspecStatusInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type JobspecTag = {
  __typename?: 'JobspecTag';
  _id: Scalars['ObjectId']['output'];
  value: Scalars['String']['output'];
};

export type JobspecType = {
  __typename?: 'JobspecType';
  _id: Scalars['ObjectId']['output'];
  description?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type JobspecTypeInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** List of Recruiters (and their roles) assigned to this Jobspec */
  organizationId?: InputMaybe<Scalars['ObjectId']['input']>;
  value: Scalars['String']['input'];
};

export type JobyChatGptPrompt = {
  __typename?: 'JobyChatGptPrompt';
  _id: Scalars['ObjectId']['output'];
  code: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frequencyPenalty?: Maybe<Scalars['Float']['output']>;
  label: Scalars['String']['output'];
  language?: Maybe<Scalars['String']['output']>;
  listOf3?: Maybe<Scalars['Boolean']['output']>;
  maxTokens?: Maybe<Scalars['Int']['output']>;
  noWordLimit?: Maybe<Scalars['Boolean']['output']>;
  numOfWords?: Maybe<Scalars['Int']['output']>;
  presencePenalty?: Maybe<Scalars['Float']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
  text: Scalars['String']['output'];
  tone?: Maybe<Scalars['String']['output']>;
  topP?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  useChatGPT4?: Maybe<Scalars['Boolean']['output']>;
  writeAsExpert?: Maybe<Scalars['String']['output']>;
  writingStyle?: Maybe<Scalars['String']['output']>;
};

export type JobyChatGptPromptInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  code: Scalars['String']['input'];
  frequencyPenalty?: InputMaybe<Scalars['Float']['input']>;
  label: Scalars['String']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  listOf3?: InputMaybe<Scalars['Boolean']['input']>;
  maxTokens?: InputMaybe<Scalars['Int']['input']>;
  noWordLimit?: InputMaybe<Scalars['Boolean']['input']>;
  numOfWords?: InputMaybe<Scalars['Int']['input']>;
  presencePenalty?: InputMaybe<Scalars['Float']['input']>;
  temperature?: InputMaybe<Scalars['Float']['input']>;
  text: Scalars['String']['input'];
  tone?: InputMaybe<Scalars['String']['input']>;
  topP?: InputMaybe<Scalars['Float']['input']>;
  useChatGPT4?: InputMaybe<Scalars['Boolean']['input']>;
  writeAsExpert?: InputMaybe<Scalars['String']['input']>;
  writingStyle?: InputMaybe<Scalars['String']['input']>;
};

export type JobyChatGptResponse = {
  __typename?: 'JobyChatGptResponse';
  status: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Language = {
  __typename?: 'Language';
  _id: Scalars['ObjectId']['output'];
  level?: Maybe<Scalars['Int']['output']>;
  monthsOfExperience?: Maybe<Scalars['Int']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  period: Period;
  value?: Maybe<Scalars['String']['output']>;
};

export type LanguageInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  monthsOfExperience?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<PeriodInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type LanguageName = {
  __typename?: 'LanguageName';
  _id: Scalars['ObjectId']['output'];
  languageCode?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type LatestLinkedinConnectionConnectedOnDate = {
  __typename?: 'LatestLinkedinConnectionConnectedOnDate';
  latestConnectedOn?: Maybe<Scalars['DateTimeISO']['output']>;
  pendingConnectionImportCount?: Maybe<Scalars['Int']['output']>;
  pendingLatestConnectedOn?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type LinkedinAccountInput = {
  autoGenerated?: InputMaybe<Scalars['Boolean']['input']>;
  importTaskHandle?: InputMaybe<Scalars['String']['input']>;
  importTransactionId?: InputMaybe<Scalars['String']['input']>;
  specialBypass?: InputMaybe<Scalars['Boolean']['input']>;
  userLinkedinUrl?: InputMaybe<Scalars['String']['input']>;
};

export type LinkedinAccountWithDefaultCountry = {
  __typename?: 'LinkedinAccountWithDefaultCountry';
  _id: Scalars['ObjectId']['output'];
  autoGenerated?: Maybe<Scalars['Boolean']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  importTaskHandle?: Maybe<Scalars['String']['output']>;
  importTransactionId?: Maybe<Scalars['String']['output']>;
  specialBypass?: Maybe<Scalars['Boolean']['output']>;
  userLinkedinUrl?: Maybe<Scalars['String']['output']>;
};

export type LinkedinAnalytic = {
  __typename?: 'LinkedinAnalytic';
  _id: Scalars['ObjectId']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  linkedinInvitation?: Maybe<LinkedinInvitation>;
  linkedinProfile?: Maybe<LinkedinProfile>;
  linkedinSalesApiScore?: Maybe<LinkedinSalesApiScore>;
  numConnections?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userLinkedinUrl?: Maybe<Scalars['String']['output']>;
};

export type LinkedinAnalyticInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  linkedinInvitation?: InputMaybe<LinkedinInvitationInput>;
  linkedinProfile?: InputMaybe<LinkedinProfileInput>;
  linkedinSalesApiScore?: InputMaybe<LinkedinSalesApiScoreInput>;
  numConnections?: InputMaybe<Scalars['Int']['input']>;
};

export type LinkedinAnalyticTimeline = {
  __typename?: 'LinkedinAnalyticTimeline';
  daysPerGroup?: Maybe<Scalars['Int']['output']>;
  timelineRecords: Array<LinkedinAnalyticTimelineRecords>;
  totalDays?: Maybe<Scalars['Int']['output']>;
};

export type LinkedinAnalyticTimelineRecords = {
  __typename?: 'LinkedinAnalyticTimelineRecords';
  fromDate: Scalars['DateTimeISO']['output'];
  numConnections?: Maybe<Scalars['Int']['output']>;
  numInvitationsSent?: Maybe<Scalars['Int']['output']>;
  numMessagesReceived?: Maybe<Scalars['Int']['output']>;
  numMessagesSent?: Maybe<Scalars['Int']['output']>;
  numProfileViews?: Maybe<Scalars['Int']['output']>;
  toDate: Scalars['DateTimeISO']['output'];
};

export type LinkedinAnalyticTotals = {
  __typename?: 'LinkedinAnalyticTotals';
  first: LinkedinAnalytic;
  last: LinkedinAnalytic;
};

export type LinkedinConversation = {
  __typename?: 'LinkedinConversation';
  _id: Scalars['ObjectId']['output'];
  conversationId: Scalars['String']['output'];
  importedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  lastActivityAt: Scalars['Float']['output'];
  participantLinkedinUrls: Array<Scalars['String']['output']>;
  totalEventCount?: Maybe<Scalars['Float']['output']>;
};

export type LinkedinConversationInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  conversationId: Scalars['String']['input'];
  importedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lastActivityAt: Scalars['Float']['input'];
  participantLinkedinUrls: Array<Scalars['String']['input']>;
  totalEventCount?: InputMaybe<Scalars['Float']['input']>;
};

export type LinkedinDetail = {
  __typename?: 'LinkedinDetail';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  /** @deprecated Replaced By  */
  connectedOn?: Maybe<Scalars['DateTimeISO']['output']>;
  followerCount?: Maybe<Scalars['Int']['output']>;
  influencer?: Maybe<Scalars['Boolean']['output']>;
  isMiniProfile?: Maybe<Scalars['Boolean']['output']>;
  jobSeeker?: Maybe<Scalars['Boolean']['output']>;
  numOfConnections?: Maybe<Scalars['Int']['output']>;
  openLink?: Maybe<Scalars['Boolean']['output']>;
  openToWork?: Maybe<Scalars['Boolean']['output']>;
  premium?: Maybe<Scalars['Boolean']['output']>;
  profileId?: Maybe<Scalars['String']['output']>;
};

export type LinkedinDetailInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  followerCount?: InputMaybe<Scalars['Int']['input']>;
  influencer?: InputMaybe<Scalars['Boolean']['input']>;
  isMiniProfile?: InputMaybe<Scalars['Boolean']['input']>;
  jobSeeker?: InputMaybe<Scalars['Boolean']['input']>;
  numOfConnections?: InputMaybe<Scalars['Int']['input']>;
  openLink?: InputMaybe<Scalars['Boolean']['input']>;
  openToWork?: InputMaybe<Scalars['Boolean']['input']>;
  premium?: InputMaybe<Scalars['Boolean']['input']>;
  profileId?: InputMaybe<Scalars['String']['input']>;
};

export type LinkedinInvitation = {
  __typename?: 'LinkedinInvitation';
  _id: Scalars['ObjectId']['output'];
  numNewInvitations?: Maybe<Scalars['Int']['output']>;
  numPendingInvitations?: Maybe<Scalars['Int']['output']>;
  numSingleSentInvitations?: Maybe<Scalars['Int']['output']>;
  numTotalSentInvitations?: Maybe<Scalars['Int']['output']>;
};

export type LinkedinInvitationInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  numNewInvitations?: InputMaybe<Scalars['Int']['input']>;
  numPendingInvitations?: InputMaybe<Scalars['Int']['input']>;
  numSingleSentInvitations?: InputMaybe<Scalars['Int']['input']>;
  numTotalSentInvitations?: InputMaybe<Scalars['Int']['input']>;
};

export type LinkedinMessageInput = {
  attachments?: InputMaybe<Array<EventAttachmentInput>>;
  eventTypeId?: InputMaybe<Scalars['ObjectId']['input']>;
  fromUrl?: InputMaybe<Scalars['String']['input']>;
  messageCreatedAt: Scalars['Float']['input'];
  subject?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
  toUrl?: InputMaybe<Scalars['String']['input']>;
  userLinkedinUrl?: InputMaybe<Scalars['String']['input']>;
};

export type LinkedinNoteInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  ownerLinkedinId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type LinkedinProfile = {
  __typename?: 'LinkedinProfile';
  _id: Scalars['ObjectId']['output'];
  allStar?: Maybe<Scalars['Boolean']['output']>;
  marketplacePreferences?: Maybe<Scalars['Boolean']['output']>;
  menteePreferencesActive?: Maybe<Scalars['Boolean']['output']>;
  mentorPreferencesActive?: Maybe<Scalars['Boolean']['output']>;
  numProfileViews?: Maybe<Scalars['Int']['output']>;
  numSavedArticles?: Maybe<Scalars['Int']['output']>;
  numSavedItems?: Maybe<Scalars['Int']['output']>;
  numSavedJobs?: Maybe<Scalars['Int']['output']>;
  numSearchAppearances?: Maybe<Scalars['Int']['output']>;
  profileOpenToRecruiter?: Maybe<Scalars['Boolean']['output']>;
  student?: Maybe<Scalars['Boolean']['output']>;
};

export type LinkedinProfileInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  allStar?: InputMaybe<Scalars['Boolean']['input']>;
  marketplacePreferences?: InputMaybe<Scalars['Boolean']['input']>;
  menteePreferencesActive?: InputMaybe<Scalars['Boolean']['input']>;
  mentorPreferencesActive?: InputMaybe<Scalars['Boolean']['input']>;
  numProfileViews?: InputMaybe<Scalars['Int']['input']>;
  numSavedArticles?: InputMaybe<Scalars['Int']['input']>;
  numSavedItems?: InputMaybe<Scalars['Int']['input']>;
  numSavedJobs?: InputMaybe<Scalars['Int']['input']>;
  numSearchAppearances?: InputMaybe<Scalars['Int']['input']>;
  profileOpenToRecruiter?: InputMaybe<Scalars['Boolean']['input']>;
  student?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinkedinSalesApiScore = {
  __typename?: 'LinkedinSalesApiScore';
  _id: Scalars['ObjectId']['output'];
  activeSeat?: Maybe<Scalars['Boolean']['output']>;
  endTime?: Maybe<Scalars['Float']['output']>;
  groupScore?: Maybe<Array<GroupScore>>;
  memberScore?: Maybe<MemberScore>;
};

export type LinkedinSalesApiScoreInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  activeSeat?: InputMaybe<Scalars['Boolean']['input']>;
  endTime?: InputMaybe<Scalars['Float']['input']>;
  groupScore?: InputMaybe<Array<GroupScoreInput>>;
  memberScore?: InputMaybe<MemberScoreInput>;
  profileUrn?: InputMaybe<Scalars['String']['input']>;
};

export type LinkedinSalesConversation = {
  __typename?: 'LinkedinSalesConversation';
  _id: Scalars['ObjectId']['output'];
  conversationId: Scalars['String']['output'];
  importedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  lastActivityAt: Scalars['Float']['output'];
  participantLinkedinUrls: Array<Scalars['String']['output']>;
  totalEventCount?: Maybe<Scalars['Float']['output']>;
};

export type LinkedinTagsFilter = {
  __typename?: 'LinkedinTagsFilter';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  hasPendingInvitation?: Maybe<Scalars['String']['output']>;
  hasProfileId?: Maybe<Scalars['Boolean']['output']>;
  influencer?: Maybe<Scalars['String']['output']>;
  isFirstConnection?: Maybe<Scalars['String']['output']>;
  isOpenLink?: Maybe<Scalars['String']['output']>;
  isPremium?: Maybe<Scalars['String']['output']>;
  isSecondConnection?: Maybe<Scalars['String']['output']>;
  isThirdConnection?: Maybe<Scalars['String']['output']>;
  openToWork?: Maybe<Scalars['String']['output']>;
};

export type LinkedinTagsFilterInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  hasPendingInvitation?: InputMaybe<Scalars['String']['input']>;
  hasProfileId?: InputMaybe<Scalars['Boolean']['input']>;
  influencer?: InputMaybe<Scalars['String']['input']>;
  isFirstConnection?: InputMaybe<Scalars['String']['input']>;
  isOpenLink?: InputMaybe<Scalars['String']['input']>;
  isPremium?: InputMaybe<Scalars['String']['input']>;
  isSecondConnection?: InputMaybe<Scalars['String']['input']>;
  isThirdConnection?: InputMaybe<Scalars['String']['input']>;
  openToWork?: InputMaybe<Scalars['String']['input']>;
};

export type LinkedinThrottlingSetting = {
  __typename?: 'LinkedinThrottlingSetting';
  _id: Scalars['ObjectId']['output'];
  fullProfileImport?: Maybe<Scalars['Int']['output']>;
  fullProfileImportWithEmail?: Maybe<Scalars['Int']['output']>;
  invitations?: Maybe<Scalars['Int']['output']>;
  messages?: Maybe<Scalars['Int']['output']>;
};

export type LinkedinThrottlingSettingInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  fullProfileImport?: InputMaybe<Scalars['Int']['input']>;
  fullProfileImportWithEmail?: InputMaybe<Scalars['Int']['input']>;
  invitations?: InputMaybe<Scalars['Int']['input']>;
  messages?: InputMaybe<Scalars['Int']['input']>;
};

export type LinkedinUrlAndId = {
  __typename?: 'LinkedinUrlAndId';
  _id: Scalars['ObjectId']['output'];
  linkedinUrl: Scalars['String']['output'];
};

export type LoginObject = {
  __typename?: 'LoginObject';
  attempts?: Maybe<Scalars['Int']['output']>;
  lastAttempt?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type MainExperienceStudent = {
  __typename?: 'MainExperienceStudent';
  mainLocation?: Maybe<MainLocation>;
  organization?: Maybe<MainOrganization>;
  roleTitle?: Maybe<Scalars['String']['output']>;
};

export type MainJobspec = {
  __typename?: 'MainJobspec';
  _id: Scalars['ObjectId']['output'];
  /** The Employer Organization for this Jobspec */
  employerOrganization?: Maybe<AccountLogo>;
  /** @deprecated Obsolete due to new IdealCandidate system */
  idealCandidateId?: Maybe<Scalars['ObjectId']['output']>;
  jobspecId: Scalars['ObjectId']['output'];
  locations?: Maybe<Array<MainLocation>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type MainJobspecInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  employerOrganization?: InputMaybe<AccountLogoInput>;
  jobspecId: Scalars['ObjectId']['input'];
  locations?: InputMaybe<Array<MainLocationInput>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MainLocation = {
  __typename?: 'MainLocation';
  _id: Scalars['ObjectId']['output'];
  address?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  coord?: Maybe<Coord>;
  country?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  fullAddress?: Maybe<Scalars['String']['output']>;
  landlinePhone?: Maybe<Scalars['String']['output']>;
  locationLastUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  locationType?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  rooms?: Maybe<Array<Scalars['String']['output']>>;
  timeZone?: Maybe<Scalars['String']['output']>;
  worldLocationId?: Maybe<Scalars['ObjectId']['output']>;
};

export type MainLocationCoordFilter = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  city: Scalars['String']['input'];
  coord: CoordInput;
  field: Scalars['String']['input'];
  radius: Scalars['Int']['input'];
  worldLocationId: Scalars['ObjectId']['input'];
};

export type MainLocationFilter = {
  __typename?: 'MainLocationFilter';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  boost?: Maybe<Scalars['Float']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  coordWithRadius?: Maybe<CoordWithRadius>;
  country?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  worldLocationId?: Maybe<Scalars['ObjectId']['output']>;
};

export type MainLocationFilterInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  boost?: InputMaybe<Scalars['Float']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  coordWithRadius?: InputMaybe<CoordWithRadiusInput>;
  country?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  worldLocationId?: InputMaybe<Scalars['ObjectId']['input']>;
};

export type MainLocationInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  coord?: InputMaybe<CoordInput>;
  country?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  fullAddress?: InputMaybe<Scalars['String']['input']>;
  landlinePhone?: InputMaybe<Scalars['String']['input']>;
  locationLastUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  locationType?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  rooms?: InputMaybe<Array<Scalars['String']['input']>>;
  timeZone?: InputMaybe<Scalars['String']['input']>;
  worldLocationId?: InputMaybe<Scalars['ObjectId']['input']>;
};

export type MainLocationWorldLocationMatch = {
  __typename?: 'MainLocationWorldLocationMatch';
  _id: Scalars['ObjectId']['output'];
  city?: Maybe<Scalars['String']['output']>;
  coord?: Maybe<Coord>;
  country?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  worldLocationId?: Maybe<Scalars['ObjectId']['output']>;
};

export type MainOrganization = {
  __typename?: 'MainOrganization';
  logoUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type MaritalStatus = {
  __typename?: 'MaritalStatus';
  _id: Scalars['ObjectId']['output'];
  value: Scalars['String']['output'];
};

export type MemberRole = {
  __typename?: 'MemberRole';
  _id: Scalars['ObjectId']['output'];
  privileges?: Maybe<Array<Scalars['String']['output']>>;
  user?: Maybe<User>;
};

export type MemberRoleInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  privileges?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type MemberScore = {
  __typename?: 'MemberScore';
  _id: Scalars['ObjectId']['output'];
  calculatedAt?: Maybe<Scalars['Float']['output']>;
  change?: Maybe<Scalars['Float']['output']>;
  overall?: Maybe<Scalars['Float']['output']>;
  subScores?: Maybe<Array<SubScore>>;
};

export type MemberScoreInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  calculatedAt?: InputMaybe<Scalars['Float']['input']>;
  change?: InputMaybe<Scalars['Float']['input']>;
  overall?: InputMaybe<Scalars['Float']['input']>;
  subScores?: InputMaybe<Array<SubScoreInput>>;
};

export type MergeError = {
  __typename?: 'MergeError';
  _id: Scalars['ObjectId']['output'];
  destination: Scalars['String']['output'];
  duplicate: Scalars['String']['output'];
  fieldPath: Scalars['String']['output'];
};

export type MessageSendWithDelayInput = {
  chatGptPostCleaning?: InputMaybe<Scalars['Boolean']['input']>;
  connectionRequestWithMessage?: InputMaybe<Scalars['Boolean']['input']>;
  delay?: InputMaybe<Scalars['Int']['input']>;
  jobspecId?: InputMaybe<Scalars['ObjectId']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type MessageTemplate = {
  __typename?: 'MessageTemplate';
  _id: Scalars['ObjectId']['output'];
  emailTemplateTypeId?: Maybe<Scalars['ObjectId']['output']>;
  label: Scalars['String']['output'];
  subject?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
};

export type MessageTemplateInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  emailTemplateTypeId?: InputMaybe<Scalars['ObjectId']['input']>;
  label: Scalars['String']['input'];
  subject?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
};

export type MessagesSentAndReceivedCount = {
  __typename?: 'MessagesSentAndReceivedCount';
  _id: Scalars['ObjectId']['output'];
  messagesReceived: Scalars['Int']['output'];
  messagesSent: Scalars['Int']['output'];
  msgReceivedSentRatio: Scalars['Int']['output'];
};

export type MicrosoftLinkedAccount = {
  __typename?: 'MicrosoftLinkedAccount';
  _id: Scalars['ObjectId']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  homeAccountId?: Maybe<Scalars['String']['output']>;
  mobilePhone?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  timeZone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userIds?: Maybe<Array<Scalars['ObjectId']['output']>>;
  workGroupIds?: Maybe<Array<Scalars['ObjectId']['output']>>;
};

export type MinShouldMatch = {
  __typename?: 'MinShouldMatch';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  accomplishments?: Maybe<Scalars['Float']['output']>;
  careerLevels?: Maybe<Scalars['Float']['output']>;
  careerPaths?: Maybe<Scalars['Float']['output']>;
  companyEmployeeCountRanges?: Maybe<Scalars['Float']['output']>;
  dripCampaignsFilter?: Maybe<Scalars['Float']['output']>;
  employmentTypes?: Maybe<Scalars['Float']['output']>;
  fieldOfStudies?: Maybe<Scalars['Float']['output']>;
  industries?: Maybe<Scalars['Float']['output']>;
  jobDescriptionKeywords?: Maybe<Scalars['Float']['output']>;
  jobseekerStatuses?: Maybe<Scalars['Float']['output']>;
  languageNames?: Maybe<Scalars['Float']['output']>;
  locations?: Maybe<Scalars['Float']['output']>;
  managementLevels?: Maybe<Scalars['Float']['output']>;
  organizations?: Maybe<Scalars['Float']['output']>;
  roleTitles?: Maybe<Scalars['Float']['output']>;
  schoolNames?: Maybe<Scalars['Float']['output']>;
  skillNames?: Maybe<Scalars['Float']['output']>;
  summary?: Maybe<Scalars['Float']['output']>;
  tags?: Maybe<Scalars['Float']['output']>;
  yearsInCurrentRole?: Maybe<Scalars['Float']['output']>;
  yearsOfExperience?: Maybe<Scalars['Float']['output']>;
};

export type MinShouldMatchInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  accomplishments?: InputMaybe<Scalars['Float']['input']>;
  careerLevels?: InputMaybe<Scalars['Float']['input']>;
  careerPaths?: InputMaybe<Scalars['Float']['input']>;
  companyEmployeeCountRanges?: InputMaybe<Scalars['Float']['input']>;
  dripCampaignsFilter?: InputMaybe<Scalars['Float']['input']>;
  employmentTypes?: InputMaybe<Scalars['Float']['input']>;
  fieldOfStudies?: InputMaybe<Scalars['Float']['input']>;
  industries?: InputMaybe<Scalars['Float']['input']>;
  jobDescriptionKeywords?: InputMaybe<Scalars['Float']['input']>;
  jobseekerStatuses?: InputMaybe<Scalars['Float']['input']>;
  languageNames?: InputMaybe<Scalars['Float']['input']>;
  locations?: InputMaybe<Scalars['Float']['input']>;
  managementLevels?: InputMaybe<Scalars['Float']['input']>;
  organizations?: InputMaybe<Scalars['Float']['input']>;
  roleTitles?: InputMaybe<Scalars['Float']['input']>;
  schoolNames?: InputMaybe<Scalars['Float']['input']>;
  skillNames?: InputMaybe<Scalars['Float']['input']>;
  summary?: InputMaybe<Scalars['Float']['input']>;
  tags?: InputMaybe<Scalars['Float']['input']>;
  yearsInCurrentRole?: InputMaybe<Scalars['Float']['input']>;
  yearsOfExperience?: InputMaybe<Scalars['Float']['input']>;
};

export type MoneyAmount = {
  __typename?: 'MoneyAmount';
  _id: Scalars['ObjectId']['output'];
  amount?: Maybe<Scalars['Int']['output']>;
  amountMax?: Maybe<Scalars['Int']['output']>;
  amountMin?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  currency?: Maybe<Currency>;
  moneyAmountPercentage?: Maybe<MoneyAmountPercentage>;
  moneyAmountType?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MoneyAmountInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  amount?: InputMaybe<Scalars['Int']['input']>;
  amountMax?: InputMaybe<Scalars['Int']['input']>;
  amountMin?: InputMaybe<Scalars['Int']['input']>;
  currency?: InputMaybe<CurrencyInput>;
  moneyAmountPercentage?: InputMaybe<MoneyAmountPercentageInput>;
  moneyAmountType?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type MoneyAmountObj = {
  __typename?: 'MoneyAmountObj';
  _id: Scalars['ObjectId']['output'];
  currency: Currency;
  value: Scalars['Int']['output'];
};

export type MoneyAmountPercentage = {
  __typename?: 'MoneyAmountPercentage';
  _id: Scalars['ObjectId']['output'];
  moneyAmountPercentageType?: Maybe<Scalars['String']['output']>;
  percentage?: Maybe<Scalars['Int']['output']>;
};

export type MoneyAmountPercentageInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  moneyAmountPercentageType?: InputMaybe<Scalars['String']['input']>;
  percentage?: InputMaybe<Scalars['Int']['input']>;
};

export type MoneyAmountPercentageType = {
  __typename?: 'MoneyAmountPercentageType';
  _id: Scalars['ObjectId']['output'];
  value: Scalars['String']['output'];
};

export type MoneyAmountType = {
  __typename?: 'MoneyAmountType';
  _id: Scalars['ObjectId']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  percent?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  value: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acquireMicrosoftTokenByCode: Scalars['String']['output'];
  /** @deprecated Always require email for login even in sandbox */
  activateAccount: RegisterObject;
  activateFreeAccount: Scalars['Boolean']['output'];
  addCustomField?: Maybe<Array<CustomField>>;
  addLinkedinAnalytic: Scalars['Int']['output'];
  addReferralToAffiliateLeads: Scalars['Boolean']['output'];
  archiveAllCompletedJobinJobs: Scalars['Int']['output'];
  archiveJobinJob: Scalars['ObjectId']['output'];
  bulkAssignToCampaign: Scalars['Int']['output'];
  bulkAssignToPausedCampaign: Scalars['Int']['output'];
  bulkCreatePendingInvitations: Array<Scalars['ObjectId']['output']>;
  bulkPushOverwriteContacts: Scalars['Int']['output'];
  bulkPushOverwriteContactsByFilter: Scalars['Int']['output'];
  bulkPushUpdateContacts: Scalars['Int']['output'];
  bulkUpdateContacts: Scalars['Int']['output'];
  bulkUpsertContactActivePipelineStages: Scalars['Int']['output'];
  cancelAutoRenewal: Scalars['Boolean']['output'];
  changeAffiliatePaypalEmail: Scalars['Boolean']['output'];
  changeEmail: Scalars['Boolean']['output'];
  clearAllDripCampaignProspects: Scalars['Boolean']['output'];
  closeJobspec: Scalars['Int']['output'];
  completeJobinJob: Scalars['Int']['output'];
  contactSales: Scalars['Boolean']['output'];
  copyDripCampaign: Scalars['ObjectId']['output'];
  copyLinkedinConnectionsToContacts: Scalars['Int']['output'];
  copyToWorkgroup: Scalars['ObjectId']['output'];
  createAccomplishmentType?: Maybe<Scalars['ObjectId']['output']>;
  createAccomplishmentTypes: Array<Scalars['ObjectId']['output']>;
  createAccount: Scalars['ObjectId']['output'];
  createAccountFromOrganization: Scalars['ObjectId']['output'];
  createAccountTag?: Maybe<Scalars['ObjectId']['output']>;
  createAccountTags: Array<Scalars['ObjectId']['output']>;
  createAffiliateCoupon: Scalars['ObjectId']['output'];
  createBenefitTemplate?: Maybe<Scalars['ObjectId']['output']>;
  createBenefitTemplates: Array<Scalars['ObjectId']['output']>;
  createChatGptPrompt?: Maybe<Scalars['ObjectId']['output']>;
  createChatGptPrompts: Array<Scalars['ObjectId']['output']>;
  createCommunicationChannelType?: Maybe<Scalars['ObjectId']['output']>;
  createCommunicationChannelTypes: Array<Scalars['ObjectId']['output']>;
  createCompletedContactDripCampaignStage: Scalars['ObjectId']['output'];
  createContact: Scalars['ObjectId']['output'];
  createContactFromSocialProfile: Scalars['Boolean']['output'];
  createContactFromSocialProfileById: Scalars['ObjectId']['output'];
  createContactNote: Scalars['ObjectId']['output'];
  createContactPerson: Scalars['ObjectId']['output'];
  createContactPersons: Array<Scalars['ObjectId']['output']>;
  createContactTag?: Maybe<Scalars['ObjectId']['output']>;
  createContactTags: Array<Scalars['ObjectId']['output']>;
  createContactsFilter: Scalars['ObjectId']['output'];
  createCsvColumnAssociationGroup: CsvColumnAssociationGroup;
  createCustomPaymentIntent: Scalars['String']['output'];
  createDripCampaign: Scalars['ObjectId']['output'];
  createDripStageOption: Scalars['ObjectId']['output'];
  createEducationalLevel?: Maybe<Scalars['ObjectId']['output']>;
  createEducationalLevels: Array<Scalars['ObjectId']['output']>;
  createEmailSender: Scalars['ObjectId']['output'];
  createEmailTemplate?: Maybe<Scalars['ObjectId']['output']>;
  createEmailTemplates: Array<Scalars['ObjectId']['output']>;
  createExitStageTemplate?: Maybe<Scalars['ObjectId']['output']>;
  createExitStageTemplates: Array<Scalars['ObjectId']['output']>;
  createExternalEventFromLinkedinMessages: Array<Scalars['ObjectId']['output']>;
  createFilterFromContactIds?: Maybe<Scalars['ObjectId']['output']>;
  createHelpdeskMessage: Scalars['Boolean']['output'];
  createIdealCandidateFilter: Scalars['ObjectId']['output'];
  createJobinAccountNote: Scalars['ObjectId']['output'];
  createJobinEvent: Scalars['ObjectId']['output'];
  createJobinEventByContactFilter: Scalars['ObjectId']['output'];
  createJobinJob?: Maybe<Scalars['ObjectId']['output']>;
  createJobinJobFromFilter?: Maybe<JobinJobFromFilterResult>;
  createJobspec: Scalars['ObjectId']['output'];
  createJobspecDescriptionTemplate?: Maybe<Scalars['ObjectId']['output']>;
  createJobspecDescriptionTemplates: Array<Scalars['ObjectId']['output']>;
  createJobspecNote: Scalars['ObjectId']['output'];
  createJobspecType?: Maybe<Scalars['ObjectId']['output']>;
  createJobspecTypes: Array<Scalars['ObjectId']['output']>;
  createJobspecWithPipeline: Scalars['ObjectId']['output'];
  createJobyChatGptPrompt?: Maybe<Scalars['ObjectId']['output']>;
  createJobyChatGptPrompts: Array<Scalars['ObjectId']['output']>;
  createLinkedinInvitesFromFilter?: Maybe<JobinJobFromFilterResult>;
  createMessageTemplate?: Maybe<Scalars['ObjectId']['output']>;
  createMessageTemplates: Array<Scalars['ObjectId']['output']>;
  createMultipleExternalEventFromLinkedinMessages: Array<Scalars['ObjectId']['output']>;
  createOrganization: Scalars['ObjectId']['output'];
  createPaymentIntent: Scalars['String']['output'];
  createPendingInvitation: Scalars['ObjectId']['output'];
  createPipeline: Pipeline;
  createPipelineTemplate?: Maybe<Scalars['ObjectId']['output']>;
  createPipelineTemplates: Array<Scalars['ObjectId']['output']>;
  createRecentContactsFilter: Scalars['ObjectId']['output'];
  createSetupIntent: Scalars['String']['output'];
  createSkillType?: Maybe<Scalars['ObjectId']['output']>;
  createSkillTypes: Array<Scalars['ObjectId']['output']>;
  createStageTemplate?: Maybe<Scalars['ObjectId']['output']>;
  createStageTemplates: Array<Scalars['ObjectId']['output']>;
  createSubStageTemplate?: Maybe<Scalars['ObjectId']['output']>;
  createSubStageTemplates: Array<Scalars['ObjectId']['output']>;
  createSuccessfulExitStageTemplate?: Maybe<Scalars['ObjectId']['output']>;
  createSuccessfulExitStageTemplates: Array<Scalars['ObjectId']['output']>;
  createWorkGroup: Scalars['ObjectId']['output'];
  customModifySubscription: Scalars['Boolean']['output'];
  deleteAccomplishmentType?: Maybe<Scalars['Int']['output']>;
  deleteAccount: Scalars['Int']['output'];
  deleteAccountTag?: Maybe<Scalars['Int']['output']>;
  deleteBenefitTemplate?: Maybe<Scalars['Int']['output']>;
  deleteChatGptPrompt?: Maybe<Scalars['Int']['output']>;
  deleteCommunicationChannelType?: Maybe<Scalars['Int']['output']>;
  deleteCompletedContactDripCampaignStage?: Maybe<Scalars['Int']['output']>;
  deleteContact: Scalars['Int']['output'];
  deleteContactAttachment: Scalars['Boolean']['output'];
  deleteContactCv: Scalars['Boolean']['output'];
  deleteContactNote: Scalars['Int']['output'];
  deleteContactNotes: Scalars['Int']['output'];
  deleteContactPerson: Scalars['Int']['output'];
  deleteContactPersons: Scalars['Int']['output'];
  deleteContactTag?: Maybe<Scalars['Int']['output']>;
  deleteContacts: Scalars['Int']['output'];
  deleteContactsFilter?: Maybe<Scalars['Int']['output']>;
  deleteCurrentUser: Scalars['Int']['output'];
  deleteCustomField: Scalars['Boolean']['output'];
  deleteDripCampaign?: Maybe<Scalars['Int']['output']>;
  deleteDripStageOption: Scalars['Int']['output'];
  deleteDripStageOptionsByStageIds: Scalars['Int']['output'];
  deleteEducationalLevel?: Maybe<Scalars['Int']['output']>;
  deleteEmailSender?: Maybe<Scalars['Int']['output']>;
  deleteEmailTemplate?: Maybe<Scalars['Int']['output']>;
  deleteExitStageTemplate?: Maybe<Scalars['Int']['output']>;
  deleteIdealCandidateFilter?: Maybe<Scalars['Boolean']['output']>;
  deleteJobinAccountNote: Scalars['Int']['output'];
  deleteJobinAccountNotes: Scalars['Int']['output'];
  deleteJobinJob: Scalars['Int']['output'];
  deleteJobinLocalJob: Scalars['Int']['output'];
  deleteJobspec: Scalars['Int']['output'];
  deleteJobspecDescriptionTemplate?: Maybe<Scalars['Int']['output']>;
  deleteJobspecNote?: Maybe<Scalars['Int']['output']>;
  deleteJobspecNotes: Scalars['Int']['output'];
  deleteJobspecType?: Maybe<Scalars['Int']['output']>;
  deleteJobyChatGptPrompt?: Maybe<Scalars['Int']['output']>;
  deleteMessageTemplate?: Maybe<Scalars['Int']['output']>;
  deleteMicrosoftLinkedAccount: Scalars['Boolean']['output'];
  deletePendingInvitation: Scalars['Int']['output'];
  deletePipeline?: Maybe<Scalars['Int']['output']>;
  deletePipelineStageFromContact: Scalars['Int']['output'];
  deletePipelineTemplate?: Maybe<Scalars['Int']['output']>;
  deleteRecentContactsFilter?: Maybe<Scalars['Int']['output']>;
  deleteSkillType?: Maybe<Scalars['Int']['output']>;
  deleteStageTemplate?: Maybe<Scalars['Int']['output']>;
  deleteSubStageTemplate?: Maybe<Scalars['Int']['output']>;
  deleteSuccessfulExitStageTemplate?: Maybe<Scalars['Int']['output']>;
  deleteUser: Scalars['Int']['output'];
  deleteWorkGroup: Scalars['Int']['output'];
  deleteWorkGroupMemberRoleByUserId: Scalars['Int']['output'];
  downgradeSeats: Scalars['Boolean']['output'];
  enrichContact: ContactEnrichmentObj;
  exportContacts: Scalars['Boolean']['output'];
  exportContactsByFilter: Scalars['Boolean']['output'];
  /** @deprecated Should be replaced by updateJobinJob */
  failAccountImport: Scalars['Boolean']['output'];
  /** @deprecated Should be replaced by updateJobinJob */
  failContactImport: Scalars['Boolean']['output'];
  forgotPassword: Scalars['Boolean']['output'];
  generatePaymentLink: Scalars['String']['output'];
  getOrCreatePeopleSearchFilter: Scalars['ObjectId']['output'];
  identifyDuplicatesAndAutoMergeBackground: Scalars['Boolean']['output'];
  importAccountAndOrganization: Scalars['ObjectId']['output'];
  importContactAndSocialProfile: Scalars['ObjectId']['output'];
  importMiniAccounts: Scalars['Boolean']['output'];
  importMiniSocialProfiles: Scalars['Boolean']['output'];
  importOrganization: Scalars['Boolean']['output'];
  importPdlSocialProfile: Scalars['Boolean']['output'];
  importSocialProfile: Scalars['Boolean']['output'];
  importSocialProfileForUser: Scalars['Boolean']['output'];
  importSocialProfiles: Scalars['Boolean']['output'];
  importSocialProfilesAsLinkedinConnections: Scalars['Boolean']['output'];
  invalidateAllRefreshTokens: Scalars['Boolean']['output'];
  invalidateRefreshToken: Scalars['Boolean']['output'];
  login: LoginObject;
  loginAsId: LoginObject;
  massImport: Scalars['Int']['output'];
  mergeDuplicate: Scalars['Int']['output'];
  modifySubscription: Scalars['Boolean']['output'];
  modifyUserPermissions: Scalars['String']['output'];
  overwriteContacts: Scalars['Boolean']['output'];
  passwordReset: RegisterObject;
  pauseDripCampaign: Scalars['Boolean']['output'];
  payWithPreviousMethod?: Maybe<Scalars['String']['output']>;
  reOpenJobspec: Scalars['Int']['output'];
  redeemCode: RegisterObject;
  redeemCodeForUser: Scalars['Boolean']['output'];
  /** @deprecated replaced by refreshAuth */
  refresh: Scalars['String']['output'];
  refreshAuth: RefreshObject;
  refreshPayoutsStatus: Scalars['Int']['output'];
  register: RegisterObject;
  registerAndStartFreeTrial: RegisterObject;
  registerForJoby: RegisterObject;
  /** @deprecated Functionality removed */
  registerWithIp: RegisterObject;
  removeAllDuplicates: Scalars['Boolean']['output'];
  removeDuplicateFromPair: Scalars['Boolean']['output'];
  removeLinkedinUrl: Scalars['Boolean']['output'];
  renameStage: Scalars['Int']['output'];
  replaceIdealCandidateFilter?: Maybe<Scalars['Boolean']['output']>;
  reportImportPdlSocialProfileFailure: Scalars['Boolean']['output'];
  restartDripCampaignForContact: Scalars['Boolean']['output'];
  resumeDripCampaign: Scalars['Boolean']['output'];
  retryJobinJob: Scalars['Int']['output'];
  runAgendaCommand: Scalars['Boolean']['output'];
  runDripOperations: Scalars['Boolean']['output'];
  runScheduledOperationNow: Scalars['Boolean']['output'];
  scheduleOperation: Scalars['Boolean']['output'];
  sendActivationEmail: Scalars['Boolean']['output'];
  sendHelpdeskResponseEmail: Scalars['Boolean']['output'];
  sendTestEmails: Scalars['Boolean']['output'];
  sendWorkGroupInvites: Scalars['Int']['output'];
  sendWorkGroupInvitesToJobinMembers: Scalars['Int']['output'];
  setContactStatusesToPending: Scalars['Int']['output'];
  setPairAsNotDuplicate: Scalars['Boolean']['output'];
  stopDripCampaignForContact: Scalars['Boolean']['output'];
  throttleJobinJob: Scalars['Boolean']['output'];
  throttleJobinJob429: Scalars['Boolean']['output'];
  unAssignStage: Scalars['Int']['output'];
  unsubscribeContact: Scalars['Boolean']['output'];
  updateAccomplishmentType?: Maybe<Scalars['Int']['output']>;
  updateAccount: Scalars['Int']['output'];
  updateAccountTag?: Maybe<Scalars['Int']['output']>;
  updateAffiliateCoupon: Scalars['Int']['output'];
  updateBenefitTemplate?: Maybe<Scalars['Int']['output']>;
  updateChatGptPrompt?: Maybe<Scalars['Int']['output']>;
  updateCommunicationChannelType?: Maybe<Scalars['Int']['output']>;
  updateCompletedContactDripCampaignStage?: Maybe<Scalars['Int']['output']>;
  updateContact: Scalars['Int']['output'];
  updateContactTag?: Maybe<Scalars['Int']['output']>;
  updateContactTagSortOrder: Scalars['Int']['output'];
  updateContactsFilter?: Maybe<Scalars['Int']['output']>;
  updateCurrentUser?: Maybe<Scalars['Int']['output']>;
  updateCustomField: CustomField;
  updateDripCampaign?: Maybe<Scalars['Int']['output']>;
  updateDripStageOption: Scalars['Boolean']['output'];
  updateEducationalLevel?: Maybe<Scalars['Int']['output']>;
  updateEmailSender?: Maybe<Scalars['Int']['output']>;
  updateEmailTemplate?: Maybe<Scalars['Int']['output']>;
  updateExitStageTemplate?: Maybe<Scalars['Int']['output']>;
  updateIdealCandidateFilter?: Maybe<Scalars['Int']['output']>;
  updateJobinEvent: Scalars['Int']['output'];
  updateJobinJob: Scalars['Int']['output'];
  updateJobspec: Scalars['Int']['output'];
  updateJobspecDescriptionTemplate?: Maybe<Scalars['Int']['output']>;
  updateJobspecNote?: Maybe<Scalars['Int']['output']>;
  updateJobspecType?: Maybe<Scalars['Int']['output']>;
  updateJobyChatGptPrompt?: Maybe<Scalars['Int']['output']>;
  updateLinkedinAnalytic?: Maybe<Scalars['Int']['output']>;
  updateLinkedinConnection: Scalars['Int']['output'];
  updateLinkedinConversation: Scalars['Int']['output'];
  updateLinkedinSalesConversation: Scalars['Int']['output'];
  updateMessageTemplate?: Maybe<Scalars['Int']['output']>;
  updatePaymentMethod: Scalars['Boolean']['output'];
  updatePipeline?: Maybe<Scalars['Int']['output']>;
  updatePipelineTemplate?: Maybe<Scalars['Int']['output']>;
  updateRecentContactsFilter?: Maybe<Scalars['Int']['output']>;
  updateReplyIdentifications: Scalars['Boolean']['output'];
  updateSkillType?: Maybe<Scalars['Int']['output']>;
  updateStageTemplate?: Maybe<Scalars['Int']['output']>;
  updateSubStageTemplate?: Maybe<Scalars['Int']['output']>;
  updateSuccessfulExitStageTemplate?: Maybe<Scalars['Int']['output']>;
  updateTokenPayload: RegisterObject;
  updateUser?: Maybe<Scalars['Int']['output']>;
  updateUserAdditionalDetail?: Maybe<Scalars['Int']['output']>;
  updateUserLastLoggedIn: Scalars['Boolean']['output'];
  updateUserWorkGroupSetting?: Maybe<Scalars['Int']['output']>;
  updateWorkGroup: Scalars['Int']['output'];
  updateWorkGroupBillingDetail: Scalars['Int']['output'];
  updateWorkInProgressFeedback: Scalars['Int']['output'];
  upsertContactNotesByContactId: Scalars['Int']['output'];
  upsertCsvColumnAssociationGroup: Scalars['Int']['output'];
  upsertJobinAccountNotesByAccountId: Scalars['Int']['output'];
  upsertJobspecNotesByJobspecId?: Maybe<Scalars['Int']['output']>;
  upsertLinkedinAccount?: Maybe<Scalars['String']['output']>;
  upsertLinkedinConversations: Scalars['Int']['output'];
  upsertLinkedinSalesConversations: Scalars['Int']['output'];
  upsertRecentContactsFilter?: Maybe<Scalars['ObjectId']['output']>;
  userClickedLeaveAReview?: Maybe<Scalars['Int']['output']>;
  verifyPassword: Scalars['Boolean']['output'];
  visitedUrls: Scalars['Boolean']['output'];
};


export type MutationAcquireMicrosoftTokenByCodeArgs = {
  clientInfo: Scalars['String']['input'];
  code: Scalars['String']['input'];
};


export type MutationActivateAccountArgs = {
  _id: Scalars['ObjectId']['input'];
  email: Scalars['String']['input'];
  referralLinkCode?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddCustomFieldArgs = {
  customFieldsInput: CustomFieldInput;
};


export type MutationAddLinkedinAnalyticArgs = {
  linkedinAnalytic: LinkedinAnalyticInput;
};


export type MutationAddReferralToAffiliateLeadsArgs = {
  referralLinkCode: Scalars['String']['input'];
};


export type MutationArchiveJobinJobArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationBulkAssignToCampaignArgs = {
  campaignId: Scalars['ObjectId']['input'];
  filter: ContactsFilterInput;
};


export type MutationBulkAssignToPausedCampaignArgs = {
  campaignId: Scalars['ObjectId']['input'];
  dripCampaignName: Scalars['String']['input'];
  filter: ContactsFilterInput;
};


export type MutationBulkCreatePendingInvitationsArgs = {
  followUpMessage?: InputMaybe<FollowUpMessageInput>;
  pendingInvitations: Array<PendingInvitationInput>;
};


export type MutationBulkPushOverwriteContactsArgs = {
  _ids: Array<Scalars['ObjectId']['input']>;
  contact: ContactInput;
  labelFieldName?: Scalars['String']['input'];
};


export type MutationBulkPushOverwriteContactsByFilterArgs = {
  contact: ContactInput;
  filter: ContactsFilterInput;
  labelFieldName?: Scalars['String']['input'];
};


export type MutationBulkPushUpdateContactsArgs = {
  _ids: Array<Scalars['ObjectId']['input']>;
  contact: ContactInput;
  labelFieldName?: Scalars['String']['input'];
};


export type MutationBulkUpdateContactsArgs = {
  _ids: Array<Scalars['ObjectId']['input']>;
  contact: ContactInput;
};


export type MutationBulkUpsertContactActivePipelineStagesArgs = {
  filter: ContactsFilterInput;
  pipelineStage: ActivePipelineStageInput;
};


export type MutationCancelAutoRenewalArgs = {
  shouldCancel: Scalars['Boolean']['input'];
};


export type MutationChangeAffiliatePaypalEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationChangeEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationClearAllDripCampaignProspectsArgs = {
  campaignId: Scalars['ObjectId']['input'];
  dripCampaignName: Scalars['String']['input'];
};


export type MutationCloseJobspecArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationCompleteJobinJobArgs = {
  error?: InputMaybe<Scalars['String']['input']>;
  hasNothingToProcess?: InputMaybe<Scalars['Boolean']['input']>;
  jobinJobId: Scalars['ObjectId']['input'];
};


export type MutationContactSalesArgs = {
  companyName: Scalars['String']['input'];
  companyWebsite: Scalars['String']['input'];
  contactPerson: Scalars['String']['input'];
  description: Scalars['String']['input'];
  seats: Scalars['Int']['input'];
  workEmail: Scalars['String']['input'];
};


export type MutationCopyDripCampaignArgs = {
  campaignId: Scalars['ObjectId']['input'];
};


export type MutationCopyToWorkgroupArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationCreateAccomplishmentTypeArgs = {
  accomplishmentType: AccomplishmentTypeInput;
};


export type MutationCreateAccomplishmentTypesArgs = {
  accomplishmentTypes: Array<AccomplishmentTypeInput>;
};


export type MutationCreateAccountArgs = {
  account: JobinAccountInput;
};


export type MutationCreateAccountFromOrganizationArgs = {
  organizationId: Scalars['ObjectId']['input'];
};


export type MutationCreateAccountTagArgs = {
  accountTag: AccountTagInput;
};


export type MutationCreateAccountTagsArgs = {
  accountTags: Array<AccountTagInput>;
};


export type MutationCreateAffiliateCouponArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateBenefitTemplateArgs = {
  benefitTemplate: BenefitTemplateInput;
};


export type MutationCreateBenefitTemplatesArgs = {
  benefitTemplates: Array<BenefitTemplateInput>;
};


export type MutationCreateChatGptPromptArgs = {
  chatGptPrompt: ChatGptPromptInput;
};


export type MutationCreateChatGptPromptsArgs = {
  chatGptPrompts: Array<ChatGptPromptInput>;
};


export type MutationCreateCommunicationChannelTypeArgs = {
  communicationChannelType: CommunicationChannelTypeInput;
};


export type MutationCreateCommunicationChannelTypesArgs = {
  communicationChannelTypes: Array<CommunicationChannelTypeInput>;
};


export type MutationCreateCompletedContactDripCampaignStageArgs = {
  completedContactDripCampaignStage: CompletedContactDripCampaignStageInput;
};


export type MutationCreateContactArgs = {
  contact: ContactInput;
};


export type MutationCreateContactFromSocialProfileArgs = {
  url: Scalars['String']['input'];
  urlFieldName: Scalars['String']['input'];
};


export type MutationCreateContactFromSocialProfileByIdArgs = {
  contactTags?: InputMaybe<Array<BaseTemplateColorIconNameInput>>;
  isEnrichWithContactsActive?: InputMaybe<Scalars['Boolean']['input']>;
  pipelineIdAndJobTitle?: InputMaybe<PipelineIdAndJobTitle>;
  socialProfileId: Scalars['ObjectId']['input'];
};


export type MutationCreateContactNoteArgs = {
  contactNote: ContactNoteInput;
};


export type MutationCreateContactPersonArgs = {
  contactPerson: ContactPersonInput;
};


export type MutationCreateContactPersonsArgs = {
  contactPersons: Array<ContactPersonInput>;
};


export type MutationCreateContactTagArgs = {
  contactTag: ContactTagInput;
};


export type MutationCreateContactTagsArgs = {
  contactTags: Array<ContactTagInput>;
};


export type MutationCreateContactsFilterArgs = {
  contactsFilter: ContactsFilterSaveInput;
};


export type MutationCreateCsvColumnAssociationGroupArgs = {
  csvColumnAssociationGroup: CsvColumnAssociationGroupInput;
};


export type MutationCreateCustomPaymentIntentArgs = {
  token: Scalars['String']['input'];
};


export type MutationCreateDripCampaignArgs = {
  dripCampaign: DripCampaignInput;
};


export type MutationCreateDripStageOptionArgs = {
  dripStageOption: DripStageOptionInput;
};


export type MutationCreateEducationalLevelArgs = {
  educationalLevel: EducationalLevelInput;
};


export type MutationCreateEducationalLevelsArgs = {
  educationalLevels: Array<EducationalLevelInput>;
};


export type MutationCreateEmailSenderArgs = {
  emailSender: EmailSenderInput;
};


export type MutationCreateEmailTemplateArgs = {
  emailTemplate: EmailTemplateInput;
};


export type MutationCreateEmailTemplatesArgs = {
  emailTemplates: Array<EmailTemplateInput>;
};


export type MutationCreateExitStageTemplateArgs = {
  exitStageTemplate: ExitStageTemplateInput;
};


export type MutationCreateExitStageTemplatesArgs = {
  exitStageTemplates: Array<ExitStageTemplateInput>;
};


export type MutationCreateExternalEventFromLinkedinMessagesArgs = {
  linkedinMessages: Array<LinkedinMessageInput>;
  participantLinkedinUrls: Array<Scalars['String']['input']>;
  urlFieldName: Scalars['String']['input'];
  userUrl?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateFilterFromContactIdsArgs = {
  contactIds: Array<Scalars['ObjectId']['input']>;
};


export type MutationCreateHelpdeskMessageArgs = {
  helpdeskMessage: HelpdeskMessageInput;
  notify?: InputMaybe<Scalars['Boolean']['input']>;
  threadId: Scalars['ObjectId']['input'];
};


export type MutationCreateIdealCandidateFilterArgs = {
  idealCandidateFilter: IdealCandidateFilterInput;
};


export type MutationCreateJobinAccountNoteArgs = {
  jobinAccountNote: JobinAccountNoteInput;
};


export type MutationCreateJobinEventArgs = {
  eventTypeId: Scalars['ObjectId']['input'];
  jobinEvent: JobinEventInput;
};


export type MutationCreateJobinEventByContactFilterArgs = {
  eventTypeId: Scalars['ObjectId']['input'];
  filter: ContactsFilterInput;
  jobinEvent: JobinEventInput;
};


export type MutationCreateJobinJobArgs = {
  jobinJob: JobinJobInput;
};


export type MutationCreateJobinJobFromFilterArgs = {
  filter: ContactsFilterInput;
  jobinJob: JobinJobInput;
};


export type MutationCreateJobspecArgs = {
  jobspec: JobspecInput;
};


export type MutationCreateJobspecDescriptionTemplateArgs = {
  jobspecDescriptionTemplate: JobspecDescriptionTemplateInput;
};


export type MutationCreateJobspecDescriptionTemplatesArgs = {
  jobspecDescriptionTemplates: Array<JobspecDescriptionTemplateInput>;
};


export type MutationCreateJobspecNoteArgs = {
  jobspecNote: JobspecNoteInput;
};


export type MutationCreateJobspecTypeArgs = {
  jobspecType: JobspecTypeInput;
};


export type MutationCreateJobspecTypesArgs = {
  jobspecTypes: Array<JobspecTypeInput>;
};


export type MutationCreateJobspecWithPipelineArgs = {
  jobspec: JobspecInput;
};


export type MutationCreateJobyChatGptPromptArgs = {
  jobyChatGptPrompt: JobyChatGptPromptInput;
};


export type MutationCreateJobyChatGptPromptsArgs = {
  jobyChatGptPrompts: Array<JobyChatGptPromptInput>;
};


export type MutationCreateLinkedinInvitesFromFilterArgs = {
  filter: ContactsFilterInput;
  operationOptionsInput: OperationOptionsInput;
};


export type MutationCreateMessageTemplateArgs = {
  messageTemplate: MessageTemplateInput;
};


export type MutationCreateMessageTemplatesArgs = {
  messageTemplates: Array<MessageTemplateInput>;
};


export type MutationCreateMultipleExternalEventFromLinkedinMessagesArgs = {
  conversationMessageGroups: Array<ConversationMessageGroupInput>;
  urlFieldName: Scalars['String']['input'];
  userUrl?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateOrganizationArgs = {
  organization: OrganizationInput;
};


export type MutationCreatePaymentIntentArgs = {
  couponName?: InputMaybe<Scalars['String']['input']>;
  isBilledMonthly: Scalars['Boolean']['input'];
  items: Array<PaymentItemInput>;
  renewal?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePendingInvitationArgs = {
  pendingInvitation: PendingInvitationInput;
};


export type MutationCreatePipelineArgs = {
  pipeline: PipelineInput;
};


export type MutationCreatePipelineTemplateArgs = {
  pipelineTemplate: PipelineTemplateInput;
};


export type MutationCreatePipelineTemplatesArgs = {
  pipelineTemplates: Array<PipelineTemplateInput>;
};


export type MutationCreateRecentContactsFilterArgs = {
  recentContactsFilter: ContactsFilterSaveInput;
};


export type MutationCreateSkillTypeArgs = {
  skillType: SkillTypeInput;
};


export type MutationCreateSkillTypesArgs = {
  skillTypes: Array<SkillTypeInput>;
};


export type MutationCreateStageTemplateArgs = {
  stageTemplate: StageTemplateInput;
};


export type MutationCreateStageTemplatesArgs = {
  stageTemplates: Array<StageTemplateInput>;
};


export type MutationCreateSubStageTemplateArgs = {
  subStageTemplate: SubStageTemplateInput;
};


export type MutationCreateSubStageTemplatesArgs = {
  subStageTemplates: Array<SubStageTemplateInput>;
};


export type MutationCreateSuccessfulExitStageTemplateArgs = {
  successfulExitStageTemplate: SuccessfulExitStageTemplateInput;
};


export type MutationCreateSuccessfulExitStageTemplatesArgs = {
  successfulExitStageTemplates: Array<SuccessfulExitStageTemplateInput>;
};


export type MutationCreateWorkGroupArgs = {
  workGroup: WorkGroupInput;
};


export type MutationCustomModifySubscriptionArgs = {
  token: Scalars['String']['input'];
};


export type MutationDeleteAccomplishmentTypeArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteAccountArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteAccountTagArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteBenefitTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteChatGptPromptArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteCommunicationChannelTypeArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteCompletedContactDripCampaignStageArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteContactArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteContactAttachmentArgs = {
  _id: Scalars['ObjectId']['input'];
  attachmentId: Scalars['ObjectId']['input'];
};


export type MutationDeleteContactCvArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteContactNoteArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteContactNotesArgs = {
  _ids: Array<Scalars['ObjectId']['input']>;
};


export type MutationDeleteContactPersonArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteContactPersonsArgs = {
  _ids: Array<Scalars['ObjectId']['input']>;
};


export type MutationDeleteContactTagArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteContactsArgs = {
  filter: ContactsFilterInput;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDeleteContactsFilterArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteCustomFieldArgs = {
  _id: Scalars['String']['input'];
  contactId: Scalars['String']['input'];
};


export type MutationDeleteDripCampaignArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteDripStageOptionArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteDripStageOptionsByStageIdsArgs = {
  stageIds: Array<Scalars['ObjectId']['input']>;
};


export type MutationDeleteEducationalLevelArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteEmailSenderArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteEmailTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteExitStageTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteIdealCandidateFilterArgs = {
  assignedJobspecId: Scalars['ObjectId']['input'];
};


export type MutationDeleteJobinAccountNoteArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteJobinAccountNotesArgs = {
  _ids: Array<Scalars['ObjectId']['input']>;
};


export type MutationDeleteJobinJobArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteJobinLocalJobArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteJobspecArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteJobspecDescriptionTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteJobspecNoteArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteJobspecNotesArgs = {
  _ids: Array<Scalars['ObjectId']['input']>;
};


export type MutationDeleteJobspecTypeArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteJobyChatGptPromptArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteMessageTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteMicrosoftLinkedAccountArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeletePendingInvitationArgs = {
  _id: Scalars['ObjectId']['input'];
  contactId: Scalars['ObjectId']['input'];
};


export type MutationDeletePipelineArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeletePipelineStageFromContactArgs = {
  _id: Scalars['ObjectId']['input'];
  activePipelineStageId: Scalars['ObjectId']['input'];
};


export type MutationDeletePipelineTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteRecentContactsFilterArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteSkillTypeArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteStageTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteSubStageTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteSuccessfulExitStageTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteUserArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteWorkGroupArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationDeleteWorkGroupMemberRoleByUserIdArgs = {
  _id: Scalars['ObjectId']['input'];
  memberUserId: Scalars['ObjectId']['input'];
};


export type MutationDowngradeSeatsArgs = {
  seats: Scalars['Int']['input'];
  selectedProductId: Scalars['ObjectId']['input'];
};


export type MutationEnrichContactArgs = {
  contactId: Scalars['ObjectId']['input'];
};


export type MutationExportContactsArgs = {
  _ids: Array<Scalars['ObjectId']['input']>;
};


export type MutationExportContactsByFilterArgs = {
  filter: ContactsFilterInput;
};


export type MutationFailAccountImportArgs = {
  accountId: Scalars['ObjectId']['input'];
  errorMsg: Scalars['String']['input'];
  jobinJob: JobinJobUpdateInput;
};


export type MutationFailContactImportArgs = {
  contactId: Scalars['ObjectId']['input'];
  errorMsg: Scalars['String']['input'];
  jobinJob: JobinJobUpdateInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationGeneratePaymentLinkArgs = {
  amount: Scalars['Int']['input'];
  currencyCode: Scalars['String']['input'];
  freeAccess: Scalars['Boolean']['input'];
  isBilledMonthly: Scalars['Boolean']['input'];
  jobinJobIdsStr: Scalars['String']['input'];
  renewalAmount: Scalars['Int']['input'];
  seatsStr: Scalars['String']['input'];
  userId: Scalars['ObjectId']['input'];
  workGroupId: Scalars['ObjectId']['input'];
};


export type MutationGetOrCreatePeopleSearchFilterArgs = {
  contactsFilter: ContactsFilterInput;
};


export type MutationImportAccountAndOrganizationArgs = {
  accountId?: InputMaybe<Scalars['ObjectId']['input']>;
  importSource: Scalars['String']['input'];
  jobinJob?: InputMaybe<JobinJobUpdateInput>;
  organization: OrganizationInput;
};


export type MutationImportContactAndSocialProfileArgs = {
  contactId?: InputMaybe<Scalars['ObjectId']['input']>;
  importSource: Scalars['String']['input'];
  jobinJob?: InputMaybe<JobinJobUpdateInput>;
  newJobinJob?: InputMaybe<JobinJobInput>;
  overwrite?: InputMaybe<Scalars['Boolean']['input']>;
  socialProfile: SocialProfileWrapperInput;
  withContactInfo?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationImportMiniAccountsArgs = {
  importNr?: InputMaybe<Scalars['Int']['input']>;
  organizations: Array<OrganizationInput>;
  urlFieldName: Scalars['String']['input'];
};


export type MutationImportMiniSocialProfilesArgs = {
  socialProfiles: Array<SocialProfileWrapperInput>;
  urlFieldName: Scalars['String']['input'];
};


export type MutationImportOrganizationArgs = {
  importSource: Scalars['String']['input'];
  organization: OrganizationInput;
};


export type MutationImportPdlSocialProfileArgs = {
  linkingLinkedinUrl: Scalars['String']['input'];
  socialProfile: SocialProfileWrapperInput;
  socialProfileId: Scalars['ObjectId']['input'];
};


export type MutationImportSocialProfileArgs = {
  socialProfile: AbstractContactInput;
};


export type MutationImportSocialProfileForUserArgs = {
  importSource: Scalars['String']['input'];
  socialProfile: AbstractContactInput;
};


export type MutationImportSocialProfilesArgs = {
  activePipelineStage?: InputMaybe<ActivePipelineStageWithEventIdAndTitle>;
  extractContactInfo?: InputMaybe<Scalars['Boolean']['input']>;
  jobinEventId: Scalars['ObjectId']['input'];
  jobinJobId: Scalars['ObjectId']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  sendToPendingImportNr?: InputMaybe<Scalars['Int']['input']>;
  socialProfiles: Array<SocialProfileWrapperInput>;
  tags?: InputMaybe<Array<BaseTemplateColorIconNameInput>>;
  urlFieldName: Scalars['String']['input'];
};


export type MutationImportSocialProfilesAsLinkedinConnectionsArgs = {
  socialProfiles: Array<SocialProfileWrapperInput>;
};


export type MutationInvalidateRefreshTokenArgs = {
  refreshToken: Scalars['ObjectId']['input'];
};


export type MutationLoginArgs = {
  capchaToken: Scalars['String']['input'];
  email: Scalars['String']['input'];
  isCapchaV2?: InputMaybe<Scalars['Boolean']['input']>;
  password: Scalars['String']['input'];
};


export type MutationLoginAsIdArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationMassImportArgs = {
  contactNotes?: InputMaybe<Array<ContactNoteInput>>;
  contactSpecial?: InputMaybe<Array<ContactSpecialInput>>;
  contacts?: InputMaybe<Array<ContactInput>>;
  jobspecs?: InputMaybe<Array<JobspecInput>>;
  overwriteMode?: InputMaybe<Scalars['String']['input']>;
};


export type MutationMergeDuplicateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationModifySubscriptionArgs = {
  isBilledMonthly?: InputMaybe<Scalars['Boolean']['input']>;
  items: Array<PaymentItemInput>;
};


export type MutationModifyUserPermissionsArgs = {
  assignSeatPrivileges: Array<AssignSeatPrivilegeInput>;
  jobinProductIds: Array<Scalars['ObjectId']['input']>;
};


export type MutationPasswordResetArgs = {
  password: Scalars['String']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationPauseDripCampaignArgs = {
  campaignId: Scalars['ObjectId']['input'];
  dripCampaignName: Scalars['String']['input'];
};


export type MutationPayWithPreviousMethodArgs = {
  couponName?: InputMaybe<Scalars['String']['input']>;
  isBilledMonthly: Scalars['Boolean']['input'];
  items: Array<PaymentItemInput>;
};


export type MutationReOpenJobspecArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationRedeemCodeArgs = {
  capchaToken: Scalars['String']['input'];
  email: Scalars['String']['input'];
  isCapchaV2?: InputMaybe<Scalars['Boolean']['input']>;
  token: Scalars['String']['input'];
};


export type MutationRedeemCodeForUserArgs = {
  capchaToken: Scalars['String']['input'];
  isCapchaV2?: InputMaybe<Scalars['Boolean']['input']>;
  token: Scalars['String']['input'];
};


export type MutationRefreshArgs = {
  refreshToken: Scalars['ObjectId']['input'];
};


export type MutationRefreshAuthArgs = {
  refreshToken: Scalars['ObjectId']['input'];
};


export type MutationRefreshPayoutsStatusArgs = {
  payoutItemIds: Array<Scalars['String']['input']>;
};


export type MutationRegisterArgs = {
  capchaToken: Scalars['String']['input'];
  email: Scalars['String']['input'];
  isCapchaV2?: InputMaybe<Scalars['Boolean']['input']>;
  referralLinkCode?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRegisterAndStartFreeTrialArgs = {
  capchaToken: Scalars['String']['input'];
  email: Scalars['String']['input'];
  isBilledMonthly: Scalars['Boolean']['input'];
  isCapchaV2?: InputMaybe<Scalars['Boolean']['input']>;
  items: Array<PaymentItemInput>;
  referralLinkCode?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRegisterForJobyArgs = {
  capchaToken: Scalars['String']['input'];
  email: Scalars['String']['input'];
  isCapchaV2?: InputMaybe<Scalars['Boolean']['input']>;
  referralLinkCode?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRegisterWithIpArgs = {
  capchaToken: Scalars['String']['input'];
};


export type MutationRemoveDuplicateFromPairArgs = {
  _id: Scalars['ObjectId']['input'];
  duplicateId: Scalars['ObjectId']['input'];
};


export type MutationRemoveLinkedinUrlArgs = {
  linkedinUrl: Scalars['String']['input'];
};


export type MutationRenameStageArgs = {
  origStageName: Scalars['String']['input'];
  pipelineId: Scalars['ObjectId']['input'];
  stageName: Scalars['String']['input'];
};


export type MutationReplaceIdealCandidateFilterArgs = {
  _id: Scalars['ObjectId']['input'];
  idealCandidateFilter: IdealCandidateFilterInput;
};


export type MutationReportImportPdlSocialProfileFailureArgs = {
  linkedinUrl: Scalars['String']['input'];
};


export type MutationRestartDripCampaignForContactArgs = {
  campaignId: Scalars['ObjectId']['input'];
  contactId: Scalars['ObjectId']['input'];
};


export type MutationResumeDripCampaignArgs = {
  campaignId: Scalars['ObjectId']['input'];
};


export type MutationRetryJobinJobArgs = {
  _id: Scalars['ObjectId']['input'];
  nextRunAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  reset?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRunAgendaCommandArgs = {
  agendaCommand: Scalars['String']['input'];
  commandVariables?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRunDripOperationsArgs = {
  campaignId: Scalars['ObjectId']['input'];
  contactIds: Array<Scalars['ObjectId']['input']>;
};


export type MutationRunScheduledOperationNowArgs = {
  jobinJobId: Scalars['ObjectId']['input'];
  queue: Scalars['String']['input'];
};


export type MutationScheduleOperationArgs = {
  date: Scalars['DateTimeISO']['input'];
  jobinJobId: Scalars['ObjectId']['input'];
  queue: Scalars['String']['input'];
};


export type MutationSendActivationEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationSendHelpdeskResponseEmailArgs = {
  answerText: Scalars['String']['input'];
  from: Scalars['String']['input'];
  fromName: Scalars['String']['input'];
  lastMessageCreatedAt: Scalars['DateTimeISO']['input'];
  replyingTo: Scalars['String']['input'];
  subject: Scalars['String']['input'];
  testEmail?: InputMaybe<Scalars['String']['input']>;
  toEmail: Scalars['String']['input'];
};


export type MutationSendTestEmailsArgs = {
  email: Scalars['String']['input'];
  emailGeneratorNames: Scalars['String']['input'];
};


export type MutationSendWorkGroupInvitesArgs = {
  users: Array<UserActivationInput>;
};


export type MutationSendWorkGroupInvitesToJobinMembersArgs = {
  userIds: Array<Scalars['ObjectId']['input']>;
};


export type MutationSetContactStatusesToPendingArgs = {
  _id: Scalars['ObjectId']['input'];
  linkedinUrls: Array<Scalars['String']['input']>;
};


export type MutationSetPairAsNotDuplicateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationStopDripCampaignForContactArgs = {
  contactId: Scalars['ObjectId']['input'];
};


export type MutationThrottleJobinJobArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationThrottleJobinJob429Args = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationUnAssignStageArgs = {
  pipelineId: Scalars['ObjectId']['input'];
  stageName: Scalars['String']['input'];
};


export type MutationUnsubscribeContactArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type MutationUpdateAccomplishmentTypeArgs = {
  _id: Scalars['ObjectId']['input'];
  accomplishmentType: AccomplishmentTypeInput;
};


export type MutationUpdateAccountArgs = {
  _id: Scalars['ObjectId']['input'];
  account: JobinAccountInput;
};


export type MutationUpdateAccountTagArgs = {
  _id: Scalars['ObjectId']['input'];
  accountTag: AccountTagInput;
};


export type MutationUpdateAffiliateCouponArgs = {
  name: Scalars['String']['input'];
  previousName: Scalars['String']['input'];
};


export type MutationUpdateBenefitTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
  benefitTemplate: BenefitTemplateInput;
};


export type MutationUpdateChatGptPromptArgs = {
  _id: Scalars['ObjectId']['input'];
  chatGptPrompt: ChatGptPromptInput;
};


export type MutationUpdateCommunicationChannelTypeArgs = {
  _id: Scalars['ObjectId']['input'];
  communicationChannelType: CommunicationChannelTypeInput;
};


export type MutationUpdateCompletedContactDripCampaignStageArgs = {
  _id: Scalars['ObjectId']['input'];
  completedContactDripCampaignStage: CompletedContactDripCampaignStageInput;
};


export type MutationUpdateContactArgs = {
  _id: Scalars['ObjectId']['input'];
  contact: ContactInput;
};


export type MutationUpdateContactTagArgs = {
  _id: Scalars['ObjectId']['input'];
  contactTag: ContactTagInput;
};


export type MutationUpdateContactTagSortOrderArgs = {
  sortOrders: Array<SortOrderInput>;
};


export type MutationUpdateContactsFilterArgs = {
  _id: Scalars['ObjectId']['input'];
  contactsFilter: ContactsFilterSaveInput;
};


export type MutationUpdateCurrentUserArgs = {
  currentUser: UserInput;
};


export type MutationUpdateCustomFieldArgs = {
  customFieldsInput: CustomFieldInput;
};


export type MutationUpdateDripCampaignArgs = {
  _id: Scalars['ObjectId']['input'];
  dripCampaign: DripCampaignInput;
};


export type MutationUpdateDripStageOptionArgs = {
  _id: Scalars['ObjectId']['input'];
  dripStageOption: DripStageOptionInput;
};


export type MutationUpdateEducationalLevelArgs = {
  _id: Scalars['ObjectId']['input'];
  educationalLevel: EducationalLevelInput;
};


export type MutationUpdateEmailSenderArgs = {
  _id: Scalars['ObjectId']['input'];
  emailSender: EmailSenderInput;
};


export type MutationUpdateEmailTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
  emailTemplate: EmailTemplateInput;
};


export type MutationUpdateExitStageTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
  exitStageTemplate: ExitStageTemplateInput;
};


export type MutationUpdateIdealCandidateFilterArgs = {
  _id: Scalars['ObjectId']['input'];
  idealCandidateFilter: IdealCandidateFilterInput;
};


export type MutationUpdateJobinEventArgs = {
  _id: Scalars['ObjectId']['input'];
  addToContactIds?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  jobinEvent?: InputMaybe<UpdateJobinEventInput>;
};


export type MutationUpdateJobinJobArgs = {
  _id: Scalars['ObjectId']['input'];
  contactStatus?: InputMaybe<JobinJobContactInput>;
  contactStatuses?: InputMaybe<Array<JobinJobContactInput>>;
  jobinJob: JobinJobUpdateInput;
  updateLockedAt?: Scalars['Boolean']['input'];
};


export type MutationUpdateJobspecArgs = {
  _id: Scalars['ObjectId']['input'];
  jobspec: JobspecInput;
};


export type MutationUpdateJobspecDescriptionTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
  jobspecDescriptionTemplate: JobspecDescriptionTemplateInput;
};


export type MutationUpdateJobspecNoteArgs = {
  _id: Scalars['ObjectId']['input'];
  jobspecNote: JobspecNoteInput;
};


export type MutationUpdateJobspecTypeArgs = {
  _id: Scalars['ObjectId']['input'];
  jobspecType: JobspecTypeInput;
};


export type MutationUpdateJobyChatGptPromptArgs = {
  _id: Scalars['ObjectId']['input'];
  jobyChatGptPrompt: JobyChatGptPromptInput;
};


export type MutationUpdateLinkedinAnalyticArgs = {
  _id: Scalars['ObjectId']['input'];
  linkedinAnalytic: LinkedinAnalyticInput;
};


export type MutationUpdateLinkedinConnectionArgs = {
  _id: Scalars['ObjectId']['input'];
  linkedinConnection: UpdateLinkedinConnectionInput;
};


export type MutationUpdateLinkedinConversationArgs = {
  _id: Scalars['ObjectId']['input'];
  linkedinConversation: UpdateLinkedinConversationInput;
};


export type MutationUpdateLinkedinSalesConversationArgs = {
  _id: Scalars['ObjectId']['input'];
  linkedinSalesConversation: UpdateLinkedinConversationInput;
};


export type MutationUpdateMessageTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
  messageTemplate: MessageTemplateInput;
};


export type MutationUpdatePaymentMethodArgs = {
  clientSecret: Scalars['String']['input'];
};


export type MutationUpdatePipelineArgs = {
  _id: Scalars['ObjectId']['input'];
  pipeline: PipelineInput;
};


export type MutationUpdatePipelineTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
  pipelineTemplate: PipelineTemplateInput;
};


export type MutationUpdateRecentContactsFilterArgs = {
  _id: Scalars['ObjectId']['input'];
  recentContactsFilter: ContactsFilterSaveInput;
};


export type MutationUpdateReplyIdentificationsArgs = {
  ReplyIdentifications: ReplyIdentificationsInput;
};


export type MutationUpdateSkillTypeArgs = {
  _id: Scalars['ObjectId']['input'];
  skillType: SkillTypeInput;
};


export type MutationUpdateStageTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
  stageTemplate: StageTemplateInput;
};


export type MutationUpdateSubStageTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
  subStageTemplate: SubStageTemplateInput;
};


export type MutationUpdateSuccessfulExitStageTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
  successfulExitStageTemplate: SuccessfulExitStageTemplateInput;
};


export type MutationUpdateTokenPayloadArgs = {
  workGroupId: Scalars['ObjectId']['input'];
};


export type MutationUpdateUserArgs = {
  _id: Scalars['ObjectId']['input'];
  user: UserInput;
};


export type MutationUpdateUserAdditionalDetailArgs = {
  userAdditionalDetail: UserAdditionalDetailInput;
};


export type MutationUpdateUserWorkGroupSettingArgs = {
  userWorkGroupSetting: UserWorkGroupSettingInput;
};


export type MutationUpdateWorkGroupArgs = {
  _id: Scalars['ObjectId']['input'];
  workGroup: WorkGroupInput;
};


export type MutationUpdateWorkGroupBillingDetailArgs = {
  _id: Scalars['ObjectId']['input'];
  billingDetail: UpdateBillingDetailInput;
};


export type MutationUpdateWorkInProgressFeedbackArgs = {
  _id: Scalars['ObjectId']['input'];
  workInProgressFeedback: WorkInProgressFeedbackInput;
};


export type MutationUpsertContactNotesByContactIdArgs = {
  contactId: Scalars['ObjectId']['input'];
  contactNotes: Array<ContactNoteInput>;
};


export type MutationUpsertCsvColumnAssociationGroupArgs = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  csvColumnAssociationGroup: CsvColumnAssociationGroupInput;
};


export type MutationUpsertJobinAccountNotesByAccountIdArgs = {
  jobinAccountId: Scalars['ObjectId']['input'];
  jobinAccountNotes: Array<JobinAccountNoteInput>;
};


export type MutationUpsertJobspecNotesByJobspecIdArgs = {
  jobspecId: Scalars['ObjectId']['input'];
  jobspecNotes: Array<JobspecNoteInput>;
};


export type MutationUpsertLinkedinAccountArgs = {
  linkedinAccount: LinkedinAccountInput;
};


export type MutationUpsertLinkedinConversationsArgs = {
  linkedinConversations: Array<LinkedinConversationInput>;
};


export type MutationUpsertLinkedinSalesConversationsArgs = {
  linkedinSalesConversations: Array<LinkedinConversationInput>;
};


export type MutationUpsertRecentContactsFilterArgs = {
  upsertRecentContactsFilter: ContactsFilterInput;
};


export type MutationVerifyPasswordArgs = {
  _id: Scalars['ObjectId']['input'];
  password: Scalars['String']['input'];
};


export type MutationVisitedUrlsArgs = {
  urls: Array<Scalars['String']['input']>;
};

export type NoticePeriod = {
  __typename?: 'NoticePeriod';
  _id: Scalars['ObjectId']['output'];
  isNegotiable?: Maybe<Scalars['Boolean']['output']>;
  noticePeriod?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type NoticePeriodInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  isNegotiable?: InputMaybe<Scalars['Boolean']['input']>;
  noticePeriod?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type OauthSetting = {
  __typename?: 'OauthSetting';
  _id: Scalars['ObjectId']['output'];
  homeAccountId?: Maybe<Scalars['String']['output']>;
  linkedAccountId: Scalars['ObjectId']['output'];
  provider: Scalars['String']['output'];
};

export type OauthSettingInput = {
  _id: Scalars['ObjectId']['input'];
  homeAccountId?: InputMaybe<Scalars['String']['input']>;
  linkedAccountId?: InputMaybe<Scalars['ObjectId']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
};

export type OperationOptionsInput = {
  bypass?: InputMaybe<Scalars['Boolean']['input']>;
  followUp?: InputMaybe<MessageSendWithDelayInput>;
  messageSend?: InputMaybe<MessageSendWithDelayInput>;
};

export type Organization = {
  __typename?: 'Organization';
  _id: Scalars['ObjectId']['output'];
  calendlyUrl?: Maybe<Scalars['String']['output']>;
  communicationChannels?: Maybe<Array<CommunicationChannel>>;
  companyCrunchbaseUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  departments?: Maybe<Array<Scalars['String']['output']>>;
  description?: Maybe<Scalars['String']['output']>;
  emailDomainsAssociated?: Maybe<Scalars['Boolean']['output']>;
  emails?: Maybe<Array<Scalars['String']['output']>>;
  employeeCount?: Maybe<Scalars['Float']['output']>;
  employeeCountRange?: Maybe<Scalars['String']['output']>;
  facebookUrl?: Maybe<Scalars['String']['output']>;
  foundedOn?: Maybe<Scalars['DateTimeISO']['output']>;
  githubUrl?: Maybe<Scalars['String']['output']>;
  headquarter?: Maybe<MainLocation>;
  incorporationType?: Maybe<Scalars['String']['output']>;
  industries?: Maybe<Array<Scalars['String']['output']>>;
  industrySectors?: Maybe<Array<Scalars['String']['output']>>;
  instagramUrl?: Maybe<Scalars['String']['output']>;
  isHiring?: Maybe<Scalars['Boolean']['output']>;
  isSchool?: Maybe<Scalars['Boolean']['output']>;
  isStaffingCompany?: Maybe<Scalars['Boolean']['output']>;
  jobSearchLinkedinPageUrl?: Maybe<Scalars['String']['output']>;
  linkedinDetail?: Maybe<LinkedinDetail>;
  linkedinSalesUrl?: Maybe<Scalars['String']['output']>;
  linkedinUrl?: Maybe<Scalars['String']['output']>;
  locations?: Maybe<Array<MainLocation>>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  mobilePhones?: Maybe<Array<Scalars['String']['output']>>;
  name?: Maybe<Scalars['String']['output']>;
  operatingStatus?: Maybe<Scalars['String']['output']>;
  organizationTypes?: Maybe<Array<Scalars['String']['output']>>;
  pageUrls?: Maybe<Array<Scalars['String']['output']>>;
  phones?: Maybe<Array<Scalars['String']['output']>>;
  revenueAmount?: Maybe<Scalars['Float']['output']>;
  revenueCurrencyCode?: Maybe<Scalars['String']['output']>;
  tagline?: Maybe<Scalars['String']['output']>;
  tiktokUrl?: Maybe<Scalars['String']['output']>;
  twitterUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  xingUrl?: Maybe<Scalars['String']['output']>;
  youtubeUrl?: Maybe<Scalars['String']['output']>;
};

export type OrganizationInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  calendlyUrl?: InputMaybe<Scalars['String']['input']>;
  communicationChannels?: InputMaybe<Array<CommunicationChannelInput>>;
  companyCrunchbaseUrl?: InputMaybe<Scalars['String']['input']>;
  departments?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  emailDomainsAssociated?: InputMaybe<Scalars['Boolean']['input']>;
  emails?: InputMaybe<Array<Scalars['String']['input']>>;
  employeeCount?: InputMaybe<Scalars['Float']['input']>;
  employeeCountRange?: InputMaybe<Scalars['String']['input']>;
  facebookUrl?: InputMaybe<Scalars['String']['input']>;
  foundedOn?: InputMaybe<Scalars['DateTimeISO']['input']>;
  githubUrl?: InputMaybe<Scalars['String']['input']>;
  headquarter?: InputMaybe<MainLocationInput>;
  incorporationType?: InputMaybe<Scalars['String']['input']>;
  industries?: InputMaybe<Array<Scalars['String']['input']>>;
  industrySectors?: InputMaybe<Array<Scalars['String']['input']>>;
  instagramUrl?: InputMaybe<Scalars['String']['input']>;
  isHiring?: InputMaybe<Scalars['Boolean']['input']>;
  isSchool?: InputMaybe<Scalars['Boolean']['input']>;
  isStaffingCompany?: InputMaybe<Scalars['Boolean']['input']>;
  jobSearchLinkedinPageUrl?: InputMaybe<Scalars['String']['input']>;
  linkedinDetail?: InputMaybe<LinkedinDetailInput>;
  linkedinSalesUrl?: InputMaybe<Scalars['String']['input']>;
  linkedinUrl?: InputMaybe<Scalars['String']['input']>;
  locations?: InputMaybe<Array<MainLocationInput>>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  mobilePhones?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  operatingStatus?: InputMaybe<Scalars['String']['input']>;
  organizationDetail?: InputMaybe<Scalars['ObjectId']['input']>;
  organizationTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  pageUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  phones?: InputMaybe<Array<Scalars['String']['input']>>;
  revenueAmount?: InputMaybe<Scalars['Float']['input']>;
  revenueCurrencyCode?: InputMaybe<Scalars['String']['input']>;
  tagline?: InputMaybe<Scalars['String']['input']>;
  tiktokUrl?: InputMaybe<Scalars['String']['input']>;
  twitterUrl?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  xingUrl?: InputMaybe<Scalars['String']['input']>;
  youtubeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationLogoLinkedin = {
  __typename?: 'OrganizationLogoLinkedin';
  _id: Scalars['ObjectId']['output'];
  companyFounded?: Maybe<Scalars['DateTimeISO']['output']>;
  employeeCountRange?: Maybe<Scalars['String']['output']>;
  linkedinId?: Maybe<Scalars['String']['output']>;
  linkedinUrl?: Maybe<Scalars['String']['output']>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** The Full organization) */
  organizationId?: Maybe<Scalars['ObjectId']['output']>;
};

export type OrganizationLogoLinkedinInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  companyFounded?: InputMaybe<Scalars['DateTimeISO']['input']>;
  employeeCountRange?: InputMaybe<Scalars['String']['input']>;
  linkedinId?: InputMaybe<Scalars['String']['input']>;
  linkedinUrl?: InputMaybe<Scalars['String']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ObjectId']['input']>;
};

export type OrganizationType = {
  __typename?: 'OrganizationType';
  _id: Scalars['ObjectId']['output'];
  value: Scalars['String']['output'];
};

export type Origin = {
  __typename?: 'Origin';
  _id: Scalars['ObjectId']['output'];
  originSpecification?: Maybe<Scalars['String']['output']>;
  originSpecificationIdentifier?: Maybe<Scalars['Int']['output']>;
  originType: BaseTemplateStyleIconName;
};

export type OriginInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  originSpecification?: InputMaybe<Scalars['String']['input']>;
  originSpecificationIdentifier?: InputMaybe<Scalars['Int']['input']>;
  originType: BaseTemplateStyleIconNameInput;
};

export type OriginType = {
  __typename?: 'OriginType';
  _id: Scalars['ObjectId']['output'];
  iconName?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type PdlResponse = {
  __typename?: 'PDLResponse';
  contactsFilterInput: AbstractContactsFilter;
  jobinJobId?: Maybe<Scalars['ObjectId']['output']>;
  peopleSearchFilterId?: Maybe<Scalars['ObjectId']['output']>;
  profile?: Maybe<AbstractContact>;
  scrollToken?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PasswordStrengthObject = {
  __typename?: 'PasswordStrengthObject';
  guesses: Scalars['String']['output'];
  strength: Scalars['Int']['output'];
  suggestions: Array<Scalars['String']['output']>;
  time: Scalars['String']['output'];
  warning: Scalars['String']['output'];
};

export type PaymentItem = {
  __typename?: 'PaymentItem';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  assignedSeats: Scalars['Int']['output'];
  jobinProductId: Scalars['ObjectId']['output'];
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type PaymentItemInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  assignedSeats?: InputMaybe<Scalars['Int']['input']>;
  jobinProductId: Scalars['ObjectId']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type PayoutItem = {
  __typename?: 'PayoutItem';
  _id: Scalars['ObjectId']['output'];
  amount: MoneyAmountObj;
  note: Scalars['String']['output'];
  receiver: Scalars['String']['output'];
  recipientType: Scalars['String']['output'];
  senderItemId: Scalars['String']['output'];
};

export type PendingInvitationInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  contactId: Scalars['ObjectId']['input'];
  followUpMessage?: InputMaybe<FollowUpMessageInput>;
  linkedinUrl: Scalars['String']['input'];
  userLinkedinUrl?: InputMaybe<Scalars['String']['input']>;
};

export type Period = {
  __typename?: 'Period';
  _id: Scalars['ObjectId']['output'];
  from?: Maybe<Scalars['DateTimeISO']['output']>;
  isCurrent?: Maybe<Scalars['Boolean']['output']>;
  to?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type PeriodInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  from?: InputMaybe<Scalars['DateTimeISO']['input']>;
  isCurrent?: InputMaybe<Scalars['Boolean']['input']>;
  to?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type PersonalDetail = {
  __typename?: 'PersonalDetail';
  _id: Scalars['ObjectId']['output'];
  childrenNumber?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  dob?: Maybe<DateObj>;
  drivingLicence?: Maybe<Scalars['String']['output']>;
  maidenName?: Maybe<Scalars['String']['output']>;
  maritalStatus?: Maybe<Scalars['String']['output']>;
  militaryObligations?: Maybe<Scalars['String']['output']>;
  minority?: Maybe<Scalars['String']['output']>;
  nationality?: Maybe<Scalars['String']['output']>;
  placeOfBirth?: Maybe<MainLocation>;
  raceOrEthnicity?: Maybe<Scalars['String']['output']>;
  socialSecurityNumber?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  visa?: Maybe<Scalars['String']['output']>;
  workingPermit?: Maybe<Scalars['String']['output']>;
};

export type PersonalDetailInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  childrenNumber?: InputMaybe<Scalars['Int']['input']>;
  dob?: InputMaybe<DateObjInput>;
  drivingLicence?: InputMaybe<Scalars['String']['input']>;
  maidenName?: InputMaybe<Scalars['String']['input']>;
  maritalStatus?: InputMaybe<Scalars['String']['input']>;
  militaryObligations?: InputMaybe<Scalars['String']['input']>;
  minority?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  placeOfBirth?: InputMaybe<MainLocationInput>;
  raceOrEthnicity?: InputMaybe<Scalars['String']['input']>;
  socialSecurityNumber?: InputMaybe<Scalars['String']['input']>;
  visa?: InputMaybe<Scalars['String']['input']>;
  workingPermit?: InputMaybe<Scalars['String']['input']>;
};

export type Pipeline = {
  __typename?: 'Pipeline';
  _id: Scalars['ObjectId']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  exitStages?: Maybe<Array<SubStage>>;
  mainJobspec?: Maybe<MainJobspec>;
  name?: Maybe<Scalars['String']['output']>;
  /** Associate percentage of success at each stage. Used to evaluate the Probability of successful closing of this Business opportunity/Deal */
  probability?: Maybe<Scalars['Float']['output']>;
  /** To issue a alert/note/todo/message to customer/etc. if a lead spend too much time in one Stage */
  rottenInDays?: Maybe<Scalars['Float']['output']>;
  stages?: Maybe<Array<Stage>>;
  successfulExitStages?: Maybe<Array<SubStage>>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type PipelineIdAndJobTitle = {
  jobspecTitle: Scalars['String']['input'];
  pipelineId: Scalars['ObjectId']['input'];
};

export type PipelineInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  exitStages?: InputMaybe<Array<SubStageInput>>;
  mainJobspec?: InputMaybe<MainJobspecInput>;
  milestones?: InputMaybe<Array<StageInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  probability?: InputMaybe<Scalars['Float']['input']>;
  rottenInDays?: InputMaybe<Scalars['Float']['input']>;
  stages?: InputMaybe<Array<StageInput>>;
  successfulExitStages?: InputMaybe<Array<SubStageInput>>;
};

export type PipelineStagesWithCandidates = {
  __typename?: 'PipelineStagesWithCandidates';
  _id: Scalars['ObjectId']['output'];
  exitStageCandidates?: Maybe<Array<Contact>>;
  stagesWithCandidates: Array<StageWithCandidates>;
  successfulExitStageCandidates?: Maybe<Array<Contact>>;
};

export type PipelineStagesWithCandidatesCount = {
  __typename?: 'PipelineStagesWithCandidatesCount';
  _id: Scalars['ObjectId']['output'];
  stagesWithCandidatesCount: Array<StageWithCandidatesCount>;
  totalExitStageCandidates: Scalars['Int']['output'];
  totalSuccessfulExitStageCandidates: Scalars['Int']['output'];
};

export type PipelineTemplate = {
  __typename?: 'PipelineTemplate';
  _id: Scalars['ObjectId']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  exitStages?: Maybe<Array<SubStage>>;
  name?: Maybe<Scalars['String']['output']>;
  /** Associate percentage of success at each stage. Used to evaluate the Probability of successful closing of this Business opportunity/Deal */
  probability?: Maybe<Scalars['Float']['output']>;
  /** To issue a alert/note/todo/message to customer/etc. if a lead spend too much time in one Stage */
  rottenInDays?: Maybe<Scalars['Float']['output']>;
  stages?: Maybe<Array<Stage>>;
  successfulExitStages?: Maybe<Array<SubStage>>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type PipelineTemplateInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  exitStages?: InputMaybe<Array<SubStageInput>>;
  milestones?: InputMaybe<Array<StageInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  probability?: InputMaybe<Scalars['Float']['input']>;
  rottenInDays?: InputMaybe<Scalars['Float']['input']>;
  stages?: InputMaybe<Array<StageInput>>;
  successfulExitStages?: InputMaybe<Array<SubStageInput>>;
};

export type Plan = {
  __typename?: 'Plan';
  _id: Scalars['ObjectId']['output'];
  color: Scalars['String']['output'];
  iconName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  subtitle: Scalars['String']['output'];
};

export type PrivacyLevel = {
  __typename?: 'PrivacyLevel';
  _id: Scalars['ObjectId']['output'];
  description?: Maybe<Scalars['String']['output']>;
  iconName?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type PrivacyLevelInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  iconName?: InputMaybe<Scalars['String']['input']>;
  style?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type Privilege = {
  __typename?: 'Privilege';
  _id: Scalars['ObjectId']['output'];
  activeFeatureCodename: Scalars['String']['output'];
  isDaily?: Maybe<Scalars['Boolean']['output']>;
  isFixed?: Maybe<Scalars['Boolean']['output']>;
  jobinProductId: Scalars['ObjectId']['output'];
  limit?: Maybe<Scalars['Int']['output']>;
  used?: Maybe<Scalars['Int']['output']>;
  userId: Scalars['ObjectId']['output'];
  workGroupId: Scalars['ObjectId']['output'];
};

export type ProfExperience = {
  __typename?: 'ProfExperience';
  _id: Scalars['ObjectId']['output'];
  careerOverview?: Maybe<CareerOverview>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  descriptionResponsibility?: Maybe<Scalars['String']['output']>;
  employmentType?: Maybe<Scalars['String']['output']>;
  industries?: Maybe<Array<Scalars['String']['output']>>;
  isValidated?: Maybe<Scalars['Boolean']['output']>;
  lastUpdated?: Maybe<Array<Scalars['DateTimeISO']['output']>>;
  mainLocation?: Maybe<MainLocation>;
  managementLevel?: Maybe<BaseTemplateLevel>;
  moneyAmount?: Maybe<MoneyAmount>;
  organization?: Maybe<OrganizationLogoLinkedin>;
  period: Period;
  refereeIds?: Maybe<Array<Scalars['ObjectId']['output']>>;
  roleTitle?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type ProfExperienceInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  careerOverview?: InputMaybe<CareerOverviewInput>;
  descriptionResponsibility?: InputMaybe<Scalars['String']['input']>;
  employmentType?: InputMaybe<Scalars['String']['input']>;
  industries?: InputMaybe<Array<Scalars['String']['input']>>;
  isValidated?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdated?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  mainLocation?: InputMaybe<MainLocationInput>;
  managementLevel?: InputMaybe<BaseTemplateLevelInput>;
  moneyAmount?: InputMaybe<MoneyAmountInput>;
  organization?: InputMaybe<OrganizationLogoLinkedinInput>;
  period?: InputMaybe<PeriodInput>;
  refereeIds?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  roleTitle?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  JobinDailyQuotas?: Maybe<JobinDailyQuotas>;
  accomplishmentType: AccomplishmentType;
  accomplishmentTypes: Array<AccomplishmentType>;
  account: JobinAccount;
  accountByLinkedinUrl?: Maybe<JobinAccount>;
  accountByPageUrl?: Maybe<JobinAccount>;
  accountTag: AccountTag;
  accountTags: Array<AccountTag>;
  accountType: AccountType;
  accountTypes: Array<AccountType>;
  accounts: Array<JobinAccount>;
  activePipeline?: Maybe<Pipeline>;
  activeSubscriptions: Array<ActiveSubscription>;
  affiliateLeads: Array<AffiliateLead>;
  affiliatePayouts: Array<AffiliatePayout>;
  affiliateTotalPayouts: AffiliateTotalPayout;
  benefitTemplate: BenefitTemplate;
  benefitTemplates: Array<BenefitTemplate>;
  benefitType: BenefitType;
  benefitTypes: Array<BenefitType>;
  /** @deprecated Moved to agendaJobs */
  bestMatchMainLocationFromWorldLocation: MainLocationWorldLocationMatch;
  /** @deprecated Moved to agendaJobs */
  bestMatchMainLocationFromWorldLocationObj: MainLocationWorldLocationMatch;
  chatGptPrompt: ChatGptPrompt;
  chatGptPromptOutput: JobyChatGptResponse;
  chatGptPrompts: Array<ChatGptPrompt>;
  chatGptPublicPrompt?: Maybe<ChatGptPublicPrompt>;
  chatGptPublicPrompts: Array<ChatGptPublicPrompt>;
  checkAvailabilityOfAffiliateCodes: AffiliateCodeAvailability;
  checkIfShouldSendFollowUp: Scalars['Boolean']['output'];
  checkIfShouldSendFollowUpSales: Scalars['Boolean']['output'];
  checkIfSpecialBypass: Scalars['Boolean']['output'];
  checkJobinJobIsStopped: Scalars['Boolean']['output'];
  checkPasswordStrength: PasswordStrengthObject;
  cities: Array<BaseTemplate>;
  communicationChannelType: CommunicationChannelType;
  communicationChannelTypes: Array<CommunicationChannelType>;
  completedContactDripCampaignStage: CompletedContactDripCampaignStage;
  completedContactDripCampaignStages: Array<CompletedContactDripCampaignStage>;
  completedDripCampaignsFromContactId: Array<CompletedContactDripCampaignStage>;
  contact?: Maybe<Contact>;
  contactByPageUrl?: Maybe<Contact>;
  contactBySocialProfileId?: Maybe<Contact>;
  contactCustomFields?: Maybe<Array<CustomField>>;
  contactIdByLinkedinUrl?: Maybe<Scalars['ObjectId']['output']>;
  contactNotesAvailableByContactId: Scalars['Boolean']['output'];
  contactNotesByContactId: Array<ContactNote>;
  contactPersons: Array<ContactPerson>;
  contactSubtype: ContactSubtype;
  contactSubtypes: Array<ContactSubtype>;
  contactTag: ContactTag;
  contactTags: Array<ContactTag>;
  contacts: Array<Contact>;
  contactsById: Array<Contact>;
  contactsFilter: ContactsFilter;
  contactsFilterByName?: Maybe<ContactsFilter>;
  contactsFilters: Array<ContactsFilter>;
  countAccounts: Scalars['Int']['output'];
  countAffiliateLeads: Array<AffiliateLead>;
  countBypassInvitationsSent: Array<Scalars['Int']['output']>;
  countContacts: Scalars['Int']['output'];
  countDuplicatePairsToIdentify: Scalars['Int']['output'];
  countDuplicatePairsToMerge: Scalars['Int']['output'];
  countInvitationsSent: Scalars['Int']['output'];
  countJobinEvents: Scalars['Int']['output'];
  countJobinJobs: Scalars['Int']['output'];
  countJobspecs: Scalars['Int']['output'];
  countLinkedinConnections: Scalars['Int']['output'];
  countMainAffiliateLeadsTotals: AffiliateLeadTotals;
  countMessagesSentAndReceived: MessagesSentAndReceivedCount;
  countWorkGroupMembers: Scalars['Int']['output'];
  countries: Array<Country>;
  country: Country;
  countryCode?: Maybe<Scalars['String']['output']>;
  couponByName: Coupon;
  csvColumnAssociationGroup?: Maybe<CsvColumnAssociationGroup>;
  currencyFromIp?: Maybe<Currency>;
  currencyTemplate: CurrencyTemplate;
  currencyTemplateFromCurrencyCode: CurrencyTemplate;
  currencyTemplates: Array<CurrencyTemplate>;
  currentSubscription?: Maybe<JobinSubscription>;
  currentUser: User;
  customSubscriptionCalculateCheckoutAmount: CheckoutAmount;
  dailyThrottleLimitJobinJob?: Maybe<Scalars['Int']['output']>;
  defaultEmailSender: EmailSender;
  department: Department;
  departments: Array<Department>;
  dripCampaign?: Maybe<DripCampaign>;
  dripCampaignFromContactId: DripCampaignAndContact;
  dripCampaignIsIncomplete: Scalars['Boolean']['output'];
  dripCampaigns: Array<DripCampaign>;
  dripStageOptionByPositionCode?: Maybe<DripStageOption>;
  dripStageOptionByStageId?: Maybe<DripStageOption>;
  dripStageOptions: Array<DripStageOption>;
  duplicate?: Maybe<DuplicateContainer>;
  educationalLevel: EducationalLevel;
  educationalLevels: Array<EducationalLevel>;
  emailSender: EmailSender;
  emailSenders: Array<EmailSender>;
  emailSendersByWorkGroup: Array<EmailSendersByWorkGroup>;
  emailTemplate: EmailTemplate;
  emailTemplateType: EmailTemplateType;
  emailTemplateTypes: Array<EmailTemplateType>;
  emailTemplates: Array<EmailTemplate>;
  emailTemplatesByType: Array<EmailTemplate>;
  employeeCountRange: EmployeeCountRange;
  employeeCountRanges: Array<EmployeeCountRange>;
  enterpriseGetCheckoutAmount: CheckoutAmount;
  evaluationStage: EvaluationStage;
  evaluationStages: Array<EvaluationStage>;
  eventType: EventType;
  eventTypes: Array<EventType>;
  exitStageTemplate: ExitStageTemplate;
  exitStageTemplates: Array<ExitStageTemplate>;
  field: Field;
  fieldGroup: FieldGroup;
  fieldGroups: Array<FieldGroup>;
  fieldGroupsByFieldGroupType: Array<FieldGroup>;
  fields: Array<Field>;
  fieldsByFieldGroup: Array<Field>;
  fieldsById: Array<Field>;
  fieldsByInputObjectName: Array<Field>;
  fieldsUsedInTemplatesByInputObjectName: Array<Field>;
  findAndLockJobinJob?: Maybe<JobinJob>;
  frequentlyAskedQuestion: FrequentlyAskedQuestion;
  frequentlyAskedQuestionType: FrequentlyAskedQuestionType;
  frequentlyAskedQuestionTypes: Array<FrequentlyAskedQuestionType>;
  frequentlyAskedQuestions: Array<FrequentlyAskedQuestion>;
  fullContactPersons: Array<FullContactPerson>;
  funnelFromPipelineId?: Maybe<Funnel>;
  generateInvoiceAndDownloadLink: Scalars['String']['output'];
  getExtensionVersion: Scalars['String']['output'];
  getLinkedinUrlsOfOutDatedSocialProfiles: Array<LinkedinUrlAndId>;
  getManualMerge?: Maybe<DuplicateContainer>;
  getMessagePreview: SendEmail;
  getMicrosoftAuthRedirectLink: Scalars['String']['output'];
  getOutdatedConversations: Array<LinkedinConversation>;
  getOutdatedSalesConversations: Array<LinkedinSalesConversation>;
  gravatarUrlFromEmail?: Maybe<Scalars['String']['output']>;
  hasDuplicates: Scalars['Boolean']['output'];
  hasPendingConnectionImports?: Maybe<Scalars['Int']['output']>;
  hasUpToDateContact: Scalars['Boolean']['output'];
  hasUpToDateFullOrganization: Scalars['Boolean']['output'];
  hasUpToDateFullSocialProfile: Scalars['Boolean']['output'];
  helpdeskMessagesByThreadId: Array<HelpdeskMessage>;
  idealCandidateFilter: IdealCandidateFilter;
  idealCandidateFilterByAssignedJobspec?: Maybe<IdealCandidateFilter>;
  idealCandidateFilters: Array<IdealCandidateFilter>;
  indicator: Indicator;
  indicators: Array<Indicator>;
  industries: Array<Industry>;
  industry: Industry;
  industrySector: IndustrySector;
  industrySectors: Array<IndustrySector>;
  isWorkgroupMember: Scalars['Boolean']['output'];
  jobinAccountNotesByAccountId: Array<JobinAccountNote>;
  jobinCompletedJob: JobinCompletedJob;
  jobinCompletedJobs: Array<JobinCompletedJob>;
  jobinDailyQuotaByEventTypeIds?: Maybe<JobinQuotaAndLimit>;
  jobinDailyQuotas?: Maybe<JobinDailyQuotas>;
  jobinEvents: Array<JobinEvent>;
  jobinFeatureGroups: Array<JobinFeatureGroup>;
  jobinFeatures: Array<JobinFeature>;
  jobinInvoices: Array<JobinInvoice>;
  jobinJob: JobinJob;
  jobinJobs: Array<JobinJob>;
  jobinProductActiveFeature?: Maybe<ActiveFeature>;
  jobinProducts: Array<JobinProduct>;
  jobinSolution: JobinSolution;
  jobinSolutions: Array<JobinSolution>;
  jobinSubFeatures: Array<JobinSubFeature>;
  jobseekerAim: JobseekerAim;
  jobseekerAims: Array<JobseekerAim>;
  jobseekerStatus: JobseekerStatus;
  jobseekerStatuses: Array<JobseekerStatus>;
  jobspec: Jobspec;
  jobspecDescriptionTemplate: JobspecDescriptionTemplate;
  jobspecDescriptionTemplates: Array<JobspecDescriptionTemplate>;
  jobspecDescriptionTemplatesByType: Array<JobspecDescriptionTemplate>;
  jobspecDescriptionType: JobspecDescriptionType;
  jobspecDescriptionTypes: Array<JobspecDescriptionType>;
  jobspecNote: JobspecNote;
  jobspecNotes: Array<JobspecNote>;
  jobspecNotesByJobspecId: Array<JobspecNote>;
  jobspecStatuses: Array<JobspecStatus>;
  jobspecTag: JobspecTag;
  jobspecTags: Array<JobspecTag>;
  jobspecType: JobspecType;
  jobspecTypes: Array<JobspecType>;
  jobspecTypesByType: Array<JobspecType>;
  jobspecs: Array<Jobspec>;
  jobspecsByAccountId: Array<Jobspec>;
  jobspecsByEmployers: Array<AccountWithJobspecs>;
  jobspecsById: Array<Jobspec>;
  jobyChatGptPrompt: JobyChatGptPrompt;
  jobyChatGptPrompts: Array<JobyChatGptPrompt>;
  languageName: LanguageName;
  languageNames: Array<LanguageName>;
  latestEvent?: Maybe<JobinEvent>;
  latestLinkedinConnectionConnectedOnDate: LatestLinkedinConnectionConnectedOnDate;
  linkedinAccount?: Maybe<LinkedinAccountWithDefaultCountry>;
  linkedinAnalytic?: Maybe<LinkedinAnalytic>;
  linkedinAnalytics: Array<LinkedinAnalytic>;
  linkedinConversationsByParticipantUrls?: Maybe<Array<LinkedinConversation>>;
  linkedinSalesConversationByParticipantUrls?: Maybe<LinkedinSalesConversation>;
  mainUserByEmail?: Maybe<User>;
  maritalStatus: MaritalStatus;
  maritalStatuses: Array<MaritalStatus>;
  messageTemplate: MessageTemplate;
  messageTemplates: Array<MessageTemplate>;
  messageTemplatesByType: Array<MessageTemplate>;
  microsoftLinkedAccounts: Array<MicrosoftLinkedAccount>;
  moneyAmountPercentageType: MoneyAmountPercentageType;
  moneyAmountPercentageTypes: Array<MoneyAmountPercentageType>;
  moneyAmountType: MoneyAmountType;
  moneyAmountTypes: Array<MoneyAmountType>;
  myLinkedinAnalyticsCurrent?: Maybe<LinkedinAnalytic>;
  myLinkedinAnalyticsTimeline?: Maybe<LinkedinAnalyticTimeline>;
  myLinkedinAnalyticsTotals?: Maybe<LinkedinAnalyticTotals>;
  organization?: Maybe<Organization>;
  organizationType: OrganizationType;
  organizationTypes: Array<OrganizationType>;
  organizations: Array<Organization>;
  origin: Origin;
  originType: OriginType;
  originTypes: Array<OriginType>;
  origins: Array<Origin>;
  pdlAutocomplete: Array<BaseTemplate>;
  pipeline: Pipeline;
  pipelineByJobspecId?: Maybe<Pipeline>;
  pipelineStagesWithCandidates: PipelineStagesWithCandidates;
  pipelineStagesWithCandidatesCount: PipelineStagesWithCandidatesCount;
  pipelineTemplate: PipelineTemplate;
  pipelineTemplates: Array<PipelineTemplate>;
  pipelines: Array<Pipeline>;
  plans: Array<Plan>;
  postalCodes: Array<BaseTemplate>;
  privacyLevel: PrivacyLevel;
  privacyLevels: Array<PrivacyLevel>;
  privilegeByCodename?: Maybe<Privilege>;
  privileges: Array<Privilege>;
  privilegesByCodenames: Array<Privilege>;
  publicUser: User;
  publicUserByPageUrl?: Maybe<User>;
  recentContactsFilter: RecentContactsFilter;
  recentContactsFilters: Array<RecentContactsFilter>;
  recommendedSubscriptionUpgrade?: Maybe<RecommendedProduct>;
  regions: Array<BaseTemplate>;
  removeDuplicateFromPair: Scalars['Int']['output'];
  replyIdentifications?: Maybe<ReplyIdentifications>;
  replyTag?: Maybe<ReplyTag>;
  replyTags: Array<ReplyTag>;
  role: Role;
  roleTitle: RoleTitle;
  roleTitles: Array<RoleTitle>;
  roles: Array<Role>;
  skillName: SkillName;
  skillNames: Array<SkillName>;
  skillType: SkillType;
  skillTypes: Array<SkillType>;
  smtpTransportVerifyConnection: SmtpTransportVerification;
  socialProfileFromFilterId?: Maybe<PdlResponse>;
  stageTemplate: StageTemplate;
  stageTemplates: Array<StageTemplate>;
  subStageTemplate: SubStageTemplate;
  subStageTemplates: Array<SubStageTemplate>;
  subscriptionCalculateCheckoutAmount: CheckoutAmount;
  successfulExitStageTemplate: SuccessfulExitStageTemplate;
  successfulExitStageTemplates: Array<SuccessfulExitStageTemplate>;
  test: Scalars['Boolean']['output'];
  testAuth: Array<Contact>;
  timeDelay: TimeDelay;
  timeDelays: Array<TimeDelay>;
  timeUnit: TimeUnit;
  timeUnits: Array<TimeUnit>;
  totalInvitationsSentAndPending: TotalInvitationsSentAndPending;
  user?: Maybe<User>;
  userAdditionalDetail?: Maybe<UserAdditionalDetail>;
  userByEmail?: Maybe<User>;
  userCountry?: Maybe<Country>;
  userIdByEmail?: Maybe<Scalars['ObjectId']['output']>;
  userIsWorkGroupAdmin: Scalars['Boolean']['output'];
  userLogin?: Maybe<User>;
  users: Array<User>;
  usesChatGptJobspec: Scalars['Boolean']['output'];
  verifyVatId: VatIdResponse;
  volunteerCause: VolunteerCause;
  volunteerCauses: Array<VolunteerCause>;
  workGroup: WorkGroup;
  workGroupMembers: Array<User>;
  workGroupUser?: Maybe<User>;
  workGroups: Array<WorkGroup>;
  workInProgressFeedbackByFeature: WorkInProgressFeedback;
  worldLocation?: Maybe<MainLocationWorldLocationMatch>;
};


export type QueryAccomplishmentTypeArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryAccomplishmentTypesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAccountArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryAccountByLinkedinUrlArgs = {
  linkedinUrl: Scalars['String']['input'];
};


export type QueryAccountByPageUrlArgs = {
  url: Scalars['String']['input'];
};


export type QueryAccountTagArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryAccountTagsArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAccountTypeArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryAccountTypesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAccountsArgs = {
  _ids?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  contactsAvailability?: InputMaybe<ContactsAvailabilityFilterInput>;
  employeeCountRanges?: InputMaybe<Array<Scalars['String']['input']>>;
  industries?: InputMaybe<Array<Scalars['String']['input']>>;
  industrySectors?: InputMaybe<Array<Scalars['String']['input']>>;
  locations?: InputMaybe<Array<MainLocationFilterInput>>;
  mainLocationCoord?: InputMaybe<MainLocationCoordFilter>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ContactsSortByInput>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAffiliateLeadsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAffiliatePayoutsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBenefitTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryBenefitTemplatesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBenefitTypeArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryBenefitTypesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBestMatchMainLocationFromWorldLocationArgs = {
  locationString: Scalars['String']['input'];
};


export type QueryBestMatchMainLocationFromWorldLocationObjArgs = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};


export type QueryChatGptPromptArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryChatGptPromptOutputArgs = {
  messages: Array<ChatGptMessage>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryChatGptPromptsArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryChatGptPublicPromptArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryChatGptPublicPromptsArgs = {
  categoryCode?: InputMaybe<Scalars['String']['input']>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCheckAvailabilityOfAffiliateCodesArgs = {
  couponCode?: InputMaybe<Scalars['String']['input']>;
  linkCode?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCheckIfShouldSendFollowUpArgs = {
  dripCampaignId?: InputMaybe<Scalars['ObjectId']['input']>;
  linkedinConversation: LinkedinConversationInput;
  linkedinConversationText: Scalars['String']['input'];
  participantLinkedinUrls: Array<Scalars['String']['input']>;
};


export type QueryCheckIfShouldSendFollowUpSalesArgs = {
  dripCampaignId?: InputMaybe<Scalars['ObjectId']['input']>;
  linkedinConversation: LinkedinConversationInput;
  linkedinConversationText: Scalars['String']['input'];
  participantLinkedinUrls: Array<Scalars['String']['input']>;
};


export type QueryCheckJobinJobIsStoppedArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryCheckPasswordStrengthArgs = {
  password: Scalars['String']['input'];
};


export type QueryCitiesArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCommunicationChannelTypeArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryCommunicationChannelTypesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCompletedContactDripCampaignStageArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryCompletedContactDripCampaignStagesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCompletedDripCampaignsFromContactIdArgs = {
  contactId: Scalars['ObjectId']['input'];
};


export type QueryContactArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryContactByPageUrlArgs = {
  url: Scalars['String']['input'];
};


export type QueryContactBySocialProfileIdArgs = {
  socialProfileId: Scalars['ObjectId']['input'];
};


export type QueryContactCustomFieldsArgs = {
  contactId: Scalars['String']['input'];
};


export type QueryContactIdByLinkedinUrlArgs = {
  linkedinUrl: Scalars['String']['input'];
};


export type QueryContactNotesAvailableByContactIdArgs = {
  contactId: Scalars['ObjectId']['input'];
};


export type QueryContactNotesByContactIdArgs = {
  contactId: Scalars['ObjectId']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryContactPersonsArgs = {
  accountId?: InputMaybe<Scalars['ObjectId']['input']>;
  dealId?: InputMaybe<Scalars['ObjectId']['input']>;
  jobspecId?: InputMaybe<Scalars['ObjectId']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryContactSubtypeArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryContactSubtypesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryContactTagArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryContactTagsArgs = {
  _ids?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ContactsSortByInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryContactsArgs = {
  filter: ContactsFilterInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryContactsByIdArgs = {
  _ids: Array<Scalars['ObjectId']['input']>;
};


export type QueryContactsFilterArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryContactsFilterByNameArgs = {
  filterName: Scalars['String']['input'];
};


export type QueryContactsFiltersArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCountAccountsArgs = {
  _ids?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  contactsAvailability?: InputMaybe<ContactsAvailabilityFilterInput>;
  employeeCountRanges?: InputMaybe<Array<Scalars['String']['input']>>;
  industries?: InputMaybe<Array<Scalars['String']['input']>>;
  industrySectors?: InputMaybe<Array<Scalars['String']['input']>>;
  locations?: InputMaybe<Array<MainLocationFilterInput>>;
  mainLocationCoord?: InputMaybe<MainLocationCoordFilter>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<ContactsSortByInput>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryCountBypassInvitationsSentArgs = {
  fromDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  toDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
};


export type QueryCountContactsArgs = {
  filter: ContactsFilterInput;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCountDuplicatePairsToIdentifyArgs = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
};


export type QueryCountDuplicatePairsToMergeArgs = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
};


export type QueryCountInvitationsSentArgs = {
  fromDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  toDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userLinkedinUrl?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCountJobinEventsArgs = {
  accountId?: InputMaybe<Scalars['ObjectId']['input']>;
  beforeDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  contactId?: InputMaybe<Scalars['ObjectId']['input']>;
  filterByUserId?: InputMaybe<Scalars['ObjectId']['input']>;
  jobspecId?: InputMaybe<Scalars['ObjectId']['input']>;
  typeName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCountJobinJobsArgs = {
  codename?: InputMaybe<Scalars['String']['input']>;
  operationType?: InputMaybe<Scalars['String']['input']>;
  queue?: InputMaybe<Scalars['String']['input']>;
  selectedUserId?: InputMaybe<Scalars['ObjectId']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCountJobspecsArgs = {
  jobspecStatus?: InputMaybe<Array<Scalars['String']['input']>>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  show?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCountMessagesSentAndReceivedArgs = {
  fromDate: Scalars['DateTimeISO']['input'];
  toDate: Scalars['DateTimeISO']['input'];
  userLinkedinUrl?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCountWorkGroupMembersArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryCountriesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCountryArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryCountryCodeArgs = {
  country: Scalars['String']['input'];
};


export type QueryCouponByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryCsvColumnAssociationGroupArgs = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  csvHeaders?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryCurrencyTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryCurrencyTemplateFromCurrencyCodeArgs = {
  currencyCode: Scalars['String']['input'];
};


export type QueryCurrencyTemplatesArgs = {
  onlyImportant?: InputMaybe<Scalars['Boolean']['input']>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCustomSubscriptionCalculateCheckoutAmountArgs = {
  token: Scalars['String']['input'];
};


export type QueryDailyThrottleLimitJobinJobArgs = {
  _id: Scalars['ObjectId']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDepartmentArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryDepartmentsArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDripCampaignArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryDripCampaignFromContactIdArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryDripCampaignIsIncompleteArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryDripCampaignsArgs = {
  emailSenderId?: InputMaybe<Scalars['ObjectId']['input']>;
  fromLinkedinUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortByEmailSenderId?: InputMaybe<Scalars['Int']['input']>;
  sortByFromLinkedinUrl?: InputMaybe<Scalars['Int']['input']>;
  sortByName?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['ObjectId']['input']>;
};


export type QueryDripStageOptionByPositionCodeArgs = {
  dripCampaignId: Scalars['ObjectId']['input'];
  positionCode: Scalars['String']['input'];
  useNextPositionCode?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDripStageOptionByStageIdArgs = {
  dripStageId: Scalars['ObjectId']['input'];
};


export type QueryDripStageOptionsArgs = {
  dripCampaignId: Scalars['ObjectId']['input'];
};


export type QueryDuplicateArgs = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  skip?: Scalars['Int']['input'];
};


export type QueryEducationalLevelArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryEducationalLevelsArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEmailSenderArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryEmailSendersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEmailSendersByWorkGroupArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEmailTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryEmailTemplateTypeArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryEmailTemplateTypesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEmailTemplatesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEmailTemplatesByTypeArgs = {
  emailTemplateTypeId?: InputMaybe<Scalars['ObjectId']['input']>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEmployeeCountRangeArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryEmployeeCountRangesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEnterpriseGetCheckoutAmountArgs = {
  token: Scalars['String']['input'];
};


export type QueryEvaluationStageArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryEvaluationStagesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEventTypeArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryEventTypesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryExitStageTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryExitStageTemplatesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFieldArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryFieldGroupArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryFieldGroupsArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFieldGroupsByFieldGroupTypeArgs = {
  fieldGroupTypeId: Scalars['ObjectId']['input'];
};


export type QueryFieldsArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFieldsByFieldGroupArgs = {
  fieldGroupId: Scalars['ObjectId']['input'];
};


export type QueryFieldsByIdArgs = {
  _ids: Array<Scalars['ObjectId']['input']>;
};


export type QueryFieldsByInputObjectNameArgs = {
  inputObjectNames: Array<Scalars['String']['input']>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFieldsUsedInTemplatesByInputObjectNameArgs = {
  inputObjectName: Scalars['String']['input'];
};


export type QueryFindAndLockJobinJobArgs = {
  queue: Scalars['String']['input'];
};


export type QueryFrequentlyAskedQuestionArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryFrequentlyAskedQuestionTypeArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryFrequentlyAskedQuestionTypesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFrequentlyAskedQuestionsArgs = {
  frequentlyAskedQuestionTags?: InputMaybe<Array<Scalars['String']['input']>>;
  frequentlyAskedQuestionTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFullContactPersonsArgs = {
  accountId?: InputMaybe<Scalars['ObjectId']['input']>;
  dealId?: InputMaybe<Scalars['ObjectId']['input']>;
  jobspecId?: InputMaybe<Scalars['ObjectId']['input']>;
  loadAccounts?: InputMaybe<Scalars['Boolean']['input']>;
  loadJobspecs?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFunnelFromPipelineIdArgs = {
  pipelineId: Scalars['ObjectId']['input'];
};


export type QueryGenerateInvoiceAndDownloadLinkArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryGetLinkedinUrlsOfOutDatedSocialProfilesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userLinkedinUrl: Scalars['String']['input'];
};


export type QueryGetManualMergeArgs = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  skip?: Scalars['Int']['input'];
};


export type QueryGetMessagePreviewArgs = {
  chatGptPostCleaning?: InputMaybe<Scalars['Boolean']['input']>;
  contactId?: InputMaybe<Scalars['ObjectId']['input']>;
  emailSenderId?: InputMaybe<Scalars['ObjectId']['input']>;
  filter?: InputMaybe<ContactsFilterInput>;
  jobspecId?: InputMaybe<Scalars['ObjectId']['input']>;
  message: SendEmailInput;
};


export type QueryGetMicrosoftAuthRedirectLinkArgs = {
  businessOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetOutdatedConversationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetOutdatedSalesConversationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGravatarUrlFromEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryHasUpToDateContactArgs = {
  url: Scalars['String']['input'];
  urlFieldName: Scalars['String']['input'];
};


export type QueryHasUpToDateFullOrganizationArgs = {
  url: Scalars['String']['input'];
  urlFieldName: Scalars['String']['input'];
};


export type QueryHasUpToDateFullSocialProfileArgs = {
  url: Scalars['String']['input'];
  urlFieldName: Scalars['String']['input'];
};


export type QueryHelpdeskMessagesByThreadIdArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  threadId: Scalars['ObjectId']['input'];
};


export type QueryIdealCandidateFilterArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryIdealCandidateFilterByAssignedJobspecArgs = {
  assignedJobspecId: Scalars['ObjectId']['input'];
};


export type QueryIdealCandidateFiltersArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIndicatorArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryIndicatorsArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIndustriesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIndustryArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryIndustrySectorArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryIndustrySectorsArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIsWorkgroupMemberArgs = {
  userId: Scalars['ObjectId']['input'];
  workGroupId: Scalars['ObjectId']['input'];
};


export type QueryJobinAccountNotesByAccountIdArgs = {
  jobinAccountId: Scalars['ObjectId']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJobinCompletedJobArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryJobinCompletedJobsArgs = {
  selectedUserId?: InputMaybe<Scalars['ObjectId']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJobinDailyQuotaByEventTypeIdsArgs = {
  eventTypeIds: Array<Scalars['ObjectId']['input']>;
};


export type QueryJobinEventsArgs = {
  accountId?: InputMaybe<Scalars['ObjectId']['input']>;
  beforeDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  contactId?: InputMaybe<Scalars['ObjectId']['input']>;
  filterByUserId?: InputMaybe<Scalars['ObjectId']['input']>;
  jobspecId?: InputMaybe<Scalars['ObjectId']['input']>;
  take?: Scalars['Int']['input'];
  typeName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryJobinFeatureGroupsArgs = {
  solutionId?: InputMaybe<Scalars['ObjectId']['input']>;
};


export type QueryJobinFeaturesArgs = {
  jobinFeatureGroupId?: InputMaybe<Scalars['ObjectId']['input']>;
};


export type QueryJobinInvoicesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJobinJobArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryJobinJobsArgs = {
  codename?: InputMaybe<Scalars['String']['input']>;
  operationType?: InputMaybe<Scalars['String']['input']>;
  queue?: InputMaybe<Scalars['String']['input']>;
  selectedUserId?: InputMaybe<Scalars['ObjectId']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJobinProductActiveFeatureArgs = {
  _id: Scalars['ObjectId']['input'];
  codename: Scalars['String']['input'];
};


export type QueryJobinProductsArgs = {
  _ids?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  solutionId?: InputMaybe<Scalars['ObjectId']['input']>;
};


export type QueryJobinSolutionArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryJobinSolutionsArgs = {
  _ids?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
};


export type QueryJobinSubFeaturesArgs = {
  jobinFeatureId: Scalars['ObjectId']['input'];
};


export type QueryJobseekerAimArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryJobseekerAimsArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJobseekerStatusArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryJobseekerStatusesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJobspecArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryJobspecDescriptionTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryJobspecDescriptionTemplatesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJobspecDescriptionTemplatesByTypeArgs = {
  jobspecDescriptionTemplateTypeId?: InputMaybe<Scalars['ObjectId']['input']>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJobspecDescriptionTypeArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryJobspecDescriptionTypesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJobspecNoteArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryJobspecNotesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJobspecNotesByJobspecIdArgs = {
  jobspecId: Scalars['ObjectId']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJobspecTagArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryJobspecTagsArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJobspecTypeArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryJobspecTypesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJobspecTypesByTypeArgs = {
  jobspecTypeTypeId?: InputMaybe<Scalars['ObjectId']['input']>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJobspecsArgs = {
  jobspecStatus?: InputMaybe<Array<Scalars['String']['input']>>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ContactsSortByInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJobspecsByAccountIdArgs = {
  accountId: Scalars['ObjectId']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJobspecsByEmployersArgs = {
  jobspecStatus?: InputMaybe<Array<Scalars['String']['input']>>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJobspecsByIdArgs = {
  _ids: Array<Scalars['ObjectId']['input']>;
};


export type QueryJobyChatGptPromptArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryJobyChatGptPromptsArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLanguageNameArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryLanguageNamesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLatestEventArgs = {
  accountId?: InputMaybe<Scalars['ObjectId']['input']>;
  beforeDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  contactId?: InputMaybe<Scalars['ObjectId']['input']>;
  filterByUserId?: InputMaybe<Scalars['ObjectId']['input']>;
  jobspecId?: InputMaybe<Scalars['ObjectId']['input']>;
  typeName?: InputMaybe<Scalars['String']['input']>;
  userSocialProfileId?: InputMaybe<Scalars['ObjectId']['input']>;
};


export type QueryLinkedinAnalyticArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryLinkedinAnalyticsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLinkedinConversationsByParticipantUrlsArgs = {
  participantLinkedinUrls: Array<Scalars['String']['input']>;
};


export type QueryLinkedinSalesConversationByParticipantUrlsArgs = {
  participantLinkedinUrls: Array<Scalars['String']['input']>;
};


export type QueryMainUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryMaritalStatusArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryMaritalStatusesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMessageTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryMessageTemplatesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMessageTemplatesByTypeArgs = {
  emailTemplateTypeId?: InputMaybe<Scalars['ObjectId']['input']>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMoneyAmountPercentageTypeArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryMoneyAmountPercentageTypesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMoneyAmountTypeArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryMoneyAmountTypesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMyLinkedinAnalyticsCurrentArgs = {
  userLinkedinUrl?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMyLinkedinAnalyticsTimelineArgs = {
  fromDate: Scalars['DateTimeISO']['input'];
  toDate: Scalars['DateTimeISO']['input'];
  userLinkedinUrl?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMyLinkedinAnalyticsTotalsArgs = {
  fromDate: Scalars['DateTimeISO']['input'];
  toDate: Scalars['DateTimeISO']['input'];
  userLinkedinUrl?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrganizationArgs = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  linkedinUrl?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrganizationTypeArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryOrganizationTypesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOrganizationsArgs = {
  organizationTypeId?: InputMaybe<Scalars['ObjectId']['input']>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOriginArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryOriginTypeArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryOriginTypesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOriginsArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPdlAutocompleteArgs = {
  field: Scalars['String']['input'];
  text: Scalars['String']['input'];
};


export type QueryPipelineArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryPipelineByJobspecIdArgs = {
  jobspecId: Scalars['ObjectId']['input'];
};


export type QueryPipelineStagesWithCandidatesArgs = {
  filter: ContactsFilterInput;
  invertSort?: InputMaybe<Scalars['Boolean']['input']>;
  pipelineId: Scalars['ObjectId']['input'];
};


export type QueryPipelineStagesWithCandidatesCountArgs = {
  filter: ContactsFilterInput;
  invertSort?: InputMaybe<Scalars['Boolean']['input']>;
  pipelineId: Scalars['ObjectId']['input'];
};


export type QueryPipelineTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryPipelineTemplatesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPipelinesArgs = {
  _ids?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPlansArgs = {
  noFree?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPostalCodesArgs = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPrivacyLevelArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryPrivacyLevelsArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPrivilegeByCodenameArgs = {
  codename: Scalars['String']['input'];
};


export type QueryPrivilegesByCodenamesArgs = {
  codenames: Array<Scalars['String']['input']>;
};


export type QueryPublicUserArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryPublicUserByPageUrlArgs = {
  url: Scalars['String']['input'];
};


export type QueryRecentContactsFilterArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryRecentContactsFiltersArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRecommendedSubscriptionUpgradeArgs = {
  activeFeatureCodename: Scalars['String']['input'];
  limitExceeded?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRegionsArgs = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRemoveDuplicateFromPairArgs = {
  accountId?: InputMaybe<Scalars['ObjectId']['input']>;
  beforeDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  contactId?: InputMaybe<Scalars['ObjectId']['input']>;
  filterByUserId?: InputMaybe<Scalars['ObjectId']['input']>;
  jobspecId?: InputMaybe<Scalars['ObjectId']['input']>;
  typeName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReplyIdentificationsArgs = {
  dripCampaignId: Scalars['ObjectId']['input'];
};


export type QueryReplyTagArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryReplyTagsArgs = {
  _ids?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRoleArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryRoleTitleArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryRoleTitlesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRolesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySkillNameArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QuerySkillNamesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySkillTypeArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QuerySkillTypesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySmtpTransportVerifyConnectionArgs = {
  smtpSettings: SmtpSettingInput;
};


export type QuerySocialProfileFromFilterIdArgs = {
  index?: InputMaybe<Scalars['Int']['input']>;
  socialProfileFilterId: Scalars['ObjectId']['input'];
};


export type QueryStageTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryStageTemplatesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySubStageTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QuerySubStageTemplatesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySubscriptionCalculateCheckoutAmountArgs = {
  couponName?: InputMaybe<Scalars['String']['input']>;
  isBilledMonthly: Scalars['Boolean']['input'];
  items: Array<PaymentItemInput>;
  renewal?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySuccessfulExitStageTemplateArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QuerySuccessfulExitStageTemplatesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTimeDelayArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryTimeDelaysArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTimeUnitArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryTimeUnitsArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTotalInvitationsSentAndPendingArgs = {
  fromDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  toDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
};


export type QueryUserArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryUserIdByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryUserLoginArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryUsersArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userIds?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
};


export type QueryUsesChatGptJobspecArgs = {
  chatGptCodes: Array<Scalars['String']['input']>;
};


export type QueryVerifyVatIdArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  vatNumber: Scalars['String']['input'];
};


export type QueryVolunteerCauseArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryVolunteerCausesArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWorkGroupArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryWorkGroupMembersArgs = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWorkGroupUserArgs = {
  _id: Scalars['ObjectId']['input'];
};


export type QueryWorkGroupsArgs = {
  userId: Scalars['ObjectId']['input'];
};


export type QueryWorkInProgressFeedbackByFeatureArgs = {
  feature: Scalars['String']['input'];
};


export type QueryWorldLocationArgs = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};

export type RecentContactsFilter = {
  __typename?: 'RecentContactsFilter';
  _id: Scalars['ObjectId']['output'];
  _ids?: Maybe<Array<Scalars['ObjectId']['output']>>;
  companyEmployeeCountRanges?: Maybe<Array<StrCurrentOrPastAdvancedFilter>>;
  contactsAvailability?: Maybe<ContactsAvailabilityFilter>;
  contactsCareer?: Maybe<ContactsCareerFilter>;
  contactsEducation?: Maybe<ContactsEducationFilter>;
  contactsLastEvent?: Maybe<ContactsDateRangeFilter>;
  contactsLastInteraction?: Maybe<ContactsDateRangeFilter>;
  contactsLastUnansweredReply?: Maybe<ContactsDateRangeFilter>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  dripCampaignFilter?: Maybe<DripCampaignFilter>;
  dripCampaignsFilter?: Maybe<Array<IdAdvancedFilter>>;
  gender?: Maybe<StrAdvancedFilter>;
  hasCv?: Maybe<Scalars['Boolean']['output']>;
  hasInteraction?: Maybe<Scalars['Boolean']['output']>;
  hasLinkedinId?: Maybe<Scalars['Boolean']['output']>;
  hasUnansweredReply?: Maybe<Scalars['Boolean']['output']>;
  insertionDate?: Maybe<InsertionDateFilter>;
  isMiniProfile?: Maybe<Scalars['Boolean']['output']>;
  jobseekerStatuses?: Maybe<Array<StrAdvancedFilter>>;
  jobspecFilter?: Maybe<ContactsJobspecFilter>;
  languageNames?: Maybe<Array<StrAdvancedFilter>>;
  linkedinTagsFilter?: Maybe<LinkedinTagsFilter>;
  locations?: Maybe<Array<MainLocationFilter>>;
  minShouldMatch?: Maybe<MinShouldMatch>;
  ownerId?: Maybe<Scalars['ObjectId']['output']>;
  searchName?: Maybe<Scalars['String']['output']>;
  searchSurname?: Maybe<Scalars['String']['output']>;
  searchValue?: Maybe<Scalars['String']['output']>;
  showNoCurrentCompany?: Maybe<Scalars['Boolean']['output']>;
  showUnsubscribed?: Maybe<Scalars['Boolean']['output']>;
  skillNames?: Maybe<Array<StrAdvancedFilter>>;
  sortBy?: Maybe<ContactsSortBy>;
  summary?: Maybe<Array<StrAdvancedFilter>>;
  tags?: Maybe<Array<IdAdvancedFilter>>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
  yearsInCurrentRole?: Maybe<Array<ContactsTimeRangeFilter>>;
  yearsOfExperience?: Maybe<Array<ContactsTimeRangeFilter>>;
};

export type RecommendedProduct = {
  __typename?: 'RecommendedProduct';
  _id: Scalars['ObjectId']['output'];
  currency: Scalars['String']['output'];
  currencyCode: Scalars['String']['output'];
  currentPlanName: Scalars['String']['output'];
  currentPrice: Scalars['Int']['output'];
  enterpriseRequired: Scalars['Boolean']['output'];
  iconName: Scalars['String']['output'];
  isBilledMonthly: Scalars['Boolean']['output'];
  otherCurrentPaymentItems?: Maybe<Array<PaymentItem>>;
  planName: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  productId: Scalars['ObjectId']['output'];
  seats: Scalars['Int']['output'];
  solutionName: Scalars['String']['output'];
  userIsAdmin: Scalars['Boolean']['output'];
};

export type ReferenceField = {
  __typename?: 'ReferenceField';
  fieldName: Scalars['String']['output'];
  inputObjectName: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type RefreshObject = {
  __typename?: 'RefreshObject';
  status: Scalars['String']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type RegisterObject = {
  __typename?: 'RegisterObject';
  refreshToken?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type RemoteWork = {
  __typename?: 'RemoteWork';
  _id: Scalars['ObjectId']['output'];
  favIsHybrid?: Maybe<Scalars['Boolean']['output']>;
  favIsOnSite?: Maybe<Scalars['Boolean']['output']>;
  favIsRemote?: Maybe<Scalars['Boolean']['output']>;
  isHybrid?: Maybe<Scalars['Boolean']['output']>;
  isOnSite?: Maybe<Scalars['Boolean']['output']>;
  isRemote?: Maybe<Scalars['Boolean']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type RemoteWorkInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  favIsHybrid?: InputMaybe<Scalars['Boolean']['input']>;
  favIsOnSite?: InputMaybe<Scalars['Boolean']['input']>;
  favIsRemote?: InputMaybe<Scalars['Boolean']['input']>;
  isHybrid?: InputMaybe<Scalars['Boolean']['input']>;
  isOnSite?: InputMaybe<Scalars['Boolean']['input']>;
  isRemote?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type ReplyIdentification = {
  __typename?: 'ReplyIdentification';
  _id: Scalars['ObjectId']['output'];
  action?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  replyCategorizationUserInputs?: Maybe<Scalars['String']['output']>;
  tagIds?: Maybe<Array<Scalars['ObjectId']['output']>>;
};

export type ReplyIdentificationInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  action?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  replyCategorizationUserInputs?: InputMaybe<Scalars['String']['input']>;
  tagIds?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
};

export type ReplyIdentifications = {
  __typename?: 'ReplyIdentifications';
  _id: Scalars['ObjectId']['output'];
  dripCampaignId?: Maybe<Scalars['ObjectId']['output']>;
  replyIdentifications?: Maybe<Array<ReplyIdentification>>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
  workGroupId?: Maybe<Scalars['ObjectId']['output']>;
};

export type ReplyIdentificationsInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  dripCampaignId?: InputMaybe<Scalars['ObjectId']['input']>;
  replyIdentifications?: InputMaybe<Array<ReplyIdentificationInput>>;
  userId?: InputMaybe<Scalars['ObjectId']['input']>;
  workGroupId?: InputMaybe<Scalars['ObjectId']['input']>;
};

export type ReplyTag = {
  __typename?: 'ReplyTag';
  _id: Scalars['ObjectId']['output'];
  color?: Maybe<Scalars['String']['output']>;
  iconName?: Maybe<Scalars['String']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
  value: Scalars['String']['output'];
  workGroupId?: Maybe<Scalars['ObjectId']['output']>;
};

export type Role = {
  __typename?: 'Role';
  _id: Scalars['ObjectId']['output'];
  defaultPrivileges?: Maybe<Array<Privilege>>;
  description?: Maybe<Scalars['String']['output']>;
  iconName?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type RoleTitle = {
  __typename?: 'RoleTitle';
  _id: Scalars['ObjectId']['output'];
  value: Scalars['String']['output'];
};

export type Score = {
  __typename?: 'Score';
  _id: Scalars['ObjectId']['output'];
  calculatedAt?: Maybe<Scalars['Float']['output']>;
  change?: Maybe<Scalars['Float']['output']>;
  overall?: Maybe<Scalars['Float']['output']>;
  subScores?: Maybe<Array<SubScore>>;
};

export type ScoreInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  calculatedAt?: InputMaybe<Scalars['Float']['input']>;
  change?: InputMaybe<Scalars['Float']['input']>;
  overall?: InputMaybe<Scalars['Float']['input']>;
  subScores?: InputMaybe<Array<SubScoreInput>>;
};

export type SendEmail = {
  __typename?: 'SendEmail';
  hasMissingFields: Scalars['Boolean']['output'];
  status?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
};

export type SendEmailInput = {
  attachments?: InputMaybe<Array<UploadedFileInput>>;
  subject?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
};

export type Skill = {
  __typename?: 'Skill';
  _id: Scalars['ObjectId']['output'];
  level?: Maybe<Scalars['Int']['output']>;
  monthsOfExperience?: Maybe<Scalars['Int']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  period: Period;
  profExperienceId?: Maybe<Scalars['ObjectId']['output']>;
  skillType?: Maybe<Scalars['String']['output']>;
  topSkill?: Maybe<Scalars['Boolean']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type SkillInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  monthsOfExperience?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<PeriodInput>;
  profExperienceId?: InputMaybe<Scalars['ObjectId']['input']>;
  skillType?: InputMaybe<Scalars['String']['input']>;
  topSkill?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SkillName = {
  __typename?: 'SkillName';
  _id: Scalars['ObjectId']['output'];
  skillTypeId?: Maybe<Scalars['ObjectId']['output']>;
  value: Scalars['String']['output'];
};

export type SkillType = {
  __typename?: 'SkillType';
  _id: Scalars['ObjectId']['output'];
  iconName?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type SkillTypeInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  iconName?: InputMaybe<Scalars['String']['input']>;
  style?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SmtpSetting = {
  __typename?: 'SmtpSetting';
  _id: Scalars['ObjectId']['output'];
  host: Scalars['String']['output'];
  imapHost?: Maybe<Scalars['String']['output']>;
  imapPort?: Maybe<Scalars['Int']['output']>;
  imapTls?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pass: Scalars['String']['output'];
  port?: Maybe<Scalars['Int']['output']>;
  secure: Scalars['Boolean']['output'];
  sslV3?: Maybe<Scalars['Boolean']['output']>;
  user: Scalars['String']['output'];
};

export type SmtpSettingInput = {
  _id: Scalars['ObjectId']['input'];
  host: Scalars['String']['input'];
  imapHost?: InputMaybe<Scalars['String']['input']>;
  imapPort?: InputMaybe<Scalars['Int']['input']>;
  imapTls?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pass: Scalars['String']['input'];
  port?: InputMaybe<Scalars['Int']['input']>;
  secure: Scalars['Boolean']['input'];
  sslV3?: InputMaybe<Scalars['Boolean']['input']>;
  user: Scalars['String']['input'];
};

export type SmtpTransportVerification = {
  __typename?: 'SmtpTransportVerification';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type SocialProfile = {
  __typename?: 'SocialProfile';
  _id: Scalars['ObjectId']['output'];
  academicTitle?: Maybe<Scalars['String']['output']>;
  accomplishments?: Maybe<Array<Accomplishment>>;
  attachments?: Maybe<Array<UploadedFile>>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  calendlyUrl?: Maybe<Scalars['String']['output']>;
  communicationChannels?: Maybe<Array<CommunicationChannel>>;
  /** e.g. BestTimeToCall, preferredSN, Origin, etc. */
  contactSpecification?: Maybe<ContactSpecification>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  cvExtRepoUrl?: Maybe<Scalars['String']['output']>;
  cvFile?: Maybe<UploadedFile>;
  educExperiences?: Maybe<Array<EducExperience>>;
  facebookId?: Maybe<Scalars['String']['output']>;
  facebookUrl?: Maybe<Scalars['String']['output']>;
  facebookUsername?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  fullAvatarUrl?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  githubUrl?: Maybe<Scalars['String']['output']>;
  githubUsername?: Maybe<Scalars['String']['output']>;
  gravatarCheckTimestamp?: Maybe<Scalars['Int']['output']>;
  gravatarUrl?: Maybe<Scalars['String']['output']>;
  hasEmail?: Maybe<Scalars['Boolean']['output']>;
  hasMobilePhone?: Maybe<Scalars['Boolean']['output']>;
  hasPageUrls?: Maybe<Scalars['Boolean']['output']>;
  hasPhone?: Maybe<Scalars['Boolean']['output']>;
  industry?: Maybe<Scalars['String']['output']>;
  instagramUrl?: Maybe<Scalars['String']['output']>;
  jobseekerCriterion?: Maybe<JobseekerCriterion>;
  languageUsed?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<Array<Language>>;
  lastLinkedinUpdate?: Maybe<Scalars['DateTimeISO']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  linkedinDetail?: Maybe<LinkedinDetail>;
  linkedinSalesUrl?: Maybe<Scalars['String']['output']>;
  linkedinTalentId?: Maybe<Scalars['String']['output']>;
  linkedinUrl?: Maybe<Scalars['String']['output']>;
  mainLocation?: Maybe<MainLocation>;
  mainProfExperience?: Maybe<ProfExperience>;
  mainRoleTitle?: Maybe<Scalars['String']['output']>;
  mediumUrl?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  oldLinkedinUrls?: Maybe<Array<Scalars['String']['output']>>;
  otherEmails?: Maybe<Array<Scalars['String']['output']>>;
  otherMobilePhones?: Maybe<Array<Scalars['String']['output']>>;
  otherPhones?: Maybe<Array<Scalars['String']['output']>>;
  pageUrls?: Maybe<Array<Scalars['String']['output']>>;
  pdlId?: Maybe<Scalars['String']['output']>;
  /** DoB, Nationality, marital status, etc */
  personalDetail?: Maybe<PersonalDetail>;
  personalInterest?: Maybe<Scalars['String']['output']>;
  privateEmail?: Maybe<Scalars['String']['output']>;
  privateMobilePhone?: Maybe<Scalars['String']['output']>;
  privatePhone?: Maybe<Scalars['String']['output']>;
  profExperiences?: Maybe<Array<ProfExperience>>;
  quoraUrl?: Maybe<Scalars['String']['output']>;
  skills?: Maybe<Array<Skill>>;
  summary?: Maybe<Scalars['String']['output']>;
  tiktokUrl?: Maybe<Scalars['String']['output']>;
  twitterUrl?: Maybe<Scalars['String']['output']>;
  twitterUsername?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  voluntExperiences?: Maybe<Array<VoluntExperience>>;
  want?: Maybe<Scalars['String']['output']>;
  wechatUrl?: Maybe<Scalars['String']['output']>;
  workEmail?: Maybe<Scalars['String']['output']>;
  workMobilePhone?: Maybe<Scalars['String']['output']>;
  workPhone?: Maybe<Scalars['String']['output']>;
  xingUrl?: Maybe<Scalars['String']['output']>;
  yearsInCurrentRole?: Maybe<Scalars['Int']['output']>;
  yearsOfExperience?: Maybe<Scalars['Int']['output']>;
  youtubeUrl?: Maybe<Scalars['String']['output']>;
};

export type SocialProfileWrapperInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  connectedOn?: InputMaybe<Scalars['DateTimeISO']['input']>;
  isPending?: InputMaybe<Scalars['Boolean']['input']>;
  linkedinConnectionLevel?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Array<LinkedinNoteInput>>;
  socialProfile: AbstractContactInput;
};

export type SolutionWithProduct = {
  __typename?: 'SolutionWithProduct';
  _id: Scalars['ObjectId']['output'];
  jobinProductId: Scalars['ObjectId']['output'];
  planId: Scalars['ObjectId']['output'];
  planName: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  seats: Scalars['Int']['output'];
  solutionIconName: Scalars['String']['output'];
  solutionId: Scalars['ObjectId']['output'];
  solutionName: Scalars['String']['output'];
  totalPrice: Scalars['Int']['output'];
};

export type SortOrderInput = {
  _id: Scalars['ObjectId']['input'];
  rank: Scalars['Int']['input'];
};

export type Stage = {
  __typename?: 'Stage';
  _id: Scalars['ObjectId']['output'];
  color: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  subStages?: Maybe<Array<SubStage>>;
};

export type StageInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position: Scalars['Int']['input'];
  subStages?: InputMaybe<Array<SubStageInput>>;
};

export type StageTemplate = {
  __typename?: 'StageTemplate';
  _id: Scalars['ObjectId']['output'];
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  subStages?: Maybe<Array<SubStage>>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type StageTemplateInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subStages?: InputMaybe<Array<SubStageInput>>;
};

export type StageWithCandidates = {
  __typename?: 'StageWithCandidates';
  _id: Scalars['ObjectId']['output'];
  candidates: Array<Contact>;
  stage: Stage;
};

export type StageWithCandidatesCount = {
  __typename?: 'StageWithCandidatesCount';
  _id: Scalars['ObjectId']['output'];
  stage: Stage;
  totalCandidates: Scalars['Int']['output'];
};

export type StrAdvancedFilter = {
  __typename?: 'StrAdvancedFilter';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  boost?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type StrAdvancedFilterInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  boost?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type StrCurrentOrPastAdvancedFilter = {
  __typename?: 'StrCurrentOrPastAdvancedFilter';
  _id?: Maybe<Scalars['ObjectId']['output']>;
  boost?: Maybe<Scalars['Float']['output']>;
  currentOrPast?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type StrCurrentOrPastAdvancedFilterInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  boost?: InputMaybe<Scalars['Float']['input']>;
  currentOrPast?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type StripeCard = {
  __typename?: 'StripeCard';
  _id: Scalars['ObjectId']['output'];
  brand: Scalars['String']['output'];
  checks: Scalars['String']['output'];
  country: Scalars['String']['output'];
  expMonth: Scalars['Int']['output'];
  expYear: Scalars['Int']['output'];
  fingerprint: Scalars['String']['output'];
  funding: Scalars['String']['output'];
  generatedFrom: Scalars['String']['output'];
  last4: Scalars['String']['output'];
  networks: Scalars['String']['output'];
  threeDSecureUsage: Scalars['String']['output'];
  wallet: Scalars['String']['output'];
};

export type StripePaymentMethod = {
  __typename?: 'StripePaymentMethod';
  _id: Scalars['ObjectId']['output'];
  card: StripeCard;
};

export type SubScore = {
  __typename?: 'SubScore';
  _id: Scalars['ObjectId']['output'];
  pillar?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

export type SubScoreInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  pillar?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
};

export type SubStage = {
  __typename?: 'SubStage';
  _id: Scalars['ObjectId']['output'];
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type SubStageInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SubStageTemplate = {
  __typename?: 'SubStageTemplate';
  _id: Scalars['ObjectId']['output'];
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type SubStageTemplateInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  aiResponse?: Maybe<Scalars['String']['output']>;
  filterReady?: Maybe<Scalars['ObjectId']['output']>;
  icpFilterReady?: Maybe<ContactsFilter>;
  jobinJobUpdated?: Maybe<JobinJobSubscription>;
  pdlSocialProfileImported: SocialProfile;
};


export type SubscriptionAiResponseArgs = {
  requestId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionJobinJobUpdatedArgs = {
  codename?: InputMaybe<Scalars['String']['input']>;
  operationType?: InputMaybe<Scalars['String']['input']>;
  queue?: InputMaybe<Scalars['String']['input']>;
  selectedUserId?: InputMaybe<Scalars['ObjectId']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionPdlSocialProfileImportedArgs = {
  linkedinUrl?: InputMaybe<Scalars['String']['input']>;
};

export type SuccessfulExitStageTemplate = {
  __typename?: 'SuccessfulExitStageTemplate';
  _id: Scalars['ObjectId']['output'];
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type SuccessfulExitStageTemplateInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TimeDelay = {
  __typename?: 'TimeDelay';
  _id: Scalars['ObjectId']['output'];
  value: Scalars['String']['output'];
};

export type TimeUnit = {
  __typename?: 'TimeUnit';
  _id: Scalars['ObjectId']['output'];
  conversionToMinutes: Scalars['Int']['output'];
  value: Scalars['String']['output'];
};

export type TotalInvitationsSentAndPending = {
  __typename?: 'TotalInvitationsSentAndPending';
  _id: Scalars['ObjectId']['output'];
  invitationsPending?: Maybe<Scalars['Int']['output']>;
  invitationsSent?: Maybe<Scalars['Int']['output']>;
  isSalesNavigator?: Maybe<Scalars['Boolean']['output']>;
};

export type TravelRequired = {
  __typename?: 'TravelRequired';
  _id: Scalars['ObjectId']['output'];
  level?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  workInCustomerSite?: Maybe<Scalars['Boolean']['output']>;
};

export type TravelRequiredInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  workInCustomerSite?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TutorialProgress = {
  __typename?: 'TutorialProgress';
  _id: Scalars['ObjectId']['output'];
  completedCourses?: Maybe<Array<Scalars['Int']['output']>>;
  currentChapterId?: Maybe<Scalars['Int']['output']>;
  currentCourseId?: Maybe<Scalars['Int']['output']>;
};

export type TutorialProgressInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  completedCourses?: InputMaybe<Array<Scalars['Int']['input']>>;
  currentChapterId?: InputMaybe<Scalars['Int']['input']>;
  currentCourseId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateBillingDetailInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyRegistrationNr?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<CurrencyInput>;
  removeCountryCodeOnVatId?: InputMaybe<Scalars['Boolean']['input']>;
  stateProvinceRegion?: InputMaybe<Scalars['String']['input']>;
  vatId?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateJobinEventInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  accountId?: InputMaybe<Scalars['ObjectId']['input']>;
  arguments?: InputMaybe<Array<Scalars['String']['input']>>;
  attachments?: InputMaybe<Array<EventAttachmentInput>>;
  content?: InputMaybe<Scalars['String']['input']>;
  dealId?: InputMaybe<Scalars['ObjectId']['input']>;
  eventCreatedAt: Scalars['DateTimeISO']['input'];
  fromContactId?: InputMaybe<Scalars['ObjectId']['input']>;
  indicators?: InputMaybe<Array<BaseTemplateStyleIconNameInput>>;
  jobspecId?: InputMaybe<Scalars['ObjectId']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  toContactIds?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  toUserIds?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  type?: InputMaybe<EventTypeInput>;
};

export type UpdateLinkedinConnectionInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  lastFullDownloadedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  linkedinUrl?: InputMaybe<Scalars['String']['input']>;
  profileId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLinkedinConversationInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  conversationId?: InputMaybe<Scalars['String']['input']>;
  importedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lastActivityAt?: InputMaybe<Scalars['Float']['input']>;
  participantLinkedinUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  totalEventCount?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadedFile = {
  __typename?: 'UploadedFile';
  _id: Scalars['ObjectId']['output'];
  extension?: Maybe<Scalars['String']['output']>;
  fileSize?: Maybe<Scalars['Int']['output']>;
  mimetype?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type UploadedFileInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  extension?: InputMaybe<Scalars['String']['input']>;
  fileSize?: InputMaybe<Scalars['Int']['input']>;
  mimetype?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  path: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ObjectId']['output'];
  academicTitle?: Maybe<Scalars['String']['output']>;
  affiliatePaypalEmail?: Maybe<Scalars['String']['output']>;
  affiliateReferralCouponCode?: Maybe<Scalars['String']['output']>;
  affiliateReferralLinkCode?: Maybe<Scalars['String']['output']>;
  affiliateSince?: Maybe<Scalars['DateTimeISO']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Country>;
  countryISO?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  currency?: Maybe<Currency>;
  defaultEmailSender?: Maybe<EmailSender>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  fullAvatarUrl?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  gravatarCheckTimestamp?: Maybe<Scalars['Int']['output']>;
  gravatarUrl?: Maybe<Scalars['String']['output']>;
  hadTrial?: Maybe<Scalars['Boolean']['output']>;
  hasPassword?: Maybe<Scalars['Boolean']['output']>;
  hasReviewed?: Maybe<Scalars['Boolean']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
  isInTutorial?: Maybe<Scalars['Boolean']['output']>;
  isLinkedinRecruiter?: Maybe<Scalars['Boolean']['output']>;
  lastLoggedIn?: Maybe<Scalars['DateTimeISO']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  latestConnectedOn?: Maybe<Scalars['DateTimeISO']['output']>;
  linkedinAvatarUrl?: Maybe<Scalars['String']['output']>;
  linkedinConversationsLatestTimestamp?: Maybe<Scalars['DateTimeISO']['output']>;
  linkedinConversationsRunningAt?: Maybe<Scalars['DateTimeISO']['output']>;
  linkedinPremium?: Maybe<Scalars['Boolean']['output']>;
  linkedinProfileId?: Maybe<Scalars['String']['output']>;
  linkedinSalesConversationsLatestTimestamp?: Maybe<Scalars['DateTimeISO']['output']>;
  linkedinSalesConversationsRunningAt?: Maybe<Scalars['DateTimeISO']['output']>;
  linkedinSalesUrl?: Maybe<Scalars['String']['output']>;
  linkedinThrottling?: Maybe<LinkedinThrottlingSetting>;
  linkedinUrl?: Maybe<Scalars['String']['output']>;
  lockNewMessagesImport?: Maybe<Scalars['DateTimeISO']['output']>;
  loginCounter?: Maybe<Scalars['Int']['output']>;
  loginTime?: Maybe<Scalars['Int']['output']>;
  mobilePhone?: Maybe<Scalars['String']['output']>;
  nightMode?: Maybe<Scalars['Boolean']['output']>;
  occupation?: Maybe<Scalars['String']['output']>;
  pendingConnectionImportCount?: Maybe<Scalars['Int']['output']>;
  pendingLatestConnectedOn?: Maybe<Scalars['DateTimeISO']['output']>;
  pendingLinkedinConversationsLatestTimestamp?: Maybe<Scalars['DateTimeISO']['output']>;
  pendingLinkedinSalesConversationsLatestTimestamp?: Maybe<Scalars['DateTimeISO']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  reviewEmail?: Maybe<Scalars['Int']['output']>;
  scrapeOnConnect?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated exists in authentication-service */
  selectedWorkGroupId?: Maybe<Scalars['ObjectId']['output']>;
  showGettingStartedPage?: Maybe<Scalars['Boolean']['output']>;
  tutorialProgress?: Maybe<TutorialProgress>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type UserActivationInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type UserAdditionalDetail = {
  __typename?: 'UserAdditionalDetail';
  _id: Scalars['ObjectId']['output'];
  clickedLeaveReview?: Maybe<Scalars['Boolean']['output']>;
  doNotShowCapterraReviewBanner?: Maybe<Scalars['Boolean']['output']>;
  doNotShowJobyBanner?: Maybe<Scalars['Boolean']['output']>;
  hasReviewed?: Maybe<Scalars['Boolean']['output']>;
  lastJobyExtensionLoggedIn?: Maybe<Scalars['DateTimeISO']['output']>;
  showCapterraBanner?: Maybe<Scalars['Boolean']['output']>;
};

export type UserAdditionalDetailInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  clickedLeaveReview?: InputMaybe<Scalars['Boolean']['input']>;
  doNotShowCapterraReviewBanner?: InputMaybe<Scalars['Boolean']['input']>;
  doNotShowJobyBanner?: InputMaybe<Scalars['Boolean']['input']>;
  lastJobyExtensionLoggedIn?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  academicTitle?: InputMaybe<Scalars['String']['input']>;
  affiliatePaypalEmail?: InputMaybe<Scalars['String']['input']>;
  affiliateReferralCouponCode?: InputMaybe<Scalars['String']['input']>;
  affiliateReferralLinkCode?: InputMaybe<Scalars['String']['input']>;
  affiliateSince?: InputMaybe<Scalars['DateTimeISO']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  countryISO?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<CurrencyInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hadTrial?: InputMaybe<Scalars['Boolean']['input']>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  hasReviewed?: InputMaybe<Scalars['Boolean']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  isInTutorial?: InputMaybe<Scalars['Boolean']['input']>;
  isLinkedinRecruiter?: InputMaybe<Scalars['Boolean']['input']>;
  lastLoggedIn?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latestConnectedOn?: InputMaybe<Scalars['DateTimeISO']['input']>;
  linkedinAvatarUrl?: InputMaybe<Scalars['String']['input']>;
  linkedinConversationsLatestTimestamp?: InputMaybe<Scalars['DateTimeISO']['input']>;
  linkedinConversationsRunningAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  linkedinPremium?: InputMaybe<Scalars['Boolean']['input']>;
  linkedinProfileId?: InputMaybe<Scalars['String']['input']>;
  linkedinSalesConversationsLatestTimestamp?: InputMaybe<Scalars['DateTimeISO']['input']>;
  linkedinSalesConversationsRunningAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  linkedinSalesUrl?: InputMaybe<Scalars['String']['input']>;
  linkedinUrl?: InputMaybe<Scalars['String']['input']>;
  lockNewMessagesImport?: InputMaybe<Scalars['DateTimeISO']['input']>;
  loginCounter?: InputMaybe<Scalars['Int']['input']>;
  loginTime?: InputMaybe<Scalars['Int']['input']>;
  mobilePhone?: InputMaybe<Scalars['String']['input']>;
  nightMode?: InputMaybe<Scalars['Boolean']['input']>;
  occupation?: InputMaybe<Scalars['String']['input']>;
  pendingConnectionImportCount?: InputMaybe<Scalars['Int']['input']>;
  pendingLatestConnectedOn?: InputMaybe<Scalars['DateTimeISO']['input']>;
  pendingLinkedinConversationsLatestTimestamp?: InputMaybe<Scalars['DateTimeISO']['input']>;
  pendingLinkedinSalesConversationsLatestTimestamp?: InputMaybe<Scalars['DateTimeISO']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  reviewEmail?: InputMaybe<Scalars['Int']['input']>;
  scrapeOnConnect?: InputMaybe<Scalars['Boolean']['input']>;
  tutorialProgress?: InputMaybe<TutorialProgressInput>;
};

export type UserLinkedinUrlOwnedBaseTemplate = {
  __typename?: 'UserLinkedinUrlOwnedBaseTemplate';
  _id: Scalars['ObjectId']['output'];
  connectedOn?: Maybe<Scalars['DateTimeISO']['output']>;
  isPending?: Maybe<Scalars['Boolean']['output']>;
  userLinkedinUrl: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type UserLinkedinUrlOwnedBaseTemplateInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  connectedOn?: InputMaybe<Scalars['DateTimeISO']['input']>;
  isPending?: InputMaybe<Scalars['Boolean']['input']>;
  userLinkedinUrl: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UserWorkGroupSettingInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  linkedinThrottling?: InputMaybe<LinkedinThrottlingSettingInput>;
};

export type VatIdResponse = {
  __typename?: 'VatIdResponse';
  _id: Scalars['ObjectId']['output'];
  address?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  errorMsg?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  requestDate?: Maybe<Scalars['String']['output']>;
  valid?: Maybe<Scalars['Boolean']['output']>;
  vatNumber?: Maybe<Scalars['String']['output']>;
};

export type VoluntExperience = {
  __typename?: 'VoluntExperience';
  _id: Scalars['ObjectId']['output'];
  cause?: Maybe<Scalars['String']['output']>;
  descriptionResponsibility?: Maybe<Scalars['String']['output']>;
  mainLocation?: Maybe<MainLocation>;
  organization?: Maybe<OrganizationLogoLinkedin>;
  period: Period;
  roleTitle?: Maybe<Scalars['String']['output']>;
};

export type VoluntExperienceInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  cause?: InputMaybe<Scalars['String']['input']>;
  descriptionResponsibility?: InputMaybe<Scalars['String']['input']>;
  mainLocation?: InputMaybe<MainLocationInput>;
  organization?: InputMaybe<OrganizationLogoLinkedinInput>;
  period?: InputMaybe<PeriodInput>;
  roleTitle?: InputMaybe<Scalars['String']['input']>;
};

export type VolunteerCause = {
  __typename?: 'VolunteerCause';
  _id: Scalars['ObjectId']['output'];
  value: Scalars['String']['output'];
};

export type WorkGroup = {
  __typename?: 'WorkGroup';
  _id: Scalars['ObjectId']['output'];
  billingDetail?: Maybe<BillingDetail>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  imageLogoUrl?: Maybe<Scalars['String']['output']>;
  isAgency?: Maybe<Scalars['Boolean']['output']>;
  limboUserIds?: Maybe<Array<Scalars['ObjectId']['output']>>;
  memberRoles?: Maybe<Array<MemberRole>>;
  name?: Maybe<Scalars['String']['output']>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  stripePaymentMethodId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
};

export type WorkGroupInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  billingDetail?: InputMaybe<BillingDetailInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageLogoUrl?: InputMaybe<Scalars['String']['input']>;
  isAgency?: InputMaybe<Scalars['Boolean']['input']>;
  limboUserIds?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  memberRoles?: InputMaybe<Array<MemberRoleInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  stripePaymentMethodId?: InputMaybe<Scalars['String']['input']>;
};

export type WorkInProgressFeedback = {
  __typename?: 'WorkInProgressFeedback';
  _id: Scalars['ObjectId']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  feature: Scalars['String']['output'];
  importanceRank?: Maybe<Scalars['Int']['output']>;
  keepMeUpToDate?: Maybe<Scalars['Boolean']['output']>;
  sent?: Maybe<Scalars['Boolean']['output']>;
  suggestionTxt?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['ObjectId']['output']>;
  workGroupId?: Maybe<Scalars['ObjectId']['output']>;
};

export type WorkInProgressFeedbackInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
  feature?: InputMaybe<Scalars['String']['input']>;
  importanceRank?: InputMaybe<Scalars['Int']['input']>;
  keepMeUpToDate?: InputMaybe<Scalars['Boolean']['input']>;
  sent?: InputMaybe<Scalars['Boolean']['input']>;
  suggestionTxt?: InputMaybe<Scalars['String']['input']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AbstractContact: ResolverTypeWrapper<AbstractContact>;
  AbstractContactInput: AbstractContactInput;
  AbstractContactsFilter: ResolverTypeWrapper<AbstractContactsFilter>;
  Accomplishment: ResolverTypeWrapper<Accomplishment>;
  AccomplishmentInput: AccomplishmentInput;
  AccomplishmentType: ResolverTypeWrapper<AccomplishmentType>;
  AccomplishmentTypeInput: AccomplishmentTypeInput;
  AccountLogo: ResolverTypeWrapper<AccountLogo>;
  AccountLogoInput: AccountLogoInput;
  AccountTag: ResolverTypeWrapper<AccountTag>;
  AccountTagInput: AccountTagInput;
  AccountType: ResolverTypeWrapper<AccountType>;
  AccountWithJobspecs: ResolverTypeWrapper<AccountWithJobspecs>;
  ActiveFeature: ResolverTypeWrapper<ActiveFeature>;
  ActiveFeatureLabel: ResolverTypeWrapper<ActiveFeatureLabel>;
  ActivePipelineStage: ResolverTypeWrapper<ActivePipelineStage>;
  ActivePipelineStageInput: ActivePipelineStageInput;
  ActivePipelineStageWithEventIdAndTitle: ActivePipelineStageWithEventIdAndTitle;
  ActiveSubscription: ResolverTypeWrapper<ActiveSubscription>;
  AdditionalField: ResolverTypeWrapper<AdditionalField>;
  AffiliateCodeAvailability: ResolverTypeWrapper<AffiliateCodeAvailability>;
  AffiliateLead: ResolverTypeWrapper<AffiliateLead>;
  AffiliateLeadTotals: ResolverTypeWrapper<AffiliateLeadTotals>;
  AffiliatePayout: ResolverTypeWrapper<AffiliatePayout>;
  AffiliateTotalPayout: ResolverTypeWrapper<AffiliateTotalPayout>;
  AssignSeatPrivilegeInput: AssignSeatPrivilegeInput;
  AvailabilityPeriod: ResolverTypeWrapper<AvailabilityPeriod>;
  AvailabilityPeriodInput: AvailabilityPeriodInput;
  AvailabilityRow: ResolverTypeWrapper<AvailabilityRow>;
  AvailabilityRowInput: AvailabilityRowInput;
  Avatar: ResolverTypeWrapper<Avatar>;
  AvatarWithValue: ResolverTypeWrapper<AvatarWithValue>;
  BaseTemplate: ResolverTypeWrapper<BaseTemplate>;
  BaseTemplateColorIconName: ResolverTypeWrapper<BaseTemplateColorIconName>;
  BaseTemplateColorIconNameInput: BaseTemplateColorIconNameInput;
  BaseTemplateIconName: ResolverTypeWrapper<BaseTemplateIconName>;
  BaseTemplateIconNameInput: BaseTemplateIconNameInput;
  BaseTemplateLevel: ResolverTypeWrapper<BaseTemplateLevel>;
  BaseTemplateLevelInput: BaseTemplateLevelInput;
  BaseTemplateStyleIconName: ResolverTypeWrapper<BaseTemplateStyleIconName>;
  BaseTemplateStyleIconNameInput: BaseTemplateStyleIconNameInput;
  Benefit: ResolverTypeWrapper<Benefit>;
  BenefitInput: BenefitInput;
  BenefitTemplate: ResolverTypeWrapper<BenefitTemplate>;
  BenefitTemplateInput: BenefitTemplateInput;
  BenefitType: ResolverTypeWrapper<BenefitType>;
  BillingDetail: ResolverTypeWrapper<BillingDetail>;
  BillingDetailInput: BillingDetailInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CampaignStage: ResolverTypeWrapper<CampaignStage>;
  CampaignStageInput: CampaignStageInput;
  CareerOverview: ResolverTypeWrapper<CareerOverview>;
  CareerOverviewInput: CareerOverviewInput;
  ChatGptMessage: ChatGptMessage;
  ChatGptPrompt: ResolverTypeWrapper<ChatGptPrompt>;
  ChatGptPromptInput: ChatGptPromptInput;
  ChatGptPublicPrompt: ResolverTypeWrapper<ChatGptPublicPrompt>;
  CheckoutAmount: ResolverTypeWrapper<CheckoutAmount>;
  CommunicationChannel: ResolverTypeWrapper<CommunicationChannel>;
  CommunicationChannelInput: CommunicationChannelInput;
  CommunicationChannelType: ResolverTypeWrapper<CommunicationChannelType>;
  CommunicationChannelTypeInput: CommunicationChannelTypeInput;
  CompletedContactDripCampaignStage: ResolverTypeWrapper<CompletedContactDripCampaignStage>;
  CompletedContactDripCampaignStageInput: CompletedContactDripCampaignStageInput;
  Contact: ResolverTypeWrapper<Contact>;
  ContactEnrichmentObj: ResolverTypeWrapper<ContactEnrichmentObj>;
  ContactInput: ContactInput;
  ContactNote: ResolverTypeWrapper<ContactNote>;
  ContactNoteInput: ContactNoteInput;
  ContactPerson: ResolverTypeWrapper<ContactPerson>;
  ContactPersonInput: ContactPersonInput;
  ContactSpecialInput: ContactSpecialInput;
  ContactSpecification: ResolverTypeWrapper<ContactSpecification>;
  ContactSpecificationInput: ContactSpecificationInput;
  ContactSubtype: ResolverTypeWrapper<ContactSubtype>;
  ContactTag: ResolverTypeWrapper<ContactTag>;
  ContactTagInput: ContactTagInput;
  ContactsAvailabilityFilter: ResolverTypeWrapper<ContactsAvailabilityFilter>;
  ContactsAvailabilityFilterInput: ContactsAvailabilityFilterInput;
  ContactsCareerFilter: ResolverTypeWrapper<ContactsCareerFilter>;
  ContactsCareerFilterInput: ContactsCareerFilterInput;
  ContactsDateRangeFilter: ResolverTypeWrapper<ContactsDateRangeFilter>;
  ContactsDateRangeFilterInput: ContactsDateRangeFilterInput;
  ContactsEducationFilter: ResolverTypeWrapper<ContactsEducationFilter>;
  ContactsEducationFilterInput: ContactsEducationFilterInput;
  ContactsFilter: ResolverTypeWrapper<ContactsFilter>;
  ContactsFilterInput: ContactsFilterInput;
  ContactsFilterSaveInput: ContactsFilterSaveInput;
  ContactsJobspecFilter: ResolverTypeWrapper<ContactsJobspecFilter>;
  ContactsJobspecFilterInput: ContactsJobspecFilterInput;
  ContactsSortBy: ResolverTypeWrapper<ContactsSortBy>;
  ContactsSortByInput: ContactsSortByInput;
  ContactsTimeRangeFilter: ResolverTypeWrapper<ContactsTimeRangeFilter>;
  ContactsTimeRangeFilterInput: ContactsTimeRangeFilterInput;
  ConversationMessageGroupInput: ConversationMessageGroupInput;
  Coord: ResolverTypeWrapper<Coord>;
  CoordInput: CoordInput;
  CoordWithRadius: ResolverTypeWrapper<CoordWithRadius>;
  CoordWithRadiusInput: CoordWithRadiusInput;
  Country: ResolverTypeWrapper<Country>;
  Coupon: ResolverTypeWrapper<Coupon>;
  CsvColumnAssociation: ResolverTypeWrapper<CsvColumnAssociation>;
  CsvColumnAssociationGroup: ResolverTypeWrapper<CsvColumnAssociationGroup>;
  CsvColumnAssociationGroupInput: CsvColumnAssociationGroupInput;
  CsvColumnAssociationInput: CsvColumnAssociationInput;
  CsvInput: ResolverTypeWrapper<CsvInput>;
  CsvInputInput: CsvInputInput;
  Currency: ResolverTypeWrapper<Currency>;
  CurrencyInput: CurrencyInput;
  CurrencyTemplate: ResolverTypeWrapper<CurrencyTemplate>;
  CustomField: ResolverTypeWrapper<CustomField>;
  CustomFieldFilterInput: CustomFieldFilterInput;
  CustomFieldInput: CustomFieldInput;
  DateObj: ResolverTypeWrapper<DateObj>;
  DateObjInput: DateObjInput;
  DateTimeISO: ResolverTypeWrapper<Scalars['DateTimeISO']['output']>;
  Department: ResolverTypeWrapper<Department>;
  DripAssignOption: ResolverTypeWrapper<DripAssignOption>;
  DripAssignOptionInput: DripAssignOptionInput;
  DripCampaign: ResolverTypeWrapper<DripCampaign>;
  DripCampaignAndContact: ResolverTypeWrapper<DripCampaignAndContact>;
  DripCampaignFilter: ResolverTypeWrapper<DripCampaignFilter>;
  DripCampaignFilterInput: DripCampaignFilterInput;
  DripCampaignInput: DripCampaignInput;
  DripConditionOption: ResolverTypeWrapper<DripConditionOption>;
  DripConditionOptionInput: DripConditionOptionInput;
  DripEmailOption: ResolverTypeWrapper<DripEmailOption>;
  DripEmailOptionInput: DripEmailOptionInput;
  DripLinkedinConnectionOption: ResolverTypeWrapper<DripLinkedinConnectionOption>;
  DripLinkedinConnectionOptionInput: DripLinkedinConnectionOptionInput;
  DripLinkedinMessageOption: ResolverTypeWrapper<DripLinkedinMessageOption>;
  DripLinkedinMessageOptionInput: DripLinkedinMessageOptionInput;
  DripStage: ResolverTypeWrapper<DripStage>;
  DripStageInput: DripStageInput;
  DripStageOption: ResolverTypeWrapper<DripStageOption>;
  DripStageOptionInput: DripStageOptionInput;
  Duplicate: ResolverTypeWrapper<Duplicate>;
  DuplicateContainer: ResolverTypeWrapper<DuplicateContainer>;
  EducExperience: ResolverTypeWrapper<EducExperience>;
  EducExperienceInput: EducExperienceInput;
  EducationalLevel: ResolverTypeWrapper<EducationalLevel>;
  EducationalLevelInput: EducationalLevelInput;
  EmailSender: ResolverTypeWrapper<EmailSender>;
  EmailSenderInput: EmailSenderInput;
  EmailSendersByWorkGroup: ResolverTypeWrapper<EmailSendersByWorkGroup>;
  EmailTemplate: ResolverTypeWrapper<EmailTemplate>;
  EmailTemplateInput: EmailTemplateInput;
  EmailTemplateType: ResolverTypeWrapper<EmailTemplateType>;
  EmployeeCountRange: ResolverTypeWrapper<EmployeeCountRange>;
  EvaluationStage: ResolverTypeWrapper<EvaluationStage>;
  EventAttachment: ResolverTypeWrapper<EventAttachment>;
  EventAttachmentInput: EventAttachmentInput;
  EventType: ResolverTypeWrapper<EventType>;
  EventTypeInput: EventTypeInput;
  ExitStageTemplate: ResolverTypeWrapper<ExitStageTemplate>;
  ExitStageTemplateInput: ExitStageTemplateInput;
  Field: ResolverTypeWrapper<Field>;
  FieldGroup: ResolverTypeWrapper<FieldGroup>;
  FittingIndex: ResolverTypeWrapper<FittingIndex>;
  FittingIndexInput: FittingIndexInput;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  FollowUpMessageInput: FollowUpMessageInput;
  FrequentlyAskedQuestion: ResolverTypeWrapper<FrequentlyAskedQuestion>;
  FrequentlyAskedQuestionType: ResolverTypeWrapper<FrequentlyAskedQuestionType>;
  FullContactPerson: ResolverTypeWrapper<FullContactPerson>;
  FullPipelineStage: ResolverTypeWrapper<FullPipelineStage>;
  Funnel: ResolverTypeWrapper<Funnel>;
  FunnelBlock: ResolverTypeWrapper<FunnelBlock>;
  GroupScore: ResolverTypeWrapper<GroupScore>;
  GroupScoreInput: GroupScoreInput;
  HelpdeskMessage: ResolverTypeWrapper<HelpdeskMessage>;
  HelpdeskMessageInput: HelpdeskMessageInput;
  IdAdvancedFilter: ResolverTypeWrapper<IdAdvancedFilter>;
  IdAdvancedFilterInput: IdAdvancedFilterInput;
  IdealCandidateFilter: ResolverTypeWrapper<IdealCandidateFilter>;
  IdealCandidateFilterInput: IdealCandidateFilterInput;
  Indicator: ResolverTypeWrapper<Indicator>;
  Industry: ResolverTypeWrapper<Industry>;
  IndustrySector: ResolverTypeWrapper<IndustrySector>;
  InsertionDateFilter: ResolverTypeWrapper<InsertionDateFilter>;
  InsertionDateFilterInput: InsertionDateFilterInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JobinAccount: ResolverTypeWrapper<JobinAccount>;
  JobinAccountInput: JobinAccountInput;
  JobinAccountNote: ResolverTypeWrapper<JobinAccountNote>;
  JobinAccountNoteInput: JobinAccountNoteInput;
  JobinCompletedJob: ResolverTypeWrapper<JobinCompletedJob>;
  JobinDailyQuotas: ResolverTypeWrapper<JobinDailyQuotas>;
  JobinEvent: ResolverTypeWrapper<JobinEvent>;
  JobinEventInput: JobinEventInput;
  JobinFeature: ResolverTypeWrapper<JobinFeature>;
  JobinFeatureGroup: ResolverTypeWrapper<JobinFeatureGroup>;
  JobinFeaturePlan: ResolverTypeWrapper<JobinFeaturePlan>;
  JobinInvoice: ResolverTypeWrapper<JobinInvoice>;
  JobinJob: ResolverTypeWrapper<JobinJob>;
  JobinJobContact: ResolverTypeWrapper<JobinJobContact>;
  JobinJobContactInput: JobinJobContactInput;
  JobinJobFromFilterResult: ResolverTypeWrapper<JobinJobFromFilterResult>;
  JobinJobInput: JobinJobInput;
  JobinJobSubscription: ResolverTypeWrapper<JobinJobSubscription>;
  JobinJobUpdateInput: JobinJobUpdateInput;
  JobinPrice: ResolverTypeWrapper<JobinPrice>;
  JobinProduct: ResolverTypeWrapper<JobinProduct>;
  JobinQuotaAndLimit: ResolverTypeWrapper<JobinQuotaAndLimit>;
  JobinSolution: ResolverTypeWrapper<JobinSolution>;
  JobinSubFeature: ResolverTypeWrapper<JobinSubFeature>;
  JobinSubscription: ResolverTypeWrapper<JobinSubscription>;
  JobseekerAim: ResolverTypeWrapper<JobseekerAim>;
  JobseekerCriterion: ResolverTypeWrapper<JobseekerCriterion>;
  JobseekerCriterionInput: JobseekerCriterionInput;
  JobseekerStatus: ResolverTypeWrapper<JobseekerStatus>;
  Jobspec: ResolverTypeWrapper<Jobspec>;
  JobspecDescription: ResolverTypeWrapper<JobspecDescription>;
  JobspecDescriptionInput: JobspecDescriptionInput;
  JobspecDescriptionTemplate: ResolverTypeWrapper<JobspecDescriptionTemplate>;
  JobspecDescriptionTemplateInput: JobspecDescriptionTemplateInput;
  JobspecDescriptionType: ResolverTypeWrapper<JobspecDescriptionType>;
  JobspecInput: JobspecInput;
  JobspecInternalDetail: ResolverTypeWrapper<JobspecInternalDetail>;
  JobspecInternalDetailInput: JobspecInternalDetailInput;
  JobspecNote: ResolverTypeWrapper<JobspecNote>;
  JobspecNoteInput: JobspecNoteInput;
  JobspecStatus: ResolverTypeWrapper<JobspecStatus>;
  JobspecStatusInput: JobspecStatusInput;
  JobspecTag: ResolverTypeWrapper<JobspecTag>;
  JobspecType: ResolverTypeWrapper<JobspecType>;
  JobspecTypeInput: JobspecTypeInput;
  JobyChatGptPrompt: ResolverTypeWrapper<JobyChatGptPrompt>;
  JobyChatGptPromptInput: JobyChatGptPromptInput;
  JobyChatGptResponse: ResolverTypeWrapper<JobyChatGptResponse>;
  Language: ResolverTypeWrapper<Language>;
  LanguageInput: LanguageInput;
  LanguageName: ResolverTypeWrapper<LanguageName>;
  LatestLinkedinConnectionConnectedOnDate: ResolverTypeWrapper<LatestLinkedinConnectionConnectedOnDate>;
  LinkedinAccountInput: LinkedinAccountInput;
  LinkedinAccountWithDefaultCountry: ResolverTypeWrapper<LinkedinAccountWithDefaultCountry>;
  LinkedinAnalytic: ResolverTypeWrapper<LinkedinAnalytic>;
  LinkedinAnalyticInput: LinkedinAnalyticInput;
  LinkedinAnalyticTimeline: ResolverTypeWrapper<LinkedinAnalyticTimeline>;
  LinkedinAnalyticTimelineRecords: ResolverTypeWrapper<LinkedinAnalyticTimelineRecords>;
  LinkedinAnalyticTotals: ResolverTypeWrapper<LinkedinAnalyticTotals>;
  LinkedinConversation: ResolverTypeWrapper<LinkedinConversation>;
  LinkedinConversationInput: LinkedinConversationInput;
  LinkedinDetail: ResolverTypeWrapper<LinkedinDetail>;
  LinkedinDetailInput: LinkedinDetailInput;
  LinkedinInvitation: ResolverTypeWrapper<LinkedinInvitation>;
  LinkedinInvitationInput: LinkedinInvitationInput;
  LinkedinMessageInput: LinkedinMessageInput;
  LinkedinNoteInput: LinkedinNoteInput;
  LinkedinProfile: ResolverTypeWrapper<LinkedinProfile>;
  LinkedinProfileInput: LinkedinProfileInput;
  LinkedinSalesApiScore: ResolverTypeWrapper<LinkedinSalesApiScore>;
  LinkedinSalesApiScoreInput: LinkedinSalesApiScoreInput;
  LinkedinSalesConversation: ResolverTypeWrapper<LinkedinSalesConversation>;
  LinkedinTagsFilter: ResolverTypeWrapper<LinkedinTagsFilter>;
  LinkedinTagsFilterInput: LinkedinTagsFilterInput;
  LinkedinThrottlingSetting: ResolverTypeWrapper<LinkedinThrottlingSetting>;
  LinkedinThrottlingSettingInput: LinkedinThrottlingSettingInput;
  LinkedinUrlAndId: ResolverTypeWrapper<LinkedinUrlAndId>;
  LoginObject: ResolverTypeWrapper<LoginObject>;
  MainExperienceStudent: ResolverTypeWrapper<MainExperienceStudent>;
  MainJobspec: ResolverTypeWrapper<MainJobspec>;
  MainJobspecInput: MainJobspecInput;
  MainLocation: ResolverTypeWrapper<MainLocation>;
  MainLocationCoordFilter: MainLocationCoordFilter;
  MainLocationFilter: ResolverTypeWrapper<MainLocationFilter>;
  MainLocationFilterInput: MainLocationFilterInput;
  MainLocationInput: MainLocationInput;
  MainLocationWorldLocationMatch: ResolverTypeWrapper<MainLocationWorldLocationMatch>;
  MainOrganization: ResolverTypeWrapper<MainOrganization>;
  MaritalStatus: ResolverTypeWrapper<MaritalStatus>;
  MemberRole: ResolverTypeWrapper<MemberRole>;
  MemberRoleInput: MemberRoleInput;
  MemberScore: ResolverTypeWrapper<MemberScore>;
  MemberScoreInput: MemberScoreInput;
  MergeError: ResolverTypeWrapper<MergeError>;
  MessageSendWithDelayInput: MessageSendWithDelayInput;
  MessageTemplate: ResolverTypeWrapper<MessageTemplate>;
  MessageTemplateInput: MessageTemplateInput;
  MessagesSentAndReceivedCount: ResolverTypeWrapper<MessagesSentAndReceivedCount>;
  MicrosoftLinkedAccount: ResolverTypeWrapper<MicrosoftLinkedAccount>;
  MinShouldMatch: ResolverTypeWrapper<MinShouldMatch>;
  MinShouldMatchInput: MinShouldMatchInput;
  MoneyAmount: ResolverTypeWrapper<MoneyAmount>;
  MoneyAmountInput: MoneyAmountInput;
  MoneyAmountObj: ResolverTypeWrapper<MoneyAmountObj>;
  MoneyAmountPercentage: ResolverTypeWrapper<MoneyAmountPercentage>;
  MoneyAmountPercentageInput: MoneyAmountPercentageInput;
  MoneyAmountPercentageType: ResolverTypeWrapper<MoneyAmountPercentageType>;
  MoneyAmountType: ResolverTypeWrapper<MoneyAmountType>;
  Mutation: ResolverTypeWrapper<{}>;
  NoticePeriod: ResolverTypeWrapper<NoticePeriod>;
  NoticePeriodInput: NoticePeriodInput;
  OauthSetting: ResolverTypeWrapper<OauthSetting>;
  OauthSettingInput: OauthSettingInput;
  ObjectId: ResolverTypeWrapper<Scalars['ObjectId']['output']>;
  OperationOptionsInput: OperationOptionsInput;
  Organization: ResolverTypeWrapper<Organization>;
  OrganizationInput: OrganizationInput;
  OrganizationLogoLinkedin: ResolverTypeWrapper<OrganizationLogoLinkedin>;
  OrganizationLogoLinkedinInput: OrganizationLogoLinkedinInput;
  OrganizationType: ResolverTypeWrapper<OrganizationType>;
  Origin: ResolverTypeWrapper<Origin>;
  OriginInput: OriginInput;
  OriginType: ResolverTypeWrapper<OriginType>;
  PDLResponse: ResolverTypeWrapper<PdlResponse>;
  PasswordStrengthObject: ResolverTypeWrapper<PasswordStrengthObject>;
  PaymentItem: ResolverTypeWrapper<PaymentItem>;
  PaymentItemInput: PaymentItemInput;
  PayoutItem: ResolverTypeWrapper<PayoutItem>;
  PendingInvitationInput: PendingInvitationInput;
  Period: ResolverTypeWrapper<Period>;
  PeriodInput: PeriodInput;
  PersonalDetail: ResolverTypeWrapper<PersonalDetail>;
  PersonalDetailInput: PersonalDetailInput;
  Pipeline: ResolverTypeWrapper<Pipeline>;
  PipelineIdAndJobTitle: PipelineIdAndJobTitle;
  PipelineInput: PipelineInput;
  PipelineStagesWithCandidates: ResolverTypeWrapper<PipelineStagesWithCandidates>;
  PipelineStagesWithCandidatesCount: ResolverTypeWrapper<PipelineStagesWithCandidatesCount>;
  PipelineTemplate: ResolverTypeWrapper<PipelineTemplate>;
  PipelineTemplateInput: PipelineTemplateInput;
  Plan: ResolverTypeWrapper<Plan>;
  PrivacyLevel: ResolverTypeWrapper<PrivacyLevel>;
  PrivacyLevelInput: PrivacyLevelInput;
  Privilege: ResolverTypeWrapper<Privilege>;
  ProfExperience: ResolverTypeWrapper<ProfExperience>;
  ProfExperienceInput: ProfExperienceInput;
  Query: ResolverTypeWrapper<{}>;
  RecentContactsFilter: ResolverTypeWrapper<RecentContactsFilter>;
  RecommendedProduct: ResolverTypeWrapper<RecommendedProduct>;
  ReferenceField: ResolverTypeWrapper<ReferenceField>;
  RefreshObject: ResolverTypeWrapper<RefreshObject>;
  RegisterObject: ResolverTypeWrapper<RegisterObject>;
  RemoteWork: ResolverTypeWrapper<RemoteWork>;
  RemoteWorkInput: RemoteWorkInput;
  ReplyIdentification: ResolverTypeWrapper<ReplyIdentification>;
  ReplyIdentificationInput: ReplyIdentificationInput;
  ReplyIdentifications: ResolverTypeWrapper<ReplyIdentifications>;
  ReplyIdentificationsInput: ReplyIdentificationsInput;
  ReplyTag: ResolverTypeWrapper<ReplyTag>;
  Role: ResolverTypeWrapper<Role>;
  RoleTitle: ResolverTypeWrapper<RoleTitle>;
  Score: ResolverTypeWrapper<Score>;
  ScoreInput: ScoreInput;
  SendEmail: ResolverTypeWrapper<SendEmail>;
  SendEmailInput: SendEmailInput;
  Skill: ResolverTypeWrapper<Skill>;
  SkillInput: SkillInput;
  SkillName: ResolverTypeWrapper<SkillName>;
  SkillType: ResolverTypeWrapper<SkillType>;
  SkillTypeInput: SkillTypeInput;
  SmtpSetting: ResolverTypeWrapper<SmtpSetting>;
  SmtpSettingInput: SmtpSettingInput;
  SmtpTransportVerification: ResolverTypeWrapper<SmtpTransportVerification>;
  SocialProfile: ResolverTypeWrapper<SocialProfile>;
  SocialProfileWrapperInput: SocialProfileWrapperInput;
  SolutionWithProduct: ResolverTypeWrapper<SolutionWithProduct>;
  SortOrderInput: SortOrderInput;
  Stage: ResolverTypeWrapper<Stage>;
  StageInput: StageInput;
  StageTemplate: ResolverTypeWrapper<StageTemplate>;
  StageTemplateInput: StageTemplateInput;
  StageWithCandidates: ResolverTypeWrapper<StageWithCandidates>;
  StageWithCandidatesCount: ResolverTypeWrapper<StageWithCandidatesCount>;
  StrAdvancedFilter: ResolverTypeWrapper<StrAdvancedFilter>;
  StrAdvancedFilterInput: StrAdvancedFilterInput;
  StrCurrentOrPastAdvancedFilter: ResolverTypeWrapper<StrCurrentOrPastAdvancedFilter>;
  StrCurrentOrPastAdvancedFilterInput: StrCurrentOrPastAdvancedFilterInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StripeCard: ResolverTypeWrapper<StripeCard>;
  StripePaymentMethod: ResolverTypeWrapper<StripePaymentMethod>;
  SubScore: ResolverTypeWrapper<SubScore>;
  SubScoreInput: SubScoreInput;
  SubStage: ResolverTypeWrapper<SubStage>;
  SubStageInput: SubStageInput;
  SubStageTemplate: ResolverTypeWrapper<SubStageTemplate>;
  SubStageTemplateInput: SubStageTemplateInput;
  Subscription: ResolverTypeWrapper<{}>;
  SuccessfulExitStageTemplate: ResolverTypeWrapper<SuccessfulExitStageTemplate>;
  SuccessfulExitStageTemplateInput: SuccessfulExitStageTemplateInput;
  TimeDelay: ResolverTypeWrapper<TimeDelay>;
  TimeUnit: ResolverTypeWrapper<TimeUnit>;
  TotalInvitationsSentAndPending: ResolverTypeWrapper<TotalInvitationsSentAndPending>;
  TravelRequired: ResolverTypeWrapper<TravelRequired>;
  TravelRequiredInput: TravelRequiredInput;
  TutorialProgress: ResolverTypeWrapper<TutorialProgress>;
  TutorialProgressInput: TutorialProgressInput;
  UpdateBillingDetailInput: UpdateBillingDetailInput;
  UpdateJobinEventInput: UpdateJobinEventInput;
  UpdateLinkedinConnectionInput: UpdateLinkedinConnectionInput;
  UpdateLinkedinConversationInput: UpdateLinkedinConversationInput;
  UploadedFile: ResolverTypeWrapper<UploadedFile>;
  UploadedFileInput: UploadedFileInput;
  User: ResolverTypeWrapper<User>;
  UserActivationInput: UserActivationInput;
  UserAdditionalDetail: ResolverTypeWrapper<UserAdditionalDetail>;
  UserAdditionalDetailInput: UserAdditionalDetailInput;
  UserInput: UserInput;
  UserLinkedinUrlOwnedBaseTemplate: ResolverTypeWrapper<UserLinkedinUrlOwnedBaseTemplate>;
  UserLinkedinUrlOwnedBaseTemplateInput: UserLinkedinUrlOwnedBaseTemplateInput;
  UserWorkGroupSettingInput: UserWorkGroupSettingInput;
  VatIdResponse: ResolverTypeWrapper<VatIdResponse>;
  VoluntExperience: ResolverTypeWrapper<VoluntExperience>;
  VoluntExperienceInput: VoluntExperienceInput;
  VolunteerCause: ResolverTypeWrapper<VolunteerCause>;
  WorkGroup: ResolverTypeWrapper<WorkGroup>;
  WorkGroupInput: WorkGroupInput;
  WorkInProgressFeedback: ResolverTypeWrapper<WorkInProgressFeedback>;
  WorkInProgressFeedbackInput: WorkInProgressFeedbackInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AbstractContact: AbstractContact;
  AbstractContactInput: AbstractContactInput;
  AbstractContactsFilter: AbstractContactsFilter;
  Accomplishment: Accomplishment;
  AccomplishmentInput: AccomplishmentInput;
  AccomplishmentType: AccomplishmentType;
  AccomplishmentTypeInput: AccomplishmentTypeInput;
  AccountLogo: AccountLogo;
  AccountLogoInput: AccountLogoInput;
  AccountTag: AccountTag;
  AccountTagInput: AccountTagInput;
  AccountType: AccountType;
  AccountWithJobspecs: AccountWithJobspecs;
  ActiveFeature: ActiveFeature;
  ActiveFeatureLabel: ActiveFeatureLabel;
  ActivePipelineStage: ActivePipelineStage;
  ActivePipelineStageInput: ActivePipelineStageInput;
  ActivePipelineStageWithEventIdAndTitle: ActivePipelineStageWithEventIdAndTitle;
  ActiveSubscription: ActiveSubscription;
  AdditionalField: AdditionalField;
  AffiliateCodeAvailability: AffiliateCodeAvailability;
  AffiliateLead: AffiliateLead;
  AffiliateLeadTotals: AffiliateLeadTotals;
  AffiliatePayout: AffiliatePayout;
  AffiliateTotalPayout: AffiliateTotalPayout;
  AssignSeatPrivilegeInput: AssignSeatPrivilegeInput;
  AvailabilityPeriod: AvailabilityPeriod;
  AvailabilityPeriodInput: AvailabilityPeriodInput;
  AvailabilityRow: AvailabilityRow;
  AvailabilityRowInput: AvailabilityRowInput;
  Avatar: Avatar;
  AvatarWithValue: AvatarWithValue;
  BaseTemplate: BaseTemplate;
  BaseTemplateColorIconName: BaseTemplateColorIconName;
  BaseTemplateColorIconNameInput: BaseTemplateColorIconNameInput;
  BaseTemplateIconName: BaseTemplateIconName;
  BaseTemplateIconNameInput: BaseTemplateIconNameInput;
  BaseTemplateLevel: BaseTemplateLevel;
  BaseTemplateLevelInput: BaseTemplateLevelInput;
  BaseTemplateStyleIconName: BaseTemplateStyleIconName;
  BaseTemplateStyleIconNameInput: BaseTemplateStyleIconNameInput;
  Benefit: Benefit;
  BenefitInput: BenefitInput;
  BenefitTemplate: BenefitTemplate;
  BenefitTemplateInput: BenefitTemplateInput;
  BenefitType: BenefitType;
  BillingDetail: BillingDetail;
  BillingDetailInput: BillingDetailInput;
  Boolean: Scalars['Boolean']['output'];
  CampaignStage: CampaignStage;
  CampaignStageInput: CampaignStageInput;
  CareerOverview: CareerOverview;
  CareerOverviewInput: CareerOverviewInput;
  ChatGptMessage: ChatGptMessage;
  ChatGptPrompt: ChatGptPrompt;
  ChatGptPromptInput: ChatGptPromptInput;
  ChatGptPublicPrompt: ChatGptPublicPrompt;
  CheckoutAmount: CheckoutAmount;
  CommunicationChannel: CommunicationChannel;
  CommunicationChannelInput: CommunicationChannelInput;
  CommunicationChannelType: CommunicationChannelType;
  CommunicationChannelTypeInput: CommunicationChannelTypeInput;
  CompletedContactDripCampaignStage: CompletedContactDripCampaignStage;
  CompletedContactDripCampaignStageInput: CompletedContactDripCampaignStageInput;
  Contact: Contact;
  ContactEnrichmentObj: ContactEnrichmentObj;
  ContactInput: ContactInput;
  ContactNote: ContactNote;
  ContactNoteInput: ContactNoteInput;
  ContactPerson: ContactPerson;
  ContactPersonInput: ContactPersonInput;
  ContactSpecialInput: ContactSpecialInput;
  ContactSpecification: ContactSpecification;
  ContactSpecificationInput: ContactSpecificationInput;
  ContactSubtype: ContactSubtype;
  ContactTag: ContactTag;
  ContactTagInput: ContactTagInput;
  ContactsAvailabilityFilter: ContactsAvailabilityFilter;
  ContactsAvailabilityFilterInput: ContactsAvailabilityFilterInput;
  ContactsCareerFilter: ContactsCareerFilter;
  ContactsCareerFilterInput: ContactsCareerFilterInput;
  ContactsDateRangeFilter: ContactsDateRangeFilter;
  ContactsDateRangeFilterInput: ContactsDateRangeFilterInput;
  ContactsEducationFilter: ContactsEducationFilter;
  ContactsEducationFilterInput: ContactsEducationFilterInput;
  ContactsFilter: ContactsFilter;
  ContactsFilterInput: ContactsFilterInput;
  ContactsFilterSaveInput: ContactsFilterSaveInput;
  ContactsJobspecFilter: ContactsJobspecFilter;
  ContactsJobspecFilterInput: ContactsJobspecFilterInput;
  ContactsSortBy: ContactsSortBy;
  ContactsSortByInput: ContactsSortByInput;
  ContactsTimeRangeFilter: ContactsTimeRangeFilter;
  ContactsTimeRangeFilterInput: ContactsTimeRangeFilterInput;
  ConversationMessageGroupInput: ConversationMessageGroupInput;
  Coord: Coord;
  CoordInput: CoordInput;
  CoordWithRadius: CoordWithRadius;
  CoordWithRadiusInput: CoordWithRadiusInput;
  Country: Country;
  Coupon: Coupon;
  CsvColumnAssociation: CsvColumnAssociation;
  CsvColumnAssociationGroup: CsvColumnAssociationGroup;
  CsvColumnAssociationGroupInput: CsvColumnAssociationGroupInput;
  CsvColumnAssociationInput: CsvColumnAssociationInput;
  CsvInput: CsvInput;
  CsvInputInput: CsvInputInput;
  Currency: Currency;
  CurrencyInput: CurrencyInput;
  CurrencyTemplate: CurrencyTemplate;
  CustomField: CustomField;
  CustomFieldFilterInput: CustomFieldFilterInput;
  CustomFieldInput: CustomFieldInput;
  DateObj: DateObj;
  DateObjInput: DateObjInput;
  DateTimeISO: Scalars['DateTimeISO']['output'];
  Department: Department;
  DripAssignOption: DripAssignOption;
  DripAssignOptionInput: DripAssignOptionInput;
  DripCampaign: DripCampaign;
  DripCampaignAndContact: DripCampaignAndContact;
  DripCampaignFilter: DripCampaignFilter;
  DripCampaignFilterInput: DripCampaignFilterInput;
  DripCampaignInput: DripCampaignInput;
  DripConditionOption: DripConditionOption;
  DripConditionOptionInput: DripConditionOptionInput;
  DripEmailOption: DripEmailOption;
  DripEmailOptionInput: DripEmailOptionInput;
  DripLinkedinConnectionOption: DripLinkedinConnectionOption;
  DripLinkedinConnectionOptionInput: DripLinkedinConnectionOptionInput;
  DripLinkedinMessageOption: DripLinkedinMessageOption;
  DripLinkedinMessageOptionInput: DripLinkedinMessageOptionInput;
  DripStage: DripStage;
  DripStageInput: DripStageInput;
  DripStageOption: DripStageOption;
  DripStageOptionInput: DripStageOptionInput;
  Duplicate: Duplicate;
  DuplicateContainer: DuplicateContainer;
  EducExperience: EducExperience;
  EducExperienceInput: EducExperienceInput;
  EducationalLevel: EducationalLevel;
  EducationalLevelInput: EducationalLevelInput;
  EmailSender: EmailSender;
  EmailSenderInput: EmailSenderInput;
  EmailSendersByWorkGroup: EmailSendersByWorkGroup;
  EmailTemplate: EmailTemplate;
  EmailTemplateInput: EmailTemplateInput;
  EmailTemplateType: EmailTemplateType;
  EmployeeCountRange: EmployeeCountRange;
  EvaluationStage: EvaluationStage;
  EventAttachment: EventAttachment;
  EventAttachmentInput: EventAttachmentInput;
  EventType: EventType;
  EventTypeInput: EventTypeInput;
  ExitStageTemplate: ExitStageTemplate;
  ExitStageTemplateInput: ExitStageTemplateInput;
  Field: Field;
  FieldGroup: FieldGroup;
  FittingIndex: FittingIndex;
  FittingIndexInput: FittingIndexInput;
  Float: Scalars['Float']['output'];
  FollowUpMessageInput: FollowUpMessageInput;
  FrequentlyAskedQuestion: FrequentlyAskedQuestion;
  FrequentlyAskedQuestionType: FrequentlyAskedQuestionType;
  FullContactPerson: FullContactPerson;
  FullPipelineStage: FullPipelineStage;
  Funnel: Funnel;
  FunnelBlock: FunnelBlock;
  GroupScore: GroupScore;
  GroupScoreInput: GroupScoreInput;
  HelpdeskMessage: HelpdeskMessage;
  HelpdeskMessageInput: HelpdeskMessageInput;
  IdAdvancedFilter: IdAdvancedFilter;
  IdAdvancedFilterInput: IdAdvancedFilterInput;
  IdealCandidateFilter: IdealCandidateFilter;
  IdealCandidateFilterInput: IdealCandidateFilterInput;
  Indicator: Indicator;
  Industry: Industry;
  IndustrySector: IndustrySector;
  InsertionDateFilter: InsertionDateFilter;
  InsertionDateFilterInput: InsertionDateFilterInput;
  Int: Scalars['Int']['output'];
  JobinAccount: JobinAccount;
  JobinAccountInput: JobinAccountInput;
  JobinAccountNote: JobinAccountNote;
  JobinAccountNoteInput: JobinAccountNoteInput;
  JobinCompletedJob: JobinCompletedJob;
  JobinDailyQuotas: JobinDailyQuotas;
  JobinEvent: JobinEvent;
  JobinEventInput: JobinEventInput;
  JobinFeature: JobinFeature;
  JobinFeatureGroup: JobinFeatureGroup;
  JobinFeaturePlan: JobinFeaturePlan;
  JobinInvoice: JobinInvoice;
  JobinJob: JobinJob;
  JobinJobContact: JobinJobContact;
  JobinJobContactInput: JobinJobContactInput;
  JobinJobFromFilterResult: JobinJobFromFilterResult;
  JobinJobInput: JobinJobInput;
  JobinJobSubscription: JobinJobSubscription;
  JobinJobUpdateInput: JobinJobUpdateInput;
  JobinPrice: JobinPrice;
  JobinProduct: JobinProduct;
  JobinQuotaAndLimit: JobinQuotaAndLimit;
  JobinSolution: JobinSolution;
  JobinSubFeature: JobinSubFeature;
  JobinSubscription: JobinSubscription;
  JobseekerAim: JobseekerAim;
  JobseekerCriterion: JobseekerCriterion;
  JobseekerCriterionInput: JobseekerCriterionInput;
  JobseekerStatus: JobseekerStatus;
  Jobspec: Jobspec;
  JobspecDescription: JobspecDescription;
  JobspecDescriptionInput: JobspecDescriptionInput;
  JobspecDescriptionTemplate: JobspecDescriptionTemplate;
  JobspecDescriptionTemplateInput: JobspecDescriptionTemplateInput;
  JobspecDescriptionType: JobspecDescriptionType;
  JobspecInput: JobspecInput;
  JobspecInternalDetail: JobspecInternalDetail;
  JobspecInternalDetailInput: JobspecInternalDetailInput;
  JobspecNote: JobspecNote;
  JobspecNoteInput: JobspecNoteInput;
  JobspecStatus: JobspecStatus;
  JobspecStatusInput: JobspecStatusInput;
  JobspecTag: JobspecTag;
  JobspecType: JobspecType;
  JobspecTypeInput: JobspecTypeInput;
  JobyChatGptPrompt: JobyChatGptPrompt;
  JobyChatGptPromptInput: JobyChatGptPromptInput;
  JobyChatGptResponse: JobyChatGptResponse;
  Language: Language;
  LanguageInput: LanguageInput;
  LanguageName: LanguageName;
  LatestLinkedinConnectionConnectedOnDate: LatestLinkedinConnectionConnectedOnDate;
  LinkedinAccountInput: LinkedinAccountInput;
  LinkedinAccountWithDefaultCountry: LinkedinAccountWithDefaultCountry;
  LinkedinAnalytic: LinkedinAnalytic;
  LinkedinAnalyticInput: LinkedinAnalyticInput;
  LinkedinAnalyticTimeline: LinkedinAnalyticTimeline;
  LinkedinAnalyticTimelineRecords: LinkedinAnalyticTimelineRecords;
  LinkedinAnalyticTotals: LinkedinAnalyticTotals;
  LinkedinConversation: LinkedinConversation;
  LinkedinConversationInput: LinkedinConversationInput;
  LinkedinDetail: LinkedinDetail;
  LinkedinDetailInput: LinkedinDetailInput;
  LinkedinInvitation: LinkedinInvitation;
  LinkedinInvitationInput: LinkedinInvitationInput;
  LinkedinMessageInput: LinkedinMessageInput;
  LinkedinNoteInput: LinkedinNoteInput;
  LinkedinProfile: LinkedinProfile;
  LinkedinProfileInput: LinkedinProfileInput;
  LinkedinSalesApiScore: LinkedinSalesApiScore;
  LinkedinSalesApiScoreInput: LinkedinSalesApiScoreInput;
  LinkedinSalesConversation: LinkedinSalesConversation;
  LinkedinTagsFilter: LinkedinTagsFilter;
  LinkedinTagsFilterInput: LinkedinTagsFilterInput;
  LinkedinThrottlingSetting: LinkedinThrottlingSetting;
  LinkedinThrottlingSettingInput: LinkedinThrottlingSettingInput;
  LinkedinUrlAndId: LinkedinUrlAndId;
  LoginObject: LoginObject;
  MainExperienceStudent: MainExperienceStudent;
  MainJobspec: MainJobspec;
  MainJobspecInput: MainJobspecInput;
  MainLocation: MainLocation;
  MainLocationCoordFilter: MainLocationCoordFilter;
  MainLocationFilter: MainLocationFilter;
  MainLocationFilterInput: MainLocationFilterInput;
  MainLocationInput: MainLocationInput;
  MainLocationWorldLocationMatch: MainLocationWorldLocationMatch;
  MainOrganization: MainOrganization;
  MaritalStatus: MaritalStatus;
  MemberRole: MemberRole;
  MemberRoleInput: MemberRoleInput;
  MemberScore: MemberScore;
  MemberScoreInput: MemberScoreInput;
  MergeError: MergeError;
  MessageSendWithDelayInput: MessageSendWithDelayInput;
  MessageTemplate: MessageTemplate;
  MessageTemplateInput: MessageTemplateInput;
  MessagesSentAndReceivedCount: MessagesSentAndReceivedCount;
  MicrosoftLinkedAccount: MicrosoftLinkedAccount;
  MinShouldMatch: MinShouldMatch;
  MinShouldMatchInput: MinShouldMatchInput;
  MoneyAmount: MoneyAmount;
  MoneyAmountInput: MoneyAmountInput;
  MoneyAmountObj: MoneyAmountObj;
  MoneyAmountPercentage: MoneyAmountPercentage;
  MoneyAmountPercentageInput: MoneyAmountPercentageInput;
  MoneyAmountPercentageType: MoneyAmountPercentageType;
  MoneyAmountType: MoneyAmountType;
  Mutation: {};
  NoticePeriod: NoticePeriod;
  NoticePeriodInput: NoticePeriodInput;
  OauthSetting: OauthSetting;
  OauthSettingInput: OauthSettingInput;
  ObjectId: Scalars['ObjectId']['output'];
  OperationOptionsInput: OperationOptionsInput;
  Organization: Organization;
  OrganizationInput: OrganizationInput;
  OrganizationLogoLinkedin: OrganizationLogoLinkedin;
  OrganizationLogoLinkedinInput: OrganizationLogoLinkedinInput;
  OrganizationType: OrganizationType;
  Origin: Origin;
  OriginInput: OriginInput;
  OriginType: OriginType;
  PDLResponse: PdlResponse;
  PasswordStrengthObject: PasswordStrengthObject;
  PaymentItem: PaymentItem;
  PaymentItemInput: PaymentItemInput;
  PayoutItem: PayoutItem;
  PendingInvitationInput: PendingInvitationInput;
  Period: Period;
  PeriodInput: PeriodInput;
  PersonalDetail: PersonalDetail;
  PersonalDetailInput: PersonalDetailInput;
  Pipeline: Pipeline;
  PipelineIdAndJobTitle: PipelineIdAndJobTitle;
  PipelineInput: PipelineInput;
  PipelineStagesWithCandidates: PipelineStagesWithCandidates;
  PipelineStagesWithCandidatesCount: PipelineStagesWithCandidatesCount;
  PipelineTemplate: PipelineTemplate;
  PipelineTemplateInput: PipelineTemplateInput;
  Plan: Plan;
  PrivacyLevel: PrivacyLevel;
  PrivacyLevelInput: PrivacyLevelInput;
  Privilege: Privilege;
  ProfExperience: ProfExperience;
  ProfExperienceInput: ProfExperienceInput;
  Query: {};
  RecentContactsFilter: RecentContactsFilter;
  RecommendedProduct: RecommendedProduct;
  ReferenceField: ReferenceField;
  RefreshObject: RefreshObject;
  RegisterObject: RegisterObject;
  RemoteWork: RemoteWork;
  RemoteWorkInput: RemoteWorkInput;
  ReplyIdentification: ReplyIdentification;
  ReplyIdentificationInput: ReplyIdentificationInput;
  ReplyIdentifications: ReplyIdentifications;
  ReplyIdentificationsInput: ReplyIdentificationsInput;
  ReplyTag: ReplyTag;
  Role: Role;
  RoleTitle: RoleTitle;
  Score: Score;
  ScoreInput: ScoreInput;
  SendEmail: SendEmail;
  SendEmailInput: SendEmailInput;
  Skill: Skill;
  SkillInput: SkillInput;
  SkillName: SkillName;
  SkillType: SkillType;
  SkillTypeInput: SkillTypeInput;
  SmtpSetting: SmtpSetting;
  SmtpSettingInput: SmtpSettingInput;
  SmtpTransportVerification: SmtpTransportVerification;
  SocialProfile: SocialProfile;
  SocialProfileWrapperInput: SocialProfileWrapperInput;
  SolutionWithProduct: SolutionWithProduct;
  SortOrderInput: SortOrderInput;
  Stage: Stage;
  StageInput: StageInput;
  StageTemplate: StageTemplate;
  StageTemplateInput: StageTemplateInput;
  StageWithCandidates: StageWithCandidates;
  StageWithCandidatesCount: StageWithCandidatesCount;
  StrAdvancedFilter: StrAdvancedFilter;
  StrAdvancedFilterInput: StrAdvancedFilterInput;
  StrCurrentOrPastAdvancedFilter: StrCurrentOrPastAdvancedFilter;
  StrCurrentOrPastAdvancedFilterInput: StrCurrentOrPastAdvancedFilterInput;
  String: Scalars['String']['output'];
  StripeCard: StripeCard;
  StripePaymentMethod: StripePaymentMethod;
  SubScore: SubScore;
  SubScoreInput: SubScoreInput;
  SubStage: SubStage;
  SubStageInput: SubStageInput;
  SubStageTemplate: SubStageTemplate;
  SubStageTemplateInput: SubStageTemplateInput;
  Subscription: {};
  SuccessfulExitStageTemplate: SuccessfulExitStageTemplate;
  SuccessfulExitStageTemplateInput: SuccessfulExitStageTemplateInput;
  TimeDelay: TimeDelay;
  TimeUnit: TimeUnit;
  TotalInvitationsSentAndPending: TotalInvitationsSentAndPending;
  TravelRequired: TravelRequired;
  TravelRequiredInput: TravelRequiredInput;
  TutorialProgress: TutorialProgress;
  TutorialProgressInput: TutorialProgressInput;
  UpdateBillingDetailInput: UpdateBillingDetailInput;
  UpdateJobinEventInput: UpdateJobinEventInput;
  UpdateLinkedinConnectionInput: UpdateLinkedinConnectionInput;
  UpdateLinkedinConversationInput: UpdateLinkedinConversationInput;
  UploadedFile: UploadedFile;
  UploadedFileInput: UploadedFileInput;
  User: User;
  UserActivationInput: UserActivationInput;
  UserAdditionalDetail: UserAdditionalDetail;
  UserAdditionalDetailInput: UserAdditionalDetailInput;
  UserInput: UserInput;
  UserLinkedinUrlOwnedBaseTemplate: UserLinkedinUrlOwnedBaseTemplate;
  UserLinkedinUrlOwnedBaseTemplateInput: UserLinkedinUrlOwnedBaseTemplateInput;
  UserWorkGroupSettingInput: UserWorkGroupSettingInput;
  VatIdResponse: VatIdResponse;
  VoluntExperience: VoluntExperience;
  VoluntExperienceInput: VoluntExperienceInput;
  VolunteerCause: VolunteerCause;
  WorkGroup: WorkGroup;
  WorkGroupInput: WorkGroupInput;
  WorkInProgressFeedback: WorkInProgressFeedback;
  WorkInProgressFeedbackInput: WorkInProgressFeedbackInput;
}>;

export type AbstractContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['AbstractContact'] = ResolversParentTypes['AbstractContact']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  academicTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accomplishments?: Resolver<Maybe<Array<ResolversTypes['Accomplishment']>>, ParentType, ContextType>;
  attachments?: Resolver<Maybe<Array<ResolversTypes['UploadedFile']>>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  calendlyUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  communicationChannels?: Resolver<Maybe<Array<ResolversTypes['CommunicationChannel']>>, ParentType, ContextType>;
  contactSpecification?: Resolver<Maybe<ResolversTypes['ContactSpecification']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  cvExtRepoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cvFile?: Resolver<Maybe<ResolversTypes['UploadedFile']>, ParentType, ContextType>;
  educExperiences?: Resolver<Maybe<Array<ResolversTypes['EducExperience']>>, ParentType, ContextType>;
  facebookId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebookUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebookUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  githubUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  githubUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gravatarCheckTimestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gravatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasMobilePhone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPageUrls?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPhone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  industry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instagramUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobseekerCriterion?: Resolver<Maybe<ResolversTypes['JobseekerCriterion']>, ParentType, ContextType>;
  languageUsed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  languages?: Resolver<Maybe<Array<ResolversTypes['Language']>>, ParentType, ContextType>;
  lastLinkedinUpdate?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinDetail?: Resolver<Maybe<ResolversTypes['LinkedinDetail']>, ParentType, ContextType>;
  linkedinSalesUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinTalentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainLocation?: Resolver<Maybe<ResolversTypes['MainLocation']>, ParentType, ContextType>;
  mainProfExperience?: Resolver<Maybe<ResolversTypes['ProfExperience']>, ParentType, ContextType>;
  mainRoleTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mediumUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  middleName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oldLinkedinUrls?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  otherEmails?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  otherMobilePhones?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  otherPhones?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  pageUrls?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  pdlId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personalDetail?: Resolver<Maybe<ResolversTypes['PersonalDetail']>, ParentType, ContextType>;
  personalInterest?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  privateEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  privateMobilePhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  privatePhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profExperiences?: Resolver<Maybe<Array<ResolversTypes['ProfExperience']>>, ParentType, ContextType>;
  quoraUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  skills?: Resolver<Maybe<Array<ResolversTypes['Skill']>>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tiktokUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitterUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitterUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  voluntExperiences?: Resolver<Maybe<Array<ResolversTypes['VoluntExperience']>>, ParentType, ContextType>;
  want?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wechatUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  workEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  workMobilePhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  workPhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  xingUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  yearsInCurrentRole?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  yearsOfExperience?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  youtubeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AbstractContactsFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['AbstractContactsFilter'] = ResolversParentTypes['AbstractContactsFilter']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  _ids?: Resolver<Maybe<Array<ResolversTypes['ObjectId']>>, ParentType, ContextType>;
  companyEmployeeCountRanges?: Resolver<Maybe<Array<ResolversTypes['StrCurrentOrPastAdvancedFilter']>>, ParentType, ContextType>;
  contactsAvailability?: Resolver<Maybe<ResolversTypes['ContactsAvailabilityFilter']>, ParentType, ContextType>;
  contactsCareer?: Resolver<Maybe<ResolversTypes['ContactsCareerFilter']>, ParentType, ContextType>;
  contactsEducation?: Resolver<Maybe<ResolversTypes['ContactsEducationFilter']>, ParentType, ContextType>;
  contactsLastEvent?: Resolver<Maybe<ResolversTypes['ContactsDateRangeFilter']>, ParentType, ContextType>;
  contactsLastInteraction?: Resolver<Maybe<ResolversTypes['ContactsDateRangeFilter']>, ParentType, ContextType>;
  contactsLastUnansweredReply?: Resolver<Maybe<ResolversTypes['ContactsDateRangeFilter']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  dripCampaignFilter?: Resolver<Maybe<ResolversTypes['DripCampaignFilter']>, ParentType, ContextType>;
  dripCampaignsFilter?: Resolver<Maybe<Array<ResolversTypes['IdAdvancedFilter']>>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['StrAdvancedFilter']>, ParentType, ContextType>;
  hasCv?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasInteraction?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasLinkedinId?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasUnansweredReply?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  insertionDate?: Resolver<Maybe<ResolversTypes['InsertionDateFilter']>, ParentType, ContextType>;
  isMiniProfile?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  jobseekerStatuses?: Resolver<Maybe<Array<ResolversTypes['StrAdvancedFilter']>>, ParentType, ContextType>;
  jobspecFilter?: Resolver<Maybe<ResolversTypes['ContactsJobspecFilter']>, ParentType, ContextType>;
  languageNames?: Resolver<Maybe<Array<ResolversTypes['StrAdvancedFilter']>>, ParentType, ContextType>;
  linkedinTagsFilter?: Resolver<Maybe<ResolversTypes['LinkedinTagsFilter']>, ParentType, ContextType>;
  locations?: Resolver<Maybe<Array<ResolversTypes['MainLocationFilter']>>, ParentType, ContextType>;
  minShouldMatch?: Resolver<Maybe<ResolversTypes['MinShouldMatch']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  searchName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  searchSurname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  searchValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showNoCurrentCompany?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  showUnsubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  skillNames?: Resolver<Maybe<Array<ResolversTypes['StrAdvancedFilter']>>, ParentType, ContextType>;
  sortBy?: Resolver<Maybe<ResolversTypes['ContactsSortBy']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<Array<ResolversTypes['StrAdvancedFilter']>>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['IdAdvancedFilter']>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  yearsInCurrentRole?: Resolver<Maybe<Array<ResolversTypes['ContactsTimeRangeFilter']>>, ParentType, ContextType>;
  yearsOfExperience?: Resolver<Maybe<Array<ResolversTypes['ContactsTimeRangeFilter']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccomplishmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Accomplishment'] = ResolversParentTypes['Accomplishment']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  accomplishmentType?: Resolver<Maybe<ResolversTypes['BaseTemplateIconName']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  issuer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organizationLogo?: Resolver<Maybe<ResolversTypes['OrganizationLogoLinkedin']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccomplishmentTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccomplishmentType'] = ResolversParentTypes['AccomplishmentType']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountLogoResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountLogo'] = ResolversParentTypes['AccountLogo']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  accountId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  logoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountTag'] = ResolversParentTypes['AccountTag']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountType'] = ResolversParentTypes['AccountType']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountWithJobspecsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountWithJobspecs'] = ResolversParentTypes['AccountWithJobspecs']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  accountLogo?: Resolver<Maybe<ResolversTypes['AccountLogo']>, ParentType, ContextType>;
  jobspecs?: Resolver<Maybe<Array<ResolversTypes['Jobspec']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActiveFeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActiveFeature'] = ResolversParentTypes['ActiveFeature']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  codename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isDaily?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isFixed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isInfinite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isPerWorkGroup?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActiveFeatureLabelResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActiveFeatureLabel'] = ResolversParentTypes['ActiveFeatureLabel']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  activeFeature?: Resolver<ResolversTypes['ActiveFeature'], ParentType, ContextType>;
  featureLabel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  queryForUsed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  used?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActivePipelineStageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivePipelineStage'] = ResolversParentTypes['ActivePipelineStage']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  fittingIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  jobspec?: Resolver<Maybe<ResolversTypes['Jobspec']>, ParentType, ContextType>;
  pipelineId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  pipelineStage?: Resolver<Maybe<ResolversTypes['FullPipelineStage']>, ParentType, ContextType>;
  stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subStage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActiveSubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActiveSubscription'] = ResolversParentTypes['ActiveSubscription']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  activeSubscriptionFeatures?: Resolver<Array<ResolversTypes['ActiveFeatureLabel']>, ParentType, ContextType>;
  assignedSeatIds?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  assignedSeatsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currentPlanId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  currentPlanName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iconName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isBilledMonthly?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  monthlyCost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  solutionId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  solutionName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalSeats?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userHasAssignedSeat?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AdditionalFieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdditionalField'] = ResolversParentTypes['AdditionalField']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isBoolean?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isNumber?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isPlural?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AffiliateCodeAvailabilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['AffiliateCodeAvailability'] = ResolversParentTypes['AffiliateCodeAvailability']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  affiliateCouponCodeIsAvailable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  affiliateLinkIsAvailable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AffiliateLeadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AffiliateLead'] = ResolversParentTypes['AffiliateLead']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  couponPercentage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstPaymentDate?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  ip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobinInvoiceId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  jobinSubscriptionId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  linkClickedDate?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  linkedinUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalUserId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  overwriteMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payableAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  payableAmountCurrency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>;
  referredUserAvatar?: Resolver<Maybe<ResolversTypes['Avatar']>, ParentType, ContextType>;
  referredUserId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  signupDate?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalAffiliateFeeLost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalAffiliateFeeReceived?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  wasCanceled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  wasRefunded?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AffiliateLeadTotalsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AffiliateLeadTotals'] = ResolversParentTypes['AffiliateLeadTotals']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  cancelled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  clicks?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  customers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  inGracePeriod?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  signups?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AffiliatePayoutResolvers<ContextType = any, ParentType extends ResolversParentTypes['AffiliatePayout'] = ResolversParentTypes['AffiliatePayout']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  payoutBatchId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payoutItem?: Resolver<ResolversTypes['PayoutItem'], ParentType, ContextType>;
  payoutItemFee?: Resolver<ResolversTypes['MoneyAmountObj'], ParentType, ContextType>;
  payoutItemId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timeProcessed?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  transactionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactionStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AffiliateTotalPayoutResolvers<ContextType = any, ParentType extends ResolversParentTypes['AffiliateTotalPayout'] = ResolversParentTypes['AffiliateTotalPayout']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  totalPastPayouts?: Resolver<Maybe<Array<ResolversTypes['MoneyAmountObj']>>, ParentType, ContextType>;
  totalPendingNext2Payouts?: Resolver<Maybe<Array<ResolversTypes['MoneyAmountObj']>>, ParentType, ContextType>;
  totalPendingNextPayouts?: Resolver<Maybe<Array<ResolversTypes['MoneyAmountObj']>>, ParentType, ContextType>;
  totalPendingPayouts?: Resolver<Maybe<Array<ResolversTypes['MoneyAmountObj']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AvailabilityPeriodResolvers<ContextType = any, ParentType extends ResolversParentTypes['AvailabilityPeriod'] = ResolversParentTypes['AvailabilityPeriod']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  availableOn?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  isNegotiable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AvailabilityRowResolvers<ContextType = any, ParentType extends ResolversParentTypes['AvailabilityRow'] = ResolversParentTypes['AvailabilityRow']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  isAvailable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  searchValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AvatarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Avatar'] = ResolversParentTypes['Avatar']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullAvatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AvatarWithValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['AvatarWithValue'] = ResolversParentTypes['AvatarWithValue']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullAvatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BaseTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseTemplate'] = ResolversParentTypes['BaseTemplate']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BaseTemplateColorIconNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseTemplateColorIconName'] = ResolversParentTypes['BaseTemplateColorIconName']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BaseTemplateIconNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseTemplateIconName'] = ResolversParentTypes['BaseTemplateIconName']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BaseTemplateLevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseTemplateLevel'] = ResolversParentTypes['BaseTemplateLevel']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BaseTemplateStyleIconNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseTemplateStyleIconName'] = ResolversParentTypes['BaseTemplateStyleIconName']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BenefitResolvers<ContextType = any, ParentType extends ResolversParentTypes['Benefit'] = ResolversParentTypes['Benefit']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  benefitType?: Resolver<Maybe<ResolversTypes['BaseTemplateIconName']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BenefitTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['BenefitTemplate'] = ResolversParentTypes['BenefitTemplate']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  benefitType?: Resolver<Maybe<ResolversTypes['BaseTemplateIconName']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BenefitTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BenefitType'] = ResolversParentTypes['BenefitType']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BillingDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['BillingDetail'] = ResolversParentTypes['BillingDetail']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  addressLine1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressLine2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  companyRegistrationNr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  countryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
  invoiceEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  removeCountryCodeOnVatId?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  stateProvinceRegion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vatCompanyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vatId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CampaignStageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CampaignStage'] = ResolversParentTypes['CampaignStage']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  campaignId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  stagePositionCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CareerOverviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['CareerOverview'] = ResolversParentTypes['CareerOverview']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  careerLevel?: Resolver<Maybe<ResolversTypes['BaseTemplateLevel']>, ParentType, ContextType>;
  careerPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  careerSubPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  monthsOfExperience?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChatGptPromptResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChatGptPrompt'] = ResolversParentTypes['ChatGptPrompt']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  frequencyPenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  listOf3?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  maxTokens?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  noWordLimit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  numOfWords?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  presencePenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  topP?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  useChatGPT4?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  writeAsExpert?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  writingStyle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChatGptPublicPromptResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChatGptPublicPrompt'] = ResolversParentTypes['ChatGptPublicPrompt']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  categoryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contentExample?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentPlaceholder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType, Partial<ChatGptPublicPromptTextArgs>>;
  tone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  writeAsExpert?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  writingStyle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CheckoutAmountResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutAmount'] = ResolversParentTypes['CheckoutAmount']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  alreadyPaid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  alreadyPaidFull?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  billingDetail?: Resolver<ResolversTypes['BillingDetail'], ParentType, ContextType>;
  bundleDiscountAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  bundleDiscountPercentage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  coupon?: Resolver<Maybe<ResolversTypes['Coupon']>, ParentType, ContextType>;
  couponAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
  isReverseCharged?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  nrOfMonths?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  solutionWithProducts?: Resolver<Array<ResolversTypes['SolutionWithProduct']>, ParentType, ContextType>;
  stripePaymentMethod?: Resolver<Maybe<ResolversTypes['StripePaymentMethod']>, ParentType, ContextType>;
  subscriptionIsMonthly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  taxAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  taxRatePercentage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalToPay?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  yearlyDiscountAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommunicationChannelResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommunicationChannel'] = ResolversParentTypes['CommunicationChannel']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  communicationChannelType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactSubtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommunicationChannelTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommunicationChannelType'] = ResolversParentTypes['CommunicationChannelType']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CompletedContactDripCampaignStageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompletedContactDripCampaignStage'] = ResolversParentTypes['CompletedContactDripCampaignStage']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  bulkPaused?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  campaignId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  campaignName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contactId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  endStagePositionCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  goalReached?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stopped?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  workGroupId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  academicTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accomplishments?: Resolver<Maybe<Array<ResolversTypes['Accomplishment']>>, ParentType, ContextType>;
  activePipelineStage?: Resolver<Maybe<ResolversTypes['ActivePipelineStage']>, ParentType, ContextType, Partial<ContactActivePipelineStageArgs>>;
  activePipelineStages?: Resolver<Maybe<Array<ResolversTypes['ActivePipelineStage']>>, ParentType, ContextType>;
  activePipelineStagesNr?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  alwaysKeepOriginalOnOverwrite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  attachments?: Resolver<Maybe<Array<ResolversTypes['UploadedFile']>>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  calendlyUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  campaignStage?: Resolver<Maybe<ResolversTypes['CampaignStage']>, ParentType, ContextType>;
  communicationChannels?: Resolver<Maybe<Array<ResolversTypes['CommunicationChannel']>>, ParentType, ContextType>;
  contactSpecification?: Resolver<Maybe<ResolversTypes['ContactSpecification']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  customFieldList?: Resolver<Maybe<Array<ResolversTypes['CustomField']>>, ParentType, ContextType>;
  cvExtRepoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cvFile?: Resolver<Maybe<ResolversTypes['UploadedFile']>, ParentType, ContextType>;
  educExperiences?: Resolver<Maybe<Array<ResolversTypes['EducExperience']>>, ParentType, ContextType>;
  facebookId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebookUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebookUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstLinesOfMostRecentNote?: Resolver<Maybe<ResolversTypes['ContactNote']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fittingIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<ContactFittingIndexArgs>>;
  fittingIndexes?: Resolver<Maybe<Array<ResolversTypes['FittingIndex']>>, ParentType, ContextType>;
  fullAvatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  githubUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  githubUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gravatarCheckTimestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gravatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasBeenManuallyUpdated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasDuplicate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasMobilePhone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPageUrls?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPendingInvitation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPhone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  industry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instagramUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobseekerCriterion?: Resolver<Maybe<ResolversTypes['JobseekerCriterion']>, ParentType, ContextType>;
  languageUsed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  languages?: Resolver<Maybe<Array<ResolversTypes['Language']>>, ParentType, ContextType>;
  last4JobinEvents?: Resolver<Maybe<Array<ResolversTypes['JobinEvent']>>, ParentType, ContextType>;
  lastEventDate?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  lastInteractionDate?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  lastLinkedinUpdate?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastUnansweredReplyDate?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  linkedinConnectionLevel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinConnectionLevelAvatars?: Resolver<Maybe<Array<ResolversTypes['AvatarWithValue']>>, ParentType, ContextType>;
  linkedinConnectionLevels?: Resolver<Maybe<Array<ResolversTypes['UserLinkedinUrlOwnedBaseTemplate']>>, ParentType, ContextType>;
  linkedinDetail?: Resolver<Maybe<ResolversTypes['LinkedinDetail']>, ParentType, ContextType>;
  linkedinSalesUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinTalentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainExperienceStudent?: Resolver<Maybe<ResolversTypes['MainExperienceStudent']>, ParentType, ContextType>;
  mainLocation?: Resolver<Maybe<ResolversTypes['MainLocation']>, ParentType, ContextType>;
  mainProfExperience?: Resolver<Maybe<ResolversTypes['ProfExperience']>, ParentType, ContextType>;
  mainRoleTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mediumUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  middleName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<ResolversTypes['ContactNote']>>, ParentType, ContextType>;
  oldLinkedinUrls?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  otherEmails?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  otherMobilePhones?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  otherPhones?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  pageUrls?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  pdlId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personalDetail?: Resolver<Maybe<ResolversTypes['PersonalDetail']>, ParentType, ContextType>;
  personalInterest?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  privateEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  privateMobilePhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  privatePhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profExperienceHasBeenManuallyUpdated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  profExperiences?: Resolver<Maybe<Array<ResolversTypes['ProfExperience']>>, ParentType, ContextType>;
  quoraUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refereeId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  skills?: Resolver<Maybe<Array<ResolversTypes['Skill']>>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['BaseTemplateColorIconName']>>, ParentType, ContextType>;
  tiktokUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitterUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitterUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unsubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  voluntExperiences?: Resolver<Maybe<Array<ResolversTypes['VoluntExperience']>>, ParentType, ContextType>;
  want?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wechatUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  workEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  workMobilePhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  workPhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  xingUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  yearsInCurrentRole?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  yearsOfExperience?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  youtubeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactEnrichmentObjResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactEnrichmentObj'] = ResolversParentTypes['ContactEnrichmentObj']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  enrichedData?: Resolver<Maybe<ResolversTypes['AbstractContact']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactNoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactNote'] = ResolversParentTypes['ContactNote']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  privacyLevel?: Resolver<Maybe<ResolversTypes['PrivacyLevel']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactPersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactPerson'] = ResolversParentTypes['ContactPerson']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  accountId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  contactId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  dealId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  jobspecId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactSpecificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactSpecification'] = ResolversParentTypes['ContactSpecification']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  bestTimeToCall?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  fullProfileDisclosed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  gdprExpiryDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  origin?: Resolver<Maybe<ResolversTypes['Origin']>, ParentType, ContextType>;
  preferredContactTypes?: Resolver<Maybe<Array<ResolversTypes['CommunicationChannel']>>, ParentType, ContextType>;
  preferredSocialNetworks?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactSubtypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactSubtype'] = ResolversParentTypes['ContactSubtype']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactTag'] = ResolversParentTypes['ContactTag']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactsAvailabilityFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactsAvailabilityFilter'] = ResolversParentTypes['ContactsAvailabilityFilter']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  calendlyUrl?: Resolver<Maybe<ResolversTypes['AvailabilityRow']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['AvailabilityRow']>, ParentType, ContextType>;
  facebookUrl?: Resolver<Maybe<ResolversTypes['AvailabilityRow']>, ParentType, ContextType>;
  githubUrl?: Resolver<Maybe<ResolversTypes['AvailabilityRow']>, ParentType, ContextType>;
  instagramUrl?: Resolver<Maybe<ResolversTypes['AvailabilityRow']>, ParentType, ContextType>;
  linkedinSalesUrl?: Resolver<Maybe<ResolversTypes['AvailabilityRow']>, ParentType, ContextType>;
  linkedinTalentId?: Resolver<Maybe<ResolversTypes['AvailabilityRow']>, ParentType, ContextType>;
  linkedinUrl?: Resolver<Maybe<ResolversTypes['AvailabilityRow']>, ParentType, ContextType>;
  mediumUrl?: Resolver<Maybe<ResolversTypes['AvailabilityRow']>, ParentType, ContextType>;
  mobilePhone?: Resolver<Maybe<ResolversTypes['AvailabilityRow']>, ParentType, ContextType>;
  pageUrls?: Resolver<Maybe<ResolversTypes['AvailabilityRow']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['AvailabilityRow']>, ParentType, ContextType>;
  quoraUrl?: Resolver<Maybe<ResolversTypes['AvailabilityRow']>, ParentType, ContextType>;
  tiktokUrl?: Resolver<Maybe<ResolversTypes['AvailabilityRow']>, ParentType, ContextType>;
  twitterUrl?: Resolver<Maybe<ResolversTypes['AvailabilityRow']>, ParentType, ContextType>;
  wechatUrl?: Resolver<Maybe<ResolversTypes['AvailabilityRow']>, ParentType, ContextType>;
  xingUrl?: Resolver<Maybe<ResolversTypes['AvailabilityRow']>, ParentType, ContextType>;
  youtubeUrl?: Resolver<Maybe<ResolversTypes['AvailabilityRow']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactsCareerFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactsCareerFilter'] = ResolversParentTypes['ContactsCareerFilter']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  careerLevels?: Resolver<Maybe<Array<ResolversTypes['StrCurrentOrPastAdvancedFilter']>>, ParentType, ContextType>;
  careerPaths?: Resolver<Maybe<Array<ResolversTypes['StrCurrentOrPastAdvancedFilter']>>, ParentType, ContextType>;
  employmentTypes?: Resolver<Maybe<Array<ResolversTypes['StrCurrentOrPastAdvancedFilter']>>, ParentType, ContextType>;
  industries?: Resolver<Maybe<Array<ResolversTypes['StrCurrentOrPastAdvancedFilter']>>, ParentType, ContextType>;
  jobDescriptionKeywords?: Resolver<Maybe<Array<ResolversTypes['StrCurrentOrPastAdvancedFilter']>>, ParentType, ContextType>;
  managementLevels?: Resolver<Maybe<Array<ResolversTypes['StrCurrentOrPastAdvancedFilter']>>, ParentType, ContextType>;
  organizations?: Resolver<Maybe<Array<ResolversTypes['StrCurrentOrPastAdvancedFilter']>>, ParentType, ContextType>;
  roleTitles?: Resolver<Maybe<Array<ResolversTypes['StrCurrentOrPastAdvancedFilter']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactsDateRangeFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactsDateRangeFilter'] = ResolversParentTypes['ContactsDateRangeFilter']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  boost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fromDate?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  toDate?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactsEducationFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactsEducationFilter'] = ResolversParentTypes['ContactsEducationFilter']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  accomplishments?: Resolver<Maybe<Array<ResolversTypes['StrAdvancedFilter']>>, ParentType, ContextType>;
  fieldOfStudies?: Resolver<Maybe<Array<ResolversTypes['StrAdvancedFilter']>>, ParentType, ContextType>;
  schoolNames?: Resolver<Maybe<Array<ResolversTypes['StrAdvancedFilter']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactsFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactsFilter'] = ResolversParentTypes['ContactsFilter']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  _ids?: Resolver<Maybe<Array<ResolversTypes['ObjectId']>>, ParentType, ContextType>;
  companyEmployeeCountRanges?: Resolver<Maybe<Array<ResolversTypes['StrCurrentOrPastAdvancedFilter']>>, ParentType, ContextType>;
  contactsAvailability?: Resolver<Maybe<ResolversTypes['ContactsAvailabilityFilter']>, ParentType, ContextType>;
  contactsCareer?: Resolver<Maybe<ResolversTypes['ContactsCareerFilter']>, ParentType, ContextType>;
  contactsEducation?: Resolver<Maybe<ResolversTypes['ContactsEducationFilter']>, ParentType, ContextType>;
  contactsLastEvent?: Resolver<Maybe<ResolversTypes['ContactsDateRangeFilter']>, ParentType, ContextType>;
  contactsLastInteraction?: Resolver<Maybe<ResolversTypes['ContactsDateRangeFilter']>, ParentType, ContextType>;
  contactsLastUnansweredReply?: Resolver<Maybe<ResolversTypes['ContactsDateRangeFilter']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  dripCampaignFilter?: Resolver<Maybe<ResolversTypes['DripCampaignFilter']>, ParentType, ContextType>;
  dripCampaignsFilter?: Resolver<Maybe<Array<ResolversTypes['IdAdvancedFilter']>>, ParentType, ContextType>;
  filterName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['StrAdvancedFilter']>, ParentType, ContextType>;
  hasCv?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasInteraction?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasLinkedinId?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasUnansweredReply?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  insertionDate?: Resolver<Maybe<ResolversTypes['InsertionDateFilter']>, ParentType, ContextType>;
  isMiniProfile?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  jobseekerStatuses?: Resolver<Maybe<Array<ResolversTypes['StrAdvancedFilter']>>, ParentType, ContextType>;
  jobspecFilter?: Resolver<Maybe<ResolversTypes['ContactsJobspecFilter']>, ParentType, ContextType>;
  languageNames?: Resolver<Maybe<Array<ResolversTypes['StrAdvancedFilter']>>, ParentType, ContextType>;
  linkedinTagsFilter?: Resolver<Maybe<ResolversTypes['LinkedinTagsFilter']>, ParentType, ContextType>;
  locations?: Resolver<Maybe<Array<ResolversTypes['MainLocationFilter']>>, ParentType, ContextType>;
  minShouldMatch?: Resolver<Maybe<ResolversTypes['MinShouldMatch']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  searchName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  searchSurname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  searchValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showNoCurrentCompany?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  showUnsubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  skillNames?: Resolver<Maybe<Array<ResolversTypes['StrAdvancedFilter']>>, ParentType, ContextType>;
  sortBy?: Resolver<Maybe<ResolversTypes['ContactsSortBy']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<Array<ResolversTypes['StrAdvancedFilter']>>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['IdAdvancedFilter']>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  yearsInCurrentRole?: Resolver<Maybe<Array<ResolversTypes['ContactsTimeRangeFilter']>>, ParentType, ContextType>;
  yearsOfExperience?: Resolver<Maybe<Array<ResolversTypes['ContactsTimeRangeFilter']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactsJobspecFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactsJobspecFilter'] = ResolversParentTypes['ContactsJobspecFilter']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  activePipelineId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  exclStages?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  minFittingIndexPercentage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  showCandidates?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  showExitStages?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  stages?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  subStages?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactsSortByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactsSortBy'] = ResolversParentTypes['ContactsSortBy']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  fieldName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactsTimeRangeFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactsTimeRangeFilter'] = ResolversParentTypes['ContactsTimeRangeFilter']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  boost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CoordResolvers<ContextType = any, ParentType extends ResolversParentTypes['Coord'] = ResolversParentTypes['Coord']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  coordinates?: Resolver<Array<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CoordWithRadiusResolvers<ContextType = any, ParentType extends ResolversParentTypes['CoordWithRadius'] = ResolversParentTypes['CoordWithRadius']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  coord?: Resolver<ResolversTypes['Coord'], ParentType, ContextType>;
  radius?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = ResolversObject<{
  ISO?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ISO3?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ISOnr?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  area?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  capital?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  continent?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fips?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullCurrency?: Resolver<Maybe<ResolversTypes['CurrencyTemplate']>, ParentType, ContextType>;
  languages?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  neighbours?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  population?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  postalCodeFormat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postalCodeRegex?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tld?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CouponResolvers<ContextType = any, ParentType extends ResolversParentTypes['Coupon'] = ResolversParentTypes['Coupon']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  affiliate?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  expireDate?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  isFirstPayment?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isYearly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  overwriteYearlyDiscount?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  percentage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  planId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  recurrentDurationMonths?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  solutionId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CsvColumnAssociationResolvers<ContextType = any, ParentType extends ResolversParentTypes['CsvColumnAssociation'] = ResolversParentTypes['CsvColumnAssociation']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  csvInputs?: Resolver<Array<ResolversTypes['CsvInput']>, ParentType, ContextType>;
  fieldId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CsvColumnAssociationGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['CsvColumnAssociationGroup'] = ResolversParentTypes['CsvColumnAssociationGroup']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  csvAssociations?: Resolver<Array<ResolversTypes['CsvColumnAssociation']>, ParentType, ContextType>;
  csvHeaders?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inputObjectName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CsvInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['CsvInput'] = ResolversParentTypes['CsvInput']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  additionalFieldValues?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  header?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  obj?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CurrencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameFullPlural?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CurrencyTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrencyTemplate'] = ResolversParentTypes['CurrencyTemplate']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currencySymbolFull?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decimalDigits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  importanceOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameFullPlural?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomFieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomField'] = ResolversParentTypes['CustomField']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  fieldName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DateObjResolvers<ContextType = any, ParentType extends ResolversParentTypes['DateObj'] = ResolversParentTypes['DateObj']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeIsoScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTimeISO'], any> {
  name: 'DateTimeISO';
}

export type DepartmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Department'] = ResolversParentTypes['Department']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  organizationId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DripAssignOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DripAssignOption'] = ResolversParentTypes['DripAssignOption']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  activePipelineStage?: Resolver<Maybe<ResolversTypes['ActivePipelineStage']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  tagIds?: Resolver<Maybe<Array<ResolversTypes['ObjectId']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DripCampaignResolvers<ContextType = any, ParentType extends ResolversParentTypes['DripCampaign'] = ResolversParentTypes['DripCampaign']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  contactSubtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  dripStages?: Resolver<Maybe<Array<ResolversTypes['DripStage']>>, ParentType, ContextType>;
  emailSender?: Resolver<Maybe<ResolversTypes['EmailSender']>, ParentType, ContextType>;
  emailSenderId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  fromLinkedinUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fromLinkedinUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  goal?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pendingEmailCheck?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  useAnyAsFallback?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  workGroupId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DripCampaignAndContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['DripCampaignAndContact'] = ResolversParentTypes['DripCampaignAndContact']> = ResolversObject<{
  campaignName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  campaignStage?: Resolver<Maybe<ResolversTypes['CampaignStage']>, ParentType, ContextType>;
  dripStages?: Resolver<Maybe<Array<ResolversTypes['DripStage']>>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullAvatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobinJob?: Resolver<Maybe<ResolversTypes['JobinJob']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  middleName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DripCampaignFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['DripCampaignFilter'] = ResolversParentTypes['DripCampaignFilter']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  dripCampaignId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  isNull?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  positionCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DripConditionOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DripConditionOption'] = ResolversParentTypes['DripConditionOption']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  hasEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasLinkedinSalesUrl?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasLinkedinTalentId?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasLinkedinUrl?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasMobile?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPageUrl?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPhone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is1stConnection?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is2ndConnection?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is3rdConnection?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isLinkedinPremium?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isOpenProfile?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isOpenToWork?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isPendingConnection?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mustHaveTagIds?: Resolver<Maybe<Array<ResolversTypes['ObjectId']>>, ParentType, ContextType>;
  mustNotHaveTagIds?: Resolver<Maybe<Array<ResolversTypes['ObjectId']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DripEmailOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DripEmailOption'] = ResolversParentTypes['DripEmailOption']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  attachments?: Resolver<Maybe<Array<ResolversTypes['UploadedFile']>>, ParentType, ContextType>;
  jobspecId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DripLinkedinConnectionOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DripLinkedinConnectionOption'] = ResolversParentTypes['DripLinkedinConnectionOption']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  bypass?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  jobspecId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DripLinkedinMessageOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DripLinkedinMessageOption'] = ResolversParentTypes['DripLinkedinMessageOption']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  attachment?: Resolver<Maybe<ResolversTypes['UploadedFile']>, ParentType, ContextType>;
  jobspecId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DripStageResolvers<ContextType = any, ParentType extends ResolversParentTypes['DripStage'] = ResolversParentTypes['DripStage']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  dripActionTypeId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  positionCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  selectedBranches?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DripStageOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DripStageOption'] = ResolversParentTypes['DripStageOption']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  continueOnPermanentFailure?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dripAssignOption?: Resolver<Maybe<ResolversTypes['DripAssignOption']>, ParentType, ContextType>;
  dripAutoUpdateNoEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dripCampaign?: Resolver<Maybe<ResolversTypes['DripCampaign']>, ParentType, ContextType>;
  dripCampaignId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  dripConditionOption?: Resolver<Maybe<ResolversTypes['DripConditionOption']>, ParentType, ContextType>;
  dripEmailOption?: Resolver<Maybe<ResolversTypes['DripEmailOption']>, ParentType, ContextType>;
  dripGoalReached?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dripLinkedinConnectionOption?: Resolver<Maybe<ResolversTypes['DripLinkedinConnectionOption']>, ParentType, ContextType>;
  dripLinkedinMessageOption?: Resolver<Maybe<ResolversTypes['DripLinkedinMessageOption']>, ParentType, ContextType>;
  dripStage?: Resolver<Maybe<ResolversTypes['DripStage']>, ParentType, ContextType>;
  dripStageId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  dripWaitMinutes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  workGroupId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DuplicateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Duplicate'] = ResolversParentTypes['Duplicate']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  duplicateId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  mainId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  mergeErrors?: Resolver<Array<ResolversTypes['MergeError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DuplicateContainerResolvers<ContextType = any, ParentType extends ResolversParentTypes['DuplicateContainer'] = ResolversParentTypes['DuplicateContainer']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  duplicate?: Resolver<ResolversTypes['Duplicate'], ParentType, ContextType>;
  duplicateContact?: Resolver<ResolversTypes['Contact'], ParentType, ContextType>;
  mainContact?: Resolver<ResolversTypes['Contact'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EducExperienceResolvers<ContextType = any, ParentType extends ResolversParentTypes['EducExperience'] = ResolversParentTypes['EducExperience']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  course?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  degrees?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  educationalLevel?: Resolver<Maybe<ResolversTypes['BaseTemplateIconName']>, ParentType, ContextType>;
  fieldOfStudy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gpa?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grade?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainLocation?: Resolver<Maybe<ResolversTypes['MainLocation']>, ParentType, ContextType>;
  majors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  minors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['OrganizationLogoLinkedin']>, ParentType, ContextType>;
  period?: Resolver<ResolversTypes['Period'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EducationalLevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['EducationalLevel'] = ResolversParentTypes['EducationalLevel']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmailSenderResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailSender'] = ResolversParentTypes['EmailSender']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  addUnsubscribeButton?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  applyRandomDelay?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  emailAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imapDownloadFrom?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isDefault?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  latestMicrosoftEmailId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oauthSetting?: Resolver<Maybe<ResolversTypes['OauthSetting']>, ParentType, ContextType>;
  perDayLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perHourLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perMinuteLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  signature?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  smtpSetting?: Resolver<Maybe<ResolversTypes['SmtpSetting']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmailSendersByWorkGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailSendersByWorkGroup'] = ResolversParentTypes['EmailSendersByWorkGroup']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  emailSenders?: Resolver<Maybe<Array<ResolversTypes['EmailSender']>>, ParentType, ContextType>;
  workGroup?: Resolver<Maybe<ResolversTypes['WorkGroup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmailTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailTemplate'] = ResolversParentTypes['EmailTemplate']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  contactSubtype?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emailTemplateTypeId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  privacyLevel?: Resolver<Maybe<ResolversTypes['PrivacyLevel']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  useAnyAsFallback?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmailTemplateTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailTemplateType'] = ResolversParentTypes['EmailTemplateType']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmployeeCountRangeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmployeeCountRange'] = ResolversParentTypes['EmployeeCountRange']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EvaluationStageResolvers<ContextType = any, ParentType extends ResolversParentTypes['EvaluationStage'] = ResolversParentTypes['EvaluationStage']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventAttachmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventAttachment'] = ResolversParentTypes['EventAttachment']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  byteSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mediaType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventType'] = ResolversParentTypes['EventType']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  bckColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  foreColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isInteraction?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isMessage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExitStageTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExitStageTemplate'] = ResolversParentTypes['ExitStageTemplate']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['Field'] = ResolversParentTypes['Field']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  additionalFields?: Resolver<Maybe<Array<ResolversTypes['AdditionalField']>>, ParentType, ContextType>;
  display?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldGroupId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  inputObjectName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isBoolean?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isNotSeparatedByComma?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isNumber?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isPlural?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  parentFieldName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parentObjectName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  referenceFields?: Resolver<Maybe<Array<ResolversTypes['ReferenceField']>>, ParentType, ContextType>;
  templateCodeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tooltipModalText?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FieldGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['FieldGroup'] = ResolversParentTypes['FieldGroup']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  fieldGroupTypeId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FittingIndexResolvers<ContextType = any, ParentType extends ResolversParentTypes['FittingIndex'] = ResolversParentTypes['FittingIndex']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  fittingIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  normalizedFittingIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pipelineId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FrequentlyAskedQuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FrequentlyAskedQuestion'] = ResolversParentTypes['FrequentlyAskedQuestion']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  answer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  questionTags?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  questionType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sortNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FrequentlyAskedQuestionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FrequentlyAskedQuestionType'] = ResolversParentTypes['FrequentlyAskedQuestionType']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FullContactPersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['FullContactPerson'] = ResolversParentTypes['FullContactPerson']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  account?: Resolver<Maybe<ResolversTypes['JobinAccount']>, ParentType, ContextType>;
  accountId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  contact?: Resolver<ResolversTypes['Contact'], ParentType, ContextType>;
  contactId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  dealId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  jobspec?: Resolver<Maybe<ResolversTypes['Jobspec']>, ParentType, ContextType>;
  jobspecId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FullPipelineStageResolvers<ContextType = any, ParentType extends ResolversParentTypes['FullPipelineStage'] = ResolversParentTypes['FullPipelineStage']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  stage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>;
  subStage?: Resolver<Maybe<ResolversTypes['SubStage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FunnelResolvers<ContextType = any, ParentType extends ResolversParentTypes['Funnel'] = ResolversParentTypes['Funnel']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  funnelBlocks?: Resolver<Array<ResolversTypes['FunnelBlock']>, ParentType, ContextType>;
  successfulExits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unsuccessfulExits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FunnelBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['FunnelBlock'] = ResolversParentTypes['FunnelBlock']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GroupScoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupScore'] = ResolversParentTypes['GroupScore']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  change?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  groupSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  groupType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  industry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Score']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HelpdeskMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['HelpdeskMessage'] = ResolversParentTypes['HelpdeskMessage']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  answeredToAutoMessageId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  ip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  threadId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  workGroup?: Resolver<Maybe<ResolversTypes['WorkGroup']>, ParentType, ContextType>;
  workGroupId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdAdvancedFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['IdAdvancedFilter'] = ResolversParentTypes['IdAdvancedFilter']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  boost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  guiValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdealCandidateFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['IdealCandidateFilter'] = ResolversParentTypes['IdealCandidateFilter']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  _ids?: Resolver<Maybe<Array<ResolversTypes['ObjectId']>>, ParentType, ContextType>;
  assignedJobspecId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  companyEmployeeCountRanges?: Resolver<Maybe<Array<ResolversTypes['StrCurrentOrPastAdvancedFilter']>>, ParentType, ContextType>;
  contactsAvailability?: Resolver<Maybe<ResolversTypes['ContactsAvailabilityFilter']>, ParentType, ContextType>;
  contactsCareer?: Resolver<Maybe<ResolversTypes['ContactsCareerFilter']>, ParentType, ContextType>;
  contactsEducation?: Resolver<Maybe<ResolversTypes['ContactsEducationFilter']>, ParentType, ContextType>;
  contactsLastEvent?: Resolver<Maybe<ResolversTypes['ContactsDateRangeFilter']>, ParentType, ContextType>;
  contactsLastInteraction?: Resolver<Maybe<ResolversTypes['ContactsDateRangeFilter']>, ParentType, ContextType>;
  contactsLastUnansweredReply?: Resolver<Maybe<ResolversTypes['ContactsDateRangeFilter']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  dripCampaignFilter?: Resolver<Maybe<ResolversTypes['DripCampaignFilter']>, ParentType, ContextType>;
  dripCampaignsFilter?: Resolver<Maybe<Array<ResolversTypes['IdAdvancedFilter']>>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['StrAdvancedFilter']>, ParentType, ContextType>;
  hasCv?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasInteraction?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasLinkedinId?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasUnansweredReply?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  insertionDate?: Resolver<Maybe<ResolversTypes['InsertionDateFilter']>, ParentType, ContextType>;
  isMiniProfile?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  jobseekerStatuses?: Resolver<Maybe<Array<ResolversTypes['StrAdvancedFilter']>>, ParentType, ContextType>;
  jobspecFilter?: Resolver<Maybe<ResolversTypes['ContactsJobspecFilter']>, ParentType, ContextType>;
  languageNames?: Resolver<Maybe<Array<ResolversTypes['StrAdvancedFilter']>>, ParentType, ContextType>;
  linkedinTagsFilter?: Resolver<Maybe<ResolversTypes['LinkedinTagsFilter']>, ParentType, ContextType>;
  locations?: Resolver<Maybe<Array<ResolversTypes['MainLocationFilter']>>, ParentType, ContextType>;
  minShouldMatch?: Resolver<Maybe<ResolversTypes['MinShouldMatch']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  searchName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  searchSurname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  searchValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showNoCurrentCompany?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  showUnsubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  skillNames?: Resolver<Maybe<Array<ResolversTypes['StrAdvancedFilter']>>, ParentType, ContextType>;
  sortBy?: Resolver<Maybe<ResolversTypes['ContactsSortBy']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<Array<ResolversTypes['StrAdvancedFilter']>>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['IdAdvancedFilter']>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  yearsInCurrentRole?: Resolver<Maybe<Array<ResolversTypes['ContactsTimeRangeFilter']>>, ParentType, ContextType>;
  yearsOfExperience?: Resolver<Maybe<Array<ResolversTypes['ContactsTimeRangeFilter']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IndicatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Indicator'] = ResolversParentTypes['Indicator']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  iconName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  style?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IndustryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Industry'] = ResolversParentTypes['Industry']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IndustrySectorResolvers<ContextType = any, ParentType extends ResolversParentTypes['IndustrySector'] = ResolversParentTypes['IndustrySector']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  industries?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InsertionDateFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['InsertionDateFilter'] = ResolversParentTypes['InsertionDateFilter']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  fromDate?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  isUpdatedAt?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  toDate?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobinAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobinAccount'] = ResolversParentTypes['JobinAccount']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  calendlyUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  communicationChannels?: Resolver<Maybe<Array<ResolversTypes['CommunicationChannel']>>, ParentType, ContextType>;
  companyCrunchbaseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  departments?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailDomainsAssociated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  emails?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  employeeCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  employeeCountRange?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebookUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  foundedOn?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  githubUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  headquarter?: Resolver<Maybe<ResolversTypes['MainLocation']>, ParentType, ContextType>;
  incorporationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  industries?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  industrySectors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  instagramUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isHiring?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSchool?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isStaffingCompany?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  jobSearchLinkedinPageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinDetail?: Resolver<Maybe<ResolversTypes['LinkedinDetail']>, ParentType, ContextType>;
  linkedinSalesUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locations?: Resolver<Maybe<Array<ResolversTypes['MainLocation']>>, ParentType, ContextType>;
  logoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mobilePhones?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operatingStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organizationId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  organizationTypes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  pageUrls?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  phones?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  revenueAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  revenueCurrencyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tagline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['BaseTemplateColorIconName']>>, ParentType, ContextType>;
  tiktokUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitterUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  xingUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  youtubeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobinAccountNoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobinAccountNote'] = ResolversParentTypes['JobinAccountNote']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  privacyLevel?: Resolver<Maybe<ResolversTypes['PrivacyLevel']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobinCompletedJobResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobinCompletedJob'] = ResolversParentTypes['JobinCompletedJob']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  campaignStage?: Resolver<Maybe<ResolversTypes['CampaignStage']>, ParentType, ContextType>;
  codename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contactStatuses?: Resolver<Array<ResolversTypes['JobinJobContact']>, ParentType, ContextType, RequireFields<JobinCompletedJobContactStatusesArgs, 'skip' | 'take'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNothingToProcess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  iconName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isIdempotent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  linkedinUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  loaded?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lockedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  nextRunAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  noResume?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  operationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  previousNextRunAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  priority?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  queue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stop?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  userLinkedinUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  waitTimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobinDailyQuotasResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobinDailyQuotas'] = ResolversParentTypes['JobinDailyQuotas']> = ResolversObject<{
  emailSenderEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailSenderId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  emails?: Resolver<ResolversTypes['JobinQuotaAndLimit'], ParentType, ContextType>;
  fullProfileImport?: Resolver<ResolversTypes['JobinQuotaAndLimit'], ParentType, ContextType>;
  fullProfileImportWithEmail?: Resolver<ResolversTypes['JobinQuotaAndLimit'], ParentType, ContextType>;
  invitations?: Resolver<ResolversTypes['JobinQuotaAndLimit'], ParentType, ContextType>;
  messages?: Resolver<ResolversTypes['JobinQuotaAndLimit'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobinEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobinEvent'] = ResolversParentTypes['JobinEvent']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  accountId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  arguments?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  attachments?: Resolver<Maybe<Array<ResolversTypes['EventAttachment']>>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dealId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  emailSenderId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  eventCreatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  fromContactId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  indicators?: Resolver<Maybe<Array<ResolversTypes['BaseTemplateStyleIconName']>>, ParentType, ContextType>;
  jobspecId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  participantAvatars?: Resolver<Maybe<Array<ResolversTypes['Avatar']>>, ParentType, ContextType>;
  participantsNr?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['Avatar']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  temporary?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  toContactIds?: Resolver<Maybe<Array<ResolversTypes['ObjectId']>>, ParentType, ContextType>;
  toUserIds?: Resolver<Maybe<Array<ResolversTypes['ObjectId']>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['EventType'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  userLinkedinUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobinFeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobinFeature'] = ResolversParentTypes['JobinFeature']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  codename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  featurePlans?: Resolver<Array<ResolversTypes['JobinFeaturePlan']>, ParentType, ContextType>;
  hasSubFeatures?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  jobinFeatureGroupId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sortOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobinFeatureGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobinFeatureGroup'] = ResolversParentTypes['JobinFeatureGroup']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  solutionId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  sortOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobinFeaturePlanResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobinFeaturePlan'] = ResolversParentTypes['JobinFeaturePlan']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isDaily?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isFixed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isInfinite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isPerWorkGroup?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  planId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobinInvoiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobinInvoice'] = ResolversParentTypes['JobinInvoice']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  checkoutAmount?: Resolver<ResolversTypes['CheckoutAmount'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  periodFrom?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  periodTo?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobinJobResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobinJob'] = ResolversParentTypes['JobinJob']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  campaignStage?: Resolver<Maybe<ResolversTypes['CampaignStage']>, ParentType, ContextType>;
  codename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contactStatuses?: Resolver<Maybe<Array<ResolversTypes['JobinJobContact']>>, ParentType, ContextType, RequireFields<JobinJobContactStatusesArgs, 'skip' | 'take'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNothingToProcess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  iconName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isIdempotent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  linkedinUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  loaded?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lockedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  nextRunAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  noResume?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  operationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  previousNextRunAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  priority?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  queue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stop?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  userLinkedinUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  waitTimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobinJobContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobinJobContact'] = ResolversParentTypes['JobinJobContact']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  account?: Resolver<Maybe<ResolversTypes['JobinAccount']>, ParentType, ContextType>;
  accountId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['Contact']>, ParentType, ContextType>;
  contactId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errorMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinSalesUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinTalentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profileId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobinJobFromFilterResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobinJobFromFilterResult'] = ResolversParentTypes['JobinJobFromFilterResult']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  totalContactIds?: Resolver<Maybe<Array<ResolversTypes['ObjectId']>>, ParentType, ContextType>;
  totalContacts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobinJobSubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobinJobSubscription'] = ResolversParentTypes['JobinJobSubscription']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  codename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactStatuses?: Resolver<Maybe<Array<ResolversTypes['JobinJobContact']>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNothingToProcess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isIdempotent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  loaded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lockedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  nextRunAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  noResume?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  nullifyError?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  nullifyLockedAt?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  nullifyNextRunAt?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  operationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  queue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stop?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateContactStatus?: Resolver<Maybe<ResolversTypes['JobinJobContact']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  waitTimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  workGroupId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobinPriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobinPrice'] = ResolversParentTypes['JobinPrice']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobinProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobinProduct'] = ResolversParentTypes['JobinProduct']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  activeFeatures?: Resolver<Array<ResolversTypes['ActiveFeature']>, ParentType, ContextType>;
  deprecated?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  features?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  featuresOverview?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  monthlyPrices?: Resolver<Maybe<Array<ResolversTypes['JobinPrice']>>, ParentType, ContextType>;
  planId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['JobinPrice']>, ParentType, ContextType, RequireFields<JobinProductPriceArgs, 'isMonthly'>>;
  prices?: Resolver<Maybe<Array<ResolversTypes['JobinPrice']>>, ParentType, ContextType>;
  replaceWithProductId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  solutionId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  sortOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobinQuotaAndLimitResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobinQuotaAndLimit'] = ResolversParentTypes['JobinQuotaAndLimit']> = ResolversObject<{
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  usedQuota?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobinSolutionResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobinSolution'] = ResolversParentTypes['JobinSolution']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iconName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobinSubFeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobinSubFeature'] = ResolversParentTypes['JobinSubFeature']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobinFeatureId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobinSubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobinSubscription'] = ResolversParentTypes['JobinSubscription']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  alreadyPaid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cancelAtPeriodEnd?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  checkoutAmount?: Resolver<Maybe<ResolversTypes['CheckoutAmount']>, ParentType, ContextType>;
  countryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  couponName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currentPeriodEnd?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  currentPeriodStart?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  doNotReplaceOnRenewal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  endedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  enterprisePrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fullAccess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isBilledMonthly?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  paymentFailCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentFailReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentItems?: Resolver<Array<ResolversTypes['PaymentItem']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stripeCustomerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stripePaymentMethod?: Resolver<Maybe<ResolversTypes['StripePaymentMethod']>, ParentType, ContextType>;
  stripePaymentMethodId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalPaidAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  trialEnd?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  trialEndEmail?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  vatId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobseekerAimResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobseekerAim'] = ResolversParentTypes['JobseekerAim']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobseekerCriterionResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobseekerCriterion'] = ResolversParentTypes['JobseekerCriterion']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  availabilityPeriod?: Resolver<Maybe<ResolversTypes['AvailabilityPeriod']>, ParentType, ContextType>;
  benefits?: Resolver<Maybe<Array<ResolversTypes['Benefit']>>, ParentType, ContextType>;
  careerAspirationNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  careerLevels?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  careerPaths?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  desiredLocations?: Resolver<Maybe<Array<ResolversTypes['MainLocation']>>, ParentType, ContextType>;
  employeeCountRanges?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  employmentTypes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  industries?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  jobseekerAims?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  jobseekerStatus?: Resolver<Maybe<ResolversTypes['BaseTemplateLevel']>, ParentType, ContextType>;
  managementLevels?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  mobilityArea?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  moneyAmount?: Resolver<Maybe<ResolversTypes['MoneyAmount']>, ParentType, ContextType>;
  motivationForChange?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  noticePeriod?: Resolver<Maybe<ResolversTypes['NoticePeriod']>, ParentType, ContextType>;
  organizationTypes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  quietOffice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  remoteWork?: Resolver<Maybe<ResolversTypes['RemoteWork']>, ParentType, ContextType>;
  roleTitles?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  travelRequired?: Resolver<Maybe<ResolversTypes['TravelRequired']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobseekerStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobseekerStatus'] = ResolversParentTypes['JobseekerStatus']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobspecResolvers<ContextType = any, ParentType extends ResolversParentTypes['Jobspec'] = ResolversParentTypes['Jobspec']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  careerOverview?: Resolver<Maybe<ResolversTypes['CareerOverview']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  desiredSkills?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  employerOrganization?: Resolver<Maybe<ResolversTypes['AccountLogo']>, ParentType, ContextType>;
  employmentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  funnel?: Resolver<Maybe<ResolversTypes['Funnel']>, ParentType, ContextType>;
  hasCandidates?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  idealCandidateId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  industries?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  internalDetail?: Resolver<Maybe<ResolversTypes['JobspecInternalDetail']>, ParentType, ContextType>;
  jobspecDescriptions?: Resolver<Maybe<Array<ResolversTypes['JobspecDescription']>>, ParentType, ContextType>;
  jobspecStatus?: Resolver<Maybe<ResolversTypes['JobspecStatus']>, ParentType, ContextType>;
  jobspecType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastEventDate?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  latestEvent?: Resolver<Maybe<ResolversTypes['JobinEvent']>, ParentType, ContextType>;
  locations?: Resolver<Maybe<Array<ResolversTypes['MainLocation']>>, ParentType, ContextType>;
  moneyAmount?: Resolver<Maybe<ResolversTypes['MoneyAmount']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<ResolversTypes['JobspecNote']>>, ParentType, ContextType>;
  pipeline?: Resolver<Maybe<ResolversTypes['Pipeline']>, ParentType, ContextType>;
  pipelineId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  publishingAnonymously?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  publishingLogo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recruiters?: Resolver<Maybe<Array<ResolversTypes['ObjectId']>>, ParentType, ContextType>;
  referees?: Resolver<Maybe<Array<ResolversTypes['ObjectId']>>, ParentType, ContextType>;
  remoteWork?: Resolver<Maybe<ResolversTypes['RemoteWork']>, ParentType, ContextType>;
  requiredSkills?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  shortJobAdvText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  travelRequired?: Resolver<Maybe<ResolversTypes['TravelRequired']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobspecDescriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobspecDescription'] = ResolversParentTypes['JobspecDescription']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  heading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobspecDescriptionTemplateTypeId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobspecDescriptionTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobspecDescriptionTemplate'] = ResolversParentTypes['JobspecDescriptionTemplate']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  heading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobspecDescriptionTemplateTypeId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobspecDescriptionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobspecDescriptionType'] = ResolversParentTypes['JobspecDescriptionType']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobspecInternalDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobspecInternalDetail'] = ResolversParentTypes['JobspecInternalDetail']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  closingDeadline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  department?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isPublicContactPerson?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  jobInsight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobReferenceCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nrVacantPositions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageUrls?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobspecNoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobspecNote'] = ResolversParentTypes['JobspecNote']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  privacyLevel?: Resolver<Maybe<ResolversTypes['PrivacyLevel']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobspecStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobspecStatus'] = ResolversParentTypes['JobspecStatus']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobspecTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobspecTag'] = ResolversParentTypes['JobspecTag']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobspecTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobspecType'] = ResolversParentTypes['JobspecType']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobyChatGptPromptResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobyChatGptPrompt'] = ResolversParentTypes['JobyChatGptPrompt']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  frequencyPenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listOf3?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  maxTokens?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  noWordLimit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  numOfWords?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  presencePenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  topP?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  useChatGPT4?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  writeAsExpert?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  writingStyle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobyChatGptResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobyChatGptResponse'] = ResolversParentTypes['JobyChatGptResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  monthsOfExperience?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  period?: Resolver<ResolversTypes['Period'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LanguageNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['LanguageName'] = ResolversParentTypes['LanguageName']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  languageCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LatestLinkedinConnectionConnectedOnDateResolvers<ContextType = any, ParentType extends ResolversParentTypes['LatestLinkedinConnectionConnectedOnDate'] = ResolversParentTypes['LatestLinkedinConnectionConnectedOnDate']> = ResolversObject<{
  latestConnectedOn?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  pendingConnectionImportCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pendingLatestConnectedOn?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LinkedinAccountWithDefaultCountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkedinAccountWithDefaultCountry'] = ResolversParentTypes['LinkedinAccountWithDefaultCountry']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  autoGenerated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  importTaskHandle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  importTransactionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  specialBypass?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  userLinkedinUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LinkedinAnalyticResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkedinAnalytic'] = ResolversParentTypes['LinkedinAnalytic']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  linkedinInvitation?: Resolver<Maybe<ResolversTypes['LinkedinInvitation']>, ParentType, ContextType>;
  linkedinProfile?: Resolver<Maybe<ResolversTypes['LinkedinProfile']>, ParentType, ContextType>;
  linkedinSalesApiScore?: Resolver<Maybe<ResolversTypes['LinkedinSalesApiScore']>, ParentType, ContextType>;
  numConnections?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userLinkedinUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LinkedinAnalyticTimelineResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkedinAnalyticTimeline'] = ResolversParentTypes['LinkedinAnalyticTimeline']> = ResolversObject<{
  daysPerGroup?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timelineRecords?: Resolver<Array<ResolversTypes['LinkedinAnalyticTimelineRecords']>, ParentType, ContextType>;
  totalDays?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LinkedinAnalyticTimelineRecordsResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkedinAnalyticTimelineRecords'] = ResolversParentTypes['LinkedinAnalyticTimelineRecords']> = ResolversObject<{
  fromDate?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  numConnections?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numInvitationsSent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numMessagesReceived?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numMessagesSent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numProfileViews?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  toDate?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LinkedinAnalyticTotalsResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkedinAnalyticTotals'] = ResolversParentTypes['LinkedinAnalyticTotals']> = ResolversObject<{
  first?: Resolver<ResolversTypes['LinkedinAnalytic'], ParentType, ContextType>;
  last?: Resolver<ResolversTypes['LinkedinAnalytic'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LinkedinConversationResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkedinConversation'] = ResolversParentTypes['LinkedinConversation']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  conversationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  lastActivityAt?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  participantLinkedinUrls?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  totalEventCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LinkedinDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkedinDetail'] = ResolversParentTypes['LinkedinDetail']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  connectedOn?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  followerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  influencer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isMiniProfile?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  jobSeeker?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  numOfConnections?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  openLink?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  openToWork?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  premium?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  profileId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LinkedinInvitationResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkedinInvitation'] = ResolversParentTypes['LinkedinInvitation']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  numNewInvitations?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numPendingInvitations?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numSingleSentInvitations?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numTotalSentInvitations?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LinkedinProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkedinProfile'] = ResolversParentTypes['LinkedinProfile']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  allStar?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  marketplacePreferences?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  menteePreferencesActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mentorPreferencesActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  numProfileViews?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numSavedArticles?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numSavedItems?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numSavedJobs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numSearchAppearances?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  profileOpenToRecruiter?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  student?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LinkedinSalesApiScoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkedinSalesApiScore'] = ResolversParentTypes['LinkedinSalesApiScore']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  activeSeat?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  endTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  groupScore?: Resolver<Maybe<Array<ResolversTypes['GroupScore']>>, ParentType, ContextType>;
  memberScore?: Resolver<Maybe<ResolversTypes['MemberScore']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LinkedinSalesConversationResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkedinSalesConversation'] = ResolversParentTypes['LinkedinSalesConversation']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  conversationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  lastActivityAt?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  participantLinkedinUrls?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  totalEventCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LinkedinTagsFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkedinTagsFilter'] = ResolversParentTypes['LinkedinTagsFilter']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  hasPendingInvitation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasProfileId?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  influencer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isFirstConnection?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isOpenLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isPremium?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isSecondConnection?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isThirdConnection?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  openToWork?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LinkedinThrottlingSettingResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkedinThrottlingSetting'] = ResolversParentTypes['LinkedinThrottlingSetting']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  fullProfileImport?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fullProfileImportWithEmail?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  invitations?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  messages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LinkedinUrlAndIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkedinUrlAndId'] = ResolversParentTypes['LinkedinUrlAndId']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  linkedinUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoginObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginObject'] = ResolversParentTypes['LoginObject']> = ResolversObject<{
  attempts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastAttempt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MainExperienceStudentResolvers<ContextType = any, ParentType extends ResolversParentTypes['MainExperienceStudent'] = ResolversParentTypes['MainExperienceStudent']> = ResolversObject<{
  mainLocation?: Resolver<Maybe<ResolversTypes['MainLocation']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['MainOrganization']>, ParentType, ContextType>;
  roleTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MainJobspecResolvers<ContextType = any, ParentType extends ResolversParentTypes['MainJobspec'] = ResolversParentTypes['MainJobspec']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  employerOrganization?: Resolver<Maybe<ResolversTypes['AccountLogo']>, ParentType, ContextType>;
  idealCandidateId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  jobspecId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  locations?: Resolver<Maybe<Array<ResolversTypes['MainLocation']>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MainLocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['MainLocation'] = ResolversParentTypes['MainLocation']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressLine2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coord?: Resolver<Maybe<ResolversTypes['Coord']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  landlinePhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locationLastUpdated?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  locationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rooms?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  timeZone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  worldLocationId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MainLocationFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['MainLocationFilter'] = ResolversParentTypes['MainLocationFilter']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  boost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coordWithRadius?: Resolver<Maybe<ResolversTypes['CoordWithRadius']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  worldLocationId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MainLocationWorldLocationMatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['MainLocationWorldLocationMatch'] = ResolversParentTypes['MainLocationWorldLocationMatch']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coord?: Resolver<Maybe<ResolversTypes['Coord']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  worldLocationId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MainOrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['MainOrganization'] = ResolversParentTypes['MainOrganization']> = ResolversObject<{
  logoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MaritalStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['MaritalStatus'] = ResolversParentTypes['MaritalStatus']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MemberRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberRole'] = ResolversParentTypes['MemberRole']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  privileges?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MemberScoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberScore'] = ResolversParentTypes['MemberScore']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  calculatedAt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  change?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  overall?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  subScores?: Resolver<Maybe<Array<ResolversTypes['SubScore']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MergeErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['MergeError'] = ResolversParentTypes['MergeError']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  destination?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duplicate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessageTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageTemplate'] = ResolversParentTypes['MessageTemplate']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  emailTemplateTypeId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessagesSentAndReceivedCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessagesSentAndReceivedCount'] = ResolversParentTypes['MessagesSentAndReceivedCount']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  messagesReceived?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  messagesSent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  msgReceivedSentRatio?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MicrosoftLinkedAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MicrosoftLinkedAccount'] = ResolversParentTypes['MicrosoftLinkedAccount']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  homeAccountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mobilePhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timeZone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userIds?: Resolver<Maybe<Array<ResolversTypes['ObjectId']>>, ParentType, ContextType>;
  workGroupIds?: Resolver<Maybe<Array<ResolversTypes['ObjectId']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MinShouldMatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['MinShouldMatch'] = ResolversParentTypes['MinShouldMatch']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  accomplishments?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  careerLevels?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  careerPaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  companyEmployeeCountRanges?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dripCampaignsFilter?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  employmentTypes?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fieldOfStudies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  industries?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  jobDescriptionKeywords?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  jobseekerStatuses?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  languageNames?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  locations?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  managementLevels?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  organizations?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  roleTitles?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  schoolNames?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  skillNames?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  yearsInCurrentRole?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  yearsOfExperience?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MoneyAmountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoneyAmount'] = ResolversParentTypes['MoneyAmount']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amountMax?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amountMin?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>;
  moneyAmountPercentage?: Resolver<Maybe<ResolversTypes['MoneyAmountPercentage']>, ParentType, ContextType>;
  moneyAmountType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MoneyAmountObjResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoneyAmountObj'] = ResolversParentTypes['MoneyAmountObj']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MoneyAmountPercentageResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoneyAmountPercentage'] = ResolversParentTypes['MoneyAmountPercentage']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  moneyAmountPercentageType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  percentage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MoneyAmountPercentageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoneyAmountPercentageType'] = ResolversParentTypes['MoneyAmountPercentageType']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MoneyAmountTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoneyAmountType'] = ResolversParentTypes['MoneyAmountType']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  percent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  acquireMicrosoftTokenByCode?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationAcquireMicrosoftTokenByCodeArgs, 'clientInfo' | 'code'>>;
  activateAccount?: Resolver<ResolversTypes['RegisterObject'], ParentType, ContextType, RequireFields<MutationActivateAccountArgs, '_id' | 'email'>>;
  activateFreeAccount?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  addCustomField?: Resolver<Maybe<Array<ResolversTypes['CustomField']>>, ParentType, ContextType, RequireFields<MutationAddCustomFieldArgs, 'customFieldsInput'>>;
  addLinkedinAnalytic?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationAddLinkedinAnalyticArgs, 'linkedinAnalytic'>>;
  addReferralToAffiliateLeads?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAddReferralToAffiliateLeadsArgs, 'referralLinkCode'>>;
  archiveAllCompletedJobinJobs?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  archiveJobinJob?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationArchiveJobinJobArgs, '_id'>>;
  bulkAssignToCampaign?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationBulkAssignToCampaignArgs, 'campaignId' | 'filter'>>;
  bulkAssignToPausedCampaign?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationBulkAssignToPausedCampaignArgs, 'campaignId' | 'dripCampaignName' | 'filter'>>;
  bulkCreatePendingInvitations?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationBulkCreatePendingInvitationsArgs, 'pendingInvitations'>>;
  bulkPushOverwriteContacts?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationBulkPushOverwriteContactsArgs, '_ids' | 'contact' | 'labelFieldName'>>;
  bulkPushOverwriteContactsByFilter?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationBulkPushOverwriteContactsByFilterArgs, 'contact' | 'filter' | 'labelFieldName'>>;
  bulkPushUpdateContacts?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationBulkPushUpdateContactsArgs, '_ids' | 'contact' | 'labelFieldName'>>;
  bulkUpdateContacts?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationBulkUpdateContactsArgs, '_ids' | 'contact'>>;
  bulkUpsertContactActivePipelineStages?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationBulkUpsertContactActivePipelineStagesArgs, 'filter' | 'pipelineStage'>>;
  cancelAutoRenewal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCancelAutoRenewalArgs, 'shouldCancel'>>;
  changeAffiliatePaypalEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationChangeAffiliatePaypalEmailArgs, 'email'>>;
  changeEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationChangeEmailArgs, 'email'>>;
  clearAllDripCampaignProspects?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationClearAllDripCampaignProspectsArgs, 'campaignId' | 'dripCampaignName'>>;
  closeJobspec?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationCloseJobspecArgs, '_id'>>;
  completeJobinJob?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationCompleteJobinJobArgs, 'jobinJobId'>>;
  contactSales?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationContactSalesArgs, 'companyName' | 'companyWebsite' | 'contactPerson' | 'description' | 'seats' | 'workEmail'>>;
  copyDripCampaign?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCopyDripCampaignArgs, 'campaignId'>>;
  copyLinkedinConnectionsToContacts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  copyToWorkgroup?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCopyToWorkgroupArgs, '_id'>>;
  createAccomplishmentType?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateAccomplishmentTypeArgs, 'accomplishmentType'>>;
  createAccomplishmentTypes?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateAccomplishmentTypesArgs, 'accomplishmentTypes'>>;
  createAccount?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateAccountArgs, 'account'>>;
  createAccountFromOrganization?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateAccountFromOrganizationArgs, 'organizationId'>>;
  createAccountTag?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateAccountTagArgs, 'accountTag'>>;
  createAccountTags?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateAccountTagsArgs, 'accountTags'>>;
  createAffiliateCoupon?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateAffiliateCouponArgs, 'name'>>;
  createBenefitTemplate?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateBenefitTemplateArgs, 'benefitTemplate'>>;
  createBenefitTemplates?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateBenefitTemplatesArgs, 'benefitTemplates'>>;
  createChatGptPrompt?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateChatGptPromptArgs, 'chatGptPrompt'>>;
  createChatGptPrompts?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateChatGptPromptsArgs, 'chatGptPrompts'>>;
  createCommunicationChannelType?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateCommunicationChannelTypeArgs, 'communicationChannelType'>>;
  createCommunicationChannelTypes?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateCommunicationChannelTypesArgs, 'communicationChannelTypes'>>;
  createCompletedContactDripCampaignStage?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateCompletedContactDripCampaignStageArgs, 'completedContactDripCampaignStage'>>;
  createContact?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateContactArgs, 'contact'>>;
  createContactFromSocialProfile?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateContactFromSocialProfileArgs, 'url' | 'urlFieldName'>>;
  createContactFromSocialProfileById?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateContactFromSocialProfileByIdArgs, 'socialProfileId'>>;
  createContactNote?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateContactNoteArgs, 'contactNote'>>;
  createContactPerson?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateContactPersonArgs, 'contactPerson'>>;
  createContactPersons?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateContactPersonsArgs, 'contactPersons'>>;
  createContactTag?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateContactTagArgs, 'contactTag'>>;
  createContactTags?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateContactTagsArgs, 'contactTags'>>;
  createContactsFilter?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateContactsFilterArgs, 'contactsFilter'>>;
  createCsvColumnAssociationGroup?: Resolver<ResolversTypes['CsvColumnAssociationGroup'], ParentType, ContextType, RequireFields<MutationCreateCsvColumnAssociationGroupArgs, 'csvColumnAssociationGroup'>>;
  createCustomPaymentIntent?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationCreateCustomPaymentIntentArgs, 'token'>>;
  createDripCampaign?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateDripCampaignArgs, 'dripCampaign'>>;
  createDripStageOption?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateDripStageOptionArgs, 'dripStageOption'>>;
  createEducationalLevel?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateEducationalLevelArgs, 'educationalLevel'>>;
  createEducationalLevels?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateEducationalLevelsArgs, 'educationalLevels'>>;
  createEmailSender?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateEmailSenderArgs, 'emailSender'>>;
  createEmailTemplate?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateEmailTemplateArgs, 'emailTemplate'>>;
  createEmailTemplates?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateEmailTemplatesArgs, 'emailTemplates'>>;
  createExitStageTemplate?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateExitStageTemplateArgs, 'exitStageTemplate'>>;
  createExitStageTemplates?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateExitStageTemplatesArgs, 'exitStageTemplates'>>;
  createExternalEventFromLinkedinMessages?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateExternalEventFromLinkedinMessagesArgs, 'linkedinMessages' | 'participantLinkedinUrls' | 'urlFieldName'>>;
  createFilterFromContactIds?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateFilterFromContactIdsArgs, 'contactIds'>>;
  createHelpdeskMessage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateHelpdeskMessageArgs, 'helpdeskMessage' | 'threadId'>>;
  createIdealCandidateFilter?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateIdealCandidateFilterArgs, 'idealCandidateFilter'>>;
  createJobinAccountNote?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateJobinAccountNoteArgs, 'jobinAccountNote'>>;
  createJobinEvent?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateJobinEventArgs, 'eventTypeId' | 'jobinEvent'>>;
  createJobinEventByContactFilter?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateJobinEventByContactFilterArgs, 'eventTypeId' | 'filter' | 'jobinEvent'>>;
  createJobinJob?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateJobinJobArgs, 'jobinJob'>>;
  createJobinJobFromFilter?: Resolver<Maybe<ResolversTypes['JobinJobFromFilterResult']>, ParentType, ContextType, RequireFields<MutationCreateJobinJobFromFilterArgs, 'filter' | 'jobinJob'>>;
  createJobspec?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateJobspecArgs, 'jobspec'>>;
  createJobspecDescriptionTemplate?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateJobspecDescriptionTemplateArgs, 'jobspecDescriptionTemplate'>>;
  createJobspecDescriptionTemplates?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateJobspecDescriptionTemplatesArgs, 'jobspecDescriptionTemplates'>>;
  createJobspecNote?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateJobspecNoteArgs, 'jobspecNote'>>;
  createJobspecType?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateJobspecTypeArgs, 'jobspecType'>>;
  createJobspecTypes?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateJobspecTypesArgs, 'jobspecTypes'>>;
  createJobspecWithPipeline?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateJobspecWithPipelineArgs, 'jobspec'>>;
  createJobyChatGptPrompt?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateJobyChatGptPromptArgs, 'jobyChatGptPrompt'>>;
  createJobyChatGptPrompts?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateJobyChatGptPromptsArgs, 'jobyChatGptPrompts'>>;
  createLinkedinInvitesFromFilter?: Resolver<Maybe<ResolversTypes['JobinJobFromFilterResult']>, ParentType, ContextType, RequireFields<MutationCreateLinkedinInvitesFromFilterArgs, 'filter' | 'operationOptionsInput'>>;
  createMessageTemplate?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateMessageTemplateArgs, 'messageTemplate'>>;
  createMessageTemplates?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateMessageTemplatesArgs, 'messageTemplates'>>;
  createMultipleExternalEventFromLinkedinMessages?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateMultipleExternalEventFromLinkedinMessagesArgs, 'conversationMessageGroups' | 'urlFieldName'>>;
  createOrganization?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateOrganizationArgs, 'organization'>>;
  createPaymentIntent?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationCreatePaymentIntentArgs, 'isBilledMonthly' | 'items'>>;
  createPendingInvitation?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreatePendingInvitationArgs, 'pendingInvitation'>>;
  createPipeline?: Resolver<ResolversTypes['Pipeline'], ParentType, ContextType, RequireFields<MutationCreatePipelineArgs, 'pipeline'>>;
  createPipelineTemplate?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreatePipelineTemplateArgs, 'pipelineTemplate'>>;
  createPipelineTemplates?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreatePipelineTemplatesArgs, 'pipelineTemplates'>>;
  createRecentContactsFilter?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateRecentContactsFilterArgs, 'recentContactsFilter'>>;
  createSetupIntent?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createSkillType?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateSkillTypeArgs, 'skillType'>>;
  createSkillTypes?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateSkillTypesArgs, 'skillTypes'>>;
  createStageTemplate?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateStageTemplateArgs, 'stageTemplate'>>;
  createStageTemplates?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateStageTemplatesArgs, 'stageTemplates'>>;
  createSubStageTemplate?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateSubStageTemplateArgs, 'subStageTemplate'>>;
  createSubStageTemplates?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateSubStageTemplatesArgs, 'subStageTemplates'>>;
  createSuccessfulExitStageTemplate?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateSuccessfulExitStageTemplateArgs, 'successfulExitStageTemplate'>>;
  createSuccessfulExitStageTemplates?: Resolver<Array<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationCreateSuccessfulExitStageTemplatesArgs, 'successfulExitStageTemplates'>>;
  createWorkGroup?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationCreateWorkGroupArgs, 'workGroup'>>;
  customModifySubscription?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCustomModifySubscriptionArgs, 'token'>>;
  deleteAccomplishmentType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteAccomplishmentTypeArgs, '_id'>>;
  deleteAccount?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteAccountArgs, '_id'>>;
  deleteAccountTag?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteAccountTagArgs, '_id'>>;
  deleteBenefitTemplate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteBenefitTemplateArgs, '_id'>>;
  deleteChatGptPrompt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteChatGptPromptArgs, '_id'>>;
  deleteCommunicationChannelType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteCommunicationChannelTypeArgs, '_id'>>;
  deleteCompletedContactDripCampaignStage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteCompletedContactDripCampaignStageArgs, '_id'>>;
  deleteContact?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteContactArgs, '_id'>>;
  deleteContactAttachment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteContactAttachmentArgs, '_id' | 'attachmentId'>>;
  deleteContactCv?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteContactCvArgs, '_id'>>;
  deleteContactNote?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteContactNoteArgs, '_id'>>;
  deleteContactNotes?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteContactNotesArgs, '_ids'>>;
  deleteContactPerson?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteContactPersonArgs, '_id'>>;
  deleteContactPersons?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteContactPersonsArgs, '_ids'>>;
  deleteContactTag?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteContactTagArgs, '_id'>>;
  deleteContacts?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteContactsArgs, 'filter'>>;
  deleteContactsFilter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteContactsFilterArgs, '_id'>>;
  deleteCurrentUser?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  deleteCustomField?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteCustomFieldArgs, '_id' | 'contactId'>>;
  deleteDripCampaign?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteDripCampaignArgs, '_id'>>;
  deleteDripStageOption?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteDripStageOptionArgs, '_id'>>;
  deleteDripStageOptionsByStageIds?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteDripStageOptionsByStageIdsArgs, 'stageIds'>>;
  deleteEducationalLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteEducationalLevelArgs, '_id'>>;
  deleteEmailSender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteEmailSenderArgs, '_id'>>;
  deleteEmailTemplate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteEmailTemplateArgs, '_id'>>;
  deleteExitStageTemplate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteExitStageTemplateArgs, '_id'>>;
  deleteIdealCandidateFilter?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteIdealCandidateFilterArgs, 'assignedJobspecId'>>;
  deleteJobinAccountNote?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteJobinAccountNoteArgs, '_id'>>;
  deleteJobinAccountNotes?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteJobinAccountNotesArgs, '_ids'>>;
  deleteJobinJob?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteJobinJobArgs, '_id'>>;
  deleteJobinLocalJob?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteJobinLocalJobArgs, '_id'>>;
  deleteJobspec?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteJobspecArgs, '_id'>>;
  deleteJobspecDescriptionTemplate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteJobspecDescriptionTemplateArgs, '_id'>>;
  deleteJobspecNote?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteJobspecNoteArgs, '_id'>>;
  deleteJobspecNotes?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteJobspecNotesArgs, '_ids'>>;
  deleteJobspecType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteJobspecTypeArgs, '_id'>>;
  deleteJobyChatGptPrompt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteJobyChatGptPromptArgs, '_id'>>;
  deleteMessageTemplate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteMessageTemplateArgs, '_id'>>;
  deleteMicrosoftLinkedAccount?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteMicrosoftLinkedAccountArgs, '_id'>>;
  deletePendingInvitation?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeletePendingInvitationArgs, '_id' | 'contactId'>>;
  deletePipeline?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeletePipelineArgs, '_id'>>;
  deletePipelineStageFromContact?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeletePipelineStageFromContactArgs, '_id' | 'activePipelineStageId'>>;
  deletePipelineTemplate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeletePipelineTemplateArgs, '_id'>>;
  deleteRecentContactsFilter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteRecentContactsFilterArgs, '_id'>>;
  deleteSkillType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteSkillTypeArgs, '_id'>>;
  deleteStageTemplate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteStageTemplateArgs, '_id'>>;
  deleteSubStageTemplate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteSubStageTemplateArgs, '_id'>>;
  deleteSuccessfulExitStageTemplate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteSuccessfulExitStageTemplateArgs, '_id'>>;
  deleteUser?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, '_id'>>;
  deleteWorkGroup?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteWorkGroupArgs, '_id'>>;
  deleteWorkGroupMemberRoleByUserId?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteWorkGroupMemberRoleByUserIdArgs, '_id' | 'memberUserId'>>;
  downgradeSeats?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDowngradeSeatsArgs, 'seats' | 'selectedProductId'>>;
  enrichContact?: Resolver<ResolversTypes['ContactEnrichmentObj'], ParentType, ContextType, RequireFields<MutationEnrichContactArgs, 'contactId'>>;
  exportContacts?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationExportContactsArgs, '_ids'>>;
  exportContactsByFilter?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationExportContactsByFilterArgs, 'filter'>>;
  failAccountImport?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationFailAccountImportArgs, 'accountId' | 'errorMsg' | 'jobinJob'>>;
  failContactImport?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationFailContactImportArgs, 'contactId' | 'errorMsg' | 'jobinJob'>>;
  forgotPassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'email'>>;
  generatePaymentLink?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationGeneratePaymentLinkArgs, 'amount' | 'currencyCode' | 'freeAccess' | 'isBilledMonthly' | 'jobinJobIdsStr' | 'renewalAmount' | 'seatsStr' | 'userId' | 'workGroupId'>>;
  getOrCreatePeopleSearchFilter?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationGetOrCreatePeopleSearchFilterArgs, 'contactsFilter'>>;
  identifyDuplicatesAndAutoMergeBackground?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  importAccountAndOrganization?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationImportAccountAndOrganizationArgs, 'importSource' | 'organization'>>;
  importContactAndSocialProfile?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType, RequireFields<MutationImportContactAndSocialProfileArgs, 'importSource' | 'socialProfile'>>;
  importMiniAccounts?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationImportMiniAccountsArgs, 'organizations' | 'urlFieldName'>>;
  importMiniSocialProfiles?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationImportMiniSocialProfilesArgs, 'socialProfiles' | 'urlFieldName'>>;
  importOrganization?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationImportOrganizationArgs, 'importSource' | 'organization'>>;
  importPdlSocialProfile?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationImportPdlSocialProfileArgs, 'linkingLinkedinUrl' | 'socialProfile' | 'socialProfileId'>>;
  importSocialProfile?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationImportSocialProfileArgs, 'socialProfile'>>;
  importSocialProfileForUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationImportSocialProfileForUserArgs, 'importSource' | 'socialProfile'>>;
  importSocialProfiles?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationImportSocialProfilesArgs, 'jobinEventId' | 'jobinJobId' | 'socialProfiles' | 'urlFieldName'>>;
  importSocialProfilesAsLinkedinConnections?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationImportSocialProfilesAsLinkedinConnectionsArgs, 'socialProfiles'>>;
  invalidateAllRefreshTokens?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  invalidateRefreshToken?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationInvalidateRefreshTokenArgs, 'refreshToken'>>;
  login?: Resolver<ResolversTypes['LoginObject'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'capchaToken' | 'email' | 'password'>>;
  loginAsId?: Resolver<ResolversTypes['LoginObject'], ParentType, ContextType, RequireFields<MutationLoginAsIdArgs, '_id'>>;
  massImport?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MutationMassImportArgs>>;
  mergeDuplicate?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationMergeDuplicateArgs, '_id'>>;
  modifySubscription?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationModifySubscriptionArgs, 'items'>>;
  modifyUserPermissions?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationModifyUserPermissionsArgs, 'assignSeatPrivileges' | 'jobinProductIds'>>;
  overwriteContacts?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  passwordReset?: Resolver<ResolversTypes['RegisterObject'], ParentType, ContextType, RequireFields<MutationPasswordResetArgs, 'password'>>;
  pauseDripCampaign?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationPauseDripCampaignArgs, 'campaignId' | 'dripCampaignName'>>;
  payWithPreviousMethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationPayWithPreviousMethodArgs, 'isBilledMonthly' | 'items'>>;
  reOpenJobspec?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationReOpenJobspecArgs, '_id'>>;
  redeemCode?: Resolver<ResolversTypes['RegisterObject'], ParentType, ContextType, RequireFields<MutationRedeemCodeArgs, 'capchaToken' | 'email' | 'token'>>;
  redeemCodeForUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRedeemCodeForUserArgs, 'capchaToken' | 'token'>>;
  refresh?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationRefreshArgs, 'refreshToken'>>;
  refreshAuth?: Resolver<ResolversTypes['RefreshObject'], ParentType, ContextType, RequireFields<MutationRefreshAuthArgs, 'refreshToken'>>;
  refreshPayoutsStatus?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationRefreshPayoutsStatusArgs, 'payoutItemIds'>>;
  register?: Resolver<ResolversTypes['RegisterObject'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'capchaToken' | 'email'>>;
  registerAndStartFreeTrial?: Resolver<ResolversTypes['RegisterObject'], ParentType, ContextType, RequireFields<MutationRegisterAndStartFreeTrialArgs, 'capchaToken' | 'email' | 'isBilledMonthly' | 'items'>>;
  registerForJoby?: Resolver<ResolversTypes['RegisterObject'], ParentType, ContextType, RequireFields<MutationRegisterForJobyArgs, 'capchaToken' | 'email'>>;
  registerWithIp?: Resolver<ResolversTypes['RegisterObject'], ParentType, ContextType, RequireFields<MutationRegisterWithIpArgs, 'capchaToken'>>;
  removeAllDuplicates?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  removeDuplicateFromPair?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveDuplicateFromPairArgs, '_id' | 'duplicateId'>>;
  removeLinkedinUrl?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveLinkedinUrlArgs, 'linkedinUrl'>>;
  renameStage?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationRenameStageArgs, 'origStageName' | 'pipelineId' | 'stageName'>>;
  replaceIdealCandidateFilter?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationReplaceIdealCandidateFilterArgs, '_id' | 'idealCandidateFilter'>>;
  reportImportPdlSocialProfileFailure?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationReportImportPdlSocialProfileFailureArgs, 'linkedinUrl'>>;
  restartDripCampaignForContact?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRestartDripCampaignForContactArgs, 'campaignId' | 'contactId'>>;
  resumeDripCampaign?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationResumeDripCampaignArgs, 'campaignId'>>;
  retryJobinJob?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationRetryJobinJobArgs, '_id'>>;
  runAgendaCommand?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRunAgendaCommandArgs, 'agendaCommand'>>;
  runDripOperations?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRunDripOperationsArgs, 'campaignId' | 'contactIds'>>;
  runScheduledOperationNow?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRunScheduledOperationNowArgs, 'jobinJobId' | 'queue'>>;
  scheduleOperation?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationScheduleOperationArgs, 'date' | 'jobinJobId' | 'queue'>>;
  sendActivationEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSendActivationEmailArgs, 'email'>>;
  sendHelpdeskResponseEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSendHelpdeskResponseEmailArgs, 'answerText' | 'from' | 'fromName' | 'lastMessageCreatedAt' | 'replyingTo' | 'subject' | 'toEmail'>>;
  sendTestEmails?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSendTestEmailsArgs, 'email' | 'emailGeneratorNames'>>;
  sendWorkGroupInvites?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationSendWorkGroupInvitesArgs, 'users'>>;
  sendWorkGroupInvitesToJobinMembers?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationSendWorkGroupInvitesToJobinMembersArgs, 'userIds'>>;
  setContactStatusesToPending?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationSetContactStatusesToPendingArgs, '_id' | 'linkedinUrls'>>;
  setPairAsNotDuplicate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSetPairAsNotDuplicateArgs, '_id'>>;
  stopDripCampaignForContact?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationStopDripCampaignForContactArgs, 'contactId'>>;
  throttleJobinJob?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationThrottleJobinJobArgs, '_id'>>;
  throttleJobinJob429?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationThrottleJobinJob429Args, '_id'>>;
  unAssignStage?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUnAssignStageArgs, 'pipelineId' | 'stageName'>>;
  unsubscribeContact?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUnsubscribeContactArgs, '_id'>>;
  updateAccomplishmentType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateAccomplishmentTypeArgs, '_id' | 'accomplishmentType'>>;
  updateAccount?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUpdateAccountArgs, '_id' | 'account'>>;
  updateAccountTag?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateAccountTagArgs, '_id' | 'accountTag'>>;
  updateAffiliateCoupon?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUpdateAffiliateCouponArgs, 'name' | 'previousName'>>;
  updateBenefitTemplate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateBenefitTemplateArgs, '_id' | 'benefitTemplate'>>;
  updateChatGptPrompt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateChatGptPromptArgs, '_id' | 'chatGptPrompt'>>;
  updateCommunicationChannelType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateCommunicationChannelTypeArgs, '_id' | 'communicationChannelType'>>;
  updateCompletedContactDripCampaignStage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateCompletedContactDripCampaignStageArgs, '_id' | 'completedContactDripCampaignStage'>>;
  updateContact?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUpdateContactArgs, '_id' | 'contact'>>;
  updateContactTag?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateContactTagArgs, '_id' | 'contactTag'>>;
  updateContactTagSortOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUpdateContactTagSortOrderArgs, 'sortOrders'>>;
  updateContactsFilter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateContactsFilterArgs, '_id' | 'contactsFilter'>>;
  updateCurrentUser?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateCurrentUserArgs, 'currentUser'>>;
  updateCustomField?: Resolver<ResolversTypes['CustomField'], ParentType, ContextType, RequireFields<MutationUpdateCustomFieldArgs, 'customFieldsInput'>>;
  updateDripCampaign?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateDripCampaignArgs, '_id' | 'dripCampaign'>>;
  updateDripStageOption?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateDripStageOptionArgs, '_id' | 'dripStageOption'>>;
  updateEducationalLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateEducationalLevelArgs, '_id' | 'educationalLevel'>>;
  updateEmailSender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateEmailSenderArgs, '_id' | 'emailSender'>>;
  updateEmailTemplate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateEmailTemplateArgs, '_id' | 'emailTemplate'>>;
  updateExitStageTemplate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateExitStageTemplateArgs, '_id' | 'exitStageTemplate'>>;
  updateIdealCandidateFilter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateIdealCandidateFilterArgs, '_id' | 'idealCandidateFilter'>>;
  updateJobinEvent?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUpdateJobinEventArgs, '_id'>>;
  updateJobinJob?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUpdateJobinJobArgs, '_id' | 'jobinJob' | 'updateLockedAt'>>;
  updateJobspec?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUpdateJobspecArgs, '_id' | 'jobspec'>>;
  updateJobspecDescriptionTemplate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateJobspecDescriptionTemplateArgs, '_id' | 'jobspecDescriptionTemplate'>>;
  updateJobspecNote?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateJobspecNoteArgs, '_id' | 'jobspecNote'>>;
  updateJobspecType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateJobspecTypeArgs, '_id' | 'jobspecType'>>;
  updateJobyChatGptPrompt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateJobyChatGptPromptArgs, '_id' | 'jobyChatGptPrompt'>>;
  updateLinkedinAnalytic?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateLinkedinAnalyticArgs, '_id' | 'linkedinAnalytic'>>;
  updateLinkedinConnection?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUpdateLinkedinConnectionArgs, '_id' | 'linkedinConnection'>>;
  updateLinkedinConversation?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUpdateLinkedinConversationArgs, '_id' | 'linkedinConversation'>>;
  updateLinkedinSalesConversation?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUpdateLinkedinSalesConversationArgs, '_id' | 'linkedinSalesConversation'>>;
  updateMessageTemplate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateMessageTemplateArgs, '_id' | 'messageTemplate'>>;
  updatePaymentMethod?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdatePaymentMethodArgs, 'clientSecret'>>;
  updatePipeline?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdatePipelineArgs, '_id' | 'pipeline'>>;
  updatePipelineTemplate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdatePipelineTemplateArgs, '_id' | 'pipelineTemplate'>>;
  updateRecentContactsFilter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateRecentContactsFilterArgs, '_id' | 'recentContactsFilter'>>;
  updateReplyIdentifications?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateReplyIdentificationsArgs, 'ReplyIdentifications'>>;
  updateSkillType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateSkillTypeArgs, '_id' | 'skillType'>>;
  updateStageTemplate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateStageTemplateArgs, '_id' | 'stageTemplate'>>;
  updateSubStageTemplate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateSubStageTemplateArgs, '_id' | 'subStageTemplate'>>;
  updateSuccessfulExitStageTemplate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateSuccessfulExitStageTemplateArgs, '_id' | 'successfulExitStageTemplate'>>;
  updateTokenPayload?: Resolver<ResolversTypes['RegisterObject'], ParentType, ContextType, RequireFields<MutationUpdateTokenPayloadArgs, 'workGroupId'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, '_id' | 'user'>>;
  updateUserAdditionalDetail?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateUserAdditionalDetailArgs, 'userAdditionalDetail'>>;
  updateUserLastLoggedIn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  updateUserWorkGroupSetting?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateUserWorkGroupSettingArgs, 'userWorkGroupSetting'>>;
  updateWorkGroup?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUpdateWorkGroupArgs, '_id' | 'workGroup'>>;
  updateWorkGroupBillingDetail?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUpdateWorkGroupBillingDetailArgs, '_id' | 'billingDetail'>>;
  updateWorkInProgressFeedback?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUpdateWorkInProgressFeedbackArgs, '_id' | 'workInProgressFeedback'>>;
  upsertContactNotesByContactId?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUpsertContactNotesByContactIdArgs, 'contactId' | 'contactNotes'>>;
  upsertCsvColumnAssociationGroup?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUpsertCsvColumnAssociationGroupArgs, 'csvColumnAssociationGroup'>>;
  upsertJobinAccountNotesByAccountId?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUpsertJobinAccountNotesByAccountIdArgs, 'jobinAccountId' | 'jobinAccountNotes'>>;
  upsertJobspecNotesByJobspecId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpsertJobspecNotesByJobspecIdArgs, 'jobspecId' | 'jobspecNotes'>>;
  upsertLinkedinAccount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationUpsertLinkedinAccountArgs, 'linkedinAccount'>>;
  upsertLinkedinConversations?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUpsertLinkedinConversationsArgs, 'linkedinConversations'>>;
  upsertLinkedinSalesConversations?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUpsertLinkedinSalesConversationsArgs, 'linkedinSalesConversations'>>;
  upsertRecentContactsFilter?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<MutationUpsertRecentContactsFilterArgs, 'upsertRecentContactsFilter'>>;
  userClickedLeaveAReview?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  verifyPassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationVerifyPasswordArgs, '_id' | 'password'>>;
  visitedUrls?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationVisitedUrlsArgs, 'urls'>>;
}>;

export type NoticePeriodResolvers<ContextType = any, ParentType extends ResolversParentTypes['NoticePeriod'] = ResolversParentTypes['NoticePeriod']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  isNegotiable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  noticePeriod?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OauthSettingResolvers<ContextType = any, ParentType extends ResolversParentTypes['OauthSetting'] = ResolversParentTypes['OauthSetting']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  homeAccountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedAccountId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectId'], any> {
  name: 'ObjectId';
}

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  calendlyUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  communicationChannels?: Resolver<Maybe<Array<ResolversTypes['CommunicationChannel']>>, ParentType, ContextType>;
  companyCrunchbaseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  departments?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailDomainsAssociated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  emails?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  employeeCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  employeeCountRange?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebookUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  foundedOn?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  githubUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  headquarter?: Resolver<Maybe<ResolversTypes['MainLocation']>, ParentType, ContextType>;
  incorporationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  industries?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  industrySectors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  instagramUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isHiring?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSchool?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isStaffingCompany?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  jobSearchLinkedinPageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinDetail?: Resolver<Maybe<ResolversTypes['LinkedinDetail']>, ParentType, ContextType>;
  linkedinSalesUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locations?: Resolver<Maybe<Array<ResolversTypes['MainLocation']>>, ParentType, ContextType>;
  logoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mobilePhones?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operatingStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organizationTypes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  pageUrls?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  phones?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  revenueAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  revenueCurrencyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tagline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tiktokUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitterUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  xingUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  youtubeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrganizationLogoLinkedinResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationLogoLinkedin'] = ResolversParentTypes['OrganizationLogoLinkedin']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  companyFounded?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  employeeCountRange?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organizationId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrganizationTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationType'] = ResolversParentTypes['OrganizationType']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OriginResolvers<ContextType = any, ParentType extends ResolversParentTypes['Origin'] = ResolversParentTypes['Origin']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  originSpecification?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originSpecificationIdentifier?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  originType?: Resolver<ResolversTypes['BaseTemplateStyleIconName'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OriginTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OriginType'] = ResolversParentTypes['OriginType']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PdlResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PDLResponse'] = ResolversParentTypes['PDLResponse']> = ResolversObject<{
  contactsFilterInput?: Resolver<ResolversTypes['AbstractContactsFilter'], ParentType, ContextType>;
  jobinJobId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  peopleSearchFilterId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['AbstractContact']>, ParentType, ContextType>;
  scrollToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PasswordStrengthObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['PasswordStrengthObject'] = ResolversParentTypes['PasswordStrengthObject']> = ResolversObject<{
  guesses?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  strength?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  suggestions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  warning?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentItem'] = ResolversParentTypes['PaymentItem']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  assignedSeats?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  jobinProductId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PayoutItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['PayoutItem'] = ResolversParentTypes['PayoutItem']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['MoneyAmountObj'], ParentType, ContextType>;
  note?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  receiver?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipientType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  senderItemId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PeriodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Period'] = ResolversParentTypes['Period']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  isCurrent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonalDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonalDetail'] = ResolversParentTypes['PersonalDetail']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  childrenNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  dob?: Resolver<Maybe<ResolversTypes['DateObj']>, ParentType, ContextType>;
  drivingLicence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maidenName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maritalStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  militaryObligations?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minority?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nationality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  placeOfBirth?: Resolver<Maybe<ResolversTypes['MainLocation']>, ParentType, ContextType>;
  raceOrEthnicity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  socialSecurityNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  visa?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  workingPermit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PipelineResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pipeline'] = ResolversParentTypes['Pipeline']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exitStages?: Resolver<Maybe<Array<ResolversTypes['SubStage']>>, ParentType, ContextType>;
  mainJobspec?: Resolver<Maybe<ResolversTypes['MainJobspec']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  probability?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rottenInDays?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stages?: Resolver<Maybe<Array<ResolversTypes['Stage']>>, ParentType, ContextType>;
  successfulExitStages?: Resolver<Maybe<Array<ResolversTypes['SubStage']>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PipelineStagesWithCandidatesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PipelineStagesWithCandidates'] = ResolversParentTypes['PipelineStagesWithCandidates']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  exitStageCandidates?: Resolver<Maybe<Array<ResolversTypes['Contact']>>, ParentType, ContextType>;
  stagesWithCandidates?: Resolver<Array<ResolversTypes['StageWithCandidates']>, ParentType, ContextType>;
  successfulExitStageCandidates?: Resolver<Maybe<Array<ResolversTypes['Contact']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PipelineStagesWithCandidatesCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['PipelineStagesWithCandidatesCount'] = ResolversParentTypes['PipelineStagesWithCandidatesCount']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  stagesWithCandidatesCount?: Resolver<Array<ResolversTypes['StageWithCandidatesCount']>, ParentType, ContextType>;
  totalExitStageCandidates?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalSuccessfulExitStageCandidates?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PipelineTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['PipelineTemplate'] = ResolversParentTypes['PipelineTemplate']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exitStages?: Resolver<Maybe<Array<ResolversTypes['SubStage']>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  probability?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rottenInDays?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stages?: Resolver<Maybe<Array<ResolversTypes['Stage']>>, ParentType, ContextType>;
  successfulExitStages?: Resolver<Maybe<Array<ResolversTypes['SubStage']>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlanResolvers<ContextType = any, ParentType extends ResolversParentTypes['Plan'] = ResolversParentTypes['Plan']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iconName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subtitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PrivacyLevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrivacyLevel'] = ResolversParentTypes['PrivacyLevel']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PrivilegeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Privilege'] = ResolversParentTypes['Privilege']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  activeFeatureCodename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isDaily?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isFixed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  jobinProductId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  used?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  workGroupId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProfExperienceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProfExperience'] = ResolversParentTypes['ProfExperience']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  careerOverview?: Resolver<Maybe<ResolversTypes['CareerOverview']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  descriptionResponsibility?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employmentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  industries?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  isValidated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastUpdated?: Resolver<Maybe<Array<ResolversTypes['DateTimeISO']>>, ParentType, ContextType>;
  mainLocation?: Resolver<Maybe<ResolversTypes['MainLocation']>, ParentType, ContextType>;
  managementLevel?: Resolver<Maybe<ResolversTypes['BaseTemplateLevel']>, ParentType, ContextType>;
  moneyAmount?: Resolver<Maybe<ResolversTypes['MoneyAmount']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['OrganizationLogoLinkedin']>, ParentType, ContextType>;
  period?: Resolver<ResolversTypes['Period'], ParentType, ContextType>;
  refereeIds?: Resolver<Maybe<Array<ResolversTypes['ObjectId']>>, ParentType, ContextType>;
  roleTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  JobinDailyQuotas?: Resolver<Maybe<ResolversTypes['JobinDailyQuotas']>, ParentType, ContextType>;
  accomplishmentType?: Resolver<ResolversTypes['AccomplishmentType'], ParentType, ContextType, RequireFields<QueryAccomplishmentTypeArgs, '_id'>>;
  accomplishmentTypes?: Resolver<Array<ResolversTypes['AccomplishmentType']>, ParentType, ContextType, RequireFields<QueryAccomplishmentTypesArgs, 'skip' | 'take'>>;
  account?: Resolver<ResolversTypes['JobinAccount'], ParentType, ContextType, RequireFields<QueryAccountArgs, '_id'>>;
  accountByLinkedinUrl?: Resolver<Maybe<ResolversTypes['JobinAccount']>, ParentType, ContextType, RequireFields<QueryAccountByLinkedinUrlArgs, 'linkedinUrl'>>;
  accountByPageUrl?: Resolver<Maybe<ResolversTypes['JobinAccount']>, ParentType, ContextType, RequireFields<QueryAccountByPageUrlArgs, 'url'>>;
  accountTag?: Resolver<ResolversTypes['AccountTag'], ParentType, ContextType, RequireFields<QueryAccountTagArgs, '_id'>>;
  accountTags?: Resolver<Array<ResolversTypes['AccountTag']>, ParentType, ContextType, RequireFields<QueryAccountTagsArgs, 'skip' | 'take'>>;
  accountType?: Resolver<ResolversTypes['AccountType'], ParentType, ContextType, RequireFields<QueryAccountTypeArgs, '_id'>>;
  accountTypes?: Resolver<Array<ResolversTypes['AccountType']>, ParentType, ContextType, RequireFields<QueryAccountTypesArgs, 'skip' | 'take'>>;
  accounts?: Resolver<Array<ResolversTypes['JobinAccount']>, ParentType, ContextType, RequireFields<QueryAccountsArgs, 'skip' | 'take'>>;
  activePipeline?: Resolver<Maybe<ResolversTypes['Pipeline']>, ParentType, ContextType>;
  activeSubscriptions?: Resolver<Array<ResolversTypes['ActiveSubscription']>, ParentType, ContextType>;
  affiliateLeads?: Resolver<Array<ResolversTypes['AffiliateLead']>, ParentType, ContextType, RequireFields<QueryAffiliateLeadsArgs, 'skip' | 'take'>>;
  affiliatePayouts?: Resolver<Array<ResolversTypes['AffiliatePayout']>, ParentType, ContextType, RequireFields<QueryAffiliatePayoutsArgs, 'skip' | 'take'>>;
  affiliateTotalPayouts?: Resolver<ResolversTypes['AffiliateTotalPayout'], ParentType, ContextType>;
  benefitTemplate?: Resolver<ResolversTypes['BenefitTemplate'], ParentType, ContextType, RequireFields<QueryBenefitTemplateArgs, '_id'>>;
  benefitTemplates?: Resolver<Array<ResolversTypes['BenefitTemplate']>, ParentType, ContextType, RequireFields<QueryBenefitTemplatesArgs, 'skip' | 'take'>>;
  benefitType?: Resolver<ResolversTypes['BenefitType'], ParentType, ContextType, RequireFields<QueryBenefitTypeArgs, '_id'>>;
  benefitTypes?: Resolver<Array<ResolversTypes['BenefitType']>, ParentType, ContextType, RequireFields<QueryBenefitTypesArgs, 'skip' | 'take'>>;
  bestMatchMainLocationFromWorldLocation?: Resolver<ResolversTypes['MainLocationWorldLocationMatch'], ParentType, ContextType, RequireFields<QueryBestMatchMainLocationFromWorldLocationArgs, 'locationString'>>;
  bestMatchMainLocationFromWorldLocationObj?: Resolver<ResolversTypes['MainLocationWorldLocationMatch'], ParentType, ContextType, Partial<QueryBestMatchMainLocationFromWorldLocationObjArgs>>;
  chatGptPrompt?: Resolver<ResolversTypes['ChatGptPrompt'], ParentType, ContextType, RequireFields<QueryChatGptPromptArgs, '_id'>>;
  chatGptPromptOutput?: Resolver<ResolversTypes['JobyChatGptResponse'], ParentType, ContextType, RequireFields<QueryChatGptPromptOutputArgs, 'messages'>>;
  chatGptPrompts?: Resolver<Array<ResolversTypes['ChatGptPrompt']>, ParentType, ContextType, RequireFields<QueryChatGptPromptsArgs, 'skip' | 'take'>>;
  chatGptPublicPrompt?: Resolver<Maybe<ResolversTypes['ChatGptPublicPrompt']>, ParentType, ContextType, RequireFields<QueryChatGptPublicPromptArgs, '_id'>>;
  chatGptPublicPrompts?: Resolver<Array<ResolversTypes['ChatGptPublicPrompt']>, ParentType, ContextType, RequireFields<QueryChatGptPublicPromptsArgs, 'skip' | 'take'>>;
  checkAvailabilityOfAffiliateCodes?: Resolver<ResolversTypes['AffiliateCodeAvailability'], ParentType, ContextType, Partial<QueryCheckAvailabilityOfAffiliateCodesArgs>>;
  checkIfShouldSendFollowUp?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryCheckIfShouldSendFollowUpArgs, 'linkedinConversation' | 'linkedinConversationText' | 'participantLinkedinUrls'>>;
  checkIfShouldSendFollowUpSales?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryCheckIfShouldSendFollowUpSalesArgs, 'linkedinConversation' | 'linkedinConversationText' | 'participantLinkedinUrls'>>;
  checkIfSpecialBypass?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  checkJobinJobIsStopped?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryCheckJobinJobIsStoppedArgs, '_id'>>;
  checkPasswordStrength?: Resolver<ResolversTypes['PasswordStrengthObject'], ParentType, ContextType, RequireFields<QueryCheckPasswordStrengthArgs, 'password'>>;
  cities?: Resolver<Array<ResolversTypes['BaseTemplate']>, ParentType, ContextType, RequireFields<QueryCitiesArgs, 'skip' | 'take'>>;
  communicationChannelType?: Resolver<ResolversTypes['CommunicationChannelType'], ParentType, ContextType, RequireFields<QueryCommunicationChannelTypeArgs, '_id'>>;
  communicationChannelTypes?: Resolver<Array<ResolversTypes['CommunicationChannelType']>, ParentType, ContextType, RequireFields<QueryCommunicationChannelTypesArgs, 'skip' | 'take'>>;
  completedContactDripCampaignStage?: Resolver<ResolversTypes['CompletedContactDripCampaignStage'], ParentType, ContextType, RequireFields<QueryCompletedContactDripCampaignStageArgs, '_id'>>;
  completedContactDripCampaignStages?: Resolver<Array<ResolversTypes['CompletedContactDripCampaignStage']>, ParentType, ContextType, RequireFields<QueryCompletedContactDripCampaignStagesArgs, 'skip' | 'take'>>;
  completedDripCampaignsFromContactId?: Resolver<Array<ResolversTypes['CompletedContactDripCampaignStage']>, ParentType, ContextType, RequireFields<QueryCompletedDripCampaignsFromContactIdArgs, 'contactId'>>;
  contact?: Resolver<Maybe<ResolversTypes['Contact']>, ParentType, ContextType, RequireFields<QueryContactArgs, '_id'>>;
  contactByPageUrl?: Resolver<Maybe<ResolversTypes['Contact']>, ParentType, ContextType, RequireFields<QueryContactByPageUrlArgs, 'url'>>;
  contactBySocialProfileId?: Resolver<Maybe<ResolversTypes['Contact']>, ParentType, ContextType, RequireFields<QueryContactBySocialProfileIdArgs, 'socialProfileId'>>;
  contactCustomFields?: Resolver<Maybe<Array<ResolversTypes['CustomField']>>, ParentType, ContextType, RequireFields<QueryContactCustomFieldsArgs, 'contactId'>>;
  contactIdByLinkedinUrl?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<QueryContactIdByLinkedinUrlArgs, 'linkedinUrl'>>;
  contactNotesAvailableByContactId?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryContactNotesAvailableByContactIdArgs, 'contactId'>>;
  contactNotesByContactId?: Resolver<Array<ResolversTypes['ContactNote']>, ParentType, ContextType, RequireFields<QueryContactNotesByContactIdArgs, 'contactId' | 'skip' | 'take'>>;
  contactPersons?: Resolver<Array<ResolversTypes['ContactPerson']>, ParentType, ContextType, RequireFields<QueryContactPersonsArgs, 'skip' | 'take'>>;
  contactSubtype?: Resolver<ResolversTypes['ContactSubtype'], ParentType, ContextType, RequireFields<QueryContactSubtypeArgs, '_id'>>;
  contactSubtypes?: Resolver<Array<ResolversTypes['ContactSubtype']>, ParentType, ContextType, RequireFields<QueryContactSubtypesArgs, 'skip' | 'take'>>;
  contactTag?: Resolver<ResolversTypes['ContactTag'], ParentType, ContextType, RequireFields<QueryContactTagArgs, '_id'>>;
  contactTags?: Resolver<Array<ResolversTypes['ContactTag']>, ParentType, ContextType, RequireFields<QueryContactTagsArgs, 'skip' | 'take'>>;
  contacts?: Resolver<Array<ResolversTypes['Contact']>, ParentType, ContextType, RequireFields<QueryContactsArgs, 'filter' | 'skip' | 'take'>>;
  contactsById?: Resolver<Array<ResolversTypes['Contact']>, ParentType, ContextType, RequireFields<QueryContactsByIdArgs, '_ids'>>;
  contactsFilter?: Resolver<ResolversTypes['ContactsFilter'], ParentType, ContextType, RequireFields<QueryContactsFilterArgs, '_id'>>;
  contactsFilterByName?: Resolver<Maybe<ResolversTypes['ContactsFilter']>, ParentType, ContextType, RequireFields<QueryContactsFilterByNameArgs, 'filterName'>>;
  contactsFilters?: Resolver<Array<ResolversTypes['ContactsFilter']>, ParentType, ContextType, RequireFields<QueryContactsFiltersArgs, 'skip' | 'take'>>;
  countAccounts?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<QueryCountAccountsArgs>>;
  countAffiliateLeads?: Resolver<Array<ResolversTypes['AffiliateLead']>, ParentType, ContextType>;
  countBypassInvitationsSent?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType, Partial<QueryCountBypassInvitationsSentArgs>>;
  countContacts?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<QueryCountContactsArgs, 'filter'>>;
  countDuplicatePairsToIdentify?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<QueryCountDuplicatePairsToIdentifyArgs>>;
  countDuplicatePairsToMerge?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<QueryCountDuplicatePairsToMergeArgs>>;
  countInvitationsSent?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<QueryCountInvitationsSentArgs>>;
  countJobinEvents?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<QueryCountJobinEventsArgs>>;
  countJobinJobs?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<QueryCountJobinJobsArgs>>;
  countJobspecs?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<QueryCountJobspecsArgs>>;
  countLinkedinConnections?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  countMainAffiliateLeadsTotals?: Resolver<ResolversTypes['AffiliateLeadTotals'], ParentType, ContextType>;
  countMessagesSentAndReceived?: Resolver<ResolversTypes['MessagesSentAndReceivedCount'], ParentType, ContextType, RequireFields<QueryCountMessagesSentAndReceivedArgs, 'fromDate' | 'toDate'>>;
  countWorkGroupMembers?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<QueryCountWorkGroupMembersArgs, '_id'>>;
  countries?: Resolver<Array<ResolversTypes['Country']>, ParentType, ContextType, RequireFields<QueryCountriesArgs, 'skip' | 'take'>>;
  country?: Resolver<ResolversTypes['Country'], ParentType, ContextType, RequireFields<QueryCountryArgs, '_id'>>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryCountryCodeArgs, 'country'>>;
  couponByName?: Resolver<ResolversTypes['Coupon'], ParentType, ContextType, RequireFields<QueryCouponByNameArgs, 'name'>>;
  csvColumnAssociationGroup?: Resolver<Maybe<ResolversTypes['CsvColumnAssociationGroup']>, ParentType, ContextType, Partial<QueryCsvColumnAssociationGroupArgs>>;
  currencyFromIp?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>;
  currencyTemplate?: Resolver<ResolversTypes['CurrencyTemplate'], ParentType, ContextType, RequireFields<QueryCurrencyTemplateArgs, '_id'>>;
  currencyTemplateFromCurrencyCode?: Resolver<ResolversTypes['CurrencyTemplate'], ParentType, ContextType, RequireFields<QueryCurrencyTemplateFromCurrencyCodeArgs, 'currencyCode'>>;
  currencyTemplates?: Resolver<Array<ResolversTypes['CurrencyTemplate']>, ParentType, ContextType, RequireFields<QueryCurrencyTemplatesArgs, 'skip' | 'take'>>;
  currentSubscription?: Resolver<Maybe<ResolversTypes['JobinSubscription']>, ParentType, ContextType>;
  currentUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  customSubscriptionCalculateCheckoutAmount?: Resolver<ResolversTypes['CheckoutAmount'], ParentType, ContextType, RequireFields<QueryCustomSubscriptionCalculateCheckoutAmountArgs, 'token'>>;
  dailyThrottleLimitJobinJob?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryDailyThrottleLimitJobinJobArgs, '_id' | 'skip' | 'take'>>;
  defaultEmailSender?: Resolver<ResolversTypes['EmailSender'], ParentType, ContextType>;
  department?: Resolver<ResolversTypes['Department'], ParentType, ContextType, RequireFields<QueryDepartmentArgs, '_id'>>;
  departments?: Resolver<Array<ResolversTypes['Department']>, ParentType, ContextType, RequireFields<QueryDepartmentsArgs, 'skip' | 'take'>>;
  dripCampaign?: Resolver<Maybe<ResolversTypes['DripCampaign']>, ParentType, ContextType, RequireFields<QueryDripCampaignArgs, '_id'>>;
  dripCampaignFromContactId?: Resolver<ResolversTypes['DripCampaignAndContact'], ParentType, ContextType, RequireFields<QueryDripCampaignFromContactIdArgs, '_id'>>;
  dripCampaignIsIncomplete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryDripCampaignIsIncompleteArgs, '_id'>>;
  dripCampaigns?: Resolver<Array<ResolversTypes['DripCampaign']>, ParentType, ContextType, RequireFields<QueryDripCampaignsArgs, 'skip' | 'take'>>;
  dripStageOptionByPositionCode?: Resolver<Maybe<ResolversTypes['DripStageOption']>, ParentType, ContextType, RequireFields<QueryDripStageOptionByPositionCodeArgs, 'dripCampaignId' | 'positionCode'>>;
  dripStageOptionByStageId?: Resolver<Maybe<ResolversTypes['DripStageOption']>, ParentType, ContextType, RequireFields<QueryDripStageOptionByStageIdArgs, 'dripStageId'>>;
  dripStageOptions?: Resolver<Array<ResolversTypes['DripStageOption']>, ParentType, ContextType, RequireFields<QueryDripStageOptionsArgs, 'dripCampaignId'>>;
  duplicate?: Resolver<Maybe<ResolversTypes['DuplicateContainer']>, ParentType, ContextType, RequireFields<QueryDuplicateArgs, 'skip'>>;
  educationalLevel?: Resolver<ResolversTypes['EducationalLevel'], ParentType, ContextType, RequireFields<QueryEducationalLevelArgs, '_id'>>;
  educationalLevels?: Resolver<Array<ResolversTypes['EducationalLevel']>, ParentType, ContextType, RequireFields<QueryEducationalLevelsArgs, 'skip' | 'take'>>;
  emailSender?: Resolver<ResolversTypes['EmailSender'], ParentType, ContextType, RequireFields<QueryEmailSenderArgs, '_id'>>;
  emailSenders?: Resolver<Array<ResolversTypes['EmailSender']>, ParentType, ContextType, RequireFields<QueryEmailSendersArgs, 'skip' | 'take'>>;
  emailSendersByWorkGroup?: Resolver<Array<ResolversTypes['EmailSendersByWorkGroup']>, ParentType, ContextType, RequireFields<QueryEmailSendersByWorkGroupArgs, 'skip' | 'take'>>;
  emailTemplate?: Resolver<ResolversTypes['EmailTemplate'], ParentType, ContextType, RequireFields<QueryEmailTemplateArgs, '_id'>>;
  emailTemplateType?: Resolver<ResolversTypes['EmailTemplateType'], ParentType, ContextType, RequireFields<QueryEmailTemplateTypeArgs, '_id'>>;
  emailTemplateTypes?: Resolver<Array<ResolversTypes['EmailTemplateType']>, ParentType, ContextType, RequireFields<QueryEmailTemplateTypesArgs, 'skip' | 'take'>>;
  emailTemplates?: Resolver<Array<ResolversTypes['EmailTemplate']>, ParentType, ContextType, RequireFields<QueryEmailTemplatesArgs, 'skip' | 'take'>>;
  emailTemplatesByType?: Resolver<Array<ResolversTypes['EmailTemplate']>, ParentType, ContextType, RequireFields<QueryEmailTemplatesByTypeArgs, 'skip' | 'take'>>;
  employeeCountRange?: Resolver<ResolversTypes['EmployeeCountRange'], ParentType, ContextType, RequireFields<QueryEmployeeCountRangeArgs, '_id'>>;
  employeeCountRanges?: Resolver<Array<ResolversTypes['EmployeeCountRange']>, ParentType, ContextType, RequireFields<QueryEmployeeCountRangesArgs, 'skip' | 'take'>>;
  enterpriseGetCheckoutAmount?: Resolver<ResolversTypes['CheckoutAmount'], ParentType, ContextType, RequireFields<QueryEnterpriseGetCheckoutAmountArgs, 'token'>>;
  evaluationStage?: Resolver<ResolversTypes['EvaluationStage'], ParentType, ContextType, RequireFields<QueryEvaluationStageArgs, '_id'>>;
  evaluationStages?: Resolver<Array<ResolversTypes['EvaluationStage']>, ParentType, ContextType, RequireFields<QueryEvaluationStagesArgs, 'skip' | 'take'>>;
  eventType?: Resolver<ResolversTypes['EventType'], ParentType, ContextType, RequireFields<QueryEventTypeArgs, '_id'>>;
  eventTypes?: Resolver<Array<ResolversTypes['EventType']>, ParentType, ContextType, RequireFields<QueryEventTypesArgs, 'skip' | 'take'>>;
  exitStageTemplate?: Resolver<ResolversTypes['ExitStageTemplate'], ParentType, ContextType, RequireFields<QueryExitStageTemplateArgs, '_id'>>;
  exitStageTemplates?: Resolver<Array<ResolversTypes['ExitStageTemplate']>, ParentType, ContextType, RequireFields<QueryExitStageTemplatesArgs, 'skip' | 'take'>>;
  field?: Resolver<ResolversTypes['Field'], ParentType, ContextType, RequireFields<QueryFieldArgs, '_id'>>;
  fieldGroup?: Resolver<ResolversTypes['FieldGroup'], ParentType, ContextType, RequireFields<QueryFieldGroupArgs, '_id'>>;
  fieldGroups?: Resolver<Array<ResolversTypes['FieldGroup']>, ParentType, ContextType, RequireFields<QueryFieldGroupsArgs, 'skip' | 'take'>>;
  fieldGroupsByFieldGroupType?: Resolver<Array<ResolversTypes['FieldGroup']>, ParentType, ContextType, RequireFields<QueryFieldGroupsByFieldGroupTypeArgs, 'fieldGroupTypeId'>>;
  fields?: Resolver<Array<ResolversTypes['Field']>, ParentType, ContextType, RequireFields<QueryFieldsArgs, 'skip' | 'take'>>;
  fieldsByFieldGroup?: Resolver<Array<ResolversTypes['Field']>, ParentType, ContextType, RequireFields<QueryFieldsByFieldGroupArgs, 'fieldGroupId'>>;
  fieldsById?: Resolver<Array<ResolversTypes['Field']>, ParentType, ContextType, RequireFields<QueryFieldsByIdArgs, '_ids'>>;
  fieldsByInputObjectName?: Resolver<Array<ResolversTypes['Field']>, ParentType, ContextType, RequireFields<QueryFieldsByInputObjectNameArgs, 'inputObjectNames' | 'skip' | 'take'>>;
  fieldsUsedInTemplatesByInputObjectName?: Resolver<Array<ResolversTypes['Field']>, ParentType, ContextType, RequireFields<QueryFieldsUsedInTemplatesByInputObjectNameArgs, 'inputObjectName'>>;
  findAndLockJobinJob?: Resolver<Maybe<ResolversTypes['JobinJob']>, ParentType, ContextType, RequireFields<QueryFindAndLockJobinJobArgs, 'queue'>>;
  frequentlyAskedQuestion?: Resolver<ResolversTypes['FrequentlyAskedQuestion'], ParentType, ContextType, RequireFields<QueryFrequentlyAskedQuestionArgs, '_id'>>;
  frequentlyAskedQuestionType?: Resolver<ResolversTypes['FrequentlyAskedQuestionType'], ParentType, ContextType, RequireFields<QueryFrequentlyAskedQuestionTypeArgs, '_id'>>;
  frequentlyAskedQuestionTypes?: Resolver<Array<ResolversTypes['FrequentlyAskedQuestionType']>, ParentType, ContextType, RequireFields<QueryFrequentlyAskedQuestionTypesArgs, 'skip' | 'take'>>;
  frequentlyAskedQuestions?: Resolver<Array<ResolversTypes['FrequentlyAskedQuestion']>, ParentType, ContextType, Partial<QueryFrequentlyAskedQuestionsArgs>>;
  fullContactPersons?: Resolver<Array<ResolversTypes['FullContactPerson']>, ParentType, ContextType, RequireFields<QueryFullContactPersonsArgs, 'skip' | 'take'>>;
  funnelFromPipelineId?: Resolver<Maybe<ResolversTypes['Funnel']>, ParentType, ContextType, RequireFields<QueryFunnelFromPipelineIdArgs, 'pipelineId'>>;
  generateInvoiceAndDownloadLink?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QueryGenerateInvoiceAndDownloadLinkArgs, '_id'>>;
  getExtensionVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  getLinkedinUrlsOfOutDatedSocialProfiles?: Resolver<Array<ResolversTypes['LinkedinUrlAndId']>, ParentType, ContextType, RequireFields<QueryGetLinkedinUrlsOfOutDatedSocialProfilesArgs, 'skip' | 'take' | 'userLinkedinUrl'>>;
  getManualMerge?: Resolver<Maybe<ResolversTypes['DuplicateContainer']>, ParentType, ContextType, RequireFields<QueryGetManualMergeArgs, 'skip'>>;
  getMessagePreview?: Resolver<ResolversTypes['SendEmail'], ParentType, ContextType, RequireFields<QueryGetMessagePreviewArgs, 'message'>>;
  getMicrosoftAuthRedirectLink?: Resolver<ResolversTypes['String'], ParentType, ContextType, Partial<QueryGetMicrosoftAuthRedirectLinkArgs>>;
  getOutdatedConversations?: Resolver<Array<ResolversTypes['LinkedinConversation']>, ParentType, ContextType, RequireFields<QueryGetOutdatedConversationsArgs, 'skip' | 'take'>>;
  getOutdatedSalesConversations?: Resolver<Array<ResolversTypes['LinkedinSalesConversation']>, ParentType, ContextType, RequireFields<QueryGetOutdatedSalesConversationsArgs, 'skip' | 'take'>>;
  gravatarUrlFromEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryGravatarUrlFromEmailArgs, 'email'>>;
  hasDuplicates?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPendingConnectionImports?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasUpToDateContact?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryHasUpToDateContactArgs, 'url' | 'urlFieldName'>>;
  hasUpToDateFullOrganization?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryHasUpToDateFullOrganizationArgs, 'url' | 'urlFieldName'>>;
  hasUpToDateFullSocialProfile?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryHasUpToDateFullSocialProfileArgs, 'url' | 'urlFieldName'>>;
  helpdeskMessagesByThreadId?: Resolver<Array<ResolversTypes['HelpdeskMessage']>, ParentType, ContextType, RequireFields<QueryHelpdeskMessagesByThreadIdArgs, 'skip' | 'take' | 'threadId'>>;
  idealCandidateFilter?: Resolver<ResolversTypes['IdealCandidateFilter'], ParentType, ContextType, RequireFields<QueryIdealCandidateFilterArgs, '_id'>>;
  idealCandidateFilterByAssignedJobspec?: Resolver<Maybe<ResolversTypes['IdealCandidateFilter']>, ParentType, ContextType, RequireFields<QueryIdealCandidateFilterByAssignedJobspecArgs, 'assignedJobspecId'>>;
  idealCandidateFilters?: Resolver<Array<ResolversTypes['IdealCandidateFilter']>, ParentType, ContextType, RequireFields<QueryIdealCandidateFiltersArgs, 'skip' | 'take'>>;
  indicator?: Resolver<ResolversTypes['Indicator'], ParentType, ContextType, RequireFields<QueryIndicatorArgs, '_id'>>;
  indicators?: Resolver<Array<ResolversTypes['Indicator']>, ParentType, ContextType, RequireFields<QueryIndicatorsArgs, 'skip' | 'take'>>;
  industries?: Resolver<Array<ResolversTypes['Industry']>, ParentType, ContextType, RequireFields<QueryIndustriesArgs, 'skip' | 'take'>>;
  industry?: Resolver<ResolversTypes['Industry'], ParentType, ContextType, RequireFields<QueryIndustryArgs, '_id'>>;
  industrySector?: Resolver<ResolversTypes['IndustrySector'], ParentType, ContextType, RequireFields<QueryIndustrySectorArgs, '_id'>>;
  industrySectors?: Resolver<Array<ResolversTypes['IndustrySector']>, ParentType, ContextType, RequireFields<QueryIndustrySectorsArgs, 'skip' | 'take'>>;
  isWorkgroupMember?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryIsWorkgroupMemberArgs, 'userId' | 'workGroupId'>>;
  jobinAccountNotesByAccountId?: Resolver<Array<ResolversTypes['JobinAccountNote']>, ParentType, ContextType, RequireFields<QueryJobinAccountNotesByAccountIdArgs, 'jobinAccountId' | 'skip' | 'take'>>;
  jobinCompletedJob?: Resolver<ResolversTypes['JobinCompletedJob'], ParentType, ContextType, RequireFields<QueryJobinCompletedJobArgs, '_id'>>;
  jobinCompletedJobs?: Resolver<Array<ResolversTypes['JobinCompletedJob']>, ParentType, ContextType, RequireFields<QueryJobinCompletedJobsArgs, 'skip' | 'take'>>;
  jobinDailyQuotaByEventTypeIds?: Resolver<Maybe<ResolversTypes['JobinQuotaAndLimit']>, ParentType, ContextType, RequireFields<QueryJobinDailyQuotaByEventTypeIdsArgs, 'eventTypeIds'>>;
  jobinDailyQuotas?: Resolver<Maybe<ResolversTypes['JobinDailyQuotas']>, ParentType, ContextType>;
  jobinEvents?: Resolver<Array<ResolversTypes['JobinEvent']>, ParentType, ContextType, RequireFields<QueryJobinEventsArgs, 'take'>>;
  jobinFeatureGroups?: Resolver<Array<ResolversTypes['JobinFeatureGroup']>, ParentType, ContextType, Partial<QueryJobinFeatureGroupsArgs>>;
  jobinFeatures?: Resolver<Array<ResolversTypes['JobinFeature']>, ParentType, ContextType, Partial<QueryJobinFeaturesArgs>>;
  jobinInvoices?: Resolver<Array<ResolversTypes['JobinInvoice']>, ParentType, ContextType, RequireFields<QueryJobinInvoicesArgs, 'skip' | 'take'>>;
  jobinJob?: Resolver<ResolversTypes['JobinJob'], ParentType, ContextType, RequireFields<QueryJobinJobArgs, '_id'>>;
  jobinJobs?: Resolver<Array<ResolversTypes['JobinJob']>, ParentType, ContextType, RequireFields<QueryJobinJobsArgs, 'skip' | 'take'>>;
  jobinProductActiveFeature?: Resolver<Maybe<ResolversTypes['ActiveFeature']>, ParentType, ContextType, RequireFields<QueryJobinProductActiveFeatureArgs, '_id' | 'codename'>>;
  jobinProducts?: Resolver<Array<ResolversTypes['JobinProduct']>, ParentType, ContextType, Partial<QueryJobinProductsArgs>>;
  jobinSolution?: Resolver<ResolversTypes['JobinSolution'], ParentType, ContextType, RequireFields<QueryJobinSolutionArgs, '_id'>>;
  jobinSolutions?: Resolver<Array<ResolversTypes['JobinSolution']>, ParentType, ContextType, Partial<QueryJobinSolutionsArgs>>;
  jobinSubFeatures?: Resolver<Array<ResolversTypes['JobinSubFeature']>, ParentType, ContextType, RequireFields<QueryJobinSubFeaturesArgs, 'jobinFeatureId'>>;
  jobseekerAim?: Resolver<ResolversTypes['JobseekerAim'], ParentType, ContextType, RequireFields<QueryJobseekerAimArgs, '_id'>>;
  jobseekerAims?: Resolver<Array<ResolversTypes['JobseekerAim']>, ParentType, ContextType, RequireFields<QueryJobseekerAimsArgs, 'skip' | 'take'>>;
  jobseekerStatus?: Resolver<ResolversTypes['JobseekerStatus'], ParentType, ContextType, RequireFields<QueryJobseekerStatusArgs, '_id'>>;
  jobseekerStatuses?: Resolver<Array<ResolversTypes['JobseekerStatus']>, ParentType, ContextType, RequireFields<QueryJobseekerStatusesArgs, 'skip' | 'take'>>;
  jobspec?: Resolver<ResolversTypes['Jobspec'], ParentType, ContextType, RequireFields<QueryJobspecArgs, '_id'>>;
  jobspecDescriptionTemplate?: Resolver<ResolversTypes['JobspecDescriptionTemplate'], ParentType, ContextType, RequireFields<QueryJobspecDescriptionTemplateArgs, '_id'>>;
  jobspecDescriptionTemplates?: Resolver<Array<ResolversTypes['JobspecDescriptionTemplate']>, ParentType, ContextType, RequireFields<QueryJobspecDescriptionTemplatesArgs, 'skip' | 'take'>>;
  jobspecDescriptionTemplatesByType?: Resolver<Array<ResolversTypes['JobspecDescriptionTemplate']>, ParentType, ContextType, RequireFields<QueryJobspecDescriptionTemplatesByTypeArgs, 'skip' | 'take'>>;
  jobspecDescriptionType?: Resolver<ResolversTypes['JobspecDescriptionType'], ParentType, ContextType, RequireFields<QueryJobspecDescriptionTypeArgs, '_id'>>;
  jobspecDescriptionTypes?: Resolver<Array<ResolversTypes['JobspecDescriptionType']>, ParentType, ContextType, RequireFields<QueryJobspecDescriptionTypesArgs, 'skip' | 'take'>>;
  jobspecNote?: Resolver<ResolversTypes['JobspecNote'], ParentType, ContextType, RequireFields<QueryJobspecNoteArgs, '_id'>>;
  jobspecNotes?: Resolver<Array<ResolversTypes['JobspecNote']>, ParentType, ContextType, RequireFields<QueryJobspecNotesArgs, 'skip' | 'take'>>;
  jobspecNotesByJobspecId?: Resolver<Array<ResolversTypes['JobspecNote']>, ParentType, ContextType, RequireFields<QueryJobspecNotesByJobspecIdArgs, 'jobspecId' | 'skip' | 'take'>>;
  jobspecStatuses?: Resolver<Array<ResolversTypes['JobspecStatus']>, ParentType, ContextType>;
  jobspecTag?: Resolver<ResolversTypes['JobspecTag'], ParentType, ContextType, RequireFields<QueryJobspecTagArgs, '_id'>>;
  jobspecTags?: Resolver<Array<ResolversTypes['JobspecTag']>, ParentType, ContextType, RequireFields<QueryJobspecTagsArgs, 'skip' | 'take'>>;
  jobspecType?: Resolver<ResolversTypes['JobspecType'], ParentType, ContextType, RequireFields<QueryJobspecTypeArgs, '_id'>>;
  jobspecTypes?: Resolver<Array<ResolversTypes['JobspecType']>, ParentType, ContextType, RequireFields<QueryJobspecTypesArgs, 'skip' | 'take'>>;
  jobspecTypesByType?: Resolver<Array<ResolversTypes['JobspecType']>, ParentType, ContextType, RequireFields<QueryJobspecTypesByTypeArgs, 'skip' | 'take'>>;
  jobspecs?: Resolver<Array<ResolversTypes['Jobspec']>, ParentType, ContextType, RequireFields<QueryJobspecsArgs, 'skip' | 'take'>>;
  jobspecsByAccountId?: Resolver<Array<ResolversTypes['Jobspec']>, ParentType, ContextType, RequireFields<QueryJobspecsByAccountIdArgs, 'accountId' | 'skip' | 'take'>>;
  jobspecsByEmployers?: Resolver<Array<ResolversTypes['AccountWithJobspecs']>, ParentType, ContextType, RequireFields<QueryJobspecsByEmployersArgs, 'skip' | 'take'>>;
  jobspecsById?: Resolver<Array<ResolversTypes['Jobspec']>, ParentType, ContextType, RequireFields<QueryJobspecsByIdArgs, '_ids'>>;
  jobyChatGptPrompt?: Resolver<ResolversTypes['JobyChatGptPrompt'], ParentType, ContextType, RequireFields<QueryJobyChatGptPromptArgs, '_id'>>;
  jobyChatGptPrompts?: Resolver<Array<ResolversTypes['JobyChatGptPrompt']>, ParentType, ContextType, RequireFields<QueryJobyChatGptPromptsArgs, 'skip' | 'take'>>;
  languageName?: Resolver<ResolversTypes['LanguageName'], ParentType, ContextType, RequireFields<QueryLanguageNameArgs, '_id'>>;
  languageNames?: Resolver<Array<ResolversTypes['LanguageName']>, ParentType, ContextType, RequireFields<QueryLanguageNamesArgs, 'skip' | 'take'>>;
  latestEvent?: Resolver<Maybe<ResolversTypes['JobinEvent']>, ParentType, ContextType, Partial<QueryLatestEventArgs>>;
  latestLinkedinConnectionConnectedOnDate?: Resolver<ResolversTypes['LatestLinkedinConnectionConnectedOnDate'], ParentType, ContextType>;
  linkedinAccount?: Resolver<Maybe<ResolversTypes['LinkedinAccountWithDefaultCountry']>, ParentType, ContextType>;
  linkedinAnalytic?: Resolver<Maybe<ResolversTypes['LinkedinAnalytic']>, ParentType, ContextType, RequireFields<QueryLinkedinAnalyticArgs, '_id'>>;
  linkedinAnalytics?: Resolver<Array<ResolversTypes['LinkedinAnalytic']>, ParentType, ContextType, RequireFields<QueryLinkedinAnalyticsArgs, 'skip' | 'take'>>;
  linkedinConversationsByParticipantUrls?: Resolver<Maybe<Array<ResolversTypes['LinkedinConversation']>>, ParentType, ContextType, RequireFields<QueryLinkedinConversationsByParticipantUrlsArgs, 'participantLinkedinUrls'>>;
  linkedinSalesConversationByParticipantUrls?: Resolver<Maybe<ResolversTypes['LinkedinSalesConversation']>, ParentType, ContextType, RequireFields<QueryLinkedinSalesConversationByParticipantUrlsArgs, 'participantLinkedinUrls'>>;
  mainUserByEmail?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryMainUserByEmailArgs, 'email'>>;
  maritalStatus?: Resolver<ResolversTypes['MaritalStatus'], ParentType, ContextType, RequireFields<QueryMaritalStatusArgs, '_id'>>;
  maritalStatuses?: Resolver<Array<ResolversTypes['MaritalStatus']>, ParentType, ContextType, RequireFields<QueryMaritalStatusesArgs, 'skip' | 'take'>>;
  messageTemplate?: Resolver<ResolversTypes['MessageTemplate'], ParentType, ContextType, RequireFields<QueryMessageTemplateArgs, '_id'>>;
  messageTemplates?: Resolver<Array<ResolversTypes['MessageTemplate']>, ParentType, ContextType, RequireFields<QueryMessageTemplatesArgs, 'skip' | 'take'>>;
  messageTemplatesByType?: Resolver<Array<ResolversTypes['MessageTemplate']>, ParentType, ContextType, RequireFields<QueryMessageTemplatesByTypeArgs, 'skip' | 'take'>>;
  microsoftLinkedAccounts?: Resolver<Array<ResolversTypes['MicrosoftLinkedAccount']>, ParentType, ContextType>;
  moneyAmountPercentageType?: Resolver<ResolversTypes['MoneyAmountPercentageType'], ParentType, ContextType, RequireFields<QueryMoneyAmountPercentageTypeArgs, '_id'>>;
  moneyAmountPercentageTypes?: Resolver<Array<ResolversTypes['MoneyAmountPercentageType']>, ParentType, ContextType, RequireFields<QueryMoneyAmountPercentageTypesArgs, 'skip' | 'take'>>;
  moneyAmountType?: Resolver<ResolversTypes['MoneyAmountType'], ParentType, ContextType, RequireFields<QueryMoneyAmountTypeArgs, '_id'>>;
  moneyAmountTypes?: Resolver<Array<ResolversTypes['MoneyAmountType']>, ParentType, ContextType, RequireFields<QueryMoneyAmountTypesArgs, 'skip' | 'take'>>;
  myLinkedinAnalyticsCurrent?: Resolver<Maybe<ResolversTypes['LinkedinAnalytic']>, ParentType, ContextType, Partial<QueryMyLinkedinAnalyticsCurrentArgs>>;
  myLinkedinAnalyticsTimeline?: Resolver<Maybe<ResolversTypes['LinkedinAnalyticTimeline']>, ParentType, ContextType, RequireFields<QueryMyLinkedinAnalyticsTimelineArgs, 'fromDate' | 'toDate'>>;
  myLinkedinAnalyticsTotals?: Resolver<Maybe<ResolversTypes['LinkedinAnalyticTotals']>, ParentType, ContextType, RequireFields<QueryMyLinkedinAnalyticsTotalsArgs, 'fromDate' | 'toDate'>>;
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, Partial<QueryOrganizationArgs>>;
  organizationType?: Resolver<ResolversTypes['OrganizationType'], ParentType, ContextType, RequireFields<QueryOrganizationTypeArgs, '_id'>>;
  organizationTypes?: Resolver<Array<ResolversTypes['OrganizationType']>, ParentType, ContextType, RequireFields<QueryOrganizationTypesArgs, 'skip' | 'take'>>;
  organizations?: Resolver<Array<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<QueryOrganizationsArgs, 'skip' | 'take'>>;
  origin?: Resolver<ResolversTypes['Origin'], ParentType, ContextType, RequireFields<QueryOriginArgs, '_id'>>;
  originType?: Resolver<ResolversTypes['OriginType'], ParentType, ContextType, RequireFields<QueryOriginTypeArgs, '_id'>>;
  originTypes?: Resolver<Array<ResolversTypes['OriginType']>, ParentType, ContextType, RequireFields<QueryOriginTypesArgs, 'skip' | 'take'>>;
  origins?: Resolver<Array<ResolversTypes['Origin']>, ParentType, ContextType, RequireFields<QueryOriginsArgs, 'skip' | 'take'>>;
  pdlAutocomplete?: Resolver<Array<ResolversTypes['BaseTemplate']>, ParentType, ContextType, RequireFields<QueryPdlAutocompleteArgs, 'field' | 'text'>>;
  pipeline?: Resolver<ResolversTypes['Pipeline'], ParentType, ContextType, RequireFields<QueryPipelineArgs, '_id'>>;
  pipelineByJobspecId?: Resolver<Maybe<ResolversTypes['Pipeline']>, ParentType, ContextType, RequireFields<QueryPipelineByJobspecIdArgs, 'jobspecId'>>;
  pipelineStagesWithCandidates?: Resolver<ResolversTypes['PipelineStagesWithCandidates'], ParentType, ContextType, RequireFields<QueryPipelineStagesWithCandidatesArgs, 'filter' | 'pipelineId'>>;
  pipelineStagesWithCandidatesCount?: Resolver<ResolversTypes['PipelineStagesWithCandidatesCount'], ParentType, ContextType, RequireFields<QueryPipelineStagesWithCandidatesCountArgs, 'filter' | 'pipelineId'>>;
  pipelineTemplate?: Resolver<ResolversTypes['PipelineTemplate'], ParentType, ContextType, RequireFields<QueryPipelineTemplateArgs, '_id'>>;
  pipelineTemplates?: Resolver<Array<ResolversTypes['PipelineTemplate']>, ParentType, ContextType, RequireFields<QueryPipelineTemplatesArgs, 'skip' | 'take'>>;
  pipelines?: Resolver<Array<ResolversTypes['Pipeline']>, ParentType, ContextType, RequireFields<QueryPipelinesArgs, 'skip' | 'take'>>;
  plans?: Resolver<Array<ResolversTypes['Plan']>, ParentType, ContextType, Partial<QueryPlansArgs>>;
  postalCodes?: Resolver<Array<ResolversTypes['BaseTemplate']>, ParentType, ContextType, RequireFields<QueryPostalCodesArgs, 'skip' | 'take'>>;
  privacyLevel?: Resolver<ResolversTypes['PrivacyLevel'], ParentType, ContextType, RequireFields<QueryPrivacyLevelArgs, '_id'>>;
  privacyLevels?: Resolver<Array<ResolversTypes['PrivacyLevel']>, ParentType, ContextType, RequireFields<QueryPrivacyLevelsArgs, 'skip' | 'take'>>;
  privilegeByCodename?: Resolver<Maybe<ResolversTypes['Privilege']>, ParentType, ContextType, RequireFields<QueryPrivilegeByCodenameArgs, 'codename'>>;
  privileges?: Resolver<Array<ResolversTypes['Privilege']>, ParentType, ContextType>;
  privilegesByCodenames?: Resolver<Array<ResolversTypes['Privilege']>, ParentType, ContextType, RequireFields<QueryPrivilegesByCodenamesArgs, 'codenames'>>;
  publicUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryPublicUserArgs, '_id'>>;
  publicUserByPageUrl?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryPublicUserByPageUrlArgs, 'url'>>;
  recentContactsFilter?: Resolver<ResolversTypes['RecentContactsFilter'], ParentType, ContextType, RequireFields<QueryRecentContactsFilterArgs, '_id'>>;
  recentContactsFilters?: Resolver<Array<ResolversTypes['RecentContactsFilter']>, ParentType, ContextType, RequireFields<QueryRecentContactsFiltersArgs, 'skip' | 'take'>>;
  recommendedSubscriptionUpgrade?: Resolver<Maybe<ResolversTypes['RecommendedProduct']>, ParentType, ContextType, RequireFields<QueryRecommendedSubscriptionUpgradeArgs, 'activeFeatureCodename'>>;
  regions?: Resolver<Array<ResolversTypes['BaseTemplate']>, ParentType, ContextType, RequireFields<QueryRegionsArgs, 'skip' | 'take'>>;
  removeDuplicateFromPair?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<QueryRemoveDuplicateFromPairArgs>>;
  replyIdentifications?: Resolver<Maybe<ResolversTypes['ReplyIdentifications']>, ParentType, ContextType, RequireFields<QueryReplyIdentificationsArgs, 'dripCampaignId'>>;
  replyTag?: Resolver<Maybe<ResolversTypes['ReplyTag']>, ParentType, ContextType, RequireFields<QueryReplyTagArgs, '_id'>>;
  replyTags?: Resolver<Array<ResolversTypes['ReplyTag']>, ParentType, ContextType, RequireFields<QueryReplyTagsArgs, 'skip' | 'take'>>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType, RequireFields<QueryRoleArgs, '_id'>>;
  roleTitle?: Resolver<ResolversTypes['RoleTitle'], ParentType, ContextType, RequireFields<QueryRoleTitleArgs, '_id'>>;
  roleTitles?: Resolver<Array<ResolversTypes['RoleTitle']>, ParentType, ContextType, RequireFields<QueryRoleTitlesArgs, 'skip' | 'take'>>;
  roles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<QueryRolesArgs, 'skip' | 'take'>>;
  skillName?: Resolver<ResolversTypes['SkillName'], ParentType, ContextType, RequireFields<QuerySkillNameArgs, '_id'>>;
  skillNames?: Resolver<Array<ResolversTypes['SkillName']>, ParentType, ContextType, RequireFields<QuerySkillNamesArgs, 'skip' | 'take'>>;
  skillType?: Resolver<ResolversTypes['SkillType'], ParentType, ContextType, RequireFields<QuerySkillTypeArgs, '_id'>>;
  skillTypes?: Resolver<Array<ResolversTypes['SkillType']>, ParentType, ContextType, RequireFields<QuerySkillTypesArgs, 'skip' | 'take'>>;
  smtpTransportVerifyConnection?: Resolver<ResolversTypes['SmtpTransportVerification'], ParentType, ContextType, RequireFields<QuerySmtpTransportVerifyConnectionArgs, 'smtpSettings'>>;
  socialProfileFromFilterId?: Resolver<Maybe<ResolversTypes['PDLResponse']>, ParentType, ContextType, RequireFields<QuerySocialProfileFromFilterIdArgs, 'socialProfileFilterId'>>;
  stageTemplate?: Resolver<ResolversTypes['StageTemplate'], ParentType, ContextType, RequireFields<QueryStageTemplateArgs, '_id'>>;
  stageTemplates?: Resolver<Array<ResolversTypes['StageTemplate']>, ParentType, ContextType, RequireFields<QueryStageTemplatesArgs, 'skip' | 'take'>>;
  subStageTemplate?: Resolver<ResolversTypes['SubStageTemplate'], ParentType, ContextType, RequireFields<QuerySubStageTemplateArgs, '_id'>>;
  subStageTemplates?: Resolver<Array<ResolversTypes['SubStageTemplate']>, ParentType, ContextType, RequireFields<QuerySubStageTemplatesArgs, 'skip' | 'take'>>;
  subscriptionCalculateCheckoutAmount?: Resolver<ResolversTypes['CheckoutAmount'], ParentType, ContextType, RequireFields<QuerySubscriptionCalculateCheckoutAmountArgs, 'isBilledMonthly' | 'items'>>;
  successfulExitStageTemplate?: Resolver<ResolversTypes['SuccessfulExitStageTemplate'], ParentType, ContextType, RequireFields<QuerySuccessfulExitStageTemplateArgs, '_id'>>;
  successfulExitStageTemplates?: Resolver<Array<ResolversTypes['SuccessfulExitStageTemplate']>, ParentType, ContextType, RequireFields<QuerySuccessfulExitStageTemplatesArgs, 'skip' | 'take'>>;
  test?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  testAuth?: Resolver<Array<ResolversTypes['Contact']>, ParentType, ContextType>;
  timeDelay?: Resolver<ResolversTypes['TimeDelay'], ParentType, ContextType, RequireFields<QueryTimeDelayArgs, '_id'>>;
  timeDelays?: Resolver<Array<ResolversTypes['TimeDelay']>, ParentType, ContextType, RequireFields<QueryTimeDelaysArgs, 'skip' | 'take'>>;
  timeUnit?: Resolver<ResolversTypes['TimeUnit'], ParentType, ContextType, RequireFields<QueryTimeUnitArgs, '_id'>>;
  timeUnits?: Resolver<Array<ResolversTypes['TimeUnit']>, ParentType, ContextType, RequireFields<QueryTimeUnitsArgs, 'skip' | 'take'>>;
  totalInvitationsSentAndPending?: Resolver<ResolversTypes['TotalInvitationsSentAndPending'], ParentType, ContextType, Partial<QueryTotalInvitationsSentAndPendingArgs>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, '_id'>>;
  userAdditionalDetail?: Resolver<Maybe<ResolversTypes['UserAdditionalDetail']>, ParentType, ContextType>;
  userByEmail?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByEmailArgs, 'email'>>;
  userCountry?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  userIdByEmail?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType, RequireFields<QueryUserIdByEmailArgs, 'email'>>;
  userIsWorkGroupAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  userLogin?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserLoginArgs, '_id'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUsersArgs, 'skip' | 'take'>>;
  usesChatGptJobspec?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryUsesChatGptJobspecArgs, 'chatGptCodes'>>;
  verifyVatId?: Resolver<ResolversTypes['VatIdResponse'], ParentType, ContextType, RequireFields<QueryVerifyVatIdArgs, 'vatNumber'>>;
  volunteerCause?: Resolver<ResolversTypes['VolunteerCause'], ParentType, ContextType, RequireFields<QueryVolunteerCauseArgs, '_id'>>;
  volunteerCauses?: Resolver<Array<ResolversTypes['VolunteerCause']>, ParentType, ContextType, RequireFields<QueryVolunteerCausesArgs, 'skip' | 'take'>>;
  workGroup?: Resolver<ResolversTypes['WorkGroup'], ParentType, ContextType, RequireFields<QueryWorkGroupArgs, '_id'>>;
  workGroupMembers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryWorkGroupMembersArgs, 'skip' | 'take'>>;
  workGroupUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryWorkGroupUserArgs, '_id'>>;
  workGroups?: Resolver<Array<ResolversTypes['WorkGroup']>, ParentType, ContextType, RequireFields<QueryWorkGroupsArgs, 'userId'>>;
  workInProgressFeedbackByFeature?: Resolver<ResolversTypes['WorkInProgressFeedback'], ParentType, ContextType, RequireFields<QueryWorkInProgressFeedbackByFeatureArgs, 'feature'>>;
  worldLocation?: Resolver<Maybe<ResolversTypes['MainLocationWorldLocationMatch']>, ParentType, ContextType, Partial<QueryWorldLocationArgs>>;
}>;

export type RecentContactsFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecentContactsFilter'] = ResolversParentTypes['RecentContactsFilter']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  _ids?: Resolver<Maybe<Array<ResolversTypes['ObjectId']>>, ParentType, ContextType>;
  companyEmployeeCountRanges?: Resolver<Maybe<Array<ResolversTypes['StrCurrentOrPastAdvancedFilter']>>, ParentType, ContextType>;
  contactsAvailability?: Resolver<Maybe<ResolversTypes['ContactsAvailabilityFilter']>, ParentType, ContextType>;
  contactsCareer?: Resolver<Maybe<ResolversTypes['ContactsCareerFilter']>, ParentType, ContextType>;
  contactsEducation?: Resolver<Maybe<ResolversTypes['ContactsEducationFilter']>, ParentType, ContextType>;
  contactsLastEvent?: Resolver<Maybe<ResolversTypes['ContactsDateRangeFilter']>, ParentType, ContextType>;
  contactsLastInteraction?: Resolver<Maybe<ResolversTypes['ContactsDateRangeFilter']>, ParentType, ContextType>;
  contactsLastUnansweredReply?: Resolver<Maybe<ResolversTypes['ContactsDateRangeFilter']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  dripCampaignFilter?: Resolver<Maybe<ResolversTypes['DripCampaignFilter']>, ParentType, ContextType>;
  dripCampaignsFilter?: Resolver<Maybe<Array<ResolversTypes['IdAdvancedFilter']>>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['StrAdvancedFilter']>, ParentType, ContextType>;
  hasCv?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasInteraction?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasLinkedinId?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasUnansweredReply?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  insertionDate?: Resolver<Maybe<ResolversTypes['InsertionDateFilter']>, ParentType, ContextType>;
  isMiniProfile?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  jobseekerStatuses?: Resolver<Maybe<Array<ResolversTypes['StrAdvancedFilter']>>, ParentType, ContextType>;
  jobspecFilter?: Resolver<Maybe<ResolversTypes['ContactsJobspecFilter']>, ParentType, ContextType>;
  languageNames?: Resolver<Maybe<Array<ResolversTypes['StrAdvancedFilter']>>, ParentType, ContextType>;
  linkedinTagsFilter?: Resolver<Maybe<ResolversTypes['LinkedinTagsFilter']>, ParentType, ContextType>;
  locations?: Resolver<Maybe<Array<ResolversTypes['MainLocationFilter']>>, ParentType, ContextType>;
  minShouldMatch?: Resolver<Maybe<ResolversTypes['MinShouldMatch']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  searchName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  searchSurname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  searchValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showNoCurrentCompany?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  showUnsubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  skillNames?: Resolver<Maybe<Array<ResolversTypes['StrAdvancedFilter']>>, ParentType, ContextType>;
  sortBy?: Resolver<Maybe<ResolversTypes['ContactsSortBy']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<Array<ResolversTypes['StrAdvancedFilter']>>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['IdAdvancedFilter']>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  yearsInCurrentRole?: Resolver<Maybe<Array<ResolversTypes['ContactsTimeRangeFilter']>>, ParentType, ContextType>;
  yearsOfExperience?: Resolver<Maybe<Array<ResolversTypes['ContactsTimeRangeFilter']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RecommendedProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecommendedProduct'] = ResolversParentTypes['RecommendedProduct']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currentPlanName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currentPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  enterpriseRequired?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  iconName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isBilledMonthly?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  otherCurrentPaymentItems?: Resolver<Maybe<Array<ResolversTypes['PaymentItem']>>, ParentType, ContextType>;
  planName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  seats?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  solutionName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userIsAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReferenceFieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReferenceField'] = ResolversParentTypes['ReferenceField']> = ResolversObject<{
  fieldName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inputObjectName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RefreshObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['RefreshObject'] = ResolversParentTypes['RefreshObject']> = ResolversObject<{
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RegisterObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterObject'] = ResolversParentTypes['RegisterObject']> = ResolversObject<{
  refreshToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoteWorkResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemoteWork'] = ResolversParentTypes['RemoteWork']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  favIsHybrid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  favIsOnSite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  favIsRemote?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isHybrid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isOnSite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isRemote?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReplyIdentificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReplyIdentification'] = ResolversParentTypes['ReplyIdentification']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  action?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  replyCategorizationUserInputs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tagIds?: Resolver<Maybe<Array<ResolversTypes['ObjectId']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReplyIdentificationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReplyIdentifications'] = ResolversParentTypes['ReplyIdentifications']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  dripCampaignId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  replyIdentifications?: Resolver<Maybe<Array<ResolversTypes['ReplyIdentification']>>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  workGroupId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReplyTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReplyTag'] = ResolversParentTypes['ReplyTag']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  workGroupId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  defaultPrivileges?: Resolver<Maybe<Array<ResolversTypes['Privilege']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoleTitleResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoleTitle'] = ResolversParentTypes['RoleTitle']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ScoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Score'] = ResolversParentTypes['Score']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  calculatedAt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  change?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  overall?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  subScores?: Resolver<Maybe<Array<ResolversTypes['SubScore']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SendEmailResolvers<ContextType = any, ParentType extends ResolversParentTypes['SendEmail'] = ResolversParentTypes['SendEmail']> = ResolversObject<{
  hasMissingFields?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SkillResolvers<ContextType = any, ParentType extends ResolversParentTypes['Skill'] = ResolversParentTypes['Skill']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  monthsOfExperience?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  period?: Resolver<ResolversTypes['Period'], ParentType, ContextType>;
  profExperienceId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  skillType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  topSkill?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SkillNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['SkillName'] = ResolversParentTypes['SkillName']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  skillTypeId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SkillTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SkillType'] = ResolversParentTypes['SkillType']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmtpSettingResolvers<ContextType = any, ParentType extends ResolversParentTypes['SmtpSetting'] = ResolversParentTypes['SmtpSetting']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  host?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imapHost?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imapPort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  imapTls?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pass?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  port?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  secure?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sslV3?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmtpTransportVerificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['SmtpTransportVerification'] = ResolversParentTypes['SmtpTransportVerification']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SocialProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['SocialProfile'] = ResolversParentTypes['SocialProfile']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  academicTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accomplishments?: Resolver<Maybe<Array<ResolversTypes['Accomplishment']>>, ParentType, ContextType>;
  attachments?: Resolver<Maybe<Array<ResolversTypes['UploadedFile']>>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  calendlyUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  communicationChannels?: Resolver<Maybe<Array<ResolversTypes['CommunicationChannel']>>, ParentType, ContextType>;
  contactSpecification?: Resolver<Maybe<ResolversTypes['ContactSpecification']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  cvExtRepoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cvFile?: Resolver<Maybe<ResolversTypes['UploadedFile']>, ParentType, ContextType>;
  educExperiences?: Resolver<Maybe<Array<ResolversTypes['EducExperience']>>, ParentType, ContextType>;
  facebookId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebookUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebookUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullAvatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  githubUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  githubUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gravatarCheckTimestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gravatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasMobilePhone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPageUrls?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPhone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  industry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instagramUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobseekerCriterion?: Resolver<Maybe<ResolversTypes['JobseekerCriterion']>, ParentType, ContextType>;
  languageUsed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  languages?: Resolver<Maybe<Array<ResolversTypes['Language']>>, ParentType, ContextType>;
  lastLinkedinUpdate?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinDetail?: Resolver<Maybe<ResolversTypes['LinkedinDetail']>, ParentType, ContextType>;
  linkedinSalesUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinTalentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainLocation?: Resolver<Maybe<ResolversTypes['MainLocation']>, ParentType, ContextType>;
  mainProfExperience?: Resolver<Maybe<ResolversTypes['ProfExperience']>, ParentType, ContextType>;
  mainRoleTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mediumUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  middleName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oldLinkedinUrls?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  otherEmails?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  otherMobilePhones?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  otherPhones?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  pageUrls?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  pdlId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personalDetail?: Resolver<Maybe<ResolversTypes['PersonalDetail']>, ParentType, ContextType>;
  personalInterest?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  privateEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  privateMobilePhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  privatePhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profExperiences?: Resolver<Maybe<Array<ResolversTypes['ProfExperience']>>, ParentType, ContextType>;
  quoraUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  skills?: Resolver<Maybe<Array<ResolversTypes['Skill']>>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tiktokUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitterUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitterUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  voluntExperiences?: Resolver<Maybe<Array<ResolversTypes['VoluntExperience']>>, ParentType, ContextType>;
  want?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wechatUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  workEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  workMobilePhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  workPhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  xingUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  yearsInCurrentRole?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  yearsOfExperience?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  youtubeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SolutionWithProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['SolutionWithProduct'] = ResolversParentTypes['SolutionWithProduct']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  jobinProductId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  planId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  planName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  seats?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  solutionIconName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  solutionId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  solutionName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Stage'] = ResolversParentTypes['Stage']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subStages?: Resolver<Maybe<Array<ResolversTypes['SubStage']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StageTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StageTemplate'] = ResolversParentTypes['StageTemplate']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subStages?: Resolver<Maybe<Array<ResolversTypes['SubStage']>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StageWithCandidatesResolvers<ContextType = any, ParentType extends ResolversParentTypes['StageWithCandidates'] = ResolversParentTypes['StageWithCandidates']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  candidates?: Resolver<Array<ResolversTypes['Contact']>, ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StageWithCandidatesCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['StageWithCandidatesCount'] = ResolversParentTypes['StageWithCandidatesCount']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  totalCandidates?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StrAdvancedFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['StrAdvancedFilter'] = ResolversParentTypes['StrAdvancedFilter']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  boost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StrCurrentOrPastAdvancedFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['StrCurrentOrPastAdvancedFilter'] = ResolversParentTypes['StrCurrentOrPastAdvancedFilter']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  boost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currentOrPast?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StripeCardResolvers<ContextType = any, ParentType extends ResolversParentTypes['StripeCard'] = ResolversParentTypes['StripeCard']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  brand?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  checks?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expMonth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  expYear?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fingerprint?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  funding?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  generatedFrom?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last4?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  networks?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  threeDSecureUsage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wallet?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StripePaymentMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['StripePaymentMethod'] = ResolversParentTypes['StripePaymentMethod']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  card?: Resolver<ResolversTypes['StripeCard'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubScoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubScore'] = ResolversParentTypes['SubScore']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  pillar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubStageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubStage'] = ResolversParentTypes['SubStage']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubStageTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubStageTemplate'] = ResolversParentTypes['SubStageTemplate']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  aiResponse?: SubscriptionResolver<Maybe<ResolversTypes['String']>, "aiResponse", ParentType, ContextType, Partial<SubscriptionAiResponseArgs>>;
  filterReady?: SubscriptionResolver<Maybe<ResolversTypes['ObjectId']>, "filterReady", ParentType, ContextType>;
  icpFilterReady?: SubscriptionResolver<Maybe<ResolversTypes['ContactsFilter']>, "icpFilterReady", ParentType, ContextType>;
  jobinJobUpdated?: SubscriptionResolver<Maybe<ResolversTypes['JobinJobSubscription']>, "jobinJobUpdated", ParentType, ContextType, Partial<SubscriptionJobinJobUpdatedArgs>>;
  pdlSocialProfileImported?: SubscriptionResolver<ResolversTypes['SocialProfile'], "pdlSocialProfileImported", ParentType, ContextType, Partial<SubscriptionPdlSocialProfileImportedArgs>>;
}>;

export type SuccessfulExitStageTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SuccessfulExitStageTemplate'] = ResolversParentTypes['SuccessfulExitStageTemplate']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TimeDelayResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimeDelay'] = ResolversParentTypes['TimeDelay']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TimeUnitResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimeUnit'] = ResolversParentTypes['TimeUnit']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  conversionToMinutes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TotalInvitationsSentAndPendingResolvers<ContextType = any, ParentType extends ResolversParentTypes['TotalInvitationsSentAndPending'] = ResolversParentTypes['TotalInvitationsSentAndPending']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  invitationsPending?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  invitationsSent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isSalesNavigator?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TravelRequiredResolvers<ContextType = any, ParentType extends ResolversParentTypes['TravelRequired'] = ResolversParentTypes['TravelRequired']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  workInCustomerSite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TutorialProgressResolvers<ContextType = any, ParentType extends ResolversParentTypes['TutorialProgress'] = ResolversParentTypes['TutorialProgress']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  completedCourses?: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>;
  currentChapterId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  currentCourseId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadedFileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadedFile'] = ResolversParentTypes['UploadedFile']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  extension?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mimetype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  academicTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  affiliatePaypalEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  affiliateReferralCouponCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  affiliateReferralLinkCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  affiliateSince?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  countryISO?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>;
  defaultEmailSender?: Resolver<Maybe<ResolversTypes['EmailSender']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullAvatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gravatarCheckTimestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gravatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hadTrial?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPassword?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasReviewed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isInTutorial?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isLinkedinRecruiter?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastLoggedIn?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  latestConnectedOn?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  linkedinAvatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinConversationsLatestTimestamp?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  linkedinConversationsRunningAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  linkedinPremium?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  linkedinProfileId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinSalesConversationsLatestTimestamp?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  linkedinSalesConversationsRunningAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  linkedinSalesUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinThrottling?: Resolver<Maybe<ResolversTypes['LinkedinThrottlingSetting']>, ParentType, ContextType>;
  linkedinUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lockNewMessagesImport?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  loginCounter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  loginTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mobilePhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nightMode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  occupation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pendingConnectionImportCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pendingLatestConnectedOn?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  pendingLinkedinConversationsLatestTimestamp?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  pendingLinkedinSalesConversationsLatestTimestamp?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reviewEmail?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  scrapeOnConnect?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  selectedWorkGroupId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  showGettingStartedPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  tutorialProgress?: Resolver<Maybe<ResolversTypes['TutorialProgress']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserAdditionalDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAdditionalDetail'] = ResolversParentTypes['UserAdditionalDetail']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  clickedLeaveReview?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  doNotShowCapterraReviewBanner?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  doNotShowJobyBanner?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasReviewed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastJobyExtensionLoggedIn?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  showCapterraBanner?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserLinkedinUrlOwnedBaseTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserLinkedinUrlOwnedBaseTemplate'] = ResolversParentTypes['UserLinkedinUrlOwnedBaseTemplate']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  connectedOn?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  isPending?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  userLinkedinUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VatIdResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['VatIdResponse'] = ResolversParentTypes['VatIdResponse']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errorMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requestDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  valid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  vatNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VoluntExperienceResolvers<ContextType = any, ParentType extends ResolversParentTypes['VoluntExperience'] = ResolversParentTypes['VoluntExperience']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  cause?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  descriptionResponsibility?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainLocation?: Resolver<Maybe<ResolversTypes['MainLocation']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['OrganizationLogoLinkedin']>, ParentType, ContextType>;
  period?: Resolver<ResolversTypes['Period'], ParentType, ContextType>;
  roleTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VolunteerCauseResolvers<ContextType = any, ParentType extends ResolversParentTypes['VolunteerCause'] = ResolversParentTypes['VolunteerCause']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WorkGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkGroup'] = ResolversParentTypes['WorkGroup']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  billingDetail?: Resolver<Maybe<ResolversTypes['BillingDetail']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageLogoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isAgency?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  limboUserIds?: Resolver<Maybe<Array<ResolversTypes['ObjectId']>>, ParentType, ContextType>;
  memberRoles?: Resolver<Maybe<Array<ResolversTypes['MemberRole']>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stripeCustomerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stripePaymentMethodId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WorkInProgressFeedbackResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkInProgressFeedback'] = ResolversParentTypes['WorkInProgressFeedback']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  feature?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importanceRank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  keepMeUpToDate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  suggestionTxt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  workGroupId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  AbstractContact?: AbstractContactResolvers<ContextType>;
  AbstractContactsFilter?: AbstractContactsFilterResolvers<ContextType>;
  Accomplishment?: AccomplishmentResolvers<ContextType>;
  AccomplishmentType?: AccomplishmentTypeResolvers<ContextType>;
  AccountLogo?: AccountLogoResolvers<ContextType>;
  AccountTag?: AccountTagResolvers<ContextType>;
  AccountType?: AccountTypeResolvers<ContextType>;
  AccountWithJobspecs?: AccountWithJobspecsResolvers<ContextType>;
  ActiveFeature?: ActiveFeatureResolvers<ContextType>;
  ActiveFeatureLabel?: ActiveFeatureLabelResolvers<ContextType>;
  ActivePipelineStage?: ActivePipelineStageResolvers<ContextType>;
  ActiveSubscription?: ActiveSubscriptionResolvers<ContextType>;
  AdditionalField?: AdditionalFieldResolvers<ContextType>;
  AffiliateCodeAvailability?: AffiliateCodeAvailabilityResolvers<ContextType>;
  AffiliateLead?: AffiliateLeadResolvers<ContextType>;
  AffiliateLeadTotals?: AffiliateLeadTotalsResolvers<ContextType>;
  AffiliatePayout?: AffiliatePayoutResolvers<ContextType>;
  AffiliateTotalPayout?: AffiliateTotalPayoutResolvers<ContextType>;
  AvailabilityPeriod?: AvailabilityPeriodResolvers<ContextType>;
  AvailabilityRow?: AvailabilityRowResolvers<ContextType>;
  Avatar?: AvatarResolvers<ContextType>;
  AvatarWithValue?: AvatarWithValueResolvers<ContextType>;
  BaseTemplate?: BaseTemplateResolvers<ContextType>;
  BaseTemplateColorIconName?: BaseTemplateColorIconNameResolvers<ContextType>;
  BaseTemplateIconName?: BaseTemplateIconNameResolvers<ContextType>;
  BaseTemplateLevel?: BaseTemplateLevelResolvers<ContextType>;
  BaseTemplateStyleIconName?: BaseTemplateStyleIconNameResolvers<ContextType>;
  Benefit?: BenefitResolvers<ContextType>;
  BenefitTemplate?: BenefitTemplateResolvers<ContextType>;
  BenefitType?: BenefitTypeResolvers<ContextType>;
  BillingDetail?: BillingDetailResolvers<ContextType>;
  CampaignStage?: CampaignStageResolvers<ContextType>;
  CareerOverview?: CareerOverviewResolvers<ContextType>;
  ChatGptPrompt?: ChatGptPromptResolvers<ContextType>;
  ChatGptPublicPrompt?: ChatGptPublicPromptResolvers<ContextType>;
  CheckoutAmount?: CheckoutAmountResolvers<ContextType>;
  CommunicationChannel?: CommunicationChannelResolvers<ContextType>;
  CommunicationChannelType?: CommunicationChannelTypeResolvers<ContextType>;
  CompletedContactDripCampaignStage?: CompletedContactDripCampaignStageResolvers<ContextType>;
  Contact?: ContactResolvers<ContextType>;
  ContactEnrichmentObj?: ContactEnrichmentObjResolvers<ContextType>;
  ContactNote?: ContactNoteResolvers<ContextType>;
  ContactPerson?: ContactPersonResolvers<ContextType>;
  ContactSpecification?: ContactSpecificationResolvers<ContextType>;
  ContactSubtype?: ContactSubtypeResolvers<ContextType>;
  ContactTag?: ContactTagResolvers<ContextType>;
  ContactsAvailabilityFilter?: ContactsAvailabilityFilterResolvers<ContextType>;
  ContactsCareerFilter?: ContactsCareerFilterResolvers<ContextType>;
  ContactsDateRangeFilter?: ContactsDateRangeFilterResolvers<ContextType>;
  ContactsEducationFilter?: ContactsEducationFilterResolvers<ContextType>;
  ContactsFilter?: ContactsFilterResolvers<ContextType>;
  ContactsJobspecFilter?: ContactsJobspecFilterResolvers<ContextType>;
  ContactsSortBy?: ContactsSortByResolvers<ContextType>;
  ContactsTimeRangeFilter?: ContactsTimeRangeFilterResolvers<ContextType>;
  Coord?: CoordResolvers<ContextType>;
  CoordWithRadius?: CoordWithRadiusResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  Coupon?: CouponResolvers<ContextType>;
  CsvColumnAssociation?: CsvColumnAssociationResolvers<ContextType>;
  CsvColumnAssociationGroup?: CsvColumnAssociationGroupResolvers<ContextType>;
  CsvInput?: CsvInputResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  CurrencyTemplate?: CurrencyTemplateResolvers<ContextType>;
  CustomField?: CustomFieldResolvers<ContextType>;
  DateObj?: DateObjResolvers<ContextType>;
  DateTimeISO?: GraphQLScalarType;
  Department?: DepartmentResolvers<ContextType>;
  DripAssignOption?: DripAssignOptionResolvers<ContextType>;
  DripCampaign?: DripCampaignResolvers<ContextType>;
  DripCampaignAndContact?: DripCampaignAndContactResolvers<ContextType>;
  DripCampaignFilter?: DripCampaignFilterResolvers<ContextType>;
  DripConditionOption?: DripConditionOptionResolvers<ContextType>;
  DripEmailOption?: DripEmailOptionResolvers<ContextType>;
  DripLinkedinConnectionOption?: DripLinkedinConnectionOptionResolvers<ContextType>;
  DripLinkedinMessageOption?: DripLinkedinMessageOptionResolvers<ContextType>;
  DripStage?: DripStageResolvers<ContextType>;
  DripStageOption?: DripStageOptionResolvers<ContextType>;
  Duplicate?: DuplicateResolvers<ContextType>;
  DuplicateContainer?: DuplicateContainerResolvers<ContextType>;
  EducExperience?: EducExperienceResolvers<ContextType>;
  EducationalLevel?: EducationalLevelResolvers<ContextType>;
  EmailSender?: EmailSenderResolvers<ContextType>;
  EmailSendersByWorkGroup?: EmailSendersByWorkGroupResolvers<ContextType>;
  EmailTemplate?: EmailTemplateResolvers<ContextType>;
  EmailTemplateType?: EmailTemplateTypeResolvers<ContextType>;
  EmployeeCountRange?: EmployeeCountRangeResolvers<ContextType>;
  EvaluationStage?: EvaluationStageResolvers<ContextType>;
  EventAttachment?: EventAttachmentResolvers<ContextType>;
  EventType?: EventTypeResolvers<ContextType>;
  ExitStageTemplate?: ExitStageTemplateResolvers<ContextType>;
  Field?: FieldResolvers<ContextType>;
  FieldGroup?: FieldGroupResolvers<ContextType>;
  FittingIndex?: FittingIndexResolvers<ContextType>;
  FrequentlyAskedQuestion?: FrequentlyAskedQuestionResolvers<ContextType>;
  FrequentlyAskedQuestionType?: FrequentlyAskedQuestionTypeResolvers<ContextType>;
  FullContactPerson?: FullContactPersonResolvers<ContextType>;
  FullPipelineStage?: FullPipelineStageResolvers<ContextType>;
  Funnel?: FunnelResolvers<ContextType>;
  FunnelBlock?: FunnelBlockResolvers<ContextType>;
  GroupScore?: GroupScoreResolvers<ContextType>;
  HelpdeskMessage?: HelpdeskMessageResolvers<ContextType>;
  IdAdvancedFilter?: IdAdvancedFilterResolvers<ContextType>;
  IdealCandidateFilter?: IdealCandidateFilterResolvers<ContextType>;
  Indicator?: IndicatorResolvers<ContextType>;
  Industry?: IndustryResolvers<ContextType>;
  IndustrySector?: IndustrySectorResolvers<ContextType>;
  InsertionDateFilter?: InsertionDateFilterResolvers<ContextType>;
  JobinAccount?: JobinAccountResolvers<ContextType>;
  JobinAccountNote?: JobinAccountNoteResolvers<ContextType>;
  JobinCompletedJob?: JobinCompletedJobResolvers<ContextType>;
  JobinDailyQuotas?: JobinDailyQuotasResolvers<ContextType>;
  JobinEvent?: JobinEventResolvers<ContextType>;
  JobinFeature?: JobinFeatureResolvers<ContextType>;
  JobinFeatureGroup?: JobinFeatureGroupResolvers<ContextType>;
  JobinFeaturePlan?: JobinFeaturePlanResolvers<ContextType>;
  JobinInvoice?: JobinInvoiceResolvers<ContextType>;
  JobinJob?: JobinJobResolvers<ContextType>;
  JobinJobContact?: JobinJobContactResolvers<ContextType>;
  JobinJobFromFilterResult?: JobinJobFromFilterResultResolvers<ContextType>;
  JobinJobSubscription?: JobinJobSubscriptionResolvers<ContextType>;
  JobinPrice?: JobinPriceResolvers<ContextType>;
  JobinProduct?: JobinProductResolvers<ContextType>;
  JobinQuotaAndLimit?: JobinQuotaAndLimitResolvers<ContextType>;
  JobinSolution?: JobinSolutionResolvers<ContextType>;
  JobinSubFeature?: JobinSubFeatureResolvers<ContextType>;
  JobinSubscription?: JobinSubscriptionResolvers<ContextType>;
  JobseekerAim?: JobseekerAimResolvers<ContextType>;
  JobseekerCriterion?: JobseekerCriterionResolvers<ContextType>;
  JobseekerStatus?: JobseekerStatusResolvers<ContextType>;
  Jobspec?: JobspecResolvers<ContextType>;
  JobspecDescription?: JobspecDescriptionResolvers<ContextType>;
  JobspecDescriptionTemplate?: JobspecDescriptionTemplateResolvers<ContextType>;
  JobspecDescriptionType?: JobspecDescriptionTypeResolvers<ContextType>;
  JobspecInternalDetail?: JobspecInternalDetailResolvers<ContextType>;
  JobspecNote?: JobspecNoteResolvers<ContextType>;
  JobspecStatus?: JobspecStatusResolvers<ContextType>;
  JobspecTag?: JobspecTagResolvers<ContextType>;
  JobspecType?: JobspecTypeResolvers<ContextType>;
  JobyChatGptPrompt?: JobyChatGptPromptResolvers<ContextType>;
  JobyChatGptResponse?: JobyChatGptResponseResolvers<ContextType>;
  Language?: LanguageResolvers<ContextType>;
  LanguageName?: LanguageNameResolvers<ContextType>;
  LatestLinkedinConnectionConnectedOnDate?: LatestLinkedinConnectionConnectedOnDateResolvers<ContextType>;
  LinkedinAccountWithDefaultCountry?: LinkedinAccountWithDefaultCountryResolvers<ContextType>;
  LinkedinAnalytic?: LinkedinAnalyticResolvers<ContextType>;
  LinkedinAnalyticTimeline?: LinkedinAnalyticTimelineResolvers<ContextType>;
  LinkedinAnalyticTimelineRecords?: LinkedinAnalyticTimelineRecordsResolvers<ContextType>;
  LinkedinAnalyticTotals?: LinkedinAnalyticTotalsResolvers<ContextType>;
  LinkedinConversation?: LinkedinConversationResolvers<ContextType>;
  LinkedinDetail?: LinkedinDetailResolvers<ContextType>;
  LinkedinInvitation?: LinkedinInvitationResolvers<ContextType>;
  LinkedinProfile?: LinkedinProfileResolvers<ContextType>;
  LinkedinSalesApiScore?: LinkedinSalesApiScoreResolvers<ContextType>;
  LinkedinSalesConversation?: LinkedinSalesConversationResolvers<ContextType>;
  LinkedinTagsFilter?: LinkedinTagsFilterResolvers<ContextType>;
  LinkedinThrottlingSetting?: LinkedinThrottlingSettingResolvers<ContextType>;
  LinkedinUrlAndId?: LinkedinUrlAndIdResolvers<ContextType>;
  LoginObject?: LoginObjectResolvers<ContextType>;
  MainExperienceStudent?: MainExperienceStudentResolvers<ContextType>;
  MainJobspec?: MainJobspecResolvers<ContextType>;
  MainLocation?: MainLocationResolvers<ContextType>;
  MainLocationFilter?: MainLocationFilterResolvers<ContextType>;
  MainLocationWorldLocationMatch?: MainLocationWorldLocationMatchResolvers<ContextType>;
  MainOrganization?: MainOrganizationResolvers<ContextType>;
  MaritalStatus?: MaritalStatusResolvers<ContextType>;
  MemberRole?: MemberRoleResolvers<ContextType>;
  MemberScore?: MemberScoreResolvers<ContextType>;
  MergeError?: MergeErrorResolvers<ContextType>;
  MessageTemplate?: MessageTemplateResolvers<ContextType>;
  MessagesSentAndReceivedCount?: MessagesSentAndReceivedCountResolvers<ContextType>;
  MicrosoftLinkedAccount?: MicrosoftLinkedAccountResolvers<ContextType>;
  MinShouldMatch?: MinShouldMatchResolvers<ContextType>;
  MoneyAmount?: MoneyAmountResolvers<ContextType>;
  MoneyAmountObj?: MoneyAmountObjResolvers<ContextType>;
  MoneyAmountPercentage?: MoneyAmountPercentageResolvers<ContextType>;
  MoneyAmountPercentageType?: MoneyAmountPercentageTypeResolvers<ContextType>;
  MoneyAmountType?: MoneyAmountTypeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NoticePeriod?: NoticePeriodResolvers<ContextType>;
  OauthSetting?: OauthSettingResolvers<ContextType>;
  ObjectId?: GraphQLScalarType;
  Organization?: OrganizationResolvers<ContextType>;
  OrganizationLogoLinkedin?: OrganizationLogoLinkedinResolvers<ContextType>;
  OrganizationType?: OrganizationTypeResolvers<ContextType>;
  Origin?: OriginResolvers<ContextType>;
  OriginType?: OriginTypeResolvers<ContextType>;
  PDLResponse?: PdlResponseResolvers<ContextType>;
  PasswordStrengthObject?: PasswordStrengthObjectResolvers<ContextType>;
  PaymentItem?: PaymentItemResolvers<ContextType>;
  PayoutItem?: PayoutItemResolvers<ContextType>;
  Period?: PeriodResolvers<ContextType>;
  PersonalDetail?: PersonalDetailResolvers<ContextType>;
  Pipeline?: PipelineResolvers<ContextType>;
  PipelineStagesWithCandidates?: PipelineStagesWithCandidatesResolvers<ContextType>;
  PipelineStagesWithCandidatesCount?: PipelineStagesWithCandidatesCountResolvers<ContextType>;
  PipelineTemplate?: PipelineTemplateResolvers<ContextType>;
  Plan?: PlanResolvers<ContextType>;
  PrivacyLevel?: PrivacyLevelResolvers<ContextType>;
  Privilege?: PrivilegeResolvers<ContextType>;
  ProfExperience?: ProfExperienceResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RecentContactsFilter?: RecentContactsFilterResolvers<ContextType>;
  RecommendedProduct?: RecommendedProductResolvers<ContextType>;
  ReferenceField?: ReferenceFieldResolvers<ContextType>;
  RefreshObject?: RefreshObjectResolvers<ContextType>;
  RegisterObject?: RegisterObjectResolvers<ContextType>;
  RemoteWork?: RemoteWorkResolvers<ContextType>;
  ReplyIdentification?: ReplyIdentificationResolvers<ContextType>;
  ReplyIdentifications?: ReplyIdentificationsResolvers<ContextType>;
  ReplyTag?: ReplyTagResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  RoleTitle?: RoleTitleResolvers<ContextType>;
  Score?: ScoreResolvers<ContextType>;
  SendEmail?: SendEmailResolvers<ContextType>;
  Skill?: SkillResolvers<ContextType>;
  SkillName?: SkillNameResolvers<ContextType>;
  SkillType?: SkillTypeResolvers<ContextType>;
  SmtpSetting?: SmtpSettingResolvers<ContextType>;
  SmtpTransportVerification?: SmtpTransportVerificationResolvers<ContextType>;
  SocialProfile?: SocialProfileResolvers<ContextType>;
  SolutionWithProduct?: SolutionWithProductResolvers<ContextType>;
  Stage?: StageResolvers<ContextType>;
  StageTemplate?: StageTemplateResolvers<ContextType>;
  StageWithCandidates?: StageWithCandidatesResolvers<ContextType>;
  StageWithCandidatesCount?: StageWithCandidatesCountResolvers<ContextType>;
  StrAdvancedFilter?: StrAdvancedFilterResolvers<ContextType>;
  StrCurrentOrPastAdvancedFilter?: StrCurrentOrPastAdvancedFilterResolvers<ContextType>;
  StripeCard?: StripeCardResolvers<ContextType>;
  StripePaymentMethod?: StripePaymentMethodResolvers<ContextType>;
  SubScore?: SubScoreResolvers<ContextType>;
  SubStage?: SubStageResolvers<ContextType>;
  SubStageTemplate?: SubStageTemplateResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  SuccessfulExitStageTemplate?: SuccessfulExitStageTemplateResolvers<ContextType>;
  TimeDelay?: TimeDelayResolvers<ContextType>;
  TimeUnit?: TimeUnitResolvers<ContextType>;
  TotalInvitationsSentAndPending?: TotalInvitationsSentAndPendingResolvers<ContextType>;
  TravelRequired?: TravelRequiredResolvers<ContextType>;
  TutorialProgress?: TutorialProgressResolvers<ContextType>;
  UploadedFile?: UploadedFileResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAdditionalDetail?: UserAdditionalDetailResolvers<ContextType>;
  UserLinkedinUrlOwnedBaseTemplate?: UserLinkedinUrlOwnedBaseTemplateResolvers<ContextType>;
  VatIdResponse?: VatIdResponseResolvers<ContextType>;
  VoluntExperience?: VoluntExperienceResolvers<ContextType>;
  VolunteerCause?: VolunteerCauseResolvers<ContextType>;
  WorkGroup?: WorkGroupResolvers<ContextType>;
  WorkInProgressFeedback?: WorkInProgressFeedbackResolvers<ContextType>;
}>;

