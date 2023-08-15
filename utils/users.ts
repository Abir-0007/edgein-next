import { mutate, query } from '@/graphql/hasuraAdmin';
import {
  GetAllowedEmailByEmailOrDomainDocument,
  GetAllowedEmailByEmailOrDomainQuery,
  GetDisabledEmailByEmailOrDomainDocument,
  GetDisabledEmailByEmailOrDomainQuery,
  GetPersonDocument,
  GetUserByAdditionalEmailDocument,
  GetUserByAdditionalEmailQuery,
  GetUserByEmailDocument,
  GetUserByEmailQuery,
  GetUserByIdDocument,
  GetUserByIdQuery,
  GetUserByReferenceIdDocument,
  GetUserByReferenceIdQuery,
  UpdateUserAdditionalEmailsDocument,
  UpdateUserAdditionalEmailsMutation,
  UpdateUserAuth0LinkedInIdDocument,
  UpdateUserAuth0LinkedInIdMutation,
  UpdateUserAuth0UserPassIdDocument,
  UpdateUserAuth0UserPassIdMutation,
  UpdateUserBillingOrgDocument,
  UpdateUserBillingOrgMutation,
  UpdateUserEmailVerifiedStatusDocument,
  UpdateUserEmailVerifiedStatusMutation,
  UpsertUsersDocument,
  UpsertUsersMutation,
  UpsertWaitlistEmailDocument,
  UpsertWaitlistEmailMutation,
  GetPersonQuery,
  GetUserByPersonIdQuery,
  GetUserByPersonIdDocument,
} from '@/graphql/types';
import { Entitlements, UserToken } from '@/models/user';
import { createHmac } from 'crypto';
import { clearLocalStorage } from './helpers';

async function queryForAllowedEmailCheck(email: string, domain: string) {
  const data = await query<GetAllowedEmailByEmailOrDomainQuery>({
    query: GetAllowedEmailByEmailOrDomainDocument,
    variables: { email, domain },
  });
  return data.data.allowed_emails[0];
}

async function queryForDisabledEmailCheck(email: string, domain: string) {
  const data = await query<GetDisabledEmailByEmailOrDomainQuery>({
    query: GetDisabledEmailByEmailOrDomainDocument,
    variables: { email, domain },
  });
  return data.data.disabled_emails[0] as { id: number; email: string };
}

async function mutateForWaitlistEmail(email: string) {
  await mutate<UpsertWaitlistEmailMutation>({
    mutation: UpsertWaitlistEmailDocument,
    variables: { email },
  });
}

async function findOneUserByEmail(email: string) {
  const data = await query<GetUserByEmailQuery>({
    query: GetUserByEmailDocument,
    variables: { email },
  });
  return data.data.users[0];
}

async function findOneUserById(id: number) {
  const data = await query<GetUserByIdQuery>({
    query: GetUserByIdDocument,
    variables: { id },
  });
  return data.data.users[0];
}

