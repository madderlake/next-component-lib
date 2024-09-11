import classnames from "classnames";

import typographyStyles from "@/styles/shared/typography.module.scss";

import styles from "./Modal.module.scss";

export interface ModalHeaderProps {
  topicLabel: React.ReactNode;
  headline: React.ReactNode;
}

export function ModalHeader({
  topicLabel,
  headline,
}: ModalHeaderProps): JSX.Element {
  return (
    <>
      <h3
        className={classnames(typographyStyles.modalCopy, styles.boldModalCopy)}
      >
        {topicLabel}
      </h3>
      <p
        className={classnames(typographyStyles.modalHeadline, styles.headline)}
      >
        {headline}
      </p>
    </>
  );
}
