export const getViewportWidth = (): number => {
  if (typeof window !== "undefined") {
    return Math.min(document.documentElement.clientWidth, window.innerWidth);
  }

  return 0;
};

export const getViewportHeight = (): number => {
  if (typeof window !== "undefined") {
    return Math.min(document.documentElement.clientWidth, window.innerWidth);
  }

  return 0;
};
