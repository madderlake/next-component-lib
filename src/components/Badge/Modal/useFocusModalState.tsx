import type { Dispatch, SetStateAction } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import type { QueryStringAdapterSetOptions } from "@/contexts/QueryStringContext/types";
import { useFocusQueryString } from "@/hooks/queryString/useFocusQueryString";

export const useFocusModalState = (
  focusKey?: string
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [qsValue, setQSValue, clearQSValue] = useFocusQueryString();
  const [isOpen, setIsOpen] = useState(
    focusKey === undefined ? false : qsValue === focusKey
  );
  const initialStateWasOpen = useRef(isOpen);

  const setOpenCallback = useCallback<Dispatch<SetStateAction<boolean>>>(
    (val) => {
      // History entries should be added every time, unless
      // the app was initially started with this item open.
      // In that case, we should make the first action
      // replace the current history entry rather than
      // create a new one
      const options: QueryStringAdapterSetOptions = {
        history: !initialStateWasOpen.current,
      };
      initialStateWasOpen.current = false;

      if (val === true) {
        setQSValue(focusKey, options);

        return;
      }

      clearQSValue(options);
    },
    [focusKey, setQSValue, clearQSValue]
  );

  // Open the modal depending on the state of the modal QS
  useEffect(() => {
    if (qsValue === focusKey) {
      setIsOpen(true);

      return;
    }

    if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen, focusKey, qsValue, setIsOpen]);

  return [isOpen, setOpenCallback];
};
