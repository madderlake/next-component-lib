import type { Meta, StoryFn } from "@storybook/react";
import React, { useRef } from "react";

import { LoadImagesProvider } from "@/contexts/LoadImages/LoadImagesProvider";
import { DefaultContexts } from "../../stories/components/DefaultContexts";
import responsiveStyle from "@/styles/shared/responsive-content.module.scss";

import type { ImageAccordionProps } from "./ImageAccordion";
import { ImageAccordion } from "./ImageAccordion";
import { items } from "./itemData";

const storybookMetadata: Meta = {
  title: "components/ImageAccordion",
  component: ImageAccordion,
};

export default storybookMetadata;

const Template: StoryFn<ImageAccordionProps> = (args) => {
  const containerRef = useRef(null);

  return (
    <DefaultContexts>
      <LoadImagesProvider containerRef={containerRef}>
        <div
          ref={containerRef}
          className={responsiveStyle.responsiveContent}
          style={{
            padding: "2rem 0",
          }}
        >
          <ImageAccordion {...args} />
        </div>
      </LoadImagesProvider>
    </DefaultContexts>
  );
};
export const InteractiveExample = Template.bind({});
InteractiveExample.args = {
  items,
};

InteractiveExample.storyName = "Image Accordion";
