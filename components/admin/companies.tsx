// in posts.js
import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, TextField, EditButton, TextInput, SelectField, ReferenceField, NumberField, ReferenceInput, SelectInput, NumberInput } from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
import uniqid from 'uniqid';
export const companyIcon = BookIcon;

export const CompanyList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="slug" />
      <SelectField source="layer" choices={[
        {
          id: "Layer 0",
          name: "Layer 0 - Native Code"
        },
        {
          id: "Layer 1",
          name: "Layer 1 - Programmable Blockchains / Networks"
        },
        {
          id: "Layer 2",
          name: "Layer 2 - Nodes / Node Providers / Data Platforms"
        },
        {
          id: "Layer 3",
          name: "Layer 3 - API's / API Providers / Systems"
        },
        {
          id: "Layer 4",
          name: "Layer 4 - Decentralized Platforms / Contract / Modeling"
        },
        {
          id: "Layer 5",
          name: "Layer 5 - Applications"
        },
        {
          id: "Layer 6",
          name: "Layer 6 - Interoperable Digital Assets / NFT's"
        },
      ]} />
      <TextField source="layer_detail" />
      <ReferenceField label="Coin" source="coin_id" reference="coins">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="total_employees" />
      <TextField source="github" />
      <TextField source="notes" />
      <TextField source="overview" />
      <TextField source="website" />
      <TextField source="careers_page" />
      <TextField source="company_linkedin" />
      <TextField source="year_founded" />
      <TextField source="investor_amount" />
      <TextField source="total_valuation" />
      <TextField source="white_paper" />
      <TextField source="market_verified" />
      <TextField source="velocity_linkedin" />
      <TextField source="velocity_token" />
      <EditButton />
    </Datagrid>
  </List>
);

interface CompanyTitleProps {
  record?: Record<string, string>;
}
const CompanyTitle = ({ record }: CompanyTitleProps) => {
  return <span>Company {record ? `"${record.name}"` : ''}</span>;
};

export const CompanyEdit = () => (
  <Edit title={<CompanyTitle />}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="slug" />
      <SelectField source="layer" choices={[
        {
          id: "Layer 0",
          name: "Layer 0 - Native Code"
        },
        {
          id: "Layer 1",
          name: "Layer 1 - Programmable Blockchains / Networks"
        },
        {
          id: "Layer 2",
          name: "Layer 2 - Nodes / Node Providers / Data Platforms"
        },
        {
          id: "Layer 3",
          name: "Layer 3 - API's / API Providers / Systems"
        },
        {
          id: "Layer 4",
          name: "Layer 4 - Decentralized Platforms / Contract / Modeling"
        },
        {
          id: "Layer 5",
          name: "Layer 5 - Applications"
        },
        {
          id: "Layer 6",
          name: "Layer 6 - Interoperable Digital Assets / NFT's"
        },
      ]} />
      <TextInput source="layer_detail" />
      <ReferenceInput label="Coin" source="coin_id" reference="coins">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberField source="total_employees" />
      <TextInput source="github" />
      <TextInput source="notes" />
      <TextInput source="overview" />
      <TextInput source="website" />
      <TextInput source="careers_page" />
      <TextInput source="company_linkedin" />
      <TextInput source="year_founded" />
      <NumberInput source="investor_amount" min="1900" max="2099" />
      <NumberInput source="total_valuation" />
      <TextInput source="white_paper" />
      <TextInput source="market_verified" />
      <TextInput source="velocity_linkedin" />
      <TextInput source="velocity_token" />
    </SimpleForm>
  </Edit>
);

export const CompanyCreate = () => (
  <Create title="Create a Company">
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="slug" />
      <SelectField source="layer" choices={[
        {
          id: "Layer 0",
          name: "Layer 0 - Native Code"
        },
        {
          id: "Layer 1",
          name: "Layer 1 - Programmable Blockchains / Networks"
        },
        {
          id: "Layer 2",
          name: "Layer 2 - Nodes / Node Providers / Data Platforms"
        },
        {
          id: "Layer 3",
          name: "Layer 3 - API's / API Providers / Systems"
        },
        {
          id: "Layer 4",
          name: "Layer 4 - Decentralized Platforms / Contract / Modeling"
        },
        {
          id: "Layer 5",
          name: "Layer 5 - Applications"
        },
        {
          id: "Layer 6",
          name: "Layer 6 - Interoperable Digital Assets / NFT's"
        },
      ]} />
      <TextInput source="layer_detail" />
      <ReferenceInput label="Coin" source="coin_id" reference="coins">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="total_employees" />
      <TextInput source="github" />
      <TextInput source="notes" />
      <TextInput source="overview" />
      <TextInput source="website" />
      <TextInput source="careers_page" />
      <TextInput source="company_linkedin" />
      <NumberInput source="year_founded" min="1900" max="2099" />
      <NumberInput source="investor_amount" />
      <TextInput source="total_valuation" />
      <TextInput source="white_paper" />
      <TextInput source="market_verified" />
      <TextInput source="velocity_linkedin" />
      <TextInput source="velocity_token" />
      <TextInput source="external_id" type="hidden" value={uniqid()} />
    </SimpleForm>
  </Create>
);