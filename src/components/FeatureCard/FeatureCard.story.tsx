import type { Meta, StoryFn } from "@storybook/react";
import React, { useRef } from "react";

import { Modal } from "@/components/Modal/Modal";
import { ModalProvider } from "@/components/Modal/ModalProvider";
import { LoadImagesProvider } from "@/contexts/LoadImages/LoadImagesProvider";

import { DefaultContexts } from "../../stories/components/DefaultContexts";
import type { FeatureCardProps } from "./FeatureCard";
import { FeatureCard } from "./FeatureCard";
import { DARK_IMG_DATA, IMAGE_DATA } from "./imageData";

export default {
  title: "components/FeatureCard",
  component: FeatureCard,
  argTypes: {
    images: {
      table: {
        disable: true,
      },
    },
    topicLabel: {
      type: "string",
    },
    headline: {
      type: "string",
    },
    textZoomBackgroundColor: {
      type: "string",
    },
  },
} satisfies Meta<typeof FeatureCard>;

const initialProps: Omit<FeatureCardProps, "images"> = {
  topicLabel: "Productivity",
  headline:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  objectPosition: "center center",
  imgAlt: "img alt",
  theme: "light",
  accessibilityText: "accessibility text",
  textZoomBackgroundColor: "rgba(254, 229, 187, 0.88)",
};

const darkImages = Object.values(DARK_IMG_DATA);
const lightImages = Object.values(IMAGE_DATA.productivity);
const cardImages = initialProps.theme === "light" ? lightImages : darkImages;

const Template: StoryFn<FeatureCardProps> = (props) => {
  const containerRef = useRef(null);

  return (
    <DefaultContexts>
      <LoadImagesProvider containerRef={containerRef}>
        <div
          ref={containerRef}
          style={{
            backgroundColor: "#f5f5f7",
            padding: "40px 1rem",
            display: "flex",
          }}
        >
          <ModalProvider>
            <FeatureCard {...initialProps} images={cardImages} />
            <Modal topicLabel="Topic Label" headline="Headline">
              <span>Feature Card Content</span>
            </Modal>
          </ModalProvider>
        </div>
      </LoadImagesProvider>
    </DefaultContexts>
  );
};

export const Example: StoryFn<FeatureCardProps> = Template.bind({});
Example.storyName = "FeatureCard";
Example.args = { ...initialProps };
