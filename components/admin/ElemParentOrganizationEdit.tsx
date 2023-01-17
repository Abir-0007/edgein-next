import React, { FC } from "react";
import {
  getParentSubOrganizations,
  handleChangeParentOrganization,
} from "@/utils/resourceLink";
import {
  SimpleForm,
  ReferenceInput,
  AutocompleteInput,
  ReferenceArrayInput,
  AutocompleteArrayInput,
  useRedirect,
} from "react-admin";

type Props = {
  isLoading: boolean;
  type: "companies" | "vc_firms";
  currentData: any;
  refetch: () => void;
};

const ElemParentOrganizationEdit: FC<Props> = ({
  isLoading,
  type,
  currentData,
  refetch,
}) => {
  const redirect = useRedirect();

  const inputClassName =
    " px-3 py-1.5 text-lg text-dark-500 rounded-md border border-slate-300 outline-none";

  if (isLoading) {
    return null;
  }

  const defaultValues = {
    ...getParentSubOrganizations(currentData),
  };

  const handleSubmit = async (values: any) => {
    await handleChangeParentOrganization(
      currentData.id,
      defaultValues,
      values,
      type
    );
    refetch();
    redirect(`/${type}`);
  };

  return (
    <div className="mt-6 bg-white shadow-md rounded-md">
      <SimpleForm defaultValues={defaultValues} onSubmit={handleSubmit}>
        <h4 className="text-primary-600 uppercase text-sm font-medium">
          Parent organizations
        </h4>
        <div className="grid grid-cols-2 gap-x-4 w-full">
          <ReferenceArrayInput
            label="Child companies"
            source="child_companies"
            reference="companies"
          >
            <AutocompleteArrayInput
              className={inputClassName}
              style={{ padding: 0, border: "none" }}
              optionText="name"
              filterToQuery={(search) => ({ name: search })}
              disabled
            />
          </ReferenceArrayInput>
          <ReferenceArrayInput
            label="Child VC firms"
            source="child_vc_firms"
            reference="vc_firms"
          >
            <AutocompleteArrayInput
              className={inputClassName}
              style={{ padding: 0, border: "none" }}
              optionText="name"
              filterToQuery={(search) => ({ name: search })}
              disabled
            />
          </ReferenceArrayInput>
          <ReferenceInput
            label="Parent company"
            source="parent_company"
            reference="companies"
          >
            <AutocompleteInput
              className={inputClassName}
              style={{ padding: 0, border: "none" }}
              optionText="name"
              filterToQuery={(search) => ({ name: search })}
            />
          </ReferenceInput>
          <ReferenceInput
            label="Parent VC firm"
            source="parent_vc_firm"
            reference="vc_firms"
          >
            <AutocompleteInput
              className={inputClassName}
              style={{ padding: 0, border: "none" }}
              optionText="name"
              filterToQuery={(search) => ({ name: search })}
            />
          </ReferenceInput>
        </div>
      </SimpleForm>
    </div>
  );
};

export default ElemParentOrganizationEdit;
