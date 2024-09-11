import { createContext, useContext } from "react";

import type { ModalProps } from "./Modal";

interface ModalContextState {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextState>({
  isOpen: false,
  setIsOpen: () => {},
});

export interface ModalProviderProps extends ModalProps {
  children?: React.ReactNode;
}

export function useModal(): ModalContextState {
  return useContext(ModalContext);
}
