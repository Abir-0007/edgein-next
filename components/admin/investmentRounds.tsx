// in posts.js
import * as React from "react";
import {
  SearchInput,
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  TextField,
  EditButton,
  TextInput,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  DateInput,
  SelectField,
  NumberInput,
  DateField,
  NumberField,
  AutocompleteInput
} from "react-admin";
import { roundChoices, currencyChoices, status } from "../../utils/constants"

const filters = [
  <TextInput key="search" type="text" source="round,status" label="Search Round, Status" resettable alwaysOn />,
  <TextInput key="search1" type="number" source="valuation,amount" label="Valuation, Amount" resettable />,
  <ReferenceInput source="company_id" reference="companies">
        <AutocompleteInput
            optionText={choice =>
                `${choice.name}`
            }
        />
    </ReferenceInput>
];

export const InvestmentRoundsList = () => (
  <List filters={filters}
  sx={{
		'.css-1d00q76-MuiToolbar-root-RaListToolbar-root' : {
      justifyContent: 'flex-start'
		}
	   }}
  >
    <Datagrid>
      <EditButton />
      <TextField source="id" />
      <ReferenceField label="Company" source="company_id" reference="companies">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="round_date" />
      <TextField source="round" />
      {/* <SelectField
        source="round"
        choices={roundChoices}
      /> */}
      <NumberField source="amount" />
      <SelectField
        source="currency"
        choices={currencyChoices}
      />
      <NumberField source="valuation" />
      <TextField source="status" />
    </Datagrid>
  </List>
);

interface InvestmentRoundsTitleProps {
  record?: Record<string, string>;
}

const InvestmentRoundsTitle = ({ record }: InvestmentRoundsTitleProps) => {
  return <span>Round {record ? `"${record.name}"` : ""}</span>;
};

export const InvestmentRoundsEdit = () => (
  <Edit title={<InvestmentRoundsTitle />}>
    <SimpleForm>
      <TextInput
        className="w-full mt-1 px-3 py-1.5 text-lg text-dark-500 rounded-md border border-slate-300 outline-none"
        disabled
        source="id"
      />
      <ReferenceInput label="Company" source="company_id" reference="companies">
        <SelectInput
          className="w-full mt-1 px-3 py-1.5 text-lg text-dark-500 rounded-md border border-slate-300 outline-none"
          optionText="name"
        />
      </ReferenceInput>
      <DateInput className="w-full mt-1 px-3 py-1.5 text-lg text-dark-500 rounded-md border border-slate-300 outline-none" source="round_date" />
      <SelectInput
        className="w-full mt-1 px-3 py-1.5 text-lg text-dark-500 rounded-md border border-slate-300 outline-none"
        source="round"
        choices={roundChoices}
      />
      <NumberInput
        className="w-full mt-1 px-3 py-1.5 text-lg text-dark-500 rounded-md border border-slate-300 outline-none"
        source="amount"
      />
      <SelectInput
        className="w-full mt-1 px-3 py-1.5 text-lg text-dark-500 rounded-md border border-slate-300 outline-none"
        source="currency"
        choices={currencyChoices}
      />
      <NumberInput
        className="w-full mt-1 px-3 py-1.5 text-lg text-dark-500 rounded-md border border-slate-300 outline-none"
        source="valuation"
      />
      <SelectInput
        className="w-full mt-1 px-3 py-1.5 text-lg text-dark-500 rounded-md border border-slate-300 outline-none"
        source="status"
        choices={status}
      />
    </SimpleForm>
  </Edit>
);

export const InvestmentRoundsCreate = () => (
  <Create title="Create a Investment Round">
    <SimpleForm>
      <ReferenceInput label="Company" source="company_id" reference="companies">
        <SelectInput
          className="w-full mt-1 px-3 py-1.5 text-lg text-dark-500 rounded-md border border-slate-300 outline-none"
          optionText="name"
        />
      </ReferenceInput>
      <DateInput
        className="w-full mt-1 px-3 py-1.5 text-lg text-dark-500 rounded-md border border-slate-300 outline-none"
        source="round_date"
      />
      <SelectInput
        className="w-full mt-1 px-3 py-1.5 text-lg text-dark-500 rounded-md border border-slate-300 outline-none"
        source="round"
        choices={roundChoices}
      />
      <NumberInput
        className="w-full mt-1 px-3 py-1.5 text-lg text-dark-500 rounded-md border border-slate-300 outline-none"
        source="amount"
      />
      <SelectInput
        className="w-full mt-1 px-3 py-1.5 text-lg text-dark-500 rounded-md border border-slate-300 outline-none"
        source="currency"
        choices={currencyChoices}
      />
      <NumberInput
        className="w-full mt-1 px-3 py-1.5 text-lg text-dark-500 rounded-md border border-slate-300 outline-none"
        source="valuation"
      />
      <SelectInput
        className="w-full mt-1 px-3 py-1.5 text-lg text-dark-500 rounded-md border border-slate-300 outline-none"
        source="status"
        choices={status}
      />
    </SimpleForm>
  </Create>
);
