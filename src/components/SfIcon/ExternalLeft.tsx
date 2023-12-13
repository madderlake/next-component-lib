import { EXTERNAL_LEFT } from "./_Chars";
import type { SfIconProps } from "./BaseIcon";
import { BaseIcon } from "./BaseIcon";

export function ExternalLeft(props: SfIconProps): JSX.Element {
  return <BaseIcon char={EXTERNAL_LEFT} {...props} />;
}
