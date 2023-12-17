import type { SyntheticEvent } from "react";
import React, {
  Children,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import classnames from "classnames";

// import { debounce } from "@marcom/function-utils";

import { GalleryContext } from "@/contexts/Gallery/GalleryContext";
import { WindowContext } from "@/contexts/Window/WindowContext";
import { useTimeGroupContext } from "@/hooks/anim/useTimeGroupContext";
import { useKeyDown } from "@/hooks/keyboardEvents/useKeyDown";

import { GalleryItem } from "./GalleryItem";

import { PaddleNav } from "./PaddleNav/PaddleNav";

import styles from "./Gallery.module.scss";

function closest(needle: number, haystack: number[]): number {
  const value = haystack.reduce((a, b) => {
    const aDiff = Math.abs(a - needle);
    const bDiff = Math.abs(b - needle);

    if (aDiff === bDiff) {
      return a > b ? a : b;
    } else {
      return bDiff < aDiff ? b : a;
    }
  });

  return haystack.indexOf(value);
}

export interface Child extends JSX.Element {
  ref?: {
    current: HTMLLIElement | null;
  } | null;
}

export interface GalleryAnalytics {
  analytics: {
    "data-analytics-gallery-id": string;
  };
}

export interface GalleryProps
  extends React.HTMLAttributes<HTMLDivElement>,
    GalleryAnalytics {
  children: Child | Child[];
  dir?: "ltr" | "rtl";
  animate?: boolean;
  itemAnalyticsIds: string[];
}

interface AnimType {
  addTween: (el: HTMLElement, options: object) => void;
}

// eslint-disable-next-line max-lines-per-function
export function Gallery({
  children,
  dir = "ltr",
  animate = false,
  analytics,
  itemAnalyticsIds,
  ...rest
}: GalleryProps): JSX.Element {
  const galleryEl = useRef<HTMLDivElement | null>(null);
  const scrollContainerEl = useRef<HTMLDivElement | null>(null);
  const itemContainerEl = useRef<HTMLUListElement | null>(null);
  const id = useId();
  const analyticsId = analytics["data-analytics-gallery-id"];
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [currentScroll, setCurrentScroll] = useState<number>(0);
  const [maxScroll, setMaxScroll] = useState<number | null>(null);

  const [itemOffsets, setItemOffsets] = useState<number[]>([]);
  const [lastItemTranslate, setLastItemTranslate] = useState<number | null>(
    null
  );

  const [disablePrev, setDisablePrev] = useState<boolean>(true);
  const [disableNext, setDisableNext] = useState<boolean>(false);
  const { clientWidth, scrollY } = useContext(WindowContext);
  const { galleryObserve, galleryUnobserve, activeGalleryId } =
    useContext(GalleryContext);

  const [hidePaddles, setHidePaddles] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const animGroups = useTimeGroupContext();

  useKeyDown("ArrowRight", (e) => {
    if (isVisible && activeGalleryId === id) animateToItem(1, e);
  });

  useKeyDown("ArrowLeft", (e) => {
    if (isVisible && activeGalleryId === id) animateToItem(-1, e);
  });

  let handleScroll = (e: React.UIEvent): void => {
    const target = e.target as HTMLDivElement;
    const scroll = target.scrollLeft;
    setCurrentScroll(scroll);

    if (itemOffsets.length > 0) {
      const curr = closest(scroll, itemOffsets);
      setCurrentIdx(curr);
    }
  };

  // handleScroll = debounce(handleScroll, 200, {});

  // observe our gallery element with IntersctionObserver so
  // we can determine which gallery is the most in view
  useEffect(() => {
    if (
      galleryObserve === null ||
      galleryUnobserve === null ||
      galleryEl === null ||
      galleryEl.current == null
    ) {
      return;
    }

    const current = galleryEl.current;
    galleryObserve(current, id);

    return () => {
      galleryUnobserve(current, id);
    };
  }, [galleryEl, id]);

  // Currently just checking if the parent moment is visible
  // to determine whether or not the keyboard nav is enabled.
  // Later we may want to refine this so that only the most
  // visible/active section on the page receives the keyboard
  // events
  useEffect(() => {
    if (animGroups === null) {
      return;
    }

    const { scrollGroup } = animGroups;
    if (scrollGroup === undefined) return;

    setIsVisible(
      scrollY >= scrollGroup.viewableRange.a &&
        scrollY < scrollGroup.viewableRange.d
    );
  }, [animGroups, scrollY]);

  // caches the offsets of the gallery items as well as maxscroll
  useEffect(() => {
    if (
      scrollContainerEl === null ||
      itemContainerEl === null ||
      scrollContainerEl.current === null ||
      itemContainerEl.current === null ||
      clientWidth === 0 ||
      lastItemTranslate === null ||
      children === null
    ) {
      return;
    }

    itemContainerEl.current.style.width = "fit-content";
    const itemContainerWidth = itemContainerEl.current.offsetWidth;
    const adjustedContainerWidth =
      itemContainerWidth - Math.abs(lastItemTranslate);
    const scrollContainerWidth = scrollContainerEl.current.offsetWidth;

    const padEnd = parseInt(
      getComputedStyle(itemContainerEl.current).paddingInlineEnd.replace(
        "px",
        ""
      ),
      10
    );
    itemContainerEl.current.style.width = `${adjustedContainerWidth}px`;

    setMaxScroll(
      Math.floor(adjustedContainerWidth - scrollContainerWidth + padEnd)
    );
  }, [
    children,
    itemContainerEl,
    scrollContainerEl,
    clientWidth,
    lastItemTranslate,
    dir,
  ]);

  useEffect(() => {
    const hasMaxScroll = maxScroll !== null && maxScroll > 0;
    const hasChildren = Array.isArray(children);
    const onlyOneChild = hasChildren && children.length === 1;

    setHidePaddles(!hasMaxScroll || !hasChildren || onlyOneChild);
  }, [children, clientWidth, maxScroll]);

  // sets paddles enabled/disabled state
  useEffect(() => {
    if (
      maxScroll === null ||
      currentScroll === null ||
      lastItemTranslate === null
    ) {
      return;
    }

    const directionNormalizedCurrentScroll = Math.ceil(Math.abs(currentScroll));
    // account for scroll snap;
    const minScroll = 40;
    directionNormalizedCurrentScroll > minScroll
      ? setDisablePrev(false)
      : setDisablePrev(true);
    directionNormalizedCurrentScroll >= maxScroll
      ? setDisableNext(true)
      : setDisableNext(false);
  }, [maxScroll, currentScroll, lastItemTranslate]);

  function animateToItem(
    direction: -1 | 1,
    event?: SyntheticEvent | KeyboardEvent
  ): void {
    if (scrollContainerEl.current?.scrollLeft === null) return;
    setCurrentIdx((prevIdx) => (prevIdx === 0 ? prevIdx + direction : 0));

    const targetIdx = currentIdx >= 0 ? currentIdx + direction : 0;
    if (scrollContainerEl.current !== null)
      scrollContainerEl.current.scrollLeft = itemOffsets[targetIdx];
  }

  return (
    <div
      id={id}
      ref={galleryEl}
      className={styles.gallery}
      {...analytics}
      {...rest}
    >
      <div
        ref={scrollContainerEl}
        className={styles.scrollContainer}
        onScroll={handleScroll}
      >
        <ul ref={itemContainerEl} className={styles.itemContainer}>
          {Children.map(children, (child, idx) => {
            const last = idx === Children.toArray(children).length - 1;

            return (
              <GalleryItem
                key={idx}
                itemIdx={idx}
                setItemOffsets={setItemOffsets}
                setLastItemTranslate={setLastItemTranslate}
                animate={animate}
                last={last}
                dir={dir}
                analytics={{
                  "data-analytics-gallery-item-id": itemAnalyticsIds[idx],
                }}
              >
                {child}
              </GalleryItem>
            );
          })}
        </ul>
      </div>
      <PaddleNav
        onPrevClick={(e) => animateToItem(-1, e)}
        onNextClick={(e) => animateToItem(1, e)}
        disablePrevious={disablePrev}
        disableNext={disableNext}
        className={classnames(
          styles.paddleNav,
          hidePaddles && styles.hidePaddles
        )}
      />
    </div>
  );
}
