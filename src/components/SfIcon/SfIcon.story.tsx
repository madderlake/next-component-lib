import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import type { BaseIconProps } from "./index";
import * as SfIcon from "./index";

export default { title: "components/SfIcon" } satisfies Meta<typeof SfIcon>;

type IconName = keyof typeof SfIcon;

const wrapperStyles = {
  backgroundColor: "#f5f5f7",
  margin: 10,
  padding: 20,
};

const gridStyles = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
};

const pStyles = {
  margin: "0 0 15px",
};

const Template: StoryFn<BaseIconProps> = (args, { globals: { direction } }) => {
  const icons = Object.keys(SfIcon) as IconName[];

  const normal = icons.filter(
    (name) => !name.includes("Bidi") && name !== "BaseIcon"
  );
  const bidi = icons.filter(
    (name) => name.includes("Bidi") && name !== "BaseIcon"
  );

  return (
    <div style={wrapperStyles}>
      <div dir="ltr" style={gridStyles}>
        {normal.map((name) => {
          const Component = SfIcon[name];

          return (
            <>
              <p style={pStyles}>
                <strong>{name}</strong>
              </p>
              <p style={pStyles}>
                <Component {...args} />
              </p>
            </>
          );
        })}
      </div>
      <h3 style={{ color: "#6e6e73", marginTop: 25 }}>
        Bidirectional icons ({direction.toUpperCase()})
      </h3>
      <div style={gridStyles}>
        {bidi.map((name) => {
          const Component = SfIcon[name];

          return (
            <>
              <p style={pStyles}>
                <strong>{name}</strong>
              </p>
              <p style={pStyles}>
                <Component {...args} />
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export const Example: StoryFn<BaseIconProps> = Template.bind({});
Example.storyName = "SfIcon";
