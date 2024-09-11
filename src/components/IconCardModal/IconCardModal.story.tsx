import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { ModalProvider } from "@/components/Modal/ModalProvider";
import { useModal } from "@/components/Modal/useModal";

import type { IconCardModalProps } from "./IconCardModal";
import { IconCardModal } from "./IconCardModal";

export default {
  title: "components/IconCardModal",
  component: IconCardModal,
} satisfies Meta<typeof IconCardModal>;

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

const Template: StoryFn<IconCardModalProps> = () => {
  return (
    <ModalProvider>
      <StoryModalButton />
      <IconCardModal
        topicLabel="Topic Label Lorem Ipsum"
        headline="Headline lorem ipsum dolor sit amet."
      />
    </ModalProvider>
  );
};

export const Example: StoryFn<IconCardModalProps> = Template.bind({});
Example.storyName = "IconCardModal";
