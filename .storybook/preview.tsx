import type{ Preview, StoryFn, StoryContext } from '@storybook/react';
import React from 'react';
const getDirection = (context: StoryContext) => {
  return context.globals.direction;
};
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [dirDecorator],
  globalTypes: {
    direction: {
    name: "Direction",
    description: "Display direction in which contented is displayed",
    defaultValue: "ltr",
    toolbar: {
      items: [{ value: "ltr", title: "LTR", icon: "arrowleftalt" }, { value: "rtl", title: "RTL", icon: "arrowrightalt" }],
      showName: true,
    }
  }
  }
}

export function dirDecorator(Story: StoryFn, context: StoryContext){
   return ( <div  dir={getDirection(context)}>
      <Story {...context} />
    </div>)
  }



export default preview
