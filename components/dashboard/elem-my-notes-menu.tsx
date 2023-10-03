import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { IconSidebarNotes } from '@/components/icons';
import { useUser } from '@/context/user-context';
import { ElemWithSignInModal } from '../elem-with-sign-in-modal';

type Props = {
  className?: string;
};

const ElemMyNotesMenu: FC<Props> = ({ className = '' }) => {
  const router = useRouter();
  const { user } = useUser();

  return (
    <div className={className}>
      <div className="w-full flex items-center justify-between">
        {user ? (
          <Link href="/notes">
            <a
              className={`${
                router.asPath.includes('/notes') ? 'bg-gray-100' : ''
              } flex items-center space-x-3 p-2.5 font-medium text-sm text-gray-900 rounded-md flex-1 transition-all hover:bg-gray-100`}
            >
              <IconSidebarNotes
                className={`w-5 h-5 ${
                  router.asPath.includes('/notes')
                    ? 'text-primary-500'
                    : 'text-gray-900'
                }`}
              />
              <span className="text-sm">Notes</span>
            </a>
          </Link>
        ) : (
          <ElemWithSignInModal
            wrapperClass="w-full"
            text="Sign in to make private or public notes on companies and investors profiles."
            buttonComponent={open => (
              <div
                className={`${
                  open ? 'bg-gray-100' : ''
                } flex items-center space-x-3 p-2.5 font-medium text-sm text-gray-900 rounded-md flex-1 transition-all hover:bg-gray-100`}
              >
                <IconSidebarNotes
                  className={`w-5 h-5 ${
                    open ? 'text-primary-500' : 'text-gray-900'
                  }`}
                />
                <p className="font-medium text-sm text-gray-900">Notes</p>
              </div>
            )}
          />
        )}
        {/* ) : (
                <button
                  onClick={() => {
                    onRedirectToSignIn();
                  }}
                  className="flex items-center grow space-x-2 py-1.5 px-2 focus:outline-none">
                  <span className="font-medium text-sm">Notes</span>
                </button>
              )} */}

        {/* <button
                onClick={() => {}}
                className="flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <IconPlusSmall className="h-6 w-6" title="Create List" />
              </button> */}
      </div>
    </div>
  );
};

export default ElemMyNotesMenu;
