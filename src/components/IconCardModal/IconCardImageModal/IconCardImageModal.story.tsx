import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { PENCIL_IMG_DATA } from "@/components/EssentialCard/imageData";
import { ModalProvider } from "@/components/Modal/ModalProvider";
import { useModal } from "@/components/Modal/useModal";
import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import sassData from "@/styles/shared/sasskitData.module.scss";

import type { IconCardImageModalProps } from "./IconCardImageModal";
import { IconCardImageModal } from "./IconCardImageModal";

export default {
  title: "components/IconCardImageModal",
  component: IconCardImageModal,
} satisfies Meta<typeof IconCardImageModal>;

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

const images = Object.values(PENCIL_IMG_DATA);

const Template: StoryFn<IconCardImageModalProps> = (args) => {
  return (
    <SassKitViewportsProvider sassData={sassData}>
      <ModalProvider>
        <StoryModalButton />
        <IconCardImageModal {...args} />
      </ModalProvider>
    </SassKitViewportsProvider>
  );
};

export const Example: StoryFn<IconCardImageModalProps> = Template.bind({});
Example.storyName = "IconCardImageModal";

Example.args = {
  topicLabel: "Topic Label",
  headline: "Headline lorem ipsum dolor sit amet.",
  inlineHeader:
    "Inline header lorem ipsum dolor, sit amet consectetur. Adipiscing elit sed do eiusmod tempor.",
  images,
};
