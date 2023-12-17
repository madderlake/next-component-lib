import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import type { ControlProps } from "./Control";
import { Control } from "./Control";

export default {
  title: "components/Control",
  component: Control,
} satisfies Meta<typeof Control>;

const Template: StoryFn<ControlProps> = (props: ControlProps) => (
  <div style={{ padding: "2em" }}>
    <Control {...props} />
  </div>
);

export const InteractiveExample = Template.bind({});
InteractiveExample.storyName = "Control";
InteractiveExample.args = {
  icon: "plus",
};
