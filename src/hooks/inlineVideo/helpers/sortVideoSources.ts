import type { InlineVideoSource } from "../useInlineVideo";

export const sortVideoSources = (
  source: InlineVideoSource[],
  target: string[]
): InlineVideoSource[] => {
  const result = source.sort((a, b) => {
    return target.indexOf(a.viewport) - target.indexOf(b.viewport);
  });

  return result;
};
