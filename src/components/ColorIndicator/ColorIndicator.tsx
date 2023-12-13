import classnames from "classnames";

import "./ColorIndicator.css";
import type { ColorIndicatorItemProps } from "./ColorIndicatorItem";
import { ColorIndicatorItem } from "./ColorIndicatorItem";

export interface ColorIndicatorProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  /** aria-label for the unordered list */
  ariaLabel?: string;
  /** array of items for the indicator */
  items: Array<ColorIndicatorItemProps["item"]>;
}

export function ColorIndicator({
  ariaLabel,
  className,
  items,
  ...rest
}: ColorIndicatorProps): JSX.Element {
  className = classnames("colorindicator", className);

  return (
    <div className={className} {...rest}>
      <ul className={"colorindicator-items"} aria-label={ariaLabel} role="list">
        {items.length > 0 &&
          items.map((item, index) => {
            return (
              <ColorIndicatorItem key={index} item={item} type={item.type} />
            );
          })}
      </ul>
    </div>
  );
}
