import classnames from "classnames";
import { Fragment } from "react";

import type { MarcomLinkProps } from "@/components/MarcomLink/MarcomLink";
import { MarcomLink } from "@/components/MarcomLink/MarcomLink";
import typographyStyles from "@/styles/shared/typography.module.scss";

import modalStyles from "../../Modal/Modal.module.scss";
import type { IconCardModalProps } from "../IconCardModal";
import { IconCardModal } from "../IconCardModal";
import styles from "../IconCardModal.module.scss";
import textModalStyles from "./IconCardTextModal.module.scss";

export interface IconCardTextModalProps extends IconCardModalProps {
  link?: MarcomLinkProps | undefined;
  textItems: TextItem[];
}
interface TextItem {
  inlineHeader: React.ReactNode;
  bodyCopy: React.ReactNode;
}

export function IconCardTextModal({
  textItems,
  link,
  ...rest
}: IconCardTextModalProps): JSX.Element {
  return (
    <IconCardModal {...rest}>
      {textItems.map((item, i) => {
        const { inlineHeader, bodyCopy } = item;

        return (
          <Fragment key={i}>
            <p
              className={classnames(
                styles.inlineHeader,
                textModalStyles.textModalInlineHeader,
                modalStyles.boldModalCopy
              )}
            >
              {inlineHeader}
            </p>
            <p
              className={classnames(
                typographyStyles.modalCopy,
                textModalStyles.modalCopy
              )}
            >
              {bodyCopy}
            </p>
          </Fragment>
        );
      })}

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
