import React, { useState, useRef, useEffect } from "react";
import { useGetOne, required } from "react-admin";
import { useParams } from "react-router-dom";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import useAdminTransform from "@/hooks/useAdminTransform";
import ElemMutationBase from "../ElemMutationBase";
import ElemTitle from "../ElemTitle";
import VcFirmForm from "./VcFirmForm";
import {
  getMutationRootStyle,
  withImageTransformData,
  withoutImageTransformData,
} from "./services";

export const VcFirmEdit = () => {
  const formRef = useRef<any>(null);
  const { height } = useWindowDimensions();
  const [formHeight, setFormHeight] = useState(0);

  const { id } = useParams();
  const { data: currentData } = useGetOne("vc_firms", { id });

  useEffect(() => {
    if (formRef?.current?.clientHeight + 100 >= height)
      setFormHeight(formRef?.current?.clientHeight + 100);
  }, [formRef?.current?.clientHeight, height]);

  const rootStyle = getMutationRootStyle(height, formHeight, formRef);

  const { transform } = useAdminTransform({
    withImageTransformData,
    withoutImageTransformData,
  });

  const handleCheckScreenHeight = () => {
    setFormHeight(formRef?.current?.clientHeight + 100);
  };

  return (
    <ElemMutationBase
      title={<ElemTitle category="Vc Firm" />}
      action="edit"
      transform={transform}
      rootStyle={rootStyle}
    >
      <VcFirmForm
        action="edit"
        slugValidate={required()}
        currentData={currentData}
        onCheckScreenHeight={handleCheckScreenHeight}
      />
    </ElemMutationBase>
  );
};
