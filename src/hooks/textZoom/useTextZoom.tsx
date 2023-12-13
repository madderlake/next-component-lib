import { useContext, useEffect, useState } from "react";

import { TextZoomContext } from "@/contexts/TextZoom/TextZoomContext";

export const useTextZoom = (threshold = 1.25): boolean => {
  const { zoomRatio } = useContext(TextZoomContext);
  const [textIsZoomed, setTextIsZoomed] = useState<boolean>(false);

  useEffect(() => {
    if (zoomRatio !== null) {
      setTextIsZoomed(zoomRatio > threshold);
    }
  }, [zoomRatio, threshold]);

  return textIsZoomed;
};
