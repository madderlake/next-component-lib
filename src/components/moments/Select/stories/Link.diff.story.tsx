import type { Meta, StoryFn } from "@storybook/react";

import Template, {
  defaultProps,
} from "@/components/moments/Select/stories/Template";

import { Select } from "../Select";

export default {
  title: "VisualDiffs/Moments/Select/Link",
  component: Select,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof Select>;

const sectionHeaderLink = {
  children: "Optional Link",
  href: "#",
  analytics: {
    "data-analytics-title": "compare-all",
  },
};

const analytics = {
  "data-analytics-gallery-id": "select-gallery",
  "data-analytics-section-engagement": "name: select section",
  "data-analytics-region": "select region",
};

const { items } = defaultProps;
// Scenario: The Section Header link is optional. (rdar://110915754)
export const Link: StoryFn = Template.bind({});
const reqdEls = items.map(
  ({ heading, copy, primaryCTA, analytics: itemAnalytics, images }) => ({
    heading,
    copy,
    primaryCTA,
    analytics: itemAnalytics,
    images,
  })
);
Link.args = {
  children: (
    <Select
      {...defaultProps}
      items={reqdEls}
      sectionHeaderLink={sectionHeaderLink}
      analytics={analytics}
    />
  ),
};
