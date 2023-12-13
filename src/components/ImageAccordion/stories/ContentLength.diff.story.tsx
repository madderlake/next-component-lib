import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { ResponsivePicture } from "@/components/ResponsivePicture/ResponsivePicture";

import type { ImageAccordionProps } from "../ImageAccordion";
import { ImageAccordion } from "../ImageAccordion";
import { IMAGE_DATA } from "../imageData";
import { Template } from "./Template";

// Two items, two 1-line headlines: maximum of 16 lines of content
const items1: ImageAccordionProps["items"] = [
  {
    headline: <>Start it on iPhone</>,
    content: (
      <>
        <p>
          Mac and iPad make the perfect partners for any creative workstation.
          Extend or mirror your Mac display onto your iPad with Sidecar. And use
          a single keyboard and mouse between your Mac and iPad with Universal
          Control. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab1)}
          layout="none"
        />
      </>
    ),
    images: Object.values(IMAGE_DATA.tab1),
    analytics: {
      "data-analytics-click": "prop3: open ipad seamless",
    },
  },
  {
    headline: <>Your dream workflow</>,
    content: (
      <>
        <p>
          Mac and iPad make the perfect partners for any creative workstation.
          Extend or mirror your Mac display onto your iPad with Sidecar. And use
          a single keyboard and mouse between your Mac and iPad with Universal
          Control. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab2)}
          layout="none"
        />
      </>
    ),
    images: Object.values(IMAGE_DATA.tab2),
    analytics: {
      "data-analytics-click": "prop3: open ipad workflow",
    },
  },
];

// Two items, one 1-line headline and one 2-line headline: maximum of 14 lines of content
const items2: ImageAccordionProps["items"] = [
  {
    headline: <>Start it on iPhone</>,
    content: (
      <>
        <p>
          Mac and iPad make the perfect partners for any creative workstation.
          Extend or mirror your Mac display onto your iPad with Sidecar. And use
          a single keyboard and mouse between your Mac and iPad with Universal
          Control. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab1)}
          layout="none"
        />
      </>
    ),
    images: Object.values(items1[0].images),
    analytics: items1[0].analytics,
  },
  {
    headline: (
      <>
        Your dream workflow,
        <br />
        featuring Mac and iPad.
      </>
    ),
    content: (
      <>
        <p>
          Mac and iPad make the perfect partners for any creative workstation.
          Extend or mirror your Mac display onto your iPad with Sidecar. And use
          a single keyboard and mouse between your Mac and iPad with Universal
          Control. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab2)}
          layout="none"
        />
      </>
    ),
    images: Object.values(items1[1].images),
    analytics: items1[1].analytics,
  },
];

// Two items, two 2-line headlines: maximum of 13 lines of content
const items3: ImageAccordionProps["items"] = [
  {
    headline: (
      <>
        Start it on iPhone,
        <br />
        finish it on iPad.
      </>
    ),
    content: (
      <>
        <p>
          Mac and iPad make the perfect partners for any creative workstation.
          Extend or mirror your Mac display onto your iPad with Sidecar. And use
          a single keyboard and mouse between your Mac and iPad with Universal
          Control. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab1)}
          layout="none"
        />
      </>
    ),
    images: Object.values(items1[0].images),
    analytics: items1[0].analytics,
  },
  {
    headline: (
      <>
        Your dream workflow,
        <br />
        featuring Mac and iPad.
      </>
    ),
    content: (
      <>
        <p>
          Mac and iPad make the perfect partners for any creative workstation.
          Extend or mirror your Mac display onto your iPad with Sidecar. And use
          a single keyboard and mouse between your Mac and iPad with Universal
          Control. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab2)}
          layout="none"
        />
      </>
    ),
    images: Object.values(items1[1].images),
    analytics: items1[1].analytics,
  },
];

