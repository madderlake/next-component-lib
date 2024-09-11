import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { IMAGE_DATA } from "@/components/FeatureCard/imageData";

import { DefaultContexts } from "../../../stories/components/DefaultContexts";
import type { ConsiderProps } from "./Consider";
import { Consider } from "./Consider";
import { CONSIDER_MOMENT_DATA } from "./Consider.data";

export default {
  title: "Sections/Consider Section",
} satisfies Meta<typeof Consider>;

const Template: StoryFn<ConsiderProps> = (args) => {
  return (
    <DefaultContexts>
      <Consider {...args} />
    </DefaultContexts>
  );
};

export const InteractiveExample: StoryFn<ConsiderProps> = Template.bind({});

InteractiveExample.args = {
  title: "Sunt irure",
  analytics: {
    "data-analytics-gallery-id": "consider-gallery",
    "data-analytics-section-engagement": "name: consider section",
    "data-analytics-region": "consider region",
  },
  queryStringKey: "consider-moment",
  items: [
    {
      accessibilityText: "Enim dolore",
      topicLabel: "Lorem voluptate",
      headline: "Est excepteur",
      images: Object.values(IMAGE_DATA.productivity),
      analytics: { "data-analytics-gallery-item-id": "gallery-item-1" },
      modal: {
        topicLabel: "Topic label #1",
        headline: "Feature Card modal headline",
        content: <h1>Feature Card modal #1</h1>,
      },
    },
    {
      accessibilityText: "Laboris consectetur",
      topicLabel: "Ullamco ullamco",
      headline: "Labore incididunt aute",
      images: Object.values(IMAGE_DATA.creativity),
      analytics: { "data-analytics-gallery-item-id": "gallery-item-2" },
      modal: {
        topicLabel: "Topic label #2",
        headline: "Feature Card modal headline",
        content: <h1>Feature Card modal #2</h1>,
      },
    },
  ],
  noBottomPadding: false,
};

export const Example: StoryFn<ConsiderProps> = Template.bind({});
Example.args = CONSIDER_MOMENT_DATA;
Example.parameters = { controls: { disable: true } };
Example.storyName = "iPad Consider Moment";
