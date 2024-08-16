import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { GalleryContextProvider } from "@/contexts/Gallery/GalleryContextProvider";

import { DefaultContexts } from "src/stories/components/DefaultContexts";

import type { SelectProps } from "./Select";
import { Select } from "./Select";
import { SELECT_MOMENT_PROPS } from "./Select.data";

export default {
  title: "Sections/iPad Select Moment",
} satisfies Meta<typeof Select>;

const Template: StoryFn<SelectProps> = (args) => (
  <DefaultContexts>
    <GalleryContextProvider>
      <Select {...args} />
    </GalleryContextProvider>
  </DefaultContexts>
);

export const Example: StoryFn<SelectProps> = Template.bind({});
Example.args = SELECT_MOMENT_PROPS;
Example.storyName = "iPad Select Moment";
Example.parameters = { controls: { disable: true } };
