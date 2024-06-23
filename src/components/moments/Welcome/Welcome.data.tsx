import { WELCOME_FALLBACK_IMG_DATA } from "@/components/WelcomeVideo/imgData";

import type { WelcomeProps } from "./Welcome";

const VIDEO_BASE_PATH =
  "https://ic-ipad-01.preview.apple.com/105/media/us/ipad/2023/98dee9eb-3cc4-444b-bd36-e0dbe514886f/feature-video/";

const fallbackImages = Object.values(WELCOME_FALLBACK_IMG_DATA);
// TODO: update path once VAT assets are unblocked
export const WELCOME_MOMENT_DATA: WelcomeProps = {
  title: "iPad",
  description: (
    <>
      Your next computer
      <br />
      is not a computer
    </>
  ),
  videoSrc: [
    {
      src: `${VIDEO_BASE_PATH}large_2x.mp4`,
      width: 3360,
      height: 2520,
      viewport: "xlarge",
      density: 2,
    },
    {
      src: `${VIDEO_BASE_PATH}xlarge.mp4`,
      width: 1680,
      height: 1260,
      viewport: "xlarge",
      density: 1,
    },
    {
      src: `${VIDEO_BASE_PATH}large_2x.mp4`,
      width: 2880,
      height: 1500,
      viewport: "large",
      density: 2,
    },
    {
      src: `${VIDEO_BASE_PATH}large.mp4`,
      width: 1440,
      height: 750,
      viewport: "large",
      density: 1,
    },
    {
      src: `${VIDEO_BASE_PATH}medium_2x.mp4`,
      width: 2880,
      height: 1500,
      viewport: "medium",
      density: 2,
    },
    {
      src: `${VIDEO_BASE_PATH}medium.mp4`,
      width: 1440,
      height: 750,
      viewport: "medium",
      density: 1,
    },
    {
      src: `${VIDEO_BASE_PATH}small_2x.mp4`,
      width: 2880,
      height: 1500,
      viewport: "small",
      density: 2,
    },
    {
      src: `${VIDEO_BASE_PATH}small.mp4`,
      width: 1440,
      height: 750,
      viewport: "small",
      density: 1,
    },
  ],
  videoAnalytics: {
    "data-analytics-title": "video for ipad",
    "data-analytics-click": "prop3: video for ipad",
  },
  analytics: {
    "data-analytics-section-engagement": "name: welcome section",
    "data-analytics-region": "welcome region",
  },
  controlAriaLabels: {
    play: "Play video",
    pause: "Pause video",
    loading: "Video loading",
  },
  videoAriaLabel: "welcome video aria label",
  structuredData: {
    name: "Welcome Video",
    description: "Animated video of a drawing on ipad",
    contentUrl:
      "https://www.apple.com/newsroom/videos/apple-clips/Apple_clips-cc-us-2019_540x960.mp4",
    thumbnailUrl: "https://wwww.apple.com/ipad/xsmall.jpg",
    uploadDate: "2019-12-09T18:49:57Z",
    duration: "PT00M05S",
  },
  fallbackImages,
  fallbackImgAlt: "Fallback image alt text",
};
