import { EXTERNAL_RIGHT } from "./_Chars";
import type { SfIconProps } from "./BaseIcon";
import { BaseIcon } from "./BaseIcon";

export function ExternalRight(props: SfIconProps): JSX.Element {
  return <BaseIcon char={EXTERNAL_RIGHT} {...props} />;
}
