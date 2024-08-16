import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { DefaultContexts } from "src/stories/components/DefaultContexts";

import type { AugmentProps } from "./Augment";
import { Augment } from "./Augment";
import { AUGMENT_MOMENT_DATA } from "./Augment.data";

export default {
  title: "Sections/iPad Augment Moment",
} satisfies Meta<typeof Augment>;

const Template: StoryFn<AugmentProps> = (args) => (
  <DefaultContexts>
    <Augment {...args} />
  </DefaultContexts>
);

export const Example: StoryFn<AugmentProps> = Template.bind({});

Example.args = { ...AUGMENT_MOMENT_DATA };
Example.parameters = { controls: { disable: true } };
Example.storyName = "iPad Augment Moment";
