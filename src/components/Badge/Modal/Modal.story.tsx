import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import type { ModalProps } from "./Modal";
import { Modal } from "./Modal";
import { ModalProvider } from "./ModalProvider";
import { useModal } from "./useModal";

export default {
  title: "components/Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;

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

const Template: StoryFn<ModalProps> = (args) => {
  return (
    <ModalProvider>
      <StoryModalButton />
      <Modal role="dialog" {...args}>
        <p>
          This modal contains some sentences that are supposed to imitate
          typical modal content. What the words say don&apos;t really matter
          since actually, they aren&apos;t conveying any meaning. They are just
          taking up space for the sake of visualization, a noble task in the
          pursuit of an impeccable user interface.
        </p>
      </Modal>
    </ModalProvider>
  );
};

export const Example: StoryFn<ModalProps> = Template.bind({});
Example.storyName = "Modal";
Example.args = {
  ariaLabel: "modal-headline",
  topicLabel: "Topic Label",
  headline: "Example Modal",
  analytics: {
    "data-analytics-activitymap-region-id": "test-region",
    "data-analytics-title": "test analytics title",
    "data-analytics-click": "prop3: close modal",
  },
};
