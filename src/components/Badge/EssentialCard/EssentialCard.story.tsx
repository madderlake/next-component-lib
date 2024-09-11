import type { Meta, StoryFn } from "@storybook/react";
import React, { useRef } from "react";

import { LoadImagesProvider } from "@/contexts/LoadImages/LoadImagesProvider";
import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import responsiveStyles from "@/styles/shared/responsive-content.module.scss";
import sassData from "@/styles/shared/sasskitData.module.scss";

import type { EssentialCardProps } from "./EssentialCard";
import { EssentialCard } from "./EssentialCard";
import { PENCIL_IMG_DATA } from "./imageData";

export default {
  title: "components/EssentialCard",
  component: EssentialCard,
  argTypes: {
    header: {
      type: "string",
    },
    copy: {
      type: "string",
    },
  },
} satisfies Meta<typeof EssentialCard>;

const pencilImages = Object.values(PENCIL_IMG_DATA);

interface CardContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContainer = ({
  children,
  ...rest
}: CardContainerProps): JSX.Element => {
  const containerRef = useRef(null);

  return (
    <SassKitViewportsProvider sassData={sassData}>
      <LoadImagesProvider containerRef={containerRef}>
        <div
          ref={containerRef}
          style={{
            backgroundColor: "gray",
            padding: "40px 0",
          }}
        >
          <div className={responsiveStyles.responsiveContent} {...rest}>
            {children}
          </div>
        </div>
      </LoadImagesProvider>
    </SassKitViewportsProvider>
  );
};

const Template: StoryFn<EssentialCardProps> = (
  args,
  { globals: { theme } },
) => (
  <CardContainer
    style={{
      display: "grid",
      gridTemplateColumns: "auto",
      maxWidth: "100%",
      width: "calc(50% - 40px)",
    }}
  >
    <EssentialCard {...args} theme={theme} images={pencilImages} />
  </CardContainer>
);

export const Example: StoryFn<EssentialCardProps> = Template.bind({});
Example.storyName = "EssentialCard";
Example.args = {
  badge: "Coming soon",
  copy: "Be ready when inspiration strikes.",
  header: "Pencil",
  imagePinning: "center",
  link: {
    children: "Learn more",
    href: "#",
    analytics: { "data-analytics-title": "pencil" },
  },
  textPosition: "top",
  analytics: { "data-analytics-activitymap-region-id": "pencil region" },
};
