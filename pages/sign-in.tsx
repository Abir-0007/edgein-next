import { useState } from 'react';
import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { Toaster } from 'react-hot-toast';
import { Dialog } from '@headlessui/react';
import { ElemButton } from '@/components/elem-button';
import { ElemLogin } from '@/components/sign-in/elem-login';
import { ElemSignUpForm } from '@/components/sign-in/elem-sign-up-form';
import { ElemSignUpProfile } from '@/components/sign-in/elem-sign-up-profile';
import { ElemSignUpConfirm } from '@/components/sign-in/elem-sign-up-confirm';
import { GetSignUpProfileQuery } from '@/graphql/types';
import { ElemSignInHeader } from '@/components/sign-in/elem-sign-in-header';
import { ElemLink } from '@/components/elem-link';
import { ROUTES } from '@/routes';
import { NextSeo } from 'next-seo';

export type SignUpFormState = {
  firstName?: string;
  lastName?: string;
  linkedinUrl?: string;
  password?: string;
  confirmPassword?: string;
};

export type SignUpPayload = {
  email: string;
  password: string;
  name: string;
  linkedinUrl: string;
  personId?: number;
};

export default function SignIn() {
  const router = useRouter();

  const [signUpEmail, setSignUpEmail] = useState('');

  const [signUpStep, setSignUpStep] = useState(0);

  const [signUpFormValues, setSignUpFormValues] = useState<SignUpFormState>({});

  const [profile, setProfile] =
    useState<GetSignUpProfileQuery['people'][number]>();

  const { mutate: signUp, isLoading: isSubmittingSignUp } = useMutation(
    ({ email, password, name, personId, linkedinUrl }: SignUpPayload) =>
      fetch('/api/register/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          name,
          personId,
          linkedinUrl,
          reference_id:
            typeof window !== 'undefined'
              ? localStorage.getItem('inviteCode')
              : router.query.invite,
        }),
      }),
    {
      onSuccess: () => {
        setSignUpStep(3);
      },
    },
  );

  const handleSignUp = (payload: SignUpPayload) => {
    signUp(payload);
  };

  return (
    <>
      <NextSeo title="Sign in" />
      <Dialog as="div" open onClose={() => null} className="relative z-[60]">
        <div className="fixed inset-0 z-[50] min-h-0 flex flex-col items-center justify-center">
          <Dialog.Panel className="w-full h-full flex flex-col justify-center mx-auto bg-white overflow-x-hidden overflow-y-auto overscroll-y-none scrollbar-hide">
            <ElemSignInHeader
              rightComponent={
                signUpStep === 0 ? (
                  <ElemLink href={ROUTES.ROOT}>
                    <ElemButton btn="white">Back</ElemButton>
                  </ElemLink>
                ) : signUpStep === 1 ? (
                  <ElemButton btn="white" onClick={() => setSignUpStep(0)}>
                    Back
                  </ElemButton>
                ) : null
              }
            />

            {signUpStep === 0 && (
              <ElemLogin
                onNext={email => {
                  setSignUpStep(1);
                  setSignUpEmail(email);
                }}
              />
            )}

            {signUpStep === 1 && (
              <ElemSignUpForm
                isSubmittingSignUp={isSubmittingSignUp}
                signUpEmail={signUpEmail}
                onNext={(formValues, person) => {
                  setSignUpStep(2);
                  setSignUpFormValues(formValues);
                  setProfile(person);
                }}
                onSignUp={(formValues, payload) => {
                  setSignUpFormValues(formValues);
                  handleSignUp(payload);
                }}
              />
            )}

            {signUpStep === 2 && (
              <ElemSignUpProfile
                isSubmittingSignUp={isSubmittingSignUp}
                person={profile}
                onNext={personId => {
                  handleSignUp({
                    email: signUpEmail,
                    password: signUpFormValues.password || '',
                    name: `${signUpFormValues.firstName} ${signUpFormValues.lastName}`,
                    linkedinUrl: signUpFormValues.linkedinUrl || '',
                    personId,
                  });
                }}
              />
            )}

            {signUpStep === 3 && (
              <ElemSignUpConfirm
                firstName={signUpFormValues.firstName || ''}
                signUpEmail={signUpEmail}
              />
            )}
          </Dialog.Panel>
          <Toaster />
        </div>
      </Dialog>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
