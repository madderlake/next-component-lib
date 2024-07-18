import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { IMAGE_DATA } from "@/components/ProductTile/imageData";
import { BaseExperienceProvider } from "@/contexts/BaseExperience/BaseExperienceProvider";
import { GalleryContextProvider } from "@/contexts/Gallery/GalleryContextProvider";
import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import { WindowContextProvider } from "@/contexts/Window/WindowContextProvider";
import sassData from "@/styles/shared/sasskitData.module.scss";

import type { SelectProps } from "./Select";
import { Select } from "./Select";
import { SELECT_MOMENT_PROPS } from "./Select.data";

export default {
  title: "Sections/Generic Select Section",
  parameters: {
    sourceCodeUrl:
      "https://interactive-git.apple.com/interactive-rome/ipad/tree/develop/components/moments/Select",
    specUrl:
      "https://pages.github.pie.apple.com/marcom-frontend/collections-specs/sections/#s3",
  },
} satisfies Meta<typeof Select>;

const Template: StoryFn<SelectProps> = (args) => (
  <WindowContextProvider wait={300}>
    <SassKitViewportsProvider sassData={sassData}>
      <BaseExperienceProvider>
        <GalleryContextProvider>
          <Select {...args} />
        </GalleryContextProvider>
      </BaseExperienceProvider>
    </SassKitViewportsProvider>
  </WindowContextProvider>
);

export const InteractiveExample: StoryFn<SelectProps> = Template.bind({});
InteractiveExample.args = {
  title: "Proident occaecat",
  analytics: {
    "data-analytics-gallery-id": "select-gallery",
    "data-analytics-section-engagement": "name: select section",
    "data-analytics-region": "select region",
  },
  sectionHeaderLink: {
    children: "Consectetur magna",
    href: "#",
    analytics: {
      "data-analytics-title": "consectetur",
    },
  },
  items: [
    {
      heading: "Esse eu",
      copy: "Aute ullamco pariatur sunt dolore mollit ullamco eu qui ad consectetur.",
      pricing: "From $799 or $66.58/mo. for 12 mo.*",
      images: Object.values(IMAGE_DATA.iPadPro),
      colorItems: [
        { type: "swatch", color: "lightgrey", name: "Silver" },
        { type: "swatch", color: "darkgrey", name: "Graphite" },
      ],
      primaryCTA: {
        children: "Learn More",
        href: "#",
        analytics: { "data-analytics-title": "esse eu learn more" },
      },
      secondaryCTA: {
        children: "Buy",
        href: "#",
        analytics: { "data-analytics-title": "esse eu buy" },
      },
      analytics: {
        "data-analytics-activitymap-region-id": "esse eu region",
        "data-analytics-gallery-item-id": "gallery-item-1",
      },
    },
    {
      heading: "Ipsum",
      copy: "Incididunt dolore labore dolore excepteur aute veniam.",
      pricing: "From $599 or $49.91/mo. for 12 mo.*",
      images: Object.values(IMAGE_DATA.iPadAir),
      badge: "New",
      colorItems: [
        { type: "swatch", color: "gold", name: "Gold" },
        { type: "swatch", color: "darkgrey", name: "Graphite" },
      ],
      primaryCTA: {
        children: "Learn More",
        href: "#",
        analytics: { "data-analytics-title": "ipsum learn more" },
      },
      secondaryCTA: {
        children: "Buy",
        href: "#",
        analytics: { "data-analytics-title": "ipsum buy" },
      },
      analytics: {
        "data-analytics-activitymap-region-id": "ipsum region",
        "data-analytics-gallery-item-id": "gallery-item-2",
      },
    },
  ],
  noBottomPadding: false,
};

export const Example: StoryFn<SelectProps> = Template.bind({});
Example.args = SELECT_MOMENT_PROPS;
Example.storyName = "iPad Select Moment";
Example.parameters = { controls: { disable: true } };
