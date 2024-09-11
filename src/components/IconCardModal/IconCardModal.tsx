import type { ModalProps } from "@/components/Modal/Modal";
import { Modal } from "@/components/Modal/Modal";
import type { ThemeProps } from "@/types/theme";

export interface IconCardModalProps
  extends ThemeProps,
    Omit<
      ModalProps,
      "modalClassName" | "closeButtonClassName" | "overlayClassName"
    > {}

export function IconCardModal({
  children,
  ...rest
}: IconCardModalProps): JSX.Element {
  return <Modal {...rest}>{children}</Modal>;
}
