import classnames from "classnames";
import React from "react";
import type { Props as ReactModalProps } from "react-modal";
import ReactModal from "react-modal";

import { Control } from "../Control/Control";
import styles from "./Modal.module.scss";
import type { ModalHeaderProps } from "./ModalHeader";
import { ModalHeader } from "./ModalHeader";
import { useModal } from "./useModal";

export interface ModalProps
  extends ModalHeaderProps,
    Pick<
      ReactModalProps,
      "children" | "closeTimeoutMS" | "role" | "shouldCloseOnOverlayClick"
    >,
    Pick<React.HTMLAttributes<HTMLElement>, "dir"> {
  ariaLabel?: string;
  isOpen?: ReactModalProps["isOpen"];
  modalClassName?: string;
  closeButtonClassName?: string;
  overlayClassName?: string;
  analytics?: {
    "data-analytics-activitymap-region-id": string;
    "data-analytics-title": string;
    "data-analytics-click": string;
  };
}

interface ModalCSSProperties extends React.CSSProperties {
  "--modal-close-timeout": string | number;
}

interface ModalCloseButtonProps extends React.HTMLAttributes<HTMLElement> {
  analytics?:
    | {
        "data-analytics-title": string;
        "data-analytics-click": string;
      }
    | undefined;
}

export function ModalCloseButton({
  className,
  analytics,
}: ModalCloseButtonProps): JSX.Element {
  const { setIsOpen } = useModal();

  return (
    <div className={styles.closeButtonContainer}>
      <Control
        aria-label="Close Modal"
        className={classnames(styles.closeButton, className)}
        onClick={() => setIsOpen(false)}
        as="button"
        icon="close"
        theme="dark"
        {...analytics}
      />
    </div>
  );
}

// eslint-disable-next-line max-lines-per-function
export function Modal({
  ariaLabel = "modal-headline",
  children,
  closeTimeoutMS = 400,
  modalClassName,
  closeButtonClassName,
  shouldCloseOnOverlayClick = true,
  overlayClassName,
  role,
  topicLabel,
  headline,
  analytics,
  dir,
  ...rest
}: ModalProps): JSX.Element {
  // TODO: set element to root (https://reactcommunity.org/react-modal/accessibility/)
  ReactModal.setAppElement("body");
  const { isOpen, setIsOpen } = useModal();

  const timeoutStyles: ModalCSSProperties = {
    "--modal-close-timeout": `${closeTimeoutMS}ms`,
  };

  const modalRootAnalytics =
    analytics !== undefined
      ? {
          "analytics-activitymap-region-id":
            analytics["data-analytics-activitymap-region-id"],
        }
      : undefined;

  const closeButtonAnalytics =
    analytics !== undefined
      ? {
          "data-analytics-title": analytics["data-analytics-title"],
          "data-analytics-click": analytics["data-analytics-click"],
        }
      : undefined;

  return (
    <ReactModal
      aria={{ labelledby: ariaLabel }}
      className={{
        base: classnames(styles.modal, modalClassName),
        afterOpen: "",
        beforeClose: "",
      }}
      style={{ overlay: timeoutStyles }}
      role={role}
      closeTimeoutMS={closeTimeoutMS}
      htmlOpenClassName={styles.hasModal}
      overlayClassName={{
        base: classnames(styles.modalOverlay, overlayClassName),
        afterOpen: styles.modalOpen,
        beforeClose: styles.modalClose,
      }}
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      preventScroll
      data={modalRootAnalytics}
      {...rest}
    >
      <>
        <div className={styles.modalContentContainer} dir={dir}>
          <ModalHeader topicLabel={topicLabel} headline={headline} />
          {children}
        </div>
        <ModalCloseButton
          className={closeButtonClassName}
          analytics={closeButtonAnalytics}
        />
      </>
    </ReactModal>
  );
}
