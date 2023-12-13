/* eslint-disable max-lines-per-function */
import type { RefObject } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import type { PictureRefType } from "../Picture";

type LoadCallbackFn = (() => void) | undefined;

interface UseLoadingStateProps {
  shouldRenderImages: boolean;
  pictureRef: RefObject<PictureRefType>;
  onLoadStart: LoadCallbackFn;
  onLoad: LoadCallbackFn;
  onError: LoadCallbackFn;
}

interface UseLoadingStateResult {
  isLoading: boolean;
  onLoadStart: LoadCallbackFn;
  isLoaded: boolean;
  onLoad: LoadCallbackFn;
  isError: boolean;
  onError: LoadCallbackFn;
}

export const useLoadingState = ({
  shouldRenderImages,
  pictureRef,
  onLoadStart: onLoadStartArg,
  onLoad: onLoadArg,
  onError: onErrorArg,
}: UseLoadingStateProps): UseLoadingStateResult => {
  const isFirstRender = useRef<boolean>(true);
  const onLoadingCallbackRef = useRef<LoadCallbackFn | null>(null);
  const onLoadCallbackRef = useRef<LoadCallbackFn | null>(null);
  const onErrorCallbackRef = useRef<LoadCallbackFn | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  onLoadingCallbackRef.current = onLoadStartArg;
  onLoadCallbackRef.current = onLoadArg;
  onErrorCallbackRef.current = onErrorArg;

  // Image load reset callback
  const onLoadReset = useCallback((): void => {
    setIsLoading(false);
    setIsLoaded(false);
    setIsError(false);
  }, [setIsLoading, setIsLoaded, setIsError]);

  // Image load start callback
  const onLoadStart = useCallback((): void => {
    setIsLoading(true);
    setIsLoaded(false);
    setIsError(false);
  }, [setIsLoading, setIsLoaded, setIsError]);

  // Image load callback
  const onLoad = useCallback((): void => {
    setIsLoading(false);
    setIsLoaded(true);
    setIsError(false);
  }, [setIsLoading, setIsLoaded, setIsError]);

  // Image error callback
  const onError = useCallback((): void => {
    setIsLoading(false);
    setIsLoaded(false);
    setIsError(true);
  }, [setIsLoading, setIsLoaded, setIsError]);

  // Handle fn for images that are already loaded when src is set
  const handleCompleteImg = useCallback((): void => {
    if (
      pictureRef.current?.img !== null &&
      pictureRef.current?.img.currentSrc !== "" &&
      pictureRef.current?.img?.complete === true
    ) {
      onLoad();
    }
  }, [pictureRef, onLoad]);

  // Handle when shouldRenderImages changes
  useEffect(() => {
    if (!shouldRenderImages) {
      onLoadReset();
    }
  }, [shouldRenderImages, onLoadReset]);

  // Handle load events on already loaded images
  useEffect(() => {
    if (shouldRenderImages && isFirstRender.current) {
      isFirstRender.current = false;
      handleCompleteImg();
    }
  }, [shouldRenderImages, handleCompleteImg]);

  useEffect(() => {
    if (isLoading && typeof onLoadingCallbackRef.current === "function") {
      onLoadingCallbackRef.current();
    }
  }, [isLoading]);

  useEffect(() => {
    if (isLoaded && typeof onLoadCallbackRef.current === "function") {
      onLoadCallbackRef.current();
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isError && typeof onErrorCallbackRef.current === "function") {
      onErrorCallbackRef.current();
    }
  }, [isError]);

  return {
    isLoading,
    isLoaded,
    isError,
    onLoadStart,
    onLoad,
    onError,
  };
};
