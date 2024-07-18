import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { BaseExperienceProvider } from "@/contexts/BaseExperience/BaseExperienceProvider";
import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import sassData from "@/styles/shared/sasskitData.module.scss";

import type { WelcomeProps } from "./Welcome";
import { Welcome } from "./Welcome";
import { WELCOME_MOMENT_DATA } from "./Welcome.data";

export default {
  title: "Sections/Generic Welcome Section",
  parameters: {
    sourceCodeUrl:
      "https://interactive-git.apple.com/interactive-rome/ipad/tree/develop/components/moments/Welcome",
    specUrl:
      "https://pages.github.pie.apple.com/marcom-frontend/collections-specs/sections/#s1",
  },
} satisfies Meta<typeof Welcome>;

const Template: StoryFn<WelcomeProps> = (args) => (
  <SassKitViewportsProvider sassData={sassData}>
    <BaseExperienceProvider>
      <Welcome {...args} />
    </BaseExperienceProvider>
  </SassKitViewportsProvider>
);

export const InteractiveExample: StoryFn<WelcomeProps> = Template.bind({});
InteractiveExample.args = {
  title: "Magna aliquip",
  description: "Sint sunt fugiat",
  videoSrc: WELCOME_MOMENT_DATA.videoSrc,
  videoAnalytics: WELCOME_MOMENT_DATA.videoAnalytics,
  videoAriaLabel: WELCOME_MOMENT_DATA.videoAriaLabel,
  controlAriaLabels: WELCOME_MOMENT_DATA.controlAriaLabels,
  analytics: WELCOME_MOMENT_DATA.analytics,
  structuredData: WELCOME_MOMENT_DATA.structuredData,
};

export const Example: StoryFn<WelcomeProps> = Template.bind({});
Example.args = WELCOME_MOMENT_DATA;
Example.storyName = "iPad Welcome Moment";
Example.parameters = { controls: { disable: true } };
