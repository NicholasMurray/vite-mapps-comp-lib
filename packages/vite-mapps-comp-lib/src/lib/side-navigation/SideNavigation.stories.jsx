import React from 'react';
import { SideNavigation } from './SideNavigation';
import { sideNavigationData } from './test-data/sideNavigationData';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Navigation/Side navigation (MoJ)',
  component: SideNavigation,
};

const Template = (args) => 
  <SideNavigation {...args}>
  </SideNavigation>;

export const Default = Template.bind({});
Default.args = {
  ...sideNavigationData
};
