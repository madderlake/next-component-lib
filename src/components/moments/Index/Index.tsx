import type { MomentProps } from "@/components/Moment/Moment";
import { Moment } from "@/components/Moment/Moment";
import { useIsEnhanced } from "@/hooks/featureDetect/useIsEnhanced";
import responsiveStyle from "@/styles/shared/responsive-content.module.scss";

import type { IndexProps } from "../../Index/Index";
import { Index } from "../../Index/Index";

type RequiredTitle = Required<Pick<MomentProps, "title" | "analytics">>;
type MomentPadding = Pick<MomentProps, "noBottomPadding">;

export interface IndexSectionProps extends RequiredTitle, MomentPadding {
  indexData: IndexProps;
}

export function IndexSection({
  indexData,
  title,
  analytics,
  noBottomPadding,
}: IndexSectionProps): JSX.Element {
  const enhanced = useIsEnhanced();

  return (
    <Moment
      name="index-section"
      title={title}
      enhanced={enhanced}
      noBottomPadding={noBottomPadding}
      {...analytics}
    >
      <div className={responsiveStyle.responsiveContent}>
        <Index {...indexData} />
      </div>
    </Moment>
  );
}
