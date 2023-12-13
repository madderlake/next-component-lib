import { CHEVRON_RIGHT } from "./_Chars";
import type { SfIconProps } from "./BaseIcon";
import { BaseIcon } from "./BaseIcon";

export function ChevronRight(props: SfIconProps): JSX.Element {
  return <BaseIcon char={CHEVRON_RIGHT} {...props} />;
}
