import classnames from "classnames";

import type { MarcomLinkProps } from "@/components/MarcomLink/MarcomLink";
import { MarcomLink } from "@/components/MarcomLink/MarcomLink";
import typographyStyles from "@/styles/shared/typography.module.scss";

import modalStyles from "../../Modal/Modal.module.scss";
import type { IconCardModalProps } from "../IconCardModal";
import { IconCardModal } from "../IconCardModal";
import styles from "../IconCardModal.module.scss";

export interface IconCardTermsModalProps extends IconCardModalProps {
  inlineHeader: React.ReactNode;
  link?: MarcomLinkProps | undefined;
}

export function IconCardTermsModal({
  inlineHeader,
  link,
  ...rest
}: IconCardTermsModalProps): JSX.Element {
  return (
    <IconCardModal {...rest}>
      <p className={classnames(styles.inlineHeader, modalStyles.boldModalCopy)}>
        {inlineHeader}
      </p>

      {link !== undefined && (
        <p
          className={classnames(
            typographyStyles.skDefaultBodyCopy,
            styles.link
          )}
        >
          <MarcomLink {...link} />
        </p>
      )}
    </IconCardModal>
  );
}