// Three items, three 1-line headlines: maximum of 12 lines of content
const items4: ImageAccordionProps["items"] = [
  {
    headline: <>Start it on iPhone</>,
    content: (
      <>
        <p>
          Mac and iPad make the perfect partners for any creative workstation.
          Extend or mirror your Mac display onto your iPad with Sidecar. And use
          a single keyboard and mouse between your Mac and iPad with Universal
          Control. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab1)}
          layout="none"
        />
      </>
    ),
    images: items1[0].images,
    analytics: items1[0].analytics,
  },
  {
    headline: <>Your dream workflow</>,
    content: (
      <>
        <p>
          Mac and iPad make the perfect partners for any creative workstation.
          Extend or mirror your Mac display onto your iPad with Sidecar. And use
          a single keyboard and mouse between your Mac and iPad with Universal
          Control. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab2)}
          layout="none"
        />
      </>
    ),
    images: Object.values(items1[1].images),
    analytics: items1[1].analytics,
  },
  {
    headline: <>Achieve your goals</>,
    content: (
      <>
        <p>
          Paired with Apple Watch, iPad can be a powerful tool in your health
          and fitness journey. Sensors in your AppleWatch combine with advanced
          algorithms to give you metrics that motivate you in your Apple
          Fitness+ workouts, and you can see that data synced to your iPad in
          realtime. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab3)}
          layout="none"
        />
      </>
    ),
    images: Object.values(IMAGE_DATA.tab3),
    analytics: {
      "data-analytics-click": "prop3: open ipad goals",
    },
  },
];

// Three items, two 1-line headlines, one 2-line headline: maximum of 11 lines of content
const items5: ImageAccordionProps["items"] = [
  {
    headline: <>Start it on iPhone</>,
    content: (
      <>
        <p>
          Mac and iPad make the perfect partners for any creative workstation.
          Extend or mirror your Mac display onto your iPad with Sidecar. And use
          a single keyboard and mouse between your Mac and iPad with Universal
          Control. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab1)}
          layout="none"
        />
      </>
    ),
    images: Object.values(items1[0].images),
    analytics: items1[0].analytics,
  },
  {
    headline: <>Your dream workflow</>,
    content: (
      <>
        <p>
          Mac and iPad make the perfect partners for any creative workstation.
          Extend or mirror your Mac display onto your iPad with Sidecar. And use
          a single keyboard and mouse between your Mac and iPad with Universal
          Control. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab2)}
          layout="none"
        />
      </>
    ),
    images: Object.values(items1[1].images),
    analytics: items1[1].analytics,
  },
  {
    headline: (
      <>
        Achieve your goals with
        <br />
        Apple Watch and iPad.
      </>
    ),
    content: (
      <>
        <p>
          Paired with Apple Watch, iPad can be a powerful tool in your health
          and fitness journey. Sensors in your AppleWatch combine with advanced
          algorithms to give you metrics that motivate you in your Apple
          Fitness+ workouts, and you can see that data synced to your iPad in
          realtime. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab3)}
          layout="none"
        />
      </>
    ),
    images: Object.values(items4[2].images),
    analytics: items4[2].analytics,
  },
];

// Three items, one 1-line headline, two 2-line headlines: maximum of 10 lines of content
const items6: ImageAccordionProps["items"] = [
  {
    headline: <>Start it on iPhone</>,
    content: (
      <>
        <p>
          Mac and iPad make the perfect partners for any creative workstation.
          Extend or mirror your Mac display onto your iPad with Sidecar. And use
          a single keyboard and mouse between your Mac and iPad with Universal
          Control. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab1)}
          layout="none"
        />
      </>
    ),
    images: items1[0].images,
    analytics: items1[0].analytics,
  },
  {
    headline: (
      <>
        Your dream workflow,
        <br />
        featuring Mac and iPad.
      </>
    ),
    content: (
      <>
        <p>
          Mac and iPad make the perfect partners for any creative workstation.
          Extend or mirror your Mac display onto your iPad with Sidecar. And use
          a single keyboard and mouse between your Mac and iPad with Universal
          Control. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab2)}
          layout="none"
        />
      </>
    ),
    images: Object.values(items1[1].images),
    analytics: items1[1].analytics,
  },
  {
    headline: (
      <>
        Achieve your goals with
        <br />
        Apple Watch and iPad.
      </>
    ),
    content: (
      <>
        <p>
          Paired with Apple Watch, iPad can be a powerful tool in your health
          and fitness journey. Sensors in your AppleWatch combine with advanced
          algorithms to give you metrics that motivate you in your Apple
          Fitness+ workouts, and you can see that data synced to your iPad in
          realtime. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab3)}
          layout="none"
        />
      </>
    ),
    images: items4[2].images,
    analytics: items4[2].analytics,
  },
];

