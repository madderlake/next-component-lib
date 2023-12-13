import type { ScreenPropKeys, ScreenPropsObject } from "@/types/Viewport";

import { autoprefixQuery } from "./autoprefixQuery";

// For validation
const KNOWN_PROPS = new Set<ScreenPropKeys>([
  "inverted-colors",
  "landscape",
  "portrait",
  "retina",
]);

const deserializeStr = (str: string): string => {
  return str.replace(/['|"]/g, "");
};

export const getSassKitScreenProps = (sassKitProps: {
  [prop: string]: string;
}): ScreenPropsObject => {
  const result: Partial<ScreenPropsObject> = {};
  let propsLen = 0;
  for (const key in sassKitProps) {
    if (Object.prototype.hasOwnProperty.call(sassKitProps, key)) {
      const typedKey = key as ScreenPropKeys;
      if (!KNOWN_PROPS.has(typedKey)) {
        throw new TypeError(
          `SassKit prop "${typedKey}" is not a known supported property of SassKitViewportPropKeys`
        );
      }

      const query = deserializeStr(sassKitProps[typedKey]);
      result[typedKey] = {
        name: typedKey,
        settings: { query: autoprefixQuery(typedKey, query) },
      };
      propsLen++;
    }
  }

  // Ensure that we've added the full list of props that is expected
  if (propsLen !== KNOWN_PROPS.size) {
    throw new TypeError(
      `Incorrect SassKit props returned. Expected "${Array.from(
        KNOWN_PROPS
      ).join(", ")}", got "${Object.keys(result).join(", ")}"`
    );
  }

  // Iterate through ViewportProps to ensure all requirements are met before returning
  return result as ScreenPropsObject;
};
