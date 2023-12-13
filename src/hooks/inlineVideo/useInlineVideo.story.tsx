import type { Meta, StoryFn } from "@storybook/react";
import { useRef } from "react";

import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import sassData from "@/styles/shared/sasskitData.module.scss";

import InlineVideoExample from "./InlineVideoExample";
import type { InlineVideoSource } from "./useInlineVideo";
import type { InlineVideoExampleProps } from "./InlineVideoExample";
import { useInlineVideo } from "./useInlineVideo";

const videoSources: InlineVideoSource[] = [
  {
    src: "https://www.apple.com/105/media/us/iphone-13-pro/2021/404b23a8-f9c5-466c-b0e6-3d36705b959d/anim/hero/xlarge_2x.mp4",
    width: 3360,
    height: 2520,
    viewport: "xlarge",
    density: 2,
  },
  {
    src: "https://www.apple.com/105/media/us/iphone-13-pro/2021/404b23a8-f9c5-466c-b0e6-3d36705b959d/anim/hero/xlarge.mp4",
    width: 1680,
    height: 1260,
    viewport: "xlarge",
    density: 1,
  },
  {
    src: "https://www.apple.com/105/media/us/iphone-13-pro/2021/404b23a8-f9c5-466c-b0e6-3d36705b959d/anim/hero/large_2x.mp4",
    width: 2880,
    height: 1500,
    viewport: "large",
    density: 2,
  },
  {
    src: "https://www.apple.com/105/media/us/iphone-13-pro/2021/404b23a8-f9c5-466c-b0e6-3d36705b959d/anim/hero/large.mp4",
    width: 1440,
    height: 750,
    viewport: "large",
    density: 1,
  },
  {
    src: "https://www.apple.com/105/media/us/iphone-13-pro/2021/404b23a8-f9c5-466c-b0e6-3d36705b959d/anim/hero/medium_2x.mp4",
    width: 2880,
    height: 1500,
    viewport: "medium",
    density: 2,
  },
  {
    src: "https://www.apple.com/105/media/us/iphone-13-pro/2021/404b23a8-f9c5-466c-b0e6-3d36705b959d/anim/hero/medium.mp4",
    width: 1440,
    height: 750,
    viewport: "medium",
    density: 1,
  },
  {
    src: "https://www.apple.com/105/media/us/iphone-13-pro/2021/404b23a8-f9c5-466c-b0e6-3d36705b959d/anim/hero/small_2x.mp4",
    width: 2880,
    height: 1500,
    viewport: "small",
    density: 2,
  },
  {
    src: "https://www.apple.com/105/media/us/iphone-13-pro/2021/404b23a8-f9c5-466c-b0e6-3d36705b959d/anim/hero/small.mp4",
    width: 1440,
    height: 750,
    viewport: "small",
    density: 1,
  },
];

const storyName = "useInlineVideo";

export default {
  title: "hooks/useInlineVideo",
  component: InlineVideoExample,
  args: { sources: videoSources },
  argTypes: {
    videoRef: {
      control: { type: null },
    },
    video: {
      description: "Video element passed in as a ref",
      table: {
        type: {
          summary: "HTMLVideoElement | null",
        },
        category: "Video Controller",
      },
    },
    play: {
      description: "Plays the video",
      table: {
        type: {
          summary: "() => void",
        },
        category: "Video Controller",
      },
    },
    pause: {
      description: "Pauses the video",
      table: {
        type: {
          summary: "() => void",
        },
        category: "Video Controller",
      },
    },
    setTime: {
      description: "Sets video current time",
      table: {
        type: {
          summary: "(time: number) => void",
        },
        category: "Video Controller",
      },
    },
    updateProgress: {
      description: "Sets video current progress from `0` to `1`",
      table: {
        type: {
          summary: "(progress: number) => void",
        },
        category: "Video Controller",
      },
    },
    isPlaying: {
      description: "Returns whether the video is playing",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: false },
        category: "Video Controller",
      },
    },
    setIsPlaying: {
      description: "Toggles the play / pause state",
      table: {
        type: {
          summary: "(state: boolean) => void;",
        },
        category: "Video Controller",
      },
    },
    hasLoaded: {
      description: "Returns whether the video has successfully loaded",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: false },
        category: "Video Controller",
      },
    },
    loadingError: {
      description: "Returns whether there is a loading error",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: false },
        category: "Video Controller",
      },
    },
    onCanPlay: {
      description: "Listener event for when the video loads",
      table: {
        type: {
          summary: "() => void",
        },
        category: "Video Controller",
      },
    },
    onError: {
      description:
        "Listener event for if the video has an error when attempting to load",
      table: {
        type: {
          summary: "() => void",
        },
        category: "Video Controller",
      },
    },
    onEnded: {
      description: "Listener event for when the video has ended",
      table: {
        type: {
          summary: "() => void",
        },
        category: "Video Controller",
      },
    },
    src: {
      description:
        "A URL path to a single video source that is generated based on the current viewport and density",
      table: {
        type: {
          summary: "string",
        },
        category: "Video Controller",
      },
    },
    duration: {
      description: "Duration of video in seconds.",
      table: {
        type: {
          summary: "number",
        },
        category: "Video Controller",
      },
    },
    progress: {
      description: "Progress of video as number between 0 and 1.",
      table: {
        type: {
          summary: "number",
        },
        category: "Video Controller",
      },
    },
  },
} satisfies Meta<typeof useInlineVideo>;

const Template: StoryFn<InlineVideoExampleProps> = (props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <SassKitViewportsProvider sassData={sassData}>
      <InlineVideoExample sources={props.sources} videoRef={videoRef} />
    </SassKitViewportsProvider>
  );
};

export const Example: StoryFn<InlineVideoExampleProps> = Template.bind({});
Example.storyName = storyName;

Example.parameters = {
  docs: {
    source: {
      language: "tsx",
      code: `
const ExampleComponent = (sources: InlineVideoSource[]): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoController = useInlineVideo(videoRef, sources);

  return (
    <>
      <button onClick={videoController.play}>Play</button>
      <button onClick={videoController.pause}>Pause</button>

      <video
        ref={videoRef}
        src={videoController.src}
        onCanPlay={videoController.onCanPlay}
        onError={videoController.onError}
        onEnded={videoController.onEnded}
        muted={true}
      ></video>
    </>
  );
};
      `,
    },
  },
};
