import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { Augment } from "@/components/moments/Augment/Augment";
import { AUGMENT_MOMENT_DATA } from "@/components/moments/Augment/Augment.data";
import { Consider } from "@/components/moments/Consider/Consider";
import { CONSIDER_MOMENT_DATA } from "@/components/moments/Consider/Consider.data";
import { Essentials } from "@/components/moments/Essentials/Essentials";
import { ESSENTIALS_MOMENT_DATA } from "@/components/moments/Essentials/Essentials.data";
import { Incentivize } from "@/components/moments/Incentivize/Incentivize";
import { INCENTIVIZE_MOMENT_DATA } from "@/components/moments/Incentivize/Incentivize.data";
import { IndexSection as Index } from "@/components/moments/Index/Index";
import { INDEX_MOMENT_DATA } from "@/components/moments/Index/Index.data";
import { RIBBON_DATA } from "@/components/moments/Ribbon/Ribbon.data";
import { Select } from "@/components/moments/Select/Select";
import { SELECT_MOMENT_PROPS } from "@/components/moments/Select/Select.data";
import { Welcome } from "@/components/moments/Welcome/Welcome";
import { WELCOME_MOMENT_DATA } from "@/components/moments/Welcome/Welcome.data";
import { Ribbon } from "@/components/Ribbon/Ribbon";
import { DefaultContexts } from "@/stories/components/DefaultContexts";

// If a story file has only one story and its name matches the file's title,
// it will appear in Storybook's UI as just a story rather than a folder with
// one story inside it.

export default {
  title: "Page Templates/Family Page",
  parameters: { controls: { disable: true } },
} satisfies Meta;

const Template: StoryFn = () => {
  // Create a mock qs adapter

  return (
    <DefaultContexts>
      <Ribbon {...RIBBON_DATA} />
      <Welcome {...WELCOME_MOMENT_DATA} />
      <Consider {...CONSIDER_MOMENT_DATA} />
      <Select {...SELECT_MOMENT_PROPS} />
      <Incentivize {...INCENTIVIZE_MOMENT_DATA} />
      <Essentials {...ESSENTIALS_MOMENT_DATA} />
      <Augment {...AUGMENT_MOMENT_DATA} />
      <Index {...INDEX_MOMENT_DATA} />
    </DefaultContexts>
  );
};

export const Example: StoryFn = Template.bind({});
Example.storyName = "Family Page";
