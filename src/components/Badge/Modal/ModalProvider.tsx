import { useState } from "react";

import { ModalContext } from "./useModal";

export interface ModalProviderProps {
  children?: React.ReactNode;
}

export const ModalProvider = ({
  children,
}: ModalProviderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ setIsOpen, isOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
