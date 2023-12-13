import type { Meta, StoryFn } from "@storybook/react";
import type { CSSProperties } from "react";
import React, { useEffect, useRef } from "react";

import { useScrollGroup } from "@/hooks/anim/useScrollGroup";

import type { ScrollGroupProviderProps } from "./ScrollGroupProvider";
import { ScrollGroupProvider } from "./ScrollGroupProvider";

const scrollBoxStyles: CSSProperties = {
  height: "350px",
  width: "20%",
  borderRadius: "15px",
  backgroundColor: "salmon",
  transform: "translateY(-200px)",
};
const animationContainerStyles: CSSProperties = {
  minHeight: "900px",
  height: "150vh",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

const ScrollContextExample = (): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  const anim = useScrollGroup();

  useEffect(() => {
    if (anim === null) return;

    const { scrollGroup, scrollGroupRef } = anim;
    if (
      scrollGroup === null ||
      scrollGroupRef.current === null ||
      ref.current === null
    )
      return;
    console.log(scrollGroup);

    const keyframe = scrollGroup.addKeyframe(ref.current, {
      start: `a0t - 10vh`,
      end: "a0b - 10vh",
      opacity: [0.5, 1],
      y: [null, "300px"],
      rotationZ: [null, 180],
      anchors: [scrollGroupRef.current, ref.current],
      ease: 0.3,
    });

    return () => {
      keyframe.remove().catch((e) => {
        throw e;
      });
    };
  }, [ref, anim]);

  return <div ref={ref} style={scrollBoxStyles}></div>;
};

export default {
  title: "contexts/ScrollGroupProvider",
  component: ScrollContextExample,
  argTypes: {},
} satisfies Meta<typeof ScrollContextExample>;

const Template: StoryFn<ScrollGroupProviderProps> = (props) => (
  <ScrollGroupProvider
    name="scroll-group-context-1"
    Tag={"section"}
    style={animationContainerStyles}
    className="MyCoolSection"
  >
    <ScrollContextExample />
    <ScrollContextExample />
  </ScrollGroupProvider>
);

export const Basic = Template.bind({});
