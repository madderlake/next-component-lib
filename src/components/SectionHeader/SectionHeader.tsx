import classnames from "classnames";
import React from "react";
import type { MarcomLinkProps } from "@/components/MarcomLink/MarcomLink";
import { MarcomLink } from "@/components/MarcomLink/MarcomLink";
import responsiveStyle from "@/styles/shared/responsive-content.module.scss";
// import typographyStyles from "@/styles/shared/typography.module.scss";
import styles from "./SectionHeader.module.scss";

export interface SectionHeaderProps {
  link?: MarcomLinkProps | undefined;
  title: React.ReactNode;
  headingRef?: React.Ref<HTMLHeadingElement>;
  descriptionRef?: React.Ref<HTMLParagraphElement>;
  enhancedStyles?: string | undefined;
}

export function SectionHeader({
  title,
  link,
  headingRef,
  descriptionRef,
  enhancedStyles,
}: SectionHeaderProps): JSX.Element {
  return (
    <div
      className={classnames(
        styles.container,
        responsiveStyle.responsiveContent
      )}
    >
      <h2 ref={headingRef} className={classnames(styles.title, enhancedStyles)}>
        {title}
      </h2>

      {link !== undefined && (
        <p
          className={classnames(styles.description, enhancedStyles)}
          ref={descriptionRef}
        >
          <MarcomLink
            href={link.href}
            analytics={link.analytics}
            nofollow={link.nofollow ?? false}
            ariaLabel={link.ariaLabel}
          >
            {link.children}
          </MarcomLink>
        </p>
      )}
    </div>
  );
}
