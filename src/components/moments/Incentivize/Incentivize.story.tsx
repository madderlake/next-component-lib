import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { BaseExperienceProvider } from "@/contexts/BaseExperience/BaseExperienceProvider";
import { GalleryContextProvider } from "@/contexts/Gallery/GalleryContextProvider";
import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import { WindowContextProvider } from "@/contexts/Window/WindowContextProvider";
import sassData from "@/styles/shared/sasskitData.module.scss";

import type { IncentivizeProps } from "./Incentivize";
import { Incentivize } from "./Incentivize";
import { INCENTIVIZE_MOMENT_DATA } from "./Incentivize.data";

export default {
  title: "Sections/Generic Incentivize Section",
  parameters: {
    sourceCodeUrl:
      "https://interactive-git.apple.com/interactive-rome/ipad/tree/develop/components/moments/Incentivize",
    specUrl:
      "https://pages.github.pie.apple.com/marcom-frontend/collections-specs/sections/#s4",
  },
} satisfies Meta<typeof Incentivize>;

const Template: StoryFn<IncentivizeProps> = (args) => (
  <WindowContextProvider wait={300}>
    <SassKitViewportsProvider sassData={sassData}>
      <BaseExperienceProvider>
        <GalleryContextProvider>
          <Incentivize {...args} />
        </GalleryContextProvider>
      </BaseExperienceProvider>
    </SassKitViewportsProvider>
  </WindowContextProvider>
);

export const InteractiveExample: StoryFn<IncentivizeProps> = Template.bind({});
InteractiveExample.args = {
  title: "Do tempor laboris",
  analytics: {
    "data-analytics-section-engagement": "name: incentivize section",
    "data-analytics-region": "incentivize region",
    "data-analytics-gallery-id": "incentivize-gallery",
  },
  sectionHeaderLink: {
    children: "Duis enim ex",
    href: "#",
    analytics: {
      "data-analytics-title": "moment-link",
    },
  },
  items: [
    {
      icon: {
        src: "/assets/icons/light/box.truck_elevated_1D1D1F.svg",
        width: 49,
        height: 56,
      },
      headline: "Veniam enim dolore anim",
      copy: "Proident dolore in esse",
      modalContent: {
        contentType: "terms",
        topicLabel: "Labore aute laborum",
        headline: "Occaecat duis",
        inlineHeader: "Anim deserunt",
        link: {
          children: "Elit dolore",
          href: "#",
          analytics: {
            "data-analytics-title": "elit dolore title",
          },
        },
        analytics: {
          "data-analytics-activitymap-region-id": "pay-over-time-2",
          "data-analytics-title": "modal close button",
          "data-analytics-click": "prop3: close modal",
        },
      },
      accessibilityText: "",
      analytics: {
        "data-analytics-gallery-item-id": "gallery-item-1",
        "data-analytics-title": "gallery item 1",
        "data-analytics-click": "prop3: gallery item 1",
      },
    },
    {
      icon: {
        src: "/assets/icons/light/line.horizontal.2.decrease.circle_elevated_1D1D1F.svg",
        width: 40,
        height: 56,
      },
      headline: "Veniam enim dolore anim",
      copy: "Proident dolore in esse",
      modalContent: {
        contentType: "terms",
        topicLabel: "Labore aute laborum",
        headline: "Occaecat duis",
        inlineHeader: "Anim deserunt",
        link: {
          children: "Elit dolore",
          href: "#",
          analytics: {
            "data-analytics-title": "elit dolore title",
          },
        },
        analytics: {
          "data-analytics-activitymap-region-id": "pay-over-time-2",
          "data-analytics-title": "modal close button",
          "data-analytics-click": "prop3: close modal",
        },
      },
      accessibilityText: "",
      analytics: {
        "data-analytics-gallery-item-id": "gallery-item-2",
        "data-analytics-title": "gallery item 2",
        "data-analytics-click": "prop3: gallery item 2",
      },
    },
  ],
};

export const Example: StoryFn<IncentivizeProps> = Template.bind({});
Example.storyName = "iPad Incentivize Moment";
Example.args = INCENTIVIZE_MOMENT_DATA;
Example.parameters = { controls: { disable: true } };
