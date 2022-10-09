// Initialize the dataProvider before rendering react-admin resources.
import React, { useState, useEffect } from "react";
import buildHasuraProvider, { BuildFields, buildFields } from "ra-data-hasura";
import { Admin, DataProvider, Resource, AuthProvider } from "react-admin";

import {
  CompanyCreate,
  CompanyEdit,
  CompanyList,
} from "../../components/admin/company";

import { ApolloClient, DocumentNode, gql, InMemoryCache } from "@apollo/client";
import {
  InvestmentRoundsCreate,
  InvestmentRoundsEdit,
  InvestmentRoundsList,
} from "../../components/admin/investmentRounds";
import {
  InvestmentsList,
  InvestmentsEdit,
  InvestmentsCreate,
} from "../../components/admin/investment";
import {
  InvestorsList,
  InvestorsEdit,
  InvestorCreate,
} from "../../components/admin/investors";
import {
  PeopleList,
  PeopleEdit,
  PeopleCreate,
} from "../../components/admin/people";
import {
  TeamMembersList,
  TeamMembersEdit,
  TeamMembersCreate,
} from "../../components/admin/teamMembers";
import {
  VcFirmCreate,
  VcFirmEdit,
  VcFirmList,
} from "../../components/admin/vcFirms";
import {
  BlockchainsList,
  BlockchainsEdit,
  BlockchainsCreate,
} from "../../components/admin/blockchains";
import {
  CoinsList,
  CoinsEdit,
  CoinsCreate,
} from "../../components/admin/coins";
import {
  AllowedEmailsList,
  AllowedEmailsEdit,
  AllowedEmailsCreate,
} from "../../components/admin/allowedEmails";
import { UsersList, UsersEdit } from "../../components/admin/users";
import { useAuth } from "../../hooks/useAuth";

const MyLogin = () => {
  useEffect(() => {
    window.location.href = "/";
  }, []);

  return <div />;
};

type NullableInputs = {
  [key: string]: Array<string>
};

const nullableInputs: NullableInputs = {
  investments: ['person_id', 'vc_firm_id', 'round_id']
};

const extractFieldsFromQuery = (queryAst: any) => {
  return queryAst.definitions[0].selectionSet.selections;
};

// Define the additional fields that we want.
const EXTENDED_GET_LIST_INVESTMENT_ROUNDS = gql`
  {
    company {
      name
    }
  }
`;

const customBuildFields: BuildFields = (type, fetchType) => {
  const resourceName = type.name;

  // First take the default fields (all, but no related or nested).
  const defaultFields = buildFields(type, fetchType);

  if (resourceName === 'investment_rounds') {
    const relatedEntities = extractFieldsFromQuery(EXTENDED_GET_LIST_INVESTMENT_ROUNDS);
    defaultFields.push(...relatedEntities);
  }

  // Extend other queries for other resources/fetchTypes here...

  return defaultFields;
};

const AdminApp = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(
    null
  );
  const { user } = useAuth();

  const authProvider = {
    // authentication
    login: () => Promise.resolve(),
    checkError: () => Promise.resolve(),
    checkAuth: () => {
      if (user) {
        if (user.role === "user") {
          return Promise.reject(new Error("User is not an admin"));
        } else {
          return Promise.resolve();
        }
      }
      return Promise.reject();
    },
    logout: () => Promise.resolve(),
    getIdentity: () => Promise.resolve().then((res) => res),
    // authorization
    getPermissions: () => Promise.resolve(),
  } as AuthProvider;

  const nullInputTransform = (type: string, obj: any): any => {
    const nullableInputsForType = nullableInputs[type];
    if (nullableInputsForType && obj.data) {
      nullableInputsForType.forEach(input => {
        if (obj.data[input] == "") {
          obj.data[input] = null;
        }
      });
    }
    return obj;
  };

	useEffect(() => {
		const buildDataProvider = async () => {
			const myClientWithAuth = new ApolloClient({
				uri: "/api/graphql",
				cache: new InMemoryCache(),
			});
			const dataProvider = await buildHasuraProvider({
				client: myClientWithAuth,
			}, {buildFields: customBuildFields});
			setDataProvider(() => dataProvider);
		};
		buildDataProvider();
	}, []);

  if (!dataProvider || !user) return <p>Loading...</p>;

  return (
    <Admin
      loginPage={MyLogin}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource
        name="blockchains"
        list={BlockchainsList}
        edit={BlockchainsEdit}
        create={BlockchainsCreate}
      />
      <Resource
        name="coins"
        list={CoinsList}
        edit={CoinsEdit}
        create={CoinsCreate}
      />
      <Resource
        name="companies"
        list={CompanyList}
        edit={CompanyEdit}
        create={CompanyCreate}
      />
      <Resource
        name="people"
        list={PeopleList}
        edit={PeopleEdit}
        create={PeopleCreate}
      />
      <Resource
        name="vc_firms"
        list={VcFirmList}
        edit={VcFirmEdit}
        create={VcFirmCreate}
      />
      <Resource
        name="investment_rounds"
        list={InvestmentRoundsList}
        edit={InvestmentRoundsEdit}
        create={InvestmentRoundsCreate}
      />
      <Resource
        name="investments"
        list={InvestmentsList}
        edit={InvestmentsEdit}
        create={InvestmentsCreate}
      />
      <Resource
        name="team_members"
        list={TeamMembersList}
        edit={TeamMembersEdit}
        create={TeamMembersCreate}
      />
      <Resource
        name="investors"
        list={InvestorsList}
        edit={InvestorsEdit}
        create={InvestorCreate}
      />
      <Resource
        name="allowed_emails"
        list={AllowedEmailsList}
        edit={AllowedEmailsEdit}
        create={AllowedEmailsCreate}
      />
      <Resource name="users" list={UsersList} edit={UsersEdit} />

      {/* <Resource
        name="actions"
        list={ActionsList}
      /> */}
    </Admin>
  );
};

export async function getStaticProps() {
  return {
    props: { noLayout: true },
  };
}

export default AdminApp;
