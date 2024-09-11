import { useFocusModalState } from "./useFocusModalState";
import { ModalContext } from "./useModal";

export interface QueryStringModalProviderProps {
  focusKey?: string;
  children?: React.ReactNode;
}

export const QueryStringModalProvider = ({
  focusKey,
  children,
}: QueryStringModalProviderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useFocusModalState(focusKey);

  return (
    <ModalContext.Provider value={{ setIsOpen, isOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
