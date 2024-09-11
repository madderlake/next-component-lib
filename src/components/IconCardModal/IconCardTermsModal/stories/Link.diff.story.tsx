import type { ComponentMeta, Story } from "@storybook/react";
import React from "react";

import { ModalProvider } from "@/components/Modal/ModalProvider";

import type { IconCardTermsModalProps } from "../IconCardTermsModal";
import { IconCardTermsModal } from "../IconCardTermsModal";

export default {
  title: "VisualDiffs/IconCardTermsModal/Link",
  component: IconCardTermsModal,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} as ComponentMeta<typeof IconCardTermsModal>;

const Template: Story<IconCardTermsModalProps> = (args) => {
  return (
    <ModalProvider>
      <IconCardTermsModal {...args}></IconCardTermsModal>
    </ModalProvider>
  );
};

const args: IconCardTermsModalProps = {
  isOpen: true,
  topicLabel: "Topic Label",
  headline: "Headline lorem ipsum dolor sit amet.",
  inlineHeader:
    "Inline header lorem ipsum dolor, sit amet consectetur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.*",
  link: {
    children: "Optional link",
    href: "#",
    analytics: {
      "data-analytics-title": "lorem ipsum title",
    },
  },
};

// Scenario: Optional link (rdar://111416828)

export const Link = Template.bind({});
Link.args = args;
