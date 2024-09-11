import classnames from "classnames";

import type { IconCardTableProps } from "@/components/IconCard/IconCardTable/IconCardTable";
import { IconCardTable } from "@/components/IconCard/IconCardTable/IconCardTable";
import type { MarcomLinkProps } from "@/components/MarcomLink/MarcomLink";
import { MarcomLink } from "@/components/MarcomLink/MarcomLink";
import typographyStyles from "@/styles/shared/typography.module.scss";

import modalStyles from "../../Modal/Modal.module.scss";
import type { IconCardModalProps } from "../IconCardModal";
import { IconCardModal } from "../IconCardModal";
import iconCardModalSharedStyles from "../IconCardModal.module.scss";
import styles from "./IconCardTableModal.module.scss";

export type IconCardTableModalProps = IconCardTableProps &
  IconCardModalProps & {
    inlineHeader: React.ReactNode;
    link?: MarcomLinkProps | undefined;
  };

export function IconCardTableModal({
  inlineHeader,
  link,
  columnALabel,
  columnBLabel,
  items,
  ...rest
}: IconCardTableModalProps): JSX.Element {
  return (
    <IconCardModal {...rest}>
      <p
        className={classnames(
          iconCardModalSharedStyles.inlineHeader,
          modalStyles.boldModalCopy
        )}
      >
        {inlineHeader}
      </p>

      <IconCardTable
        columnALabel={columnALabel}
        columnBLabel={columnBLabel}
        items={items}
        className={styles.iconCardTable}
      ></IconCardTable>
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
