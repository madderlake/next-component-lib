import type { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { DefaultContexts } from "src/stories/components/DefaultContexts";
import type {
  ResponsivePictureImageProps,
  ResponsivePictureProps,
} from "./ResponsivePicture";
import { ResponsivePicture } from "./ResponsivePicture";

const TED_LASSO_IMAGES: ResponsivePictureImageProps[] = [
  {
    width: 548,
    height: 1186,
    src: "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/d3/9e/3e/d39e3e59-febb-d790-1d9a-db35c539bb47/VEVEMl9DU1QtVFZBLVdXLnBuZw.png/548x1186.jpg",
    viewport: "small",
    density: 2,
  },
  {
    width: 1378,
    height: 774,
    src: "https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/1378x774.jpg",
    viewport: "medium",
    density: 2,
  },
  {
    width: 1960,
    height: 1102,
    src: "https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/1960x1102.jpg",
    viewport: "large",
    density: 2,
  },
];

export default {
  title: "components/ResponsivePicture",
  parameters: { controls: { disable: true } },
} satisfies Meta<typeof ResponsivePicture>;
const StoryLabel = ({ text }: { text: string }): JSX.Element => {
  return <p style={{ fontSize: "18px", fontWeight: "600" }}>{text}</p>;
};

interface ResponsivePictureStoryProps extends ResponsivePictureProps {
  storyLabel: string;
}
const BasicTemplate: StoryFn<ResponsivePictureStoryProps> = (args) => {
  const { storyLabel, ...restOfArgs } = args;

  return (
    <DefaultContexts>
      <div style={{ padding: "1rem" }}>
        <StoryLabel text={storyLabel} />
        <ResponsivePicture {...restOfArgs} />
      </div>
    </DefaultContexts>
  );
};

export const BasicExample: StoryFn<ResponsivePictureStoryProps> =
  BasicTemplate.bind({});
BasicExample.storyName = "Basic Example";
BasicExample.args = {
  storyLabel:
    "ResponsivePicture is a component for creating 'picture' tags automatically out of image arrays that include SassKit viewport data.",
  images: [...TED_LASSO_IMAGES],
};

const LayoutTemplate: StoryFn<ResponsivePictureStoryProps> = (args) => {
  const { storyLabel, ...restOfArgs } = args;

  return (
    <DefaultContexts>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem 2rem",
        }}
      >
        <StoryLabel text={storyLabel} />
        <ResponsivePicture {...restOfArgs} />
      </div>
    </DefaultContexts>
  );
};

export const LayoutExample: StoryFn<ResponsivePictureStoryProps> =
  LayoutTemplate.bind({});
LayoutExample.storyName = `Layout "fill" Example`;
LayoutExample.args = {
  storyLabel:
    "'layout:fill' sets the image size to fill its container size rather than use the dimensions of the image itself.",
  images: [...TED_LASSO_IMAGES],
  layout: "fill",
};
LayoutExample.argTypes = {
  layout: {
    options: ["fill", "sized"],
    control: {
      type: "select",
    },
  },
};

// eslint-disable-next-line max-lines-per-function
const PreventLoadingTemplate: StoryFn<ResponsivePictureStoryProps> = (args) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (): void => {
    setIsLoading(!isLoading);
  };
  const { storyLabel, ...restOfArgs } = args;

  return (
    <DefaultContexts>
      <style type="text/css">{`
        .my-res-image .my-picture {
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }

        .my-res-image--loaded .my-picture {
          opacity: 1;
        }
      `}</style>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <StoryLabel text={storyLabel} />
        <ResponsivePicture
          {...restOfArgs}
          preventLoading={!isLoading}
          onLoad={() => console.log("loaded!")}
        />
        <button
          style={{
            marginTop: "24px",
            zIndex: "2",
            fontSize: "24px",
            fontWeight: "600",
            background: "#FA3",
            padding: "1rem",
            borderRadius: "10px",
          }}
          onClick={handleClick}
        >
          {`Click me to ${isLoading ? "unload" : "load"} the image!`}
        </button>
      </div>
    </DefaultContexts>
  );
};

export const PreventLoadingExample: StoryFn<ResponsivePictureStoryProps> =
  PreventLoadingTemplate.bind({});
PreventLoadingExample.storyName = `preventLoading Example`;
PreventLoadingExample.args = {
  storyLabel: `You can delay loading of your images using "preventLoading=true" and
  bind to any action to load/unload your images.`,
  images: [...TED_LASSO_IMAGES],
  className: "my-res-image",
  pictureClassName: "my-picture",
  loadedClassName: "my-res-image--loaded",
};

const PropsTemplate: StoryFn<ResponsivePictureStoryProps> = (args) => {
  const { storyLabel, ...restOfArgs } = args;

  return (
    <DefaultContexts>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <StoryLabel text={storyLabel} />
        <ResponsivePicture {...restOfArgs} />
      </div>
    </DefaultContexts>
  );
};

export const ObjectFitExample: StoryFn<ResponsivePictureStoryProps> =
  PropsTemplate.bind({});
ObjectFitExample.storyName = "ObjectFit Example";
ObjectFitExample.args = {
  storyLabel:
    "objectFit is a CSS property that is useful for choosing how the image should fit into the space when its size is constrained.",
  images: [...TED_LASSO_IMAGES],
  layout: "fill",
  objectFit: "contain",
};
ObjectFitExample.argTypes = {
  layout: {
    options: ["fill", "sized"],
    control: {
      type: "select",
    },
  },
  objectFit: {
    options: ["contain", "cover", "fill", "inherit", "none", "scale-down"],
    control: {
      type: "select",
    },
  },
};

export const ObjectPositionExample: StoryFn<ResponsivePictureStoryProps> =
  PropsTemplate.bind({});
ObjectPositionExample.storyName = "ObjectPosition Example";
ObjectPositionExample.args = {
  storyLabel: `objectPosition is a css property that allows you to set the anchor point of the image within its bounding box. This allows you to choose where on the image scaling should occur with layout:"fill" as well as general offset values.`,
  images: [...TED_LASSO_IMAGES],
  layout: "fill",
  objectFit: "cover",
  objectPosition: "50% 100%",
};

ObjectPositionExample.argTypes = {
  layout: {
    options: ["fill", "sized"],
    control: {
      type: "select",
    },
  },
};

export const ViewportSpecificPropsExample: StoryFn<ResponsivePictureStoryProps> =
  PropsTemplate.bind({});
ViewportSpecificPropsExample.storyName = `Viewport-Specific Props Example`;
ViewportSpecificPropsExample.args = {
  storyLabel: `ResponsivePicture allows viewport-specific setting of each of its props to allow things like having layout:"fill" for small viewports, and layout: "sized" for large and medium. "layout", "objectFit", and "objectPosition" all can be set up for viewport-specific values.`,
  images: [...TED_LASSO_IMAGES],
  layout: {
    small: "fill",
    large: "sized",
  },
  objectFit: {
    small: "contain",
    large: "none",
  },
};

export const AdditionalClassNamesExample: StoryFn<ResponsivePictureStoryProps> =
  PreventLoadingTemplate.bind({});
AdditionalClassNamesExample.storyName = `Additional Classes Example`;
AdditionalClassNamesExample.args = {
  storyLabel: `Many additional classNames may be passed as props which will be applied during state changes as needed.`,
  images: [...TED_LASSO_IMAGES],
  className: "my-res-image",
  pictureClassName: "my-picture",
  loadedClassName: "my-res-image--loaded",
};
