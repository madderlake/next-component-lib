import classnames from "classnames";

import "../../styles/shared/utilities.css";

import "./ColorIndicator.css";

export interface ColorIndicatorItemProps
  extends Omit<React.HTMLAttributes<HTMLLIElement>, "children"> {
  type: "swatch" | "picture" | "label";
  item: ColorItem;
}

export interface ColorItemSwatch {
  type: "swatch";
  src?: never;
  alt?: never;
  text?: never;
  color: string;
  name: string;
}

export interface ColorItemPicture {
  type: "picture";
  color?: never;
  text?: never;
  name?: never;
  src: string;
  alt: string;
}

export interface ColorItemLabel {
  type: "label";
  src?: never;
  alt?: never;
  color?: never;
  name?: never;
  text: string;
}

type ColorItem = ColorItemSwatch | ColorItemPicture | ColorItemLabel;

export function ColorIndicatorItem({
  item,
  className,
  type,
  ...rest
}: ColorIndicatorItemProps): JSX.Element {
  const { color, name, src, alt, text } = item;

  const swatchStyle =
    color !== undefined ? { backgroundColor: color } : undefined;

  className = classnames(className, "colorindicator-item", {
    "colorindicator-swatch": type !== "label",
    "colorindicator-label": type === "label",
  });

  return (
    <li className={className} style={swatchStyle} {...rest}>
      {type === "picture" && (
        <picture>
          <img src={src} alt={alt} />
        </picture>
      )}
      {type === "swatch" && <span className="visuallyhidden">{name}</span>}
      {type === "label" && text}
    </li>
  );
}
