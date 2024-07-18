import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { IMAGE_DATA } from "@/components/FeatureCard/imageData";
import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import sassData from "@/styles/shared/sasskitData.module.scss";

import { type ConsiderProps, Consider } from "../Consider";

export default {
  title: "VisualDiffs/Moments/Consider/NoBottomPadding",
  component: Consider,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof Consider>;

const Template: StoryFn<ConsiderProps> = (args, { globals: { theme } }) => (
  <SassKitViewportsProvider sassData={sassData}>
    <div style={{ border: "10px solid red" }}>
      <Consider {...args} />
    </div>
  </SassKitViewportsProvider>
);

const args: ConsiderProps = {
  title: "Sunt irure",
  analytics: {
    "data-analytics-section-engagement": "name: consider section",
    "data-analytics-region": "consider region",
    "data-analytics-gallery-id": "consider-gallery",
  },
  queryStringKey: "consider-moment",
  items: [
    {
      accessibilityText: "Enim dolore",
      topicLabel: "Lorem voluptate",
      headline: "Est excepteur",
      images: Object.values(IMAGE_DATA.productivity),
      analytics: {
        "data-analytics-gallery-item-id": "gallery-item-1",
      },
      modal: {
        topicLabel: "Topic label #1",
        headline: "Feature Card modal headline",
        content: (
          <h1>Feature Card modal #1</h1>
        )
      }
    },
    {
      accessibilityText: "Laboris consectetur",
      topicLabel: "Ullamco ullamco",
      headline: "Labore incididunt aute",
      images: Object.values(IMAGE_DATA.creativity),
      analytics: {
        "data-analytics-gallery-item-id": "gallery-item-2",
      },
      modal: {
        topicLabel: "Topic label #2",
        headline: "Feature Card modal headline",
        content: (
          <h1>Feature Card modal #2</h1>
        )
      }
    },
  ],
  noBottomPadding: true,
};

// Scenario: Can be rendered without bottom padding (rdar://111122547)
export const NoBottomPadding: StoryFn<ConsiderProps> = Template.bind({});
NoBottomPadding.args = args;
