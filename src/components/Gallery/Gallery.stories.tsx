import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { Moment } from "@/components/Moment/Moment";

import { DefaultContexts } from "../../stories/components/DefaultContexts";
import type { GalleryProps } from "./Gallery";
import { Gallery } from "./Gallery";

export default {
  title: "components/Gallery",
  component: Gallery,
} satisfies Meta<typeof Gallery>;

function createGalleryItems(numItems: number): {
  items: JSX.Element[];
  itemAnalyticsIds: string[];
} {
  const items = [];
  const itemAnalyticsIds = [];
  for (let i = 0; i < numItems; i++) {
    items.push(
      <div key={i}>
        <div
          style={{
            width: "300px",
            height: "400px",
            background: "#666",
            textAlign: "center",
            lineHeight: "400px",
            fontSize: "80px",
            color: "#fff",
          }}
        >
          {i}
        </div>
      </div>
    );
    itemAnalyticsIds.push(`gallery-item-${i}`);
  }

  return { items, itemAnalyticsIds };
}

const Template: StoryFn<GalleryProps> = (props) => {
  const { items, itemAnalyticsIds } = createGalleryItems(6);

  return (
    <DefaultContexts>
      <Moment name="test-moment" title="test-moment" enhanced={true}>
        <Gallery {...props} itemAnalyticsIds={itemAnalyticsIds}>
          {items}
        </Gallery>
      </Moment>
    </DefaultContexts>
  );
};

export const Example: StoryFn<GalleryProps> = Template.bind({});
Example.args = {
  analytics: {
    "data-analytics-gallery-id": "example-gallery",
  },
};

const MinNumItemsTemplate: StoryFn<GalleryProps> = (props) => {
  const { items, itemAnalyticsIds } = createGalleryItems(3);

  return (
    <Moment name="test-moment" title="test title" enhanced={true}>
      <Gallery {...props} itemAnalyticsIds={itemAnalyticsIds}>
        {items}
      </Gallery>
    </Moment>
  );
};

export const MinNumItemsExample: StoryFn<GalleryProps> = MinNumItemsTemplate.bind({});
MinNumItemsExample.storyName = `Few gallery items`;
MinNumItemsExample.args = {
  analytics: {
    "data-analytics-gallery-id": "min-num-items-gallery",
  },
};

const OneItemTemplate: StoryFn<GalleryProps> = (props) => {
  return (
    <Moment name="test-moment" title="test title" enhanced={true}>
      <Gallery {...props} itemAnalyticsIds={["gallery-item"]}>
        <div
          style={{
            width: "800px",
            height: "400px",
            background: "#666",
            textAlign: "center",
            lineHeight: "400px",
            fontSize: "80px",
            color: "#fff",
          }}
        >
          0
        </div>
      </Gallery>
    </Moment>
  );
};

export const OneItemExample: StoryFn<GalleryProps> = OneItemTemplate.bind({});
OneItemExample.storyName = `One gallery item`;
OneItemExample.args = {
  analytics: {
    "data-analytics-gallery-id": "one-item-example-gallery",
  },
};