async function updateBillingOrg(userId: number, billingOrgId: number) {
  try {
    const data = await mutate<UpdateUserBillingOrgMutation>({
      mutation: UpdateUserBillingOrgDocument,
      variables: {
        userId,
        billingOrgId,
      },
    });

    return data.data.update_users_by_pk;
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
}

async function upsertUser(userData: any) {
  try {
    const data = await mutate<UpsertUsersMutation>({
      mutation: UpsertUsersDocument,
      variables: {
        external_id: userData._id,
        email: userData.email,
        display_name: userData.name,
        role: 'user',
        auth0_linkedin_id: userData.auth0_linkedin_id
          ? userData.auth0_linkedin_id
          : '',
        auth0_user_pass_id: userData.auth0_user_pass_id
          ? userData.auth0_user_pass_id
          : '',
        reference_user_id: userData.reference_user_id,
      },
    });

    return data.data.insert_users?.returning[0];
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
}

async function updateEmailVerifiedStatus(
  email: string,
  is_auth0_verified: boolean,
) {
  const data = await mutate<UpdateUserEmailVerifiedStatusMutation>({
    mutation: UpdateUserEmailVerifiedStatusDocument,
    variables: { email, is_auth0_verified },
  });
  return data.data.update_users?.returning[0];
}

async function updateAuth0LinkedInId(email: string, auth0_linkedin_id: string) {
  const data = await mutate<UpdateUserAuth0LinkedInIdMutation>({
    mutation: UpdateUserAuth0LinkedInIdDocument,
    variables: { email, auth0_linkedin_id },
  });
  return data.data.update_users?.returning[0];
}

async function updateAuth0UserPassId(
  email: string,
  auth0_user_pass_id: string,
) {
  const data = await mutate<UpdateUserAuth0UserPassIdMutation>({
    mutation: UpdateUserAuth0UserPassIdDocument,
    variables: { email, auth0_user_pass_id },
  });
  return data.data.update_users?.returning[0];
}

async function findOneUserByReferenceId(reference_id: string) {
  const data = await query<GetUserByReferenceIdQuery>({
    query: GetUserByReferenceIdDocument,
    variables: { reference_id },
  });
  return data.data.users[0];
}

async function updateAllowedEmailArray(
  id: number,
  additional_emails: string[],
) {
  const data = await mutate<UpdateUserAdditionalEmailsMutation>({
    mutation: UpdateUserAdditionalEmailsDocument,
    variables: { id, additional_emails },
  });
  return data.data.update_users?.returning[0];
}

async function findOneUserByAdditionalEmail(email: string) {
  const data = await query<GetUserByAdditionalEmailQuery>({
    query: GetUserByAdditionalEmailDocument,
    variables: { email },
  });
  return data.data.users[0];
}

async function findOnePeopleBySlug(slug: string) {
  const data = await query<GetPersonQuery>({
    query: GetPersonDocument,
    variables: { slug },
  });
  return data.data.people[0];
}

async function findOneUserByPersonId(person_id: number) {
  const data = await query<GetUserByPersonIdQuery>({
    query: GetUserByPersonIdDocument,
    variables: { person_id },
  });
  return data.data.users[0];
}

const createToken = (userData: any, isFirstLogin: boolean): UserToken => {
  const hmac = createHmac('sha256', 'vxushJThllW-WS_1Gdi08u4Ged9J4FKMXGn9vqiF');
  hmac.update(String(userData.id));

  const entitlements: Entitlements =
    userData.billing_org_id || userData.credits > 0
      ? {
          viewEmails: true,
          groupsCount: 5000,
        }
      : {
          viewEmails: false,
          listsCount: 5,
          groupsCount: 3,
        };

  return {
    id: userData.id,
    intercomUserHash: hmac.digest('hex'),
    email: userData.email,
    role: userData.role,
    isFirstLogin,
    credits: userData.credits,
    billing_org_id: userData.billing_org_id,
    billing_org: userData.billing_org,
    display_name: userData.display_name,
    auth0_linkedin_id: userData.auth0_linkedin_id,
    auth0_user_pass_id: userData.auth0_user_pass_id,
    is_auth0_verified: userData.is_auth0_verified,
    person: userData.person,
    profileName: userData.person?.name,
    profilePicture: userData.person?.picture,
    reference_id: userData.reference_id,
    reference_user_id: userData.reference_user_id,
    additional_emails: userData.additional_emails,
    active: userData.active,
    onboarding_information: userData.onboarding_information,
    showDraftData: userData.showDraftData,
    feature_flags: userData.feature_flags,
    entitlements,
  };
};

const findUserByPk = async (user_id: number) => {
  const data = await query({
    query: `
    query FindUserByPk($user_id: Int!) {
      users_by_pk(id: $user_id) {
        id
        person {
          id
        }
      }
    }
      `,
    variables: { user_id },
  });
  return data.data.users_by_pk;
};

const logout = async () => {
  clearLocalStorage();
  const authRequest = await fetch('/api/logout/', {
    method: 'POST',
  }).then(res => res.json());
  if (authRequest.success) {
    // We successfully logged in, our API
    // set authorization cookies and now we
    // can redirect to the dashboard!
    location.href = authRequest.logoutLink;
  } else {
    /* handle errors */
  }
};

const UserService = {
  queryForDisabledEmailCheck,
  queryForAllowedEmailCheck,
  mutateForWaitlistEmail,
  findOneUserByEmail,
  findOneUserById,
  updateBillingOrg,
  upsertUser,
  updateEmailVerifiedStatus,
  updateAuth0LinkedInId,
  updateAuth0UserPassId,
  findOneUserByReferenceId,
  updateAllowedEmailArray,
  findOneUserByAdditionalEmail,
  findOnePeopleBySlug,
  findOneUserByPersonId,
  createToken,
  findUserByPk,
  logout,
};
export default UserService;
