import type { Dispatch, SetStateAction } from "react";
import React, { useContext, useEffect, useRef, useState } from "react";

import { WindowContext } from "@/contexts/Window/WindowContext";

import { StaggeredFadeIn } from "../StaggeredFadeIn/StaggeredFadeIn";
import styles from "./Gallery.module.scss";

function isVisible(el: HTMLLIElement, clientWidth: number): boolean {
  const bounds = el.getBoundingClientRect();

  return bounds.x > -1 * bounds.width && bounds.x < clientWidth;
}

export interface GalleryItemAnalytics {
  analytics: {
    "data-analytics-gallery-item-id": string;
  };
}

interface GalleryItemProps
  extends React.HTMLAttributes<HTMLLIElement>,
    GalleryItemAnalytics {
  animate: boolean;
  children: JSX.Element;
  itemIdx: number;
  last: boolean;
  setItemOffsets: Dispatch<SetStateAction<number[]>>;
  setLastItemTranslate: Dispatch<SetStateAction<number | null>>;
  dir?: "ltr" | "rtl";
}

// eslint-disable-next-line max-lines-per-function
export function GalleryItem({
  animate,
  children,
  itemIdx,
  last,
  setItemOffsets,
  setLastItemTranslate,
  dir = "ltr",
  analytics,
}: GalleryItemProps): JSX.Element {
  const itemRef = useRef<HTMLLIElement | null>(null);
  const [visible, setVisible] = useState<boolean | null>(null);
  const { clientWidth } = useContext(WindowContext);

  useEffect(() => {
    if (
      itemRef.current === null ||
      itemRef.current === undefined ||
      clientWidth === null
    ) {
      return;
    }

    setVisible(isVisible(itemRef.current, clientWidth));
  }, [itemRef, clientWidth]);

  // caches the offset value of the list item so that the
  // gallery can correctly animate to the correct location.
  // Because of the need for the scroll container to be full width
  // and the desire for the scroll snapping to happen "on grid" we
  // need to apply some funky transforms and padding to each item
  useEffect(() => {
    if (itemRef.current === null || itemRef.current === undefined) {
      return;
    }

    const style = getComputedStyle(itemRef.current);

    const itemWidth = itemRef.current.getBoundingClientRect().width;
    const matrix = new WebKitCSSMatrix(style.transform);
    const transX = matrix.m41;
    const offsetLeft: number = itemRef.current.offsetLeft;

    const offset =
      dir === "ltr"
        ? offsetLeft + transX
        : -1 * ((itemWidth + 20) * itemIdx - transX);

    setVisible(isVisible(itemRef.current, clientWidth));

    setItemOffsets((prev: number[]) => {
      const copy = [...prev];
      copy[itemIdx] = offset;

      return copy;
    });

    if (last) {
      const paddingInlineStart = parseInt(
        style.paddingInlineStart.replace("px", ""),
        10
      );
      setLastItemTranslate(transX - paddingInlineStart);
    }
  }, [
    dir,
    itemRef,
    itemIdx,
    setItemOffsets,
    last,
    setLastItemTranslate,
    clientWidth,
  ]);

  return (
    <li className={styles.galleryItem} ref={itemRef} {...analytics}>
      <StaggeredFadeIn animate={animate} itemIdx={itemIdx} visible={visible}>
        {children}
      </StaggeredFadeIn>
    </li>
  );
}
