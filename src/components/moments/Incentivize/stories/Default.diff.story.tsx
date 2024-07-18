import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { DefaultContexts } from "@/stories/components/DefaultContexts";

import type { IncentivizeProps, IncentivizeItem } from "../Incentivize";
import { Incentivize } from "../Incentivize";

export default {
  title: "VisualDiffs/Moments/Incentivize/Default",
  component: Incentivize,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof Incentivize>;

const Template: StoryFn<IncentivizeProps> = (args) => (
  <DefaultContexts>
    <Incentivize {...args} />
  </DefaultContexts>
);

const ITEM_OBJ: IncentivizeItem = {
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
};

const args: IncentivizeProps = {
  title: "Do tempor laboris",
  analytics: {
    "data-analytics-section-engagement": "incentivize",
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
  items: [ITEM_OBJ, ITEM_OBJ, ITEM_OBJ, ITEM_OBJ],
};

// Scenario: A Section Header and a gallery of Icon Cards are required (rdar://111353606)
export const Default: StoryFn<IncentivizeProps> = Template.bind({});
Default.args = args;
