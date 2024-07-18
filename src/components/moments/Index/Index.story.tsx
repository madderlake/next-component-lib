import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { DefaultContexts } from "../../../stories/components/DefaultContexts";
import type { IndexSectionProps } from "./Index";
import { IndexSection } from "./Index";
import { INDEX_MOMENT_DATA } from "./Index.data";

export default {
  title: "Sections/Generic Index Section",
  parameters: {
    sourceCodeUrl:
      "https://interactive-git.apple.com/interactive-rome/ipad/tree/develop/components/moments/Index",
    specUrl:
      "https://pages.github.pie.apple.com/marcom-frontend/collections-specs/sections/#s7",
  },
} satisfies Meta<typeof IndexSection>;

const Template: StoryFn<IndexSectionProps> = (args) => (
  <DefaultContexts>
    <IndexSection {...args} />
  </DefaultContexts>
);

export const InteractiveExample: StoryFn<IndexSectionProps> = Template.bind({});

InteractiveExample.args = {
  title: "Sunt irure",
  analytics: {
    "data-analytics-section-engagement": "name: index section",
  },
  indexData: {
    groups: [
      {
        header: "Index Group 1",
        elevatedLinks: [
          {
            href: "#",
            text: "A Really Long Elevated Link To Show Wrapping",
            analytics: {
              "data-analytics-title": "elevated title",
            },
          },
          {
            href: "#",
            text: "Link Elevated",
            analytics: {
              "data-analytics-title": "elevated title",
            },
          },
          {
            href: "#",
            text: "Link Elevated",
            analytics: {
              "data-analytics-title": "elevated title",
            },
          },
        ],
        baseLinks: [
          {
            href: "#",
            text: "Link Base",
            analytics: {
              "data-analytics-title": "base title",
            },
          },
          {
            href: "#",
            text: "Link Base",
            analytics: {
              "data-analytics-title": "base title",
            },
          },
        ],
      },
      {
        header: "Index Group 2",
        baseLinks: [
          {
            href: "#",
            text: "A Really Long Base Link To Show Wrapping",
            analytics: {
              "data-analytics-title": "base title",
            },
          },
          {
            href: "#",
            text: "Link Base",
            analytics: {
              "data-analytics-title": "base title",
            },
          },
          {
            href: "#",
            text: "Link Base",
            analytics: {
              "data-analytics-title": "base title",
            },
          },
          {
            href: "#",
            text: "Link Base",
            analytics: {
              "data-analytics-title": "base title 2",
            },
          },
        ],
      },
      {
        header: "Index Group 3",
        baseLinks: [
          {
            href: "#",
            text: "Link Base",
            analytics: {
              "data-analytics-title": "base title 3",
            },
          },
          {
            href: "#",
            text: "Link Base",
            analytics: {
              "data-analytics-title": "base title 3",
            },
          },
        ],
      },
    ],
  },
  noBottomPadding: false,
};

export const Example: StoryFn<IndexSectionProps> = Template.bind({});
Example.args = INDEX_MOMENT_DATA;
Example.parameters = { controls: { disable: true } };
Example.storyName = "iPad Index Moment";
