import type { StoryFn } from "@storybook/react";
import type { PropsWithChildren } from "react";
import React, { useRef } from "react";

import { LoadImagesProvider } from "@/contexts/LoadImages/LoadImagesProvider";
import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import responsiveStyles from "@/styles/shared/responsive-content.module.scss";
import sassData from "@/styles/shared/sasskitData.module.scss";

import type { EssentialCardProps } from "../EssentialCard";
import { PENCIL_IMG_DATA } from "../imageData";

export const pencilImages = Object.values(PENCIL_IMG_DATA);

interface CardContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContainer = ({
  children,
  ...rest
}: PropsWithChildren<CardContainerProps>): JSX.Element => {
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

export const initialProps: EssentialCardProps = {
  images: pencilImages,
  copy: "Be ready when inspiration strikes.",
  header: "Pencil",
  link: {
    children: "Learn more",
    href: "#",
    analytics: { "data-analytics-title": "pencil" },
  },
};
const EssentialCardTemplate: StoryFn<PropsWithChildren> = (args) => (
  <CardContainer
    style={{
      display: "grid",
      gridTemplateColumns: "auto",
      maxWidth: "100%",
      width: "calc(50% - 40px)",
    }}
  >
    {args.children}
  </CardContainer>
);

export default EssentialCardTemplate;
