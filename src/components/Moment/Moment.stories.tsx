import type { Meta, StoryFn } from "@storybook/react";
import React, { useEffect, useRef } from "react";

import { BaseExperienceProvider } from "@/contexts/BaseExperience/BaseExperienceProvider";
//import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import { useTimeGroupContext } from "@/hooks/anim/useTimeGroupContext";
//import sassData from "@/styles/shared/sasskitData.module.scss";

import type { MomentProps } from "./Moment";
import { Moment } from "./Moment";
import { MOVE_DURATION, OPACITY_DURATION } from "./MomentEnhanced";

function AnimatedContent({
  children,
  ...rest
}: React.HTMLAttributes<HTMLElement>): JSX.Element {
  const elRef = useRef<HTMLDivElement>(null);

  const Anim = useTimeGroupContext();

  useEffect(() => {
    if (Anim === null) return;
    const { timeGroup, childStartTime, startDelay } = Anim;
    const start = childStartTime + startDelay;

    const opacityKf = {
      start,
      end: start + OPACITY_DURATION,
      opacity: [null, 1],
    };
    const moveKf = {
      start,
      end: start + MOVE_DURATION,
      y: [null, 0],
    };
    timeGroup.addKeyframe(elRef.current, opacityKf);
    timeGroup.addKeyframe(elRef.current, moveKf);
  }, [elRef, Anim]);

  return (
    <div
      ref={elRef}
      {...rest}
      style={{
        backgroundColor: "#ddd",
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "pre",
        flexShrink: 0,
        opacity: 0,
        transform: "translateY(50px)",
        ...rest.style,
      }}
    >
      {children}
    </div>
  );
}

export default {
  title: "components/Moment",
  component: Moment,
  argTypes: {},
} satisfies Meta<typeof Moment>;

const Template: StoryFn<MomentProps> = (props: MomentProps) => (
  // <SassKitViewportsProvider sassData={sassData}>
  <BaseExperienceProvider>
    <Moment {...props}>
      <AnimatedContent>Section content goes here</AnimatedContent>
    </Moment>
  </BaseExperienceProvider>
  // </SassKitViewportsProvider>
);

export const Basic = Template.bind({});
const basicArgs: MomentProps = {
  name: "moment-basic",
  title: "Explore the lineup",
  enhanced: true,
};
Basic.args = basicArgs;
Basic.argTypes = {
  description: { table: { disable: true } },
  // These props must be used together or not at all.
  // A second story handles these props.
  sectionHeaderLink: { table: { disable: true } },
};

export const WithLink = Template.bind({});
const linkArgs: MomentProps = {
  name: "moment-link",
  sectionHeaderLink: {
    children: "All accessories",
    href: "#",
    analytics: {
      "data-analytics-title": "moment-link",
    },
  },
  title: "iPad essentials",
  headerAs: "SectionHeader",
  enhanced: true,
};
WithLink.args = linkArgs;
WithLink.argTypes = {
  description: { table: { disable: true } },
};

export const asPageHeader = Template.bind({});
const asPageHeaderArgs: MomentProps = {
  title: "iPad",
  name: "moment-custom-heading",
  description: "Your next computer\nis not a computer",
  headerAs: "PageHeader",
  enhanced: true,
};
asPageHeader.args = asPageHeaderArgs;
asPageHeader.argTypes = {
  sectionHeaderLink: { table: { disable: true } },
};
