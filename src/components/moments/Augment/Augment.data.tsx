import { IMAGE_DATA } from "@/components/ImageAccordion/imageData";
import { ResponsivePicture } from "@/components/ResponsivePicture/ResponsivePicture";

import type { AugmentProps } from "./Augment";

export const AUGMENT_MOMENT_DATA: AugmentProps = {
  title: "Unlock the world of Apple",
  items: [
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
        "data-analytics-click": "prop3: open finish it on ipad",
        "data-analytics-title": "finish it",
        "data-analytics-activitymap-region-id": "augment ipad",
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
            Extend or mirror your Mac display onto your iPad with Sidecar. And
            use a single keyboard and mouse between your Mac and iPad with
            Universal Control.
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
        "data-analytics-activitymap-region-id": "augment ipad",
      },
    },
    {
      headline: (
        <>
          Achieve your goals with
          <br />
          Watch and iPad.
        </>
      ),
      content: (
        <>
          <p>
            Paired with Watch, iPad can be a powerful tool in your health and
            fitness journey. Sensors in your Watch combine with advanced
            algorithms to give you metrics that motivate you in your Fitness+
            workouts, and you can see that data synced to your iPad in realtime.
          </p>
          <ResponsivePicture
            images={Object.values(IMAGE_DATA.tab3)}
            layout="none"
          />
        </>
      ),
      images: Object.values(IMAGE_DATA.tab3),
      analytics: {
        "data-analytics-click": "prop3: open achieve you goals",
        "data-analytics-title": "achieve your goals",
        "data-analytics-activitymap-region-id": "augment ipad",
      },
    },
  ],
  analytics: {
    "data-analytics-section-engagement": "name: augment section",
    "data-analytics-region": "augment region",
  },
};
