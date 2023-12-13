import type { InlineVideoSource } from "./useInlineVideo";
import { useInlineVideo } from "./useInlineVideo";

export interface InlineVideoExampleProps {
  /** An array of video sources for each viewport and pixel density combination */
  sources: InlineVideoSource[];
  /** `ref` to a video element that will be controlled and updated by the `videoController` */
  videoRef: React.RefObject<HTMLVideoElement>;
}

/**
 * The `useInlineVideo` hook provides a convenient way to play videos inline.
 * Not recommend to use for interactions that require sound to be available.
 *
 *
 */
// eslint-disable-next-line max-lines-per-function
const InlineVideoExample = ({
  sources,
  videoRef,
}: InlineVideoExampleProps): JSX.Element => {
  const videoController = useInlineVideo(videoRef, sources);
  const storyData = {
    ...videoController,
    video: `<video src='${videoController.src}' muted='true'></video>`,
  };

  return (
    <>
      <div style={{ marginBottom: "15px" }}>
        <button
          disabled={videoController.isPlaying}
          onClick={videoController.play}
          style={{
            margin: "15px 0px 15px 15px",
            opacity: videoController.isPlaying ? 0.56 : 1,
          }}
        >
          Play
        </button>
        <button
          disabled={!videoController.isPlaying}
          onClick={videoController.pause}
          style={{
            margin: "15px 0px 15px 15px",
            opacity: videoController.isPlaying ? 1 : 0.56,
          }}
        >
          Pause
        </button>
        <video
          style={{ width: "100%" }}
          ref={videoRef}
          src={videoController.src}
          onCanPlay={videoController.onCanPlay}
          onError={videoController.onError}
          onEnded={videoController.onEnded}
          muted={true}
        ></video>
      </div>
      <strong>Hook output:</strong>
      <pre
        style={{
          whiteSpace: "pre-wrap",
          padding: "15px",
          margin: "15px",
          backgroundColor: "#F5F5F7",
        }}
      >
        {JSON.stringify(storyData, null, 2)}
      </pre>
    </>
  );
};

export default InlineVideoExample;
