import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

// w
// import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import { DefaultContexts } from "src/stories/components/DefaultContexts";
// import sassData from "@/styles/shared/sasskitData.module.scss";

import type { AugmentProps } from "./Augment";
import { Augment } from "./Augment";
import { AUGMENT_MOMENT_DATA } from "./Augment.data";
// import { ResponsivePicture } from "@/components/ResponsivePicture/ResponsivePicture";

export default {
  title: "Sections/iPad Augment Moment",
  // parameters: {
  //   sourceCodeUrl:
  //     "https://interactive-git.apple.com/interactive-rome/ipad/tree/develop/components/moments/Augment",
  //   specUrl:
  //     "https://pages.github.pie.apple.com/marcom-frontend/collections-specs/sections/#s6",
  // },
} satisfies Meta<typeof Augment>;

const Template: StoryFn<AugmentProps> = (args) => (
  <DefaultContexts>
    <Augment {...args} />
  </DefaultContexts>
);

export const Example: StoryFn<AugmentProps> = Template.bind({});

Example.args = { ...AUGMENT_MOMENT_DATA };
Example.parameters = { controls: { disable: true } };
Example.storyName = "iPad Augment Moment";

// export const InteractiveExample: StoryFn<AugmentProps> = Template.bind({});

// InteractiveExample.args = {
//   title: "Cupidatat tempor.",
//   items: [
//     {
//       headline: "Consequat eiusmod deserunt.",
//       content: (
//         <>
//           <p>
//             Proident aute elit ullamco est dolor quis. Ex ex do dolore cillum
//             aliqua occaecat sit.
//           </p>
//           <ResponsivePicture
//             images={Object.values(IMAGE_DATA.tab1)}
//             layout="none"
//           />
//         </>
//       ),
//       images: Object.values(IMAGE_DATA.tab1),
//       analytics: {
//         "data-analytics-click": "prop3: opem consequat eiusmod deserunt",
//       },
//     },
//     {
//       headline: "Sit laborum anim.",
//       content: (
//         <>
//           <p>
//             Lorem ullamco commodo anim pariatur incididunt tempor amet sit
//             proident qui deserunt. Do exercitation in id id eiusmod magna aute
//             esse aliqua fugiat irure pariatur ea.
//           </p>
//           <ResponsivePicture
//             images={Object.values(IMAGE_DATA.tab1)}
//             layout="none"
//           />
//         </>
//       ),
//       images: Object.values(IMAGE_DATA.tab2),
//       analytics: {
//         "data-analytics-click": "prop3: opem sit laborum anim",
//       },
//     },
//   ],
//   analytics: {
//     "data-analytics-section-engagement": "name: augment section",
//     "data-analytics-region": "augment region",
//   },
// };
