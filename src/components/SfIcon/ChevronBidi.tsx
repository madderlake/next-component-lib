import { CHEVRON_LEFT, CHEVRON_RIGHT } from "./_Chars";
import type { SfIconProps } from "./BaseIcon";
import { BaseIconBidi } from "./BaseIconBidi";

export function ChevronBidi(props: SfIconProps): JSX.Element {
  return (
    <BaseIconBidi charLtr={CHEVRON_RIGHT} charRtl={CHEVRON_LEFT} {...props} />
  );
}
