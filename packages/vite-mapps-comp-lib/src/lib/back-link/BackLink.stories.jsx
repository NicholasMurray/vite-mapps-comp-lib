import React from 'react';
import { BackLink } from './BackLink';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Navigation/Back link',
  component: BackLink,
};

const Template = (args) => 
  <BackLink {...args}></BackLink>;

export const Default = Template.bind({});
Default.args = {
  text: 'Back',
  href: '#'
};

