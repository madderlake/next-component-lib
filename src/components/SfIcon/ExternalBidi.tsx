import { EXTERNAL_LEFT, EXTERNAL_RIGHT } from "./_Chars";
import type { SfIconProps } from "./BaseIcon";
import { BaseIconBidi } from "./BaseIconBidi";

export function ExternalBidi(props: SfIconProps): JSX.Element {
  return (
    <BaseIconBidi charLtr={EXTERNAL_RIGHT} charRtl={EXTERNAL_LEFT} {...props} />
  );
}
