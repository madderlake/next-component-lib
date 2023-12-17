import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import { useOrientation } from "@/hooks/viewport/useOrientation";
import { useRetina } from "@/hooks/viewport/useRetina";
import { useViewport } from "@/hooks/viewport/useViewport";
import sassData from "@/styles/shared/sasskitData.module.scss";

function ViewportsExample(): JSX.Element {
  const viewport = useViewport();
  const orientation = useOrientation();
  const retina = useRetina();
  const isRetinaLabel =
    retina === null ? "loading, not yet known" : retina ? "yes" : "no";

  return (
    <pre>
      <div>Viewport: {viewport?.name}</div>
      <div>Orientation: {orientation}</div>
      <div>Retina: {isRetinaLabel}</div>
    </pre>
  );
}

export default {
  title: "Components/ViewportsExample",
  component: ViewportsExample,
} satisfies Meta<typeof ViewportsExample>;

const Template: StoryFn<typeof ViewportsExample> = (args) => (
  <SassKitViewportsProvider sassData={sassData}>
    <ViewportsExample />
  </SassKitViewportsProvider>
);

export const Example = Template.bind({});
Example.storyName = "ViewportsExample";
