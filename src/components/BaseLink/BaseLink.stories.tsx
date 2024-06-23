import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import type { BaseLinkProps } from "./BaseLink";
import { BaseLink } from "./BaseLink";

export default {
  title: "components/BaseLink",
  component: BaseLink,
} satisfies Meta<typeof BaseLink>;

const wrapperStyles = {
  backgroundColor: "#f5f5f7",
  padding: 20,
  margin: 20,
};

const Template: StoryFn<BaseLinkProps> = (props) => (
  <div style={wrapperStyles}>
    <BaseLink {...props} />
  </div>
);

export const Example: StoryFn = Template.bind({});
const linkArgs: BaseLinkProps = { children: "Learn more", href: "#" };
Example.storyName = "BaseLink";
Example.args = linkArgs;
