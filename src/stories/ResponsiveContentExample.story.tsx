import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import { useViewport } from "@/hooks/viewport/useViewport";
import styles from "@/styles/shared/responsive-content.module.scss";
import sassData from "@/styles/shared/sasskitData.module.scss";

const veiwportColors: { [key: string]: string } = {
  xlarge: "orange",
  large: "yellow",
  medium: "green",
  small: "violet",
  xsmall: "pink",
};

function ViewportsExample(): JSX.Element {
  const viewport = useViewport();
  const viewportName = viewport?.name ?? "";

  return (
    <div className={styles.responsiveContent}>
      <div
        style={{
          width: "100%",
          height: "300px",
          textAlign: "center",
          backgroundColor: veiwportColors[viewportName],
        }}
      >
        <h2>Viewport {viewportName} </h2>
      </div>
    </div>
  );
}

export default {
  title: "Components/ResponsiveContentExample",
  component: ViewportsExample,
} satisfies Meta<typeof ViewportsExample>;

const Template: StoryFn<typeof ViewportsExample> = (args) => (
  <SassKitViewportsProvider sassData={sassData}>
    <ViewportsExample />
  </SassKitViewportsProvider>
);

export const Example = Template.bind({});
Example.storyName = "ResponsiveContentExample";
