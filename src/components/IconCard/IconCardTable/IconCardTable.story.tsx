import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import type { IconCardTableProps } from "./IconCardTable";
import { IconCardTable } from "./IconCardTable";

export default {
  title: "components/IconCardTable",
  component: IconCardTable,
} satisfies Meta<typeof IconCardTable>;

const Template: StoryFn<IconCardTableProps> = (props) => {
  return <IconCardTable {...props} />;
};

export const Example = Template.bind({});
Example.storyName = "IconCardTable";
Example.args = {
  columnALabel: "Column Label Leading lorem ipsum dolor",
  columnBLabel: "Column Label Trailing",
  items: [
    {
      columnA: "Column item leading 0 lorem ipsum dolor",
      columnB: "Column item trailing 0",
    },
    { columnA: "Column item leading 1", columnB: "Column item trailing 1" },
    { columnA: "Column item leading 2", columnB: "Column item trailing 2" },
    { columnA: "Column item leading 3", columnB: "Column item trailing 3" },
  ],
};
