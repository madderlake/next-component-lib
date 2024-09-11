import classnames from "classnames";

import type { ResponsivePictureProps } from "@/components/ResponsivePicture/ResponsivePicture";
import { ResponsivePicture } from "@/components/ResponsivePicture/ResponsivePicture";

import modalStyles from "../../Modal/Modal.module.scss";
import type { IconCardModalProps } from "../IconCardModal";
import { IconCardModal } from "../IconCardModal";
import styles from "../IconCardModal.module.scss";

export interface IconCardImageModalProps
  extends IconCardModalProps,
    Pick<ResponsivePictureProps, "images"> {
  inlineHeader: React.ReactNode;
}

export function IconCardImageModal({
  inlineHeader,
  images,
  ...rest
}: IconCardImageModalProps): JSX.Element {
  return (
    <IconCardModal {...rest}>
      <p className={classnames(styles.inlineHeader, modalStyles.boldModalCopy)}>
        {inlineHeader}
      </p>
      <div className={styles.image}>
        <ResponsivePicture images={images} objectFit="none" />
      </div>
    </IconCardModal>
  );
}
