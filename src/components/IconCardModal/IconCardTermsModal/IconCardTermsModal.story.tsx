import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { ModalProvider } from "@/components/Modal/ModalProvider";
import { useModal } from "@/components/Modal/useModal";

import type { IconCardTermsModalProps } from "./IconCardTermsModal";
import { IconCardTermsModal } from "./IconCardTermsModal";

export default {
  title: "components/IconCardTermsModal",
  component: IconCardTermsModal,
} satisfies Meta<typeof IconCardTermsModal>;

const StoryModalButton = (): JSX.Element => {
  const { setIsOpen } = useModal();

  const btnStyles: React.CSSProperties = {
    background: "rgb(242, 242, 242)",
    borderRadius: 10,
    border: "1px solid #333",
    left: "50%",
    padding: "10px 15px",
    position: "absolute",
    top: 200,
    transform: "translateX(-50%)",
  };

  return (
    <button style={btnStyles} onClick={() => setIsOpen(true)}>
      Open Modal
    </button>
  );
};

const Template: StoryFn<IconCardTermsModalProps> = (args) => {
  return (
    <ModalProvider>
      <StoryModalButton />
      <IconCardTermsModal {...args}></IconCardTermsModal>
    </ModalProvider>
  );
};

export const Example: StoryFn<IconCardTermsModalProps> = Template.bind({});
Example.storyName = "IconCardTermsModal";

Example.args = {
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
