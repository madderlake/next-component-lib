import type { RibbonProps } from "@/components/Ribbon/Ribbon";

export const RIBBON_DATA: RibbonProps = {
  children:
    "Get 3% Daily Cash back with Apple Card. And pay for your new iPad over 12 months, interest-free when you choose to check out with Apple Card Monthly Installments.*",
  link: {
    children: "Learn more",
    href: "#",
    analytics: {
      "data-analytics-title": "ribbon",
    },
  },
  animate: true,
  analytics: {
    "data-analytics-activitymap-region-id": "ribbon",
  },
};
