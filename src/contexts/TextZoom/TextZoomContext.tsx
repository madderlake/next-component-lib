import React from "react";

export interface TextZoomContextProps {
  zoomRatio: number | null;
}

export const TextZoomContext = React.createContext<TextZoomContextProps>({
  zoomRatio: null,
});
