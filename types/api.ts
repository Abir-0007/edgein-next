export type InviteToEdgeInPayload = {
  email: string;
  personId?: number;
};

export type InviteToEdgeInMailParams = {
  email: string;
  senderName: string;
  senderEmail: string;
  signUpUrl: string;
};

export type InviteToEdgeInResponse = {
  status: number;
  message: string;
  email: string;
};

export type InviteGroupMemberPayloadEmailResource = {
  isExistedUser: boolean;
  email: string;
  recipientName: string;
};

export type InviteGroupMemberMailParams = {
  email: string;
  senderName: string;
  recipientName?: string;
  groupName: string;
  groupUrl?: string;
  signUpUrl?: string;
  isExistedUser?: boolean;
};

export type ConfirmAdditionalMailParams = {
  email: string;
  username: string;
  verifyUrl: string;
};

export type ResourceVerificationMailParams = {
  verifyUrl: string;
  companyName: string;
  email: string;
  username: string;
};
