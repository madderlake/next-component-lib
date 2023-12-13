import classNames from "classnames";
import { forwardRef, useState } from "react";

import type { ResponsivePictureImageProps } from "@/components/ResponsivePicture/ResponsivePicture";
import { useViewport } from "@/hooks/viewport/useViewport";

import type { AccordionItemProps } from "./AccordionItem/AccordionItem";
import { AccordionItem } from "./AccordionItem/AccordionItem";
import styles from "./ImageAccordion.module.scss";

export interface ItemData
  extends Pick<AccordionItemProps, "analytics" | "content" | "headline"> {
  images: ResponsivePictureImageProps[];
}

export type ImageAccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  items: ItemData[];
};

export const ImageAccordion = forwardRef<HTMLDivElement, ImageAccordionProps>(
  ({ items, className }, ref): JSX.Element => {
    const containerStyles = classNames(
      styles.imageAccordionContainer,
      className
    );
    const [openItems, setOpenItems] = useState<number[]>([0]);

    const viewport = useViewport();
    const isSmallViewport = viewport?.name.endsWith("small");

    // ensures only the last item opened will remain open
    // when switching from small viewports to large ones
    if (isSmallViewport !== true && openItems.length > 1) {
      setOpenItems([Math.max(...openItems)]);
    }

    // for XL-L-M viewports where only one item can be open at once
    const updateSingleOpenItem = (index: number): void => {
      const nextIndex = index + 1 < items.length ? index + 1 : 0;
      const indexToSet = openItems.includes(index) ? [nextIndex] : [index];
      setOpenItems(indexToSet);
    };

    // for S-XS viewports where multiple items can be open at once
    const updateMultiOpenItems = (index: number): void => {
      const nextIndex = index + 1 < items.length ? index + 1 : 0;
      // if last item is closed, the next one should open (minimum of one open item)
      if (openItems.includes(index) && openItems.length === 1) {
        setOpenItems([nextIndex]);
      } else {
        const indexesToSet = openItems.includes(index)
          ? [...openItems].filter((item) => item !== index)
          : [...openItems, index];
        setOpenItems(indexesToSet);
      }
    };

    const updateItems =
      isSmallViewport === true ? updateMultiOpenItems : updateSingleOpenItem;

    return (
      <div className={containerStyles} ref={ref}>
        <ul className={styles.accordion} role="list">
          {items.map(({ headline, content, analytics }, i) => (
            <AccordionItem
              key={i}
              index={i}
              analytics={analytics}
              content={content}
              headline={headline}
              updateItems={updateItems}
              isOpen={openItems.includes(i)}
            />
          ))}
        </ul>
      </div>
    );
  }
);

ImageAccordion.displayName = "ImageAccordion";
