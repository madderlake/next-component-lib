import type { SelectProps } from "@/components/moments/Select/Select";
import type { ColorItems } from "@/components/moments/Select/Select.data";
import { IMAGE_DATA } from "@/components/ProductTile/imageData";

const CTA_DATA = {
  primaryCTA: {
    children: "Learn More",
    href: "#",
    analytics: { "data-analytics-title": "ipad air learn more" },
  },
  secondaryCTA: {
    children: "Buy",
    href: "#",
    analytics: { "data-analytics-title": "ipad air buy" },
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
};

export const PRODUCT_TILESET_DATA: SelectProps = {
  title: "Explore the lineup",
  analytics: {
    "data-analytics-gallery-id": "select-gallery",
    "data-analytics-section-engagement": "name: select section",
    "data-analytics-region": "select region",
  },
  sectionHeaderLink: {
    children: "Optional Link",
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
      subHeading: "9th Generation",
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
      badge: "New",
      copy: "Full iPad capabilities in a design that fits in your hand.",
      subHeading: "10th Generation",
      pricing: "From $499 or $41.58/mo. for 12 mo.*",
      images: Object.values(IMAGE_DATA.iPadMini),
      colorItems: [],
      analytics: {
        "data-analytics-activitymap-region-id": "ipad mini",
        "data-analytics-gallery-item-id": "gallery-item-ipad-mini",
      },
      ...CTA_DATA,
    },
  ],
};
