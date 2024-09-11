import type { Meta } from "@storybook/react";
import React from "react";

import { Modal } from "../Modal";
import { initialProps, Template } from "./Template";

export default {
  title: "VisualDiffs/Modal/Default",
  component: Modal,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} as Meta<typeof Modal>;

// Scenario: Modal is required to have ... (rdar://112094754)
export const Default = Template.bind({});
Default.args = {
  children: (
    <Modal {...initialProps}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et egestas
        ex, id faucibus est. Vestibulum lobortis dui quis fermentum elementum.
        Nulla facilisi. Mauris lobortis, velit quis feugiat dapibus, tellus
        lorem vestibulum enim, ut tristique nunc dui et arcu. Praesent lobortis
        imperdiet ex, id eleifend arcu tempus ut.
      </p>
    </Modal>
  ),
};
