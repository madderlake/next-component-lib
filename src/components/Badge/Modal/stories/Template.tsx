import type { StoryFn } from "@storybook/react";
import type { PropsWithChildren } from "react";
import React from "react";
import { ModalProvider } from "../ModalProvider";
import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import sassData from "@/styles/shared/sasskitData.module.scss";
import type { ModalProps } from "../Modal";

export const Template: StoryFn<ModalProps & PropsWithChildren> = ({
  children,
}) => {

  return (
    <SassKitViewportsProvider sassData={sassData}>
      <ModalProvider>
        {children}
      </ModalProvider>
    </SassKitViewportsProvider>
  );
};

export const initialProps: ModalProps = {
  ariaLabel: "modal-headline",
  topicLabel: "Topic Label",
  headline: "Example Modal",
  isOpen: true,
  analytics: {
    "data-analytics-activitymap-region-id": "test-region",
    "data-analytics-title": "test analytics title",
    "data-analytics-click": "prop3: close modal",
  },
};
