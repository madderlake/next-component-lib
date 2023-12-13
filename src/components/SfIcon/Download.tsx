import { DOWNLOAD } from "./_Chars";
import type { SfIconProps } from "./BaseIcon";
import { BaseIcon } from "./BaseIcon";

export function Download(props: SfIconProps): JSX.Element {
  return <BaseIcon char={DOWNLOAD} {...props} />;
}
