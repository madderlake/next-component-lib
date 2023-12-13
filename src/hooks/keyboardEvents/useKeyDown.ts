import { useEffect } from "react";

export const useKeyDown = (
  key: string,
  fn: (evt: KeyboardEvent) => void
): void => {
  useEffect(() => {
    const handler = (e: KeyboardEvent): void => {
      if (e.key === key) {
        e.preventDefault();
        fn(e);
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [fn, key]);
};
