import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { ModalProvider } from "@/components/Modal/ModalProvider";

import type { IconCardTermsModalProps } from "../IconCardTermsModal";
import { IconCardTermsModal } from "../IconCardTermsModal";

export default {
  title: "VisualDiffs/IconCardTermsModal/FocusOutline",
  component: IconCardTermsModal,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof IconCardTermsModal>;

const Template: StoryFn<IconCardTermsModalProps> = (args) => {
  return (
    <ModalProvider>
      <IconCardTermsModal {...args}></IconCardTermsModal>
    </ModalProvider>
  );
};
// no tab event added because default IconCardTermsModal component has a focus outline due to default Modal behavior

const args: IconCardTermsModalProps = {
  isOpen: true,
  topicLabel: "Topic Label",
  headline: "Headline lorem ipsum dolor sit amet.",
  inlineHeader:
    "Inline header lorem ipsum dolor, sit amet consectetur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.*",
};

// Scenario: Focusable elements have correct focus outline (rdar://111419003)
export const FocusOutline = Template.bind({});
FocusOutline.args = args;
