import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { ModalProvider } from "@/components/Modal/ModalProvider";
import { useModal } from "@/components/Modal/useModal";

import type { FeatureCardModalProps } from "./FeatureCardModal";
import { FeatureCardModal } from "./FeatureCardModal";

export default {
  title: "components/FeatureCardModal",
  component: FeatureCardModal,
} satisfies Meta<typeof FeatureCardModal>;

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

const Template: StoryFn<FeatureCardModalProps> = () => {
  return (
    <ModalProvider>
      <StoryModalButton />
      <FeatureCardModal
        content={<h1>Feature Card modal #1</h1>}
        topicLabel="Topic Label Lorem Ipsum"
        headline="Headline lorem ipsum dolor sit amet."
        analytics={{
          "data-analytics-activitymap-region-id": "lorem ipsum region",
          "data-analytics-click": "close modal click",
          "data-analytics-title": "close modal title",
        }}
      />
    </ModalProvider>
  );
};

export const Example: StoryFn<FeatureCardModalProps> = Template.bind({});
Example.storyName = "FeatureCardModal";
