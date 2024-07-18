import type { MomentProps } from "@/components/Moment/Moment";
import { Moment } from "@/components/Moment/Moment";
import type { WelcomeVideoProps } from "@/components/WelcomeVideo/WelcomeVideo";
import { WelcomeVideo } from "@/components/WelcomeVideo/WelcomeVideo";
import { useIsEnhanced } from "@/hooks/featureDetect/useIsEnhanced";

import styles from "./Welcome.module.scss";

type RequiredTitleAndStatement = Required<
  Pick<MomentProps, "title" | "description" | "analytics">
>;

export interface WelcomeProps
  extends RequiredTitleAndStatement,
    Omit<WelcomeVideoProps, "enhanced" | "analytics"> {
  videoAnalytics: WelcomeVideoProps["analytics"];
}

export function Welcome({
  description,
  title,
  videoSrc,
  analytics,
  videoAnalytics,
  videoAriaLabel,
  controlAriaLabels,
  structuredData,
  fallbackImages,
  fallbackImgAlt
}: WelcomeProps): JSX.Element {
  const enhanced = useIsEnhanced();

  return (
    <Moment
      name="welcome-moment"
      title={title}
      description={description}
      headerAs="PageHeader"
      className={styles.section}
      enhanced={enhanced}
      {...analytics}
    >
      <WelcomeVideo
        videoSrc={videoSrc}
        enhanced={enhanced}
        analytics={videoAnalytics}
        videoAriaLabel={videoAriaLabel}
        controlAriaLabels={controlAriaLabels}
        structuredData={structuredData}
        fallbackImages={fallbackImages}
        fallbackImgAlt={fallbackImgAlt}
      />
    </Moment>
  );
}
