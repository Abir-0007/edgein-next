import React from "react";
import { useCreate, useRedirect } from "react-admin";
import useAdminTransform from "@/hooks/useAdminTransform";
import ElemToolbar from "../ElemToolbar";
import ElemFormBase from "../ElemFormBase";
import EventForm from "./EventForm";
import { withImageTransformData, withoutImageTransformData } from './services';

export const EventCreate = () => {
  const [create] = useCreate();
  const redirect = useRedirect();

  const { isImageUpdated, logo, transform, onSelect, onDropRejected } =
  useAdminTransform({
    withImageTransformData,
    withoutImageTransformData,
  });

  const handleSaveDraft = (data: any) => {
    data.status = "draft";
    create("events", { data });
    redirect("/events");
  };

  return (
    <ElemFormBase title="Create a event" action="create" transform={transform}>
      <EventForm
        action="create"
        toolbar={<ElemToolbar onSaveDraft={handleSaveDraft} />}
        isImageUpdated={isImageUpdated}
        banner={logo}
        onSelect={onSelect}
        onDropRejected={onDropRejected}
      />
    </ElemFormBase>
  );
};
