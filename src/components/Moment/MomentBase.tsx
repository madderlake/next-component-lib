import classnames from "classnames";
import React, { forwardRef, useImperativeHandle, useRef } from "react";

import type { PageHeaderProps } from "@/components/PageHeader/PageHeader";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import type { SectionProps } from "@/components/Section/Section";
import { Section } from "@/components/Section/Section";
import type { SectionHeaderProps } from "@/components/SectionHeader/SectionHeader";
import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import { LoadImagesProvider } from "@/contexts/LoadImages/LoadImagesProvider";
import type { ThemeProps } from "@/types/theme";

import styles from "./Moment.module.scss";
import type { MomentRefs } from "./types";

export type MomentBaseProps = ThemeProps &
  Omit<SectionProps, "title"> & {
    backgroundAlt?: boolean;
    /** Starting state for heading and statement/link elements when in enhanced state */
    enhancedStyles?: string;
    headerAs?: "PageHeader" | "SectionHeader";
    /** Prop that removes bottom padding for sections that contain the same color */
    noBottomPadding?: boolean;
  } & (
    | {
        headerAs: "PageHeader";
        title: PageHeaderProps["title"];
        description?: PageHeaderProps["description"];
        sectionHeaderLink?: never;
      }
    | {
        headerAs?: "SectionHeader";
        title: SectionHeaderProps["title"];
        description?: never;
        sectionHeaderLink?: SectionHeaderProps["link"];
      }
  );

export const MomentBase = forwardRef<MomentRefs, MomentBaseProps>(
  // eslint-disable-next-line max-lines-per-function
  (
    {
      title,
      description,
      children,
      sectionHeaderLink,
      analytics,
      backgroundAlt = false,
      enhancedStyles,
      theme,
      headerAs = "SectionHeader",
      noBottomPadding = false,
      ...rest
    },
    ref
  ): JSX.Element => {
    const containerRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);

    useImperativeHandle(
      ref,
      () => ({
        get containerRef() {
          return containerRef;
        },
        get headingRef() {
          return headingRef;
        },
        get descriptionRef() {
          return descriptionRef;
        },
      }),
      [headingRef, descriptionRef, containerRef]
    );

    const sectionStyles = classnames(
      styles.section,
      {
        [styles.backgroundAlt]: backgroundAlt,
      },
      {
        [styles.noBottomPadding]: noBottomPadding,
      }
    );

    return (
      <LoadImagesProvider containerRef={containerRef}>
        <Section
          className={sectionStyles}
          ref={containerRef}
          {...analytics}
          {...rest}
        >
          {headerAs === "SectionHeader" ? (
            <SectionHeader
              title={title}
              link={sectionHeaderLink}
              headingRef={headingRef}
              descriptionRef={descriptionRef}
              enhancedStyles={enhancedStyles}
            />
          ) : (
            <PageHeader
              title={title}
              description={description}
              headingRef={headingRef}
              descriptionRef={descriptionRef}
              enhancedStyles={enhancedStyles}
            />
          )}
          {children}
        </Section>
      </LoadImagesProvider>
    );
  }
);

MomentBase.displayName = "MomentBase";
