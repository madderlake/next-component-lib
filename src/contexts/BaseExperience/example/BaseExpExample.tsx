import { useIsEnhanced } from "@/hooks/featureDetect/useIsEnhanced";

import styles from "./BaseExpSimple.module.scss";

export const BaseExpSimple = (): JSX.Element => {
  const shouldEnhance = useIsEnhanced();

  const enhancedStyling = shouldEnhance ? styles.enhanced : styles.base;

  return (
    <div className={`${enhancedStyling} ${styles.container}`}>
      {shouldEnhance ? "Enhanced" : "Static"}
    </div>
  );
};
