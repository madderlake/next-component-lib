// import Anim from "@marcom/anim-system";
import type { DependencyList } from "react";
import { useEffect, useRef } from "react";

// type OnReadyFunctionVoid = (AnimSystem: typeof Anim) => void;
type OnReadyFunctionWithCallback = () => //AnimSystem: typeof Anim
OnTeardownFunction;

// type OnReadyFunction = OnReadyFunctionVoid | OnReadyFunctionWithCallback;
type OnTeardownFunction = () => void;

interface UseAnimRef {
  // onReady: OnReadyFunction;
}

type UseAnimCallbackRef = OnTeardownFunction | undefined | null;

export const useAnim = (
  // onReady: OnReadyFunction,
  dependencies: DependencyList = []
): void => {
  // const ref = useRef<UseAnimRef>({ onReady });
  // ref.current = { onReady };

  useEffect(() => {
    let didDestroy = false;
    let didInit = false;
    let callbackFn: UseAnimCallbackRef = null;

    // Anim.initialize()
    //   .then(() => {
    //     if (didDestroy) {
    //       return;
    //     }

    //     const onReadyCallback = ref.current.onReady(Anim);
    //     if (typeof onReadyCallback === "function") {
    //       callbackFn = onReadyCallback;
    //     }
    //     didInit = true;
    //   })
    //   .catch((e: Error) => {
    //     throw e;
    //   });

    return () => {
      if (didInit) {
        if (typeof callbackFn === "function") {
          callbackFn();
        }
        callbackFn = null;
      }

      didDestroy = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependencies]);
};
