import type { ModalProps } from "@/components/Modal/Modal";
import { Modal } from "@/components/Modal/Modal";
import type { ThemeProps } from "@/types/theme";

import styles from "./FeatureCardModal.module.scss";

export interface FeatureCardModalProps
  extends ThemeProps,
    Omit<
      ModalProps,
      "modalClassName" | "closeButtonClassName" | "overlayClassName"
    > {
      content: React.ReactNode;
    }

export function FeatureCardModal({
  content,
  ...rest
}: FeatureCardModalProps): JSX.Element {
  return (
    <Modal {...rest} modalClassName={styles.modal}>
      {content}
    </Modal>
  );
}
