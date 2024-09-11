import type { StoryFn } from "@storybook/react";
import type { PropsWithChildren } from "react";

import { ModalProvider } from "@/components/Modal/ModalProvider";

import type { IconCardTermsModalProps } from "../IconCardTermsModal";

export const defaultProps: IconCardTermsModalProps = {
  isOpen: true,
  topicLabel: "Topic Label",
  headline: "Headline lorem ipsum dolor sit amet.",
  inlineHeader:
    "Inline header lorem ipsum dolor, sit amet consectetur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.*",
};

const Template: StoryFn<PropsWithChildren & IconCardTermsModalProps> = (
  args
) => {
  return <ModalProvider>{args.children}</ModalProvider>;
};

export default Template;
