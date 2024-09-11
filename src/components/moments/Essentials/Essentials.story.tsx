import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import {
  KEYBOARD_IMG_DATA,
  PENCIL_IMG_DATA,
} from "@/components/EssentialCard/imageData";

import { DefaultContexts } from "../../../stories/components/DefaultContexts";
import type { EssentialsProps } from "./Essentials";
import { Essentials } from "./Essentials";
import { ESSENTIALS_MOMENT_DATA } from "./Essentials.data";

export default {
  title: "Sections/Generic Essentials Section",
} satisfies Meta<typeof Essentials>;

const Template: StoryFn<EssentialsProps> = (args) => {
  return (
    <DefaultContexts>
      <Essentials {...args} />
    </DefaultContexts>
  );
};

export const InteractiveExample: StoryFn<EssentialsProps> = Template.bind({});
InteractiveExample.args = {
  title: "Ea velit elit",
  analytics: {
    "data-analytics-section-engagement": "name: essentials section",
    "data-analytics-region": "essentials region",
    "data-analytics-gallery-id": "essentials-gallery",
  },
  sectionHeaderLink: {
    children: "Id do laborum",
    href: "#",
    analytics: {
      "data-analytics-title": "ea-velit",
    },
  },
  items: [
    {
      copy: "Excepteur commodo laboris in",
      header: "Sunt duis",
      images: Object.values(PENCIL_IMG_DATA),
      link: {
        children: "Sunt laborum",
        href: "#",
        analytics: {
          "data-analytics-title": "learn more - sunt duis",
        },
      },
      analytics: {
        "data-analytics-activitymap-region-id": "sunt duis region",
        "data-analytics-gallery-item-id": "gallery-item-1",
      },
    },
    {
      copy: "Irure aliquip adipisicing incididunt mollit irure.",
      header: "Tempor duis dolore",
      imagePinning: "center",
      images: Object.values(KEYBOARD_IMG_DATA),
      link: {
        children: "Mollit amet",
        href: "#",
        analytics: {
          "data-analytics-title": "learn more - sunt duis",
        },
      },
      textPosition: "bottom",
      analytics: {
        "data-analytics-activitymap-region-id": "tempor duis region",
        "data-analytics-gallery-item-id": "gallery-item-2",
      },
    },
  ],
};

export const Example: StoryFn<EssentialsProps> = Template.bind({});
Example.args = ESSENTIALS_MOMENT_DATA;
Example.parameters = { controls: { disable: true } };
Example.storyName = "iPad Essentials Moment";
