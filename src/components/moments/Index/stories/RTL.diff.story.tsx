import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import sassData from "@/styles/shared/sasskitData.module.scss";

import type { IndexSectionProps } from "../Index";
import { IndexSection } from "../Index";

export default {
  title: "VisualDiffs/Moments/Index/RTL",
  component: IndexSection,
  parameters: {
    direction: "rtl",
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof IndexSection>;

const Template: StoryFn<IndexSectionProps> = (args, { globals: { theme } }) => (
  <div dir="rtl">
    <SassKitViewportsProvider sassData={sassData}>
      <IndexSection {...args} />
    </SassKitViewportsProvider>
  </div>
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
};

// Scenario: Index Section renders correctly in RTL  (rdar://109898172)
export const RTL: StoryFn<IndexSectionProps> = Template.bind({});
RTL.args = args;
