import { ResponsivePicture } from "@/components/ResponsivePicture/ResponsivePicture";

import type { ImageAccordionProps } from "./ImageAccordion";
import { IMAGE_DATA } from "./imageData";

export const items: ImageAccordionProps["items"] = [
  {
    headline: (
      <>
        Start it on iPhone,
        <br />
        finish it on iPad.
      </>
    ),
    content: (
      <>
        <p>
          iPad works seamlessly with your iPhone. So the moments and ideas you
          capture on one are almost instantly available on the other. Snap a
          photo on your iPhone and add it to a presentation on your iPad. Or
          sketch a design on your iPad and have ready to share on your iPhone.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab1)}
          layout="none"
        />
      </>
    ),
    images: Object.values(IMAGE_DATA.tab1),
    analytics: {
      "data-analytics-click": "prop3: open ipad seamless",
      "data-analytics-title": "start on iphone finish on ipad",
    },
  },
  {
    headline: (
      <>
        Your dream workflow,
        <br />
        featuring Mac and iPad.
      </>
    ),
    content: (
      <>
        <p>
          Mac and iPad make the perfect partners for any creative workstation.
          Extend or mirror your Mac display onto your iPad with Sidecar. And use
          a single keyboard and mouse between your Mac and iPad with Universal
          Control.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab2)}
          layout="none"
        />
      </>
    ),
    images: Object.values(IMAGE_DATA.tab2),
    analytics: {
      "data-analytics-click": "prop3: open ipad dream workflow",
      "data-analytics-title": "dream workflow",
    },
  },
  {
    headline: (
      <>
        Achieve your goals with
        <br />
        Apple Watch and iPad.
      </>
    ),
    content: (
      <>
        <p>
          Paired with Apple Watch, iPad can be a powerful tool in your health
          and fitness journey. Sensors in your AppleWatch combine with advanced
          algorithms to give you metrics that motivate you in your Apple
          Fitness+ workouts, and you can see that data synced to your iPad in
          realtime.
        </p>
        <ResponsivePicture
          images={Object.values(IMAGE_DATA.tab3)}
          layout="none"
        />
      </>
    ),
    images: Object.values(IMAGE_DATA.tab3),
    analytics: {
      "data-analytics-click": "prop3: open ipad goals",
      "data-analytics-title": "paired with watch",
    },
  },
];
