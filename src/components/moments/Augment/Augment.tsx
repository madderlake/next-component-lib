import type { ImageAccordionProps } from "@/components/ImageAccordion/ImageAccordion";
import type { MomentProps } from "@/components/Moment/Moment";
import { Moment } from "@/components/Moment/Moment";
import { AugmentAccordion } from "@/components/moments/Augment/AugmentAccordion";
import { useIsEnhanced } from "@/hooks/featureDetect/useIsEnhanced";

type RequiredTitle = Required<Pick<MomentProps, "title">>;

type MomentAnalytics = Required<Pick<MomentProps, "analytics">>;
export type AugmentProps = RequiredTitle &
  MomentAnalytics & {
    items: ImageAccordionProps["items"];
  };

export function Augment({
  items,
  title,
  analytics,
}: AugmentProps): JSX.Element {
  const enhanced = useIsEnhanced();

  return (
    <Moment
      name="augment-moment"
      title={title}
      enhanced={enhanced}
      analytics={analytics}
    >
      <AugmentAccordion items={items} animate={enhanced} />
    </Moment>
  );
}
