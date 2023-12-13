import type { Meta, StoryFn } from "@storybook/react";
import React, { useEffect, useRef } from "react";

import { LoadImagesProvider } from "@/contexts/LoadImages/LoadImagesProvider";
import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import sassData from "@/styles/shared/sasskitData.module.scss";

import type { ImageAccordionProps } from "../ImageAccordion";
import { ImageAccordion } from "../ImageAccordion";
import styles from "../ImageAccordion.module.scss";
import { items } from "../itemData";

export default {
  title: "VisualDiffs/ImageAccordion/Container",
  component: ImageAccordion,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof ImageAccordion>;

const Template: StoryFn<ImageAccordionProps> = (args) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el: HTMLElement | null = document.querySelector(
      "." + styles.imageAccordionContainer
    );

    if (el != null) {
      el.style.border = "1px solid red";
    }
  }, []);

  return (
    <SassKitViewportsProvider sassData={sassData}>
      <LoadImagesProvider containerRef={containerRef}>
        <div ref={containerRef}>
          <ImageAccordion {...args} />
        </div>
      </LoadImagesProvider>
    </SassKitViewportsProvider>
  );
};

// Scenario: ImageAccordion requires a container that wraps an Accordion component and an image container (rdar://108963460)
export const Container: StoryFn<ImageAccordionProps> = Template.bind({});
Container.args = {
  items,
};
