import { CHEVRON_LEFT } from "./_Chars";
import type { SfIconProps } from "./BaseIcon";
import { BaseIcon } from "./BaseIcon";

export function ChevronLeft(props: SfIconProps): JSX.Element {
  return <BaseIcon char={CHEVRON_LEFT} {...props} />;
}
