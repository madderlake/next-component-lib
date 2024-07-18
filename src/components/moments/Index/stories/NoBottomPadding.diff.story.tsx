import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import sassData from "@/styles/shared/sasskitData.module.scss";

import type { IndexSectionProps } from "../Index";
import { IndexSection } from "../Index";

export default {
  title: "VisualDiffs/Moments/Index/NoBottomPadding",
  component: IndexSection,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof IndexSection>;

const Template: StoryFn<IndexSectionProps> = (args, { globals: { theme } }) => (
  <SassKitViewportsProvider sassData={sassData}>
    <div style={{ border: "10px solid red" }}>
      <IndexSection {...args} />
    </div>
  </SassKitViewportsProvider>
);

const args: IndexSectionProps = {
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
            analytics: { "data-analytics-title": "analytics title" },
            href: "#",
            text: "A Really Long Elevated Link To Show Wrapping",
          },
          {
            analytics: { "data-analytics-title": "analytics title" },
            href: "#",
            text: "Link Elevated",
          },
          {
            analytics: { "data-analytics-title": "analytics title" },
            href: "#",
            text: "Link Elevated",
          },
        ],
        baseLinks: [
          {
            analytics: { "data-analytics-title": "analytics title" },
            href: "#",
            text: "Link Base",
          },
          {
            analytics: { "data-analytics-title": "analytics title" },
            href: "#",
            text: "Link Base",
          },
        ],
      },
      {
        header: "Index Group 2",
        baseLinks: [
          {
            analytics: { "data-analytics-title": "analytics title" },
            href: "#",
            text: "A Really Long Base Link To Show Wrapping",
          },
          {
            analytics: { "data-analytics-title": "analytics title" },
            href: "#",
            text: "Link Base",
          },
          {
            analytics: { "data-analytics-title": "analytics title" },
            href: "#",
            text: "Link Base",
          },
          {
            analytics: { "data-analytics-title": "analytics title" },
            href: "#",
            text: "Link Base",
          },
        ],
      },
      {
        header: "Index Group 3",
        baseLinks: [
          {
            analytics: { "data-analytics-title": "analytics title" },
            href: "#",
            text: "Link Base",
          },
          {
            analytics: { "data-analytics-title": "analytics title" },
            href: "#",
            text: "Link Base",
          },
        ],
      },
    ],
  },
  noBottomPadding: true,
};

// Scenario: Index can be rendered without bottom padding (rdar://109898120)
export const NoBottomPadding: StoryFn<IndexSectionProps> = Template.bind({});
NoBottomPadding.args = args;
