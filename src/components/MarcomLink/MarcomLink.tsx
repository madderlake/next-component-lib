import type { StandardsLinkProps } from "../StandardsLink/StandardsLink";
import { StandardsLink } from "../StandardsLink/StandardsLink";

export interface MarcomLinkProps extends Omit<StandardsLinkProps, "rel"> {
  analytics: {
    "data-analytics-title": string;
    "data-analytics-exit-link"?: true;
  };
  ariaLabel?: string;
  href: string;
  nofollow?: boolean;
}

export function MarcomLink({
  analytics,
  ariaLabel,
  children,
  nofollow = false,
  ...rest
}: MarcomLinkProps): JSX.Element {
  return (
    <StandardsLink
      rel={nofollow ? "nofollow" : undefined}
      {...analytics}
      {...rest}
      ariaLabel={ariaLabel}
    >
      {children}
    </StandardsLink>
  );
}
