import type { HTMLAttributes } from "react";

import type { GetViewportStylePropsProps } from "./getViewportStyleProps";
import { getViewportStyleProps } from "./getViewportStyleProps";

interface GetViewportCSSVarPropsProps
  extends Pick<
    GetViewportStylePropsProps<string>,
    "propMap" | "reverseOrderViewports"
  > {
  name: string;
  value?: string | Record<string, string> | undefined;
}

export const getViewportCSSVarProps = ({
  name,
  reverseOrderViewports,
  value,
  propMap,
}: GetViewportCSSVarPropsProps): HTMLAttributes<HTMLElement> => {
  if (value === undefined) {
    return {};
  }

  const objectValue:
    | Record<string, string>
    | Record<string, Record<string, string>> = {};

  if (typeof value === "string") {
    objectValue[name] = value;
  } else {
    for (const viewport in value) {
      if (Object.prototype.hasOwnProperty.call(value, viewport)) {
        objectValue[viewport] = { [name]: value[viewport] };
      }
    }
  }

  const { dataAttrs, style } = getViewportStyleProps({
    value: objectValue,
    reverseOrderViewports,
    propMap,
    varPrefix: "rp",
  });

  return { ...dataAttrs, style };
};
