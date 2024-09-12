import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import type { BaseCardProps } from "./BaseCard";
import { BaseCard } from "./BaseCard";

export default {
  title: "components/BaseCard",
  component: BaseCard,
} satisfies Meta<typeof BaseCard>;

const Template: StoryFn<BaseCardProps> = (props) => (
  <div
    style={{ backgroundColor: "gray", height: "400px", padding: "40px 1rem" }}
  >
    <BaseCard
      {...props}
      style={{
        textAlign: "center",
        listStyle: "none",
      }}
      analytics={{
        "data-analytics-activitymap-region-id": "hello-card",
      }}
    >
      <h1 style={{ lineHeight: "400px" }}>Hello</h1>
    </BaseCard>
  </div>
);

export const InteractiveExample: StoryFn = Template.bind({});
InteractiveExample.storyName = "BaseCard";
