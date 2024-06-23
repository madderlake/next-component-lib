import type { StoryFn } from "@storybook/react";
import React, { type PropsWithChildren } from "react";

import { BaseExperienceProvider } from "@/contexts/BaseExperience/BaseExperienceProvider";
import { GalleryContextProvider } from "@/contexts/Gallery/GalleryContextProvider";
import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import { WindowContextProvider } from "@/contexts/Window/WindowContextProvider";
import sassData from "@/styles/shared/sasskitData.module.scss";

import type { SelectProps } from "../Select";
import { PRODUCT_TILESET_DATA } from "./TileSet.data";

const { title, items, sectionHeaderLink, analytics } = PRODUCT_TILESET_DATA;
export const defaultProps: SelectProps = {
  title,
  analytics,
  items,
  sectionHeaderLink,
};

const Template: StoryFn<PropsWithChildren> = (args) => (
  <WindowContextProvider wait={300}>
    <SassKitViewportsProvider sassData={sassData}>
      <BaseExperienceProvider>
        <GalleryContextProvider>{args.children}</GalleryContextProvider>
      </BaseExperienceProvider>
    </SassKitViewportsProvider>
  </WindowContextProvider>
);

export default Template;
