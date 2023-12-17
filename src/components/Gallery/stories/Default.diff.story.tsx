import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { Moment } from "@/components/Moment/Moment";

import { DefaultContexts } from "../../../stories/components/DefaultContexts";
import type { GalleryProps } from "../Gallery";
import { Gallery } from "../Gallery";

export default {
  title: "VisualDiffs/Gallery/Default",
  component: Gallery,
} satisfies Meta<typeof Gallery>;

function createGalleryItems(numItems: number): JSX.Element[] {
  const items = [];
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
  }

  return items;
}

const Template: StoryFn<GalleryProps> = (props) => {
  const items = createGalleryItems(6);

  return (
    <DefaultContexts>
      <Moment name="test-moment" title="test-moment" enhanced={true}>
        <Gallery {...props}>{items}</Gallery>
      </Moment>
    </DefaultContexts>
  );
};

// Scenario: Gallery default state requires 2 or more GalleryItems and a PaddleNav rdar://112089891
export const Default: StoryFn<GalleryProps> = Template.bind({});
Default.args = {
  analytics: {
    "data-analytics-gallery-id": "example-gallery",
  },
};
