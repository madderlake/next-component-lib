import classnames from "classnames";
import React from "react";

import responsiveStyle from "@/styles/shared/responsive-content.module.scss";
import typographyStyles from "@/styles/shared/typography.module.scss";

import styles from "./PageHeader.module.scss";

export interface PageHeaderProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  headingRef: React.Ref<HTMLHeadingElement>;
  descriptionRef: React.Ref<HTMLParagraphElement>;
  enhancedStyles?: string | undefined;
}

export function PageHeader({
  title,
  description,
  headingRef,
  descriptionRef,
  enhancedStyles,
}: PageHeaderProps): JSX.Element {
  return (
    <div
      className={classnames(
        styles.container,
        responsiveStyle.responsiveContent
      )}
    >
      <h1 ref={headingRef} className={classnames(styles.title, enhancedStyles)}>
        {title}
      </h1>

      {Boolean(description) && (
        <p
          className={classnames(typographyStyles.headline, enhancedStyles)}
          ref={descriptionRef}
        >
          {description}
        </p>
      )}
    </div>
  );
}
