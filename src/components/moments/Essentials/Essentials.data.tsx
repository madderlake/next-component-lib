import {
  KEYBOARD_IMG_DATA,
  PENCIL_IMG_DATA,
} from "@/components/EssentialCard/imageData";

import type { EssentialsProps } from "./Essentials";

const pencilImages = Object.values(PENCIL_IMG_DATA);
const keyboardImages = Object.values(KEYBOARD_IMG_DATA);

export const ESSENTIALS_MOMENT_DATA: EssentialsProps = {
  title: "iPad essentials",
  analytics: {
    "data-analytics-section-engagement": "name: essentials section",
    "data-analytics-region": "essentials region",
    "data-analytics-gallery-id": "essentials-gallery",
  },
  sectionHeaderLink: {
    children: "All accessories",
    href: "#",
    analytics: {
      "data-analytics-title": "all-accessories",
    },
  },
  items: [
    {
      copy: "Be ready when inspiration strikes.",
      header: "Apple Pencil",
      images: pencilImages,
      link: {
        children: "Learn more",
        href: "#",
        analytics: { "data-analytics-title": "learn more - apple pencil" },
      },
      analytics: {
        "data-analytics-activitymap-region-id": "apple pencil",
        "data-analytics-gallery-item-id": "gallery-item-apple-pencil",
      },
    },
    {
      copy: "Keyboards that have you covered.",
      header: "iPad Keyboards",
      imagePinning: "center",
      images: keyboardImages,
      link: {
        children: "Learn more",
        href: "#",
        analytics: { "data-analytics-title": "learn more - ipad keyboards" },
      },
      textPosition: "bottom",
      analytics: {
        "data-analytics-activitymap-region-id": "ipad keyboards",
        "data-analytics-gallery-item-id": "gallery-item-ipad-keywords",
      },
    },
  ],
};