// Three items, three 2-line headlines: maximum of 8 lines of content
const items7: ImageAccordionProps["items"] = [
  {
    headline: (
      <>
        Start it on iPhone,
        <br />
        finish it on iPad.
      </>
    ),
    content: (
      <>
        <p>
          Mac and iPad make the perfect partners for any creative workstation.
          Extend or mirror your Mac display onto your iPad with Sidecar. And use
          a single keyboard and mouse between your Mac and iPad with Universal
          Control. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab1)}
          layout="none"
        />
      </>
    ),
    images: items1[0].images,
    analytics: items1[0].analytics,
  },
  {
    headline: (
      <>
        Your dream workflow,
        <br />
        featuring Mac and iPad.
      </>
    ),
    content: (
      <>
        <p>
          Mac and iPad make the perfect partners for any creative workstation.
          Extend or mirror your Mac display onto your iPad with Sidecar. And use
          a single keyboard and mouse between your Mac and iPad with Universal
          Control. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab2)}
          layout="none"
        />
      </>
    ),
    images: Object.values(items1[1].images),
    analytics: items1[1].analytics,
  },
  {
    headline: (
      <>
        Achieve your goals with
        <br />
        Apple Watch and iPad.
      </>
    ),
    content: (
      <>
        <p>
          Paired with Apple Watch, iPad can be a powerful tool in your health
          and fitness journey. Sensors in your AppleWatch combine with advanced
          algorithms to give you metrics that motivate you in your Apple
          Fitness+ workouts, and you can see that data synced to your iPad in
          realtime. Lorem ipsum dolor sit amet.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab3)}
          layout="none"
        />
      </>
    ),
    images: items4[2].images,
    analytics: items4[2].analytics,
  },
];

export default {
  title: "VisualDiffs/ImageAccordion/ContentLength",
  component: ImageAccordion,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof ImageAccordion>;

// Scenario: Accordion with two accordion items should accommodate a maximum amount of text content (rdar://108963462)
export const two1LineHeadlines: StoryFn<ImageAccordionProps> = Template.bind({});
two1LineHeadlines.args = {
  items: items1,
};

two1LineHeadlines.storyName = "Two 1-Line Headlines";

// Scenario: Accordion with two accordion items should accommodate a maximum amount of text content (rdar://108963462)
export const one1LineHeadlineOne2LineHeadline: StoryFn<ImageAccordionProps> = Template.bind({});
one1LineHeadlineOne2LineHeadline.args = {
  items: items2,
};

one1LineHeadlineOne2LineHeadline.storyName = "One 1-Line Headline, One 2-line Headline";

// Scenario: Accordion with two accordion items should accommodate a maximum amount of text content (rdar://108963462)
export const two2LineHeadlines: StoryFn<ImageAccordionProps> = Template.bind({});
two2LineHeadlines.args = {
  items: items3,
};

two2LineHeadlines.storyName = "Two 2-line Headlines";

// Scenario: Accordion with three accordion items should accommodate a maximum amount of text content (rdar://115899748)
export const three1LineHeadlines: StoryFn<ImageAccordionProps> = Template.bind({});
three1LineHeadlines.args = {
  items: items4,
};

three1LineHeadlines.storyName = "Three 1-line Headlines";

// Scenario: Accordion with three accordion items should accommodate a maximum amount of text content (rdar://115899748)
export const two1LineHeadlinesOne2LineHeadline: StoryFn<ImageAccordionProps> = Template.bind({});
two1LineHeadlinesOne2LineHeadline.args = {
  items: items5,
};

two1LineHeadlinesOne2LineHeadline.storyName = "Two 1-line Headlines, One 2-line Headline";

// Scenario: Accordion with three accordion items should accommodate a maximum amount of text content (rdar://115899748)
export const one1LineHeadlineTwo2LineHeadlines: StoryFn<ImageAccordionProps> = Template.bind({});
one1LineHeadlineTwo2LineHeadlines.args = {
  items: items6,
};

one1LineHeadlineTwo2LineHeadlines.storyName = "One 1-line Headline, Two 2-line Headlines";

// Scenario: Accordion with three accordion items should accommodate a maximum amount of text content (rdar://115899748)
export const three2LineHeadlines: StoryFn<ImageAccordionProps> = Template.bind({});
three2LineHeadlines.args = {
  items: items7,
};

three2LineHeadlines.storyName = "Three 2-line Headlines";
