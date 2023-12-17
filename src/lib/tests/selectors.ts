import type { Screen } from "@testing-library/react";

export const selectModal = (screen: Screen): HTMLElement | null =>
  screen.queryByRole("apple-dialog", { hidden: true });
