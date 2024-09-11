import type { Meta } from "@storybook/react";
import React from "react";

import { IconCardTermsModal } from "../IconCardTermsModal";
import Template, { defaultProps } from "./Template";

export default {
  title: "VisualDiffs/IconCardTermsModal/Default",
  component: IconCardTermsModal,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof IconCardTermsModal>;

// Scenario: Section has required elements (rdar://111416717)
export const Default = Template.bind({});
Default.args = {
  children: <IconCardTermsModal {...defaultProps} />,
};
