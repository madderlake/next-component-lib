import React from "react";

export interface WindowContextProps {
  clientHeight: number;
  clientWidth: number;
  scrollY: number;
}

export const WindowContext = React.createContext<WindowContextProps>({
  clientHeight: 0,
  clientWidth: 0,
  scrollY: 0,
});
