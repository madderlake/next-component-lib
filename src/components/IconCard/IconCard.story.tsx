import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { Modal } from "@/components/Modal/Modal";
import { ModalProvider } from "@/components/Modal/ModalProvider";

import type { IconCardProps } from "./IconCard";
import { IconCard } from "./IconCard";

export default {
  title: "components/IconCard",
  component: IconCard,
  argTypes: {
    headline: {
      type: "string",
    },
    copy: {
      type: "string",
    },
  },
} satisfies Meta<typeof IconCard>;

const Template: StoryFn<IconCardProps> = (props) => {
  return (
    <ModalProvider>
      <div style={{ backgroundColor: "#f5f4f7", padding: "50px" }}>
        <IconCard {...props} />
      </div>
      <Modal role="dialog" topicLabel="Hello!" headline=""></Modal>
    </ModalProvider>
  );
};

export const Example: StoryFn<IconCardProps> = Template.bind({});
Example.storyName = "IconCard";
Example.args = {
  icon: {
    src: "/assets/icons/light/line.horizontal.2.decrease.circle_elevated_1D1D1F.svg",
    width: 40,
    height: 56,
  },
  headline: "Save up to $655 with Trade In",
  copy: "Get credit toward your next iPad when you trade in your current one.",
  accessibilityText: "accessibility text",
};
