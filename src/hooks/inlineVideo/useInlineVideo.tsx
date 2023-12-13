import type React from "react";
import { useContext, useEffect, useState } from "react";

import { ViewportContext } from "../../contexts/Viewport/ViewportContext";
import { getNearestViewport } from "../viewport/helpers/getNearestViewport";
import { useRetina } from "../viewport/useRetina";
import { useViewport } from "../viewport/useViewport";
import { sortVideoSources } from "./helpers/sortVideoSources";

interface useInlineVideoType {
  video: HTMLVideoElement | null;
  play: () => void;
  pause: () => void;
  setTime: (time: number) => void;
  updateProgress: (progress: number) => void;
  isPlaying: boolean;
  setIsPlaying: (state: boolean) => void;
  hasLoaded: boolean;
  loadingError: boolean;
  onCanPlay: () => void;
  onError: () => void;
  onEnded: () => void;
  src: string;
  duration: number;
  progress: number;
}

export interface InlineVideoSource {
  src: string;
  viewport: string;
  density: number;
  width?: number;
  height?: number;
}

export type InlineVideoSources = InlineVideoSource[];

/**
 * The `useInlineVideo` hook provides a convenient way to play videos inline.
 * Not recommend to use for interactions that require sound to be available.
 *
 *
 */
// eslint-disable-next-line max-lines-per-function
export const useInlineVideo = (
  /** An array of video sources for each viewport and pixel density combination */
  videoRef: React.RefObject<null | HTMLVideoElement>,
  /** `ref` to a video element that will be controlled and updated by the `videoController` */
  sources: InlineVideoSources
): useInlineVideoType => {
  const { viewportsOrder, viewports } = useContext(ViewportContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState(false);
  const [src, setSrc] = useState<string>("");
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const video = videoRef.current;
  const isAutoplay = video?.hasAttribute("autoplay");
  const isRetina = useRetina();
  const currentViewport = useViewport();

  useEffect(() => {
    const videoDensity = isRetina !== null ? 2 : 1;

    // Ensure that the data sorting matches viewportOrder (smallest to largest)
    const sortedViewports = sortVideoSources(sources, viewportsOrder);

    // Get available video sources for each viewport
    const viewportsToWatch = [
      ...new Set(sortedViewports.map((source) => source.viewport)),
    ];

    let videoSrc: InlineVideoSource | undefined;

    if (currentViewport?.name !== undefined) {
      const targetViewportName = viewportsToWatch.includes(currentViewport.name)
        ? currentViewport.name
        : undefined;

      const nearestViewport = getNearestViewport({
        currentViewportName: currentViewport.name,
        targetViewportName,
        orderedViewportNames: viewportsToWatch,
        allOrderedViewportNames: viewportsOrder,
        viewports,
      });

      if (nearestViewport !== null) {
        // Use the nearest available viewport source only if it's larger
        // than the current viewport (-1 is the exception for xlarge)
        videoSrc =
          viewportsOrder.indexOf(currentViewport.name) - 1 <=
          viewportsOrder.indexOf(nearestViewport.name)
            ? sources.find(
                (source) =>
                  // Use 1x if 2x is unavailable
                  (source.viewport === nearestViewport.name &&
                    source.density === videoDensity) ||
                  source.viewport === nearestViewport.name
              )
            : undefined;
      }
    }

    setSrc(videoSrc !== undefined ? videoSrc.src : "");

    // Named function so we can remove it later.
    const getDuration = (e: Event): void => {
      const target = e.target as HTMLMediaElement;

      if (isNaN(duration)) return;
      setDuration(target.duration);
    };

    // Duration is available on canplay.
    video?.addEventListener("canplay", getDuration);

    return () => {
      video?.removeEventListener("canplay", getDuration);
    };
  }, [
    currentViewport,
    isRetina,
    sources,
    viewports,
    viewportsOrder,
    video,
    duration,
  ]);

  const play = (): void => {
    setIsPlaying(true);
  };
  const pause = (): void => {
    setIsPlaying(false);
  };

  const onCanPlay = (): void => {
    setHasLoaded(true);
    if (isAutoplay === true) {
      setIsPlaying(true);
    }
  };

  const onError = (): void => {
    setLoadingError(true);
  };

  const onEnded = (): void => {
    setIsPlaying(false);
  };

  useEffect(() => {
    isPlaying ? video?.play() : video?.pause();
  }, [isPlaying, video]);

  const setTime = (time: number): void => {
    setIsPlaying(false);
    if (video !== null) {
      video.currentTime = time;
    }
  };

  // Calculate the video progress and save it to state.
  useEffect(() => {
    let rafId: number;
    if (video === null || !isPlaying) {
      return;
    }

    const run = (): void => {
      const current = video?.currentTime;
      if (current === undefined) return;

      setProgress(current / duration);

      rafId = window.requestAnimationFrame(run);
    };
    requestAnimationFrame(run);

    // hack to fix bug where current time is not always accurate.
    const timeUpdate = (): void => {
      const current = video?.currentTime;
      if (current === undefined) return;

      setProgress((prev) => {
        if (current === duration) {
          return 1;
        }

        return prev;
      });
    };
    video?.addEventListener("timeupdate", timeUpdate);

    return () => {
      cancelAnimationFrame(rafId);
      video?.removeEventListener("timeupdate", timeUpdate);
    };
  }, [duration, isPlaying, setProgress, video]);

  const updateProgress = (newProgress: number): void => {
    setIsPlaying(false);
    if (video !== null) {
      video.currentTime = video.duration * newProgress;
      setProgress(newProgress);
    }
  };

  return {
    video,
    play,
    pause,
    setTime,
    updateProgress,
    isPlaying,
    setIsPlaying,
    hasLoaded,
    loadingError,
    onCanPlay,
    onError,
    onEnded,
    src,
    duration,
    progress,
  };
};
