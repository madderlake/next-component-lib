import { forwardRef } from "react";

export type SectionProps = React.HTMLAttributes<HTMLElement> & {
  analytics?: {
    "data-analytics-section-engagement": string;
    "data-analytics-region"?: string;
  };
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, analytics, ...rest }, ref): JSX.Element => {
    return (
      <section ref={ref} {...analytics} {...rest}>
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
