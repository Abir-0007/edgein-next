import React, { useRef } from 'react';
import { useCreate, useRedirect } from 'react-admin';
import useAdminTransform from '@/hooks/use-admin-transform';
import ElemToolbar from '../elem-toolbar';
import ElemFormBase from '../elem-form-base';
import CompanyForm from './company-form';
import {
  getRootStyle,
  withImageTransformData,
  withoutImageTransformData,
} from './services';

export const CompanyCreate = () => {
  const [create] = useCreate();
  const redirect = useRedirect();

  const formRef = useRef<any>(null);

  const rootStyle = getRootStyle(formRef);

  const { isImageUpdated, logo, transform, onSelect, onDropRejected } =
    useAdminTransform({
      withImageTransformData,
      withoutImageTransformData,
      hasGeopoint: true,
    });

  const handleSaveDraft = (data: any) => {
    data.status = 'draft';
    create('companies', { data });
    redirect('/companies');
  };

  return (
    <ElemFormBase
      action="create"
      title="Create a Company"
      transform={transform}
      rootStyle={rootStyle}>
      <CompanyForm
        action="create"
        formRef={formRef}
        toolbar={<ElemToolbar onSaveDraft={handleSaveDraft} />}
        isImageUpdated={isImageUpdated}
        logo={logo}
        onSelect={onSelect}
        onDropRejected={onDropRejected}
      />
    </ElemFormBase>
  );
};
