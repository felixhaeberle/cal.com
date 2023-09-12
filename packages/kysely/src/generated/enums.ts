export const SchedulingType = {
  ROUND_ROBIN: "roundRobin",
  COLLECTIVE: "collective",
  MANAGED: "managed",
} as const;
export type SchedulingType = (typeof SchedulingType)[keyof typeof SchedulingType];
export const PeriodType = {
  UNLIMITED: "unlimited",
  ROLLING: "rolling",
  RANGE: "range",
} as const;
export type PeriodType = (typeof PeriodType)[keyof typeof PeriodType];
export const IdentityProvider = {
  CAL: "CAL",
  GOOGLE: "GOOGLE",
  SAML: "SAML",
} as const;
export type IdentityProvider = (typeof IdentityProvider)[keyof typeof IdentityProvider];
export const UserPermissionRole = {
  USER: "USER",
  ADMIN: "ADMIN",
} as const;
export type UserPermissionRole = (typeof UserPermissionRole)[keyof typeof UserPermissionRole];
export const MembershipRole = {
  MEMBER: "MEMBER",
  ADMIN: "ADMIN",
  OWNER: "OWNER",
} as const;
export type MembershipRole = (typeof MembershipRole)[keyof typeof MembershipRole];
export const BookingStatus = {
  CANCELLED: "cancelled",
  ACCEPTED: "accepted",
  REJECTED: "rejected",
  PENDING: "pending",
} as const;
export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus];
export const EventTypeCustomInputType = {
  TEXT: "text",
  TEXTLONG: "textLong",
  NUMBER: "number",
  BOOL: "bool",
  RADIO: "radio",
  PHONE: "phone",
} as const;
export type EventTypeCustomInputType =
  (typeof EventTypeCustomInputType)[keyof typeof EventTypeCustomInputType];
export const ReminderType = {
  PENDING_BOOKING_CONFIRMATION: "PENDING_BOOKING_CONFIRMATION",
} as const;
export type ReminderType = (typeof ReminderType)[keyof typeof ReminderType];
export const PaymentOption = {
  ON_BOOKING: "ON_BOOKING",
  HOLD: "HOLD",
} as const;
export type PaymentOption = (typeof PaymentOption)[keyof typeof PaymentOption];
export const WebhookTriggerEvents = {
  BOOKING_CREATED: "BOOKING_CREATED",
  BOOKING_PAID: "BOOKING_PAID",
  BOOKING_RESCHEDULED: "BOOKING_RESCHEDULED",
  BOOKING_REQUESTED: "BOOKING_REQUESTED",
  BOOKING_CANCELLED: "BOOKING_CANCELLED",
  BOOKING_REJECTED: "BOOKING_REJECTED",
  FORM_SUBMITTED: "FORM_SUBMITTED",
  MEETING_ENDED: "MEETING_ENDED",
  RECORDING_READY: "RECORDING_READY",
} as const;
export type WebhookTriggerEvents = (typeof WebhookTriggerEvents)[keyof typeof WebhookTriggerEvents];
export const AppCategories = {
  calendar: "calendar",
  messaging: "messaging",
  other: "other",
  payment: "payment",
  video: "video",
  web3: "web3",
  automation: "automation",
  analytics: "analytics",
  conferencing: "conferencing",
  crm: "crm",
} as const;
export type AppCategories = (typeof AppCategories)[keyof typeof AppCategories];
export const WorkflowTriggerEvents = {
  BEFORE_EVENT: "BEFORE_EVENT",
  EVENT_CANCELLED: "EVENT_CANCELLED",
  NEW_EVENT: "NEW_EVENT",
  AFTER_EVENT: "AFTER_EVENT",
  RESCHEDULE_EVENT: "RESCHEDULE_EVENT",
} as const;
export type WorkflowTriggerEvents = (typeof WorkflowTriggerEvents)[keyof typeof WorkflowTriggerEvents];
export const WorkflowActions = {
  EMAIL_HOST: "EMAIL_HOST",
  EMAIL_ATTENDEE: "EMAIL_ATTENDEE",
  SMS_ATTENDEE: "SMS_ATTENDEE",
  SMS_NUMBER: "SMS_NUMBER",
  EMAIL_ADDRESS: "EMAIL_ADDRESS",
  WHATSAPP_ATTENDEE: "WHATSAPP_ATTENDEE",
  WHATSAPP_NUMBER: "WHATSAPP_NUMBER",
} as const;
export type WorkflowActions = (typeof WorkflowActions)[keyof typeof WorkflowActions];
export const TimeUnit = {
  DAY: "day",
  HOUR: "hour",
  MINUTE: "minute",
} as const;
export type TimeUnit = (typeof TimeUnit)[keyof typeof TimeUnit];
export const WorkflowTemplates = {
  REMINDER: "REMINDER",
  CUSTOM: "CUSTOM",
  CANCELLED: "CANCELLED",
  RESCHEDULED: "RESCHEDULED",
  COMPLETED: "COMPLETED",
} as const;
export type WorkflowTemplates = (typeof WorkflowTemplates)[keyof typeof WorkflowTemplates];
export const WorkflowMethods = {
  EMAIL: "EMAIL",
  SMS: "SMS",
  WHATSAPP: "WHATSAPP",
} as const;
export type WorkflowMethods = (typeof WorkflowMethods)[keyof typeof WorkflowMethods];
export const FeatureType = {
  RELEASE: "RELEASE",
  EXPERIMENT: "EXPERIMENT",
  OPERATIONAL: "OPERATIONAL",
  KILL_SWITCH: "KILL_SWITCH",
  PERMISSION: "PERMISSION",
} as const;
export type FeatureType = (typeof FeatureType)[keyof typeof FeatureType];
