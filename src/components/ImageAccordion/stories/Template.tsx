import type { StoryFn } from "@storybook/react";
import React, { useRef } from "react";

import { LoadImagesProvider } from "@/contexts/LoadImages/LoadImagesProvider";
import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import sassData from "@/styles/shared/sasskitData.module.scss";

import type { ImageAccordionProps } from "../ImageAccordion";
import { ImageAccordion } from "../ImageAccordion";

export const Template: StoryFn<ImageAccordionProps> = (args) => {
  const containerRef = useRef(null);

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
