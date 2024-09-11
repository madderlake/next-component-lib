import type { StoryFn } from "@storybook/react";
import type { PropsWithChildren } from "react";
import React, { useRef } from "react";

import type { FeatureCardProps } from "@/components/FeatureCard/FeatureCard";
import { IMAGE_DATA } from "@/components/FeatureCard/imageData";
import { Modal } from "@/components/Modal/Modal";
import { ModalProvider } from "@/components/Modal/ModalProvider";
import { LoadImagesProvider } from "@/contexts/LoadImages/LoadImagesProvider";
import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import sassData from "@/styles/shared/sasskitData.module.scss";

const lightImages = Object.values(IMAGE_DATA.productivity);
export const initialProps: FeatureCardProps = {
  topicLabel: "Productivity",
  accessibilityText: "This is a headline",
  headline: "This is a headline",
  images: lightImages,
};
export const Template: StoryFn<PropsWithChildren> = (
  args
) => {
  const containerRef = useRef(null);

  return (
    <SassKitViewportsProvider sassData={sassData}>
      <LoadImagesProvider containerRef={containerRef}>
        <div
          ref={containerRef}
          style={{
            backgroundColor: "#F5F5F7",
            padding: "40px 1rem",
            display: "flex",
          }}
        >
          {args.children}
          <ModalProvider>
            <Modal topicLabel="Topic Label" headline="Headline">
              <span>Feature Card Content</span>
            </Modal>
          </ModalProvider>
        </div>
      </LoadImagesProvider>
    </SassKitViewportsProvider>
  );
};
