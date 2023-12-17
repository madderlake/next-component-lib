import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { BaseExperienceProvider } from "@/contexts/BaseExperience/BaseExperienceProvider";
import { BaseExpSimple } from "@/contexts/BaseExperience/example/BaseExpExample";
import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";

export default {
  title: "Components/BaseExpSimple",
  component: BaseExpSimple,
} satisfies Meta<typeof BaseExpSimple>;

const sassData = {
  viewports:
    '\'{"large":{"min-width":1069,"max-width":1440,"content":980},"xlarge":{"min-width":1441,"content":980},"medium":{"min-width":735,"max-width":1068,"content":692},"small":{"min-width":320,"max-width":734,"content":280},"range:large only":{"content":980,"min-width":1069,"max-width":1440,"query":"(min-width: 1069px) and (max-width: 1440px)"},"range:xlarge only":{"content":980,"min-width":1441,"query":"(min-width: 1441px)"},"range:medium only":{"content":692,"min-width":735,"max-width":1068,"query":"(min-width: 735px) and (max-width: 1068px)"},"range:small only":{"content":280,"min-width":320,"max-width":734,"query":"(min-width: 320px) and (max-width: 734px)"},"range:large up":{"content":980,"min-width":1069,"query":"(min-width: 1069px)"},"range:xlarge up":{"content":980,"min-width":1441,"query":"(min-width: 1441px)"},"range:medium up":{"content":692,"min-width":735,"query":"(min-width: 735px)"},"range:small up":{"content":280,"min-width":320,"query":"(min-width: 320px)"},"range:large down":{"content":980,"max-width":1440,"query":"(max-width: 1440px)"},"range:xlarge down":{"content":980},"range:medium down":{"content":692,"max-width":1068,"query":"(max-width: 1068px)"},"range:small down":{"content":280,"max-width":734,"query":"(max-width: 734px)"}}\'',
  portrait: "'\"(orientation: portrait)\"'",
  landscape: "'\"(orientation: landscape)\"'",
  "inverted-colors": "'\"(inverted-colors)\"'",
  retina: '"(min-resolution: 1.5dppx)", "(min-resolution: 144dpi)"',
};

const Template: StoryFn<typeof BaseExpSimple> = (args) => (
  <SassKitViewportsProvider sassData={sassData}>
    <BaseExperienceProvider>
      <BaseExpSimple />
    </BaseExperienceProvider>
  </SassKitViewportsProvider>
);

export const Example = Template.bind({});
