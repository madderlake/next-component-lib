import classnames from "classnames";
import { useRef } from "react";

import typographyStyles from "@/styles/shared/typography.module.scss";

import styles from "../ImageAccordion.module.scss";
import { AccordionIcon } from "./AccordionIcon";

export interface AccordionItemProps
  // TODO: The "content" value isn't something that should exist on li elements,
  // so this might be a bug in React's HTMLAttributes.
  extends Omit<React.HTMLAttributes<HTMLLIElement>, "content"> {
  analytics: {
    "data-analytics-click": string;
    "data-analytics-title"?: string;
    "data-analytics-activitymap-region-id"?: string;
  };
  content: React.ReactNode;
  headline: React.ReactNode;
  index: number;
  isOpen: boolean;
  updateItems: (param: number) => void;
}

/* eslint-disable max-lines-per-function */
export function AccordionItem({
  analytics,
  content,
  headline,
  index = 0,
  isOpen,
  updateItems,
}: AccordionItemProps): JSX.Element {
  const trayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const trayStyle = trayRef.current?.style;

  const setHeight = (): void => {
    const contentHeight = contentRef.current?.scrollHeight;
    trayStyle !== undefined &&
      contentHeight !== undefined &&
      (trayStyle.height = isOpen ? `${contentHeight}px` : "0px");
  };

  // make sure accordion tray makes enough space for content
  setHeight();

  // callback to parent which updates current open items
  const handleClick = (): void => {
    updateItems(index);
  };

  const itemPrefix = "accordion-item";
  const trayId = `${itemPrefix}-${index}-tray`;
  const buttonId = `${itemPrefix}-${index}-button`;

  return (
    <li
      className={classnames(styles.accordionItem, {
        [styles.collapsed]: !isOpen,
      })}
    >
      <h3 className={typographyStyles.headline}>
        <button
          id={buttonId}
          className={styles.accordionButton}
          aria-controls={trayId}
          role="presentation"
          {...analytics}
          data-analytics-intrapage-link=""
          onClick={handleClick}
        >
          <span className={styles.accordionTitleText}>{headline}</span>
          <AccordionIcon />
        </button>
      </h3>
      <div
        id={trayId}
        ref={trayRef}
        className={styles.accordionTray}
        aria-labelledby={index !== undefined ? buttonId : ""}
        style={{
          height:
            trayRef.current?.style.height !== undefined
              ? trayRef.current?.style.height
              : 0,
        }}
      >
        <div
          className={classnames(
            styles.accordionContent,
            typographyStyles.skDefaultBodyCopy
          )}
          ref={contentRef}
        >
          {content}
        </div>
      </div>
    </li>
  );
}
