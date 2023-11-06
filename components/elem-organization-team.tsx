import React, { useState } from 'react';
import { PlaceholderPerson } from '@/components/placeholders';
import { ElemPersonCard } from '@/components/elem-person-card';
import { ElemFilterTags } from '@/components/filters/elem-filter-tags';
import { Pagination } from '@/components/pagination';
import { ElemBulkSavePeople } from './elem-bulk-save-people';
import { ElemButton } from './elem-button';
import { uniq, compact, sortBy } from 'lodash';
import { DeepPartial } from '@/types/common';
import { useIntercom } from 'react-use-intercom';
import { ROUTES } from '@/routes';
import { useStateParams } from '@/hooks/use-state-params';
import { functionChoicesTM } from '@/utils/constants';

import {
  Order_By,
  useGetTeamMembersQuery,
  Team_Members,
  Team_Members_Bool_Exp,
  Team_Members_Order_By,
  useGetInvestorsQuery,
  Investors,
  Investors_Bool_Exp,
  Investors_Order_By,
} from '@/graphql/types';

type Props = {
  className?: string;
  heading?: string;
  resourceName?: string;
  resourceType: 'companies' | 'investors';
  resourceId?: number;
  showTags?: boolean;
  allowToSaveTeam?: boolean;
};

export const ElemOrganizationTeam: React.FC<Props> = ({
  className,
  heading,
  resourceName,
  resourceType,
  resourceId,
  showTags = true,
  allowToSaveTeam = true,
}) => {
  const { showNewMessages } = useIntercom();

  const [page, setPage] = useStateParams<number>(
    0,
    'page',
    pageIndex => pageIndex + 1 + '',
    pageIndex => Number(pageIndex) - 1,
  );

  const [selectedTag, setSelectedTag] = useState<string | null>('All Members');

  const limit = 50;
  const offset = limit * page;

  const defaultCompanyFilters: DeepPartial<Team_Members_Bool_Exp>[] = [
    { company_id: { _eq: resourceId } },
  ];
  const companyFilters: DeepPartial<Team_Members_Bool_Exp> = {
    _and: defaultCompanyFilters,
  };

  const defaultInvestorFilters: DeepPartial<Investors_Bool_Exp>[] = [
    { vc_firm_id: { _eq: resourceId } },
  ];
  const investorFilters: DeepPartial<Investors_Bool_Exp> = {
    _and: defaultInvestorFilters,
  };

  const {
    data: teamData,
    error,
    isLoading,
  } = useGetTeamMembersQuery(
    {
      offset: offset,
      limit: limit,
      where: companyFilters as Team_Members_Bool_Exp,
      orderBy: [
        {
          end_date: Order_By.DescNullsFirst,
        } as Team_Members_Order_By,
        { founder: Order_By.DescNullsLast } as Team_Members_Order_By,
      ],
    },
    { refetchOnWindowFocus: false },
  );

  const {
    data: investorsData,
    error: errorSecondary,
    isLoading: isLoadingSecondary,
  } = useGetInvestorsQuery(
    {
      offset: offset,
      limit: limit,
      where: investorFilters as Investors_Bool_Exp,
      orderBy: [
        {
          end_date: Order_By.DescNullsFirst,
        } as Investors_Order_By,
        { founder: Order_By.DescNullsLast } as Investors_Order_By,
      ],
    },
    { refetchOnWindowFocus: false },
  );

  // console.log(investorsData?.investors_aggregate);

  const members =
    resourceType === 'companies'
      ? teamData?.team_members
      : investorsData?.investors;
  const members_aggregate =
    resourceType === 'companies'
      ? teamData?.team_members_aggregate?.aggregate?.count || 0
      : 100; //investorsData?.investors_aggregate?.aggregate?.count || 0;

  const filteredMembers =
    selectedTag === 'All Members'
      ? members
      : (members?.filter((p: any) => p.function === selectedTag) as any);

  if (resourceType === 'companies' && selectedTag !== 'All Members') {
    defaultCompanyFilters.push({
      _and: [{ function: { _eq: selectedTag } }],
    });
  }
  if (resourceType === 'investors' && selectedTag !== 'All Members') {
    defaultInvestorFilters.push({
      _and: [{ function: { _eq: selectedTag } }],
    });
  }

  //All member function choices
  const allMemberTags = [
    'All Members',
    ...functionChoicesTM.map(option => {
      return option.name;
    }),
  ];

  const currentQueryMemberTags = compact(
    uniq([
      'All Members',
      ...sortBy(members?.map((members: any) => members.function)),
    ]),
  );

  const getSelectableMemberTags = allMemberTags.filter(name =>
    currentQueryMemberTags.includes(name),
  );

  const memberIds = members
    ? (members.map(item => item.person?.id) as number[])
    : [];

  return (
    <section className={`rounded-lg border border-gray-300 ${className}`}>
      {heading && (
        <div className="flex items-center justify-between px-4 pt-2">
          <h2 className="text-lg font-medium">{heading}</h2>
        </div>
      )}

      <div className="px-4 py-4">
        {isLoading || isLoadingSecondary ? (
          <div className="flex flex-col gap-5 mt-4 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }, (_, i) => (
              <PlaceholderPerson key={i} />
            ))}
          </div>
        ) : members?.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <div className="text-gray-500">
              There is no team data on this organization.
            </div>
            <ElemButton
              className="mt-2"
              onClick={() =>
                showNewMessages(
                  `Hi EdgeIn, I'd like to request team data on ${resourceName}`,
                )
              }
              btn="default"
            >
              Request data or contribute
            </ElemButton>
          </div>
        ) : (
          <>
            <div className="lg:flex items-start justify-between">
              {showTags && (
                <div>
                  <ElemFilterTags
                    onClick={tag => setSelectedTag(tag)}
                    selectedTag={selectedTag}
                    className="mt-2"
                    tags={getSelectableMemberTags}
                  />
                </div>
              )}
              {allowToSaveTeam && memberIds.length > 0 && (
                <div className="mt-2 lg:mt-0 shrink-0">
                  <ElemBulkSavePeople
                    text="Save team to list"
                    personIds={memberIds}
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col gap-5 mt-4 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {filteredMembers?.map((teamMember: Team_Members | Investors) => {
                return (
                  <React.Fragment key={teamMember.id}>
                    {teamMember.person && (
                      <ElemPersonCard
                        key={teamMember.person.id}
                        href={`${ROUTES.PEOPLE}/${teamMember.person.slug}`}
                        photo={teamMember.person.picture}
                        heading={teamMember.person.name}
                        founder={teamMember.founder}
                        text={teamMember.function}
                        linkedin={teamMember.person.linkedin}
                        personal_email={teamMember.person.personal_email}
                        work_email={teamMember.person.work_email}
                        end_date={teamMember.end_date}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
            <Pagination
              shownItems={members?.length}
              totalItems={members_aggregate}
              page={page}
              itemsPerPage={limit}
              onClickPrev={() => setPage(page - 1)}
              onClickNext={() => setPage(page + 1)}
              onClickToPage={selectedPage => setPage(selectedPage)}
            />
          </>
        )}
      </div>
    </section>
  );
};
