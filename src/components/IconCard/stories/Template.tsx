import type { StoryFn } from "@storybook/react";
import React from "react";

import { Modal } from "@/components/Modal/Modal";
import { ModalProvider } from "@/components/Modal/ModalProvider";

import { type IconCardProps, IconCard } from "../IconCard";

export const Template: StoryFn<IconCardProps> = (props) => {
  return (
    <ModalProvider>
      <div style={{ backgroundColor: "#f5f4f7", padding: "50px" }}>
        <IconCard {...props} />
      </div>
      <Modal role="dialog" topicLabel="Hello!" headline=""></Modal>
    </ModalProvider>
  );
};
