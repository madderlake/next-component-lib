import { IMAGE_DATA } from "@/components/FeatureCard/imageData";

import type { ConsiderProps } from "./Consider";

export const CONSIDER_MOMENT_DATA: ConsiderProps = {
  title: "Get to know iPad",
  analytics: {
    "data-analytics-section-engagement": "name: consider section",
    "data-analytics-region": "consider region",
    "data-analytics-gallery-id": "consider-gallery",
  },
  queryStringKey: "consider-moment",
  items: [
    {
      topicLabel: "productivity",
      headline: (
        <>
          Get things done easily.
          <br />
          Organize effortlessly.
        </>
      ),
      images: Object.values(IMAGE_DATA.productivity),
      objectPosition: "center bottom",
      textZoomBackgroundColor: "rgba(254, 229, 187, 0.88)",
      accessibilityText: "",
      analytics: {
        "data-analytics-gallery-item-id": "gallery-item-productivity",
      },
      modal: {
        topicLabel: "Topic label #1",
        headline: "Feature Card modal headline",
        content: (
          <h1>Feature Card modal #1</h1>
        )
      }
    },
    {
      topicLabel: "creativity",
      headline: (
        <>
          Draw, design, produce <br /> music, and more.
        </>
      ),
      images: Object.values(IMAGE_DATA.creativity),
      objectPosition: "center bottom",
      textZoomBackgroundColor: "rgba(103, 165, 176, 0.8)",
      accessibilityText: "",
      analytics: {
        "data-analytics-gallery-item-id": "gallery-item-creativity",
      },
      modal: {
        topicLabel: "Topic label #2",
        headline: "Feature Card modal headline",
        content: (
          <h1>Feature Card modal #2</h1>
        )
      }
    },
    {
      topicLabel: "apple pencil",
      headline: (
        <>
          Take notes, mark up, and <br /> create with Apple Pencil.
        </>
      ),
      images: Object.values(IMAGE_DATA.pencil),
      objectPosition: "center bottom",
      textZoomBackgroundColor: "rgba(255, 99, 71, 0.88)",
      accessibilityText: "",
      analytics: {
        "data-analytics-gallery-item-id": "gallery-item-apple-pencil",
      },
      modal: {
        topicLabel: "Topic label #3",
        headline: "Feature Card modal headline",
        content: (
          <h1>Feature Card modal #3</h1>
        )
      }
    },
    {
      topicLabel: "learning",
      headline: (
        <>
          Discover interesting
          <br />
          new ways to work.
        </>
      ),
      images: Object.values(IMAGE_DATA.learning),
      objectPosition: "center bottom",
      textZoomBackgroundColor: "rgba(252, 242, 235, 0.88)",
      accessibilityText: "",
      analytics: {
        "data-analytics-gallery-item-id": "gallery-item-learning",
      },
      modal: {
        topicLabel: "Topic label #4",
        headline: "Feature Card modal headline",
        content: (
          <h1>Feature Card modal #4</h1>
        )
      }
    },
    {
      topicLabel: "productivity",
      headline: (
        <>
          Get things done easily.
          <br />
          Organize effortlessly.
        </>
      ),
      images: Object.values(IMAGE_DATA.productivity),
      objectPosition: "center bottom",
      textZoomBackgroundColor: "rgba(254, 229, 187, 0.88)",
      accessibilityText: "",
      analytics: {
        "data-analytics-gallery-item-id": "gallery-item-productivity-2",
      },
      modal: {
        topicLabel: "Topic label #5",
        headline: "Feature Card modal headline",
        content: (
          <h1>Feature Card modal #5</h1>
        )
      }
    },
    {
      topicLabel: "creativity",
      headline: (
        <>
          Draw, design, produce <br /> music, and more.
        </>
      ),
      images: Object.values(IMAGE_DATA.creativity),
      objectPosition: "center bottom",
      textZoomBackgroundColor: "rgba(103, 165, 176, 0.8)",
      accessibilityText: "",
      analytics: {
        "data-analytics-gallery-item-id": "gallery-item-creativity-2",
      },
      modal: {
        topicLabel: "Topic label #6",
        headline: "Feature Card modal headline",
        content: (
          <h1>Feature Card modal #6</h1>
        )
      }
    },
    {
      topicLabel: "apple pencil",
      headline: (
        <>
          Take notes, mark up, and <br /> create with Apple Pencil.
        </>
      ),
      images: Object.values(IMAGE_DATA.pencil),
      objectPosition: "center bottom",
      textZoomBackgroundColor: "rgba(255, 99, 71, 0.88)",
      accessibilityText: "",
      analytics: {
        "data-analytics-gallery-item-id": "gallery-item-apple-pencil-2",
      },
      modal: {
        topicLabel: "Topic label #7",
        headline: "Feature Card modal headline",
        content: (
          <h1>Feature Card modal #7</h1>
        )
      }
    },
    {
      topicLabel: "learning",
      headline: (
        <>
          Discover interesting
          <br />
          new ways to work.
        </>
      ),
      images: Object.values(IMAGE_DATA.learning),
      objectPosition: "center bottom",
      textZoomBackgroundColor: "rgba(252, 242, 235, 0.88)",
      accessibilityText: "",
      analytics: {
        "data-analytics-gallery-item-id": "gallery-item-learning-2",
      },
      modal: {
        topicLabel: "Topic label #8",
        headline: "Feature Card modal headline",
        content: (
          <h1>Feature Card modal #8</h1>
        )
      }
    },
  ],
};
