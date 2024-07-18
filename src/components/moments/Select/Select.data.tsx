import type { ColorIndicatorProps } from "@/components/ColorIndicator/ColorIndicator";
import { IMAGE_DATA } from "@/components/ProductTile/imageData";

import type { SelectProps } from "./Select";

export interface ColorItems {
  [key: string]: ColorIndicatorProps["items"];
}

const CTA_DATA = {
  primaryCTA: {
    children: "Learn More",
    href: "#",
    analytics: { "data-analytics-title": "ipad air learn more" },
    ariaLabel: "primary cta",
  },
  secondaryCTA: {
    children: "Buy",
    href: "#",
    analytics: { "data-analytics-title": "ipad air buy" },
    ariaLabel: "secondary cta",
  },
};

const COLOR_ITEMS: ColorItems = {
  iPadPro: [
    { type: "swatch", color: "lightgrey", name: "Silver" },
    { type: "swatch", color: "darkgrey", name: "Graphite" },
  ],
  iPadAir: [
    { type: "swatch", color: "gold", name: "Gold" },
    { type: "swatch", color: "darkgrey", name: "Graphite" },
  ],
  iPadMini: [
    { type: "swatch", color: "#cc0000", name: "ProductRed" },
    { type: "swatch", color: "darkgrey", name: "Graphite" },
  ],
  iPad_9gen: [
    { type: "swatch", color: "lightgrey", name: "Silver" },
    { type: "swatch", color: "darkgrey", name: "Graphite" },
  ],
  iPad_10gen: [
    { type: "swatch", color: "lightgrey", name: "Silver" },
    { type: "swatch", color: "purple", name: "Purple" },
  ],
};

export const SELECT_MOMENT_PROPS: SelectProps = {
  title: "Explore the lineup",
  analytics: {
    "data-analytics-gallery-id": "select-gallery",
    "data-analytics-section-engagement": "name: select section",
    "data-analytics-region": "select region",
  },
  sectionHeaderLink: {
    children: "Compare all",
    href: "#",
    analytics: {
      "data-analytics-title": "compare-all",
    },
  },
  items: [
    {
      heading: "iPad Pro",
      badge: "New",
      copy: "The ultimate iPad experience, featuring the most advanced technology.",
      pricing: "From $799 or $66.58/mo. for 12 mo.*",
      images: Object.values(IMAGE_DATA.iPadPro),
      colorItems: COLOR_ITEMS.iPadPro,
      analytics: {
        "data-analytics-activitymap-region-id": "ipad pro",
        "data-analytics-gallery-item-id": "gallery-item-ipad-pro",
      },
      ...CTA_DATA,
    },
    {
      heading: "iPad Air",
      copy: "Powerful features packed into a portable all-screen design.",
      pricing: "From $599 or $49.91/mo. for 12 mo.*",
      images: Object.values(IMAGE_DATA.iPadAir),
      colorItems: COLOR_ITEMS.iPadAir,
      analytics: {
        "data-analytics-activitymap-region-id": "ipad air",
        "data-analytics-gallery-item-id": "gallery-item-ipad-air",
      },
      ...CTA_DATA,
    },
    {
      heading: "iPad mini",
      copy: "Full iPad capabilities in a design that fits in your hand.",
      pricing: "From $499 or $41.58/mo. for 12 mo.*",
      images: Object.values(IMAGE_DATA.iPadMini),
      colorItems: COLOR_ITEMS.iPadMini,
      analytics: {
        "data-analytics-activitymap-region-id": "ipad mini",
        "data-analytics-gallery-item-id": "gallery-item-ipad-mini",
      },
      ...CTA_DATA,
    },
    {
      heading: "iPad",
      subHeading: "9th Generation",
      copy: "The essential iPad experience at an incredible value.",
      pricing: "From $329 or $27.41/mo. for 12 mo.*",
      images: Object.values(IMAGE_DATA.iPad_9gen),
      colorItems: COLOR_ITEMS.iPad_9gen,
      analytics: {
        "data-analytics-activitymap-region-id": "ipad",
        "data-analytics-gallery-item-id": "gallery-item-ipad-9",
      },
      ...CTA_DATA,
    },
    {
      heading: "iPad",
      copy: "The essential iPad experience at an incredible value.",
      subHeading: "10th Generation",
      pricing: "From $329 or $27.41/mo. for 12 mo.*",
      images: Object.values(IMAGE_DATA.iPad_10gen),
      colorItems: COLOR_ITEMS.iPad_10gen,
      analytics: {
        "data-analytics-activitymap-region-id": "ipad",
        "data-analytics-gallery-item-id": "gallery-item-ipad-10",
      },
      ...CTA_DATA,
    },
  ],
};
