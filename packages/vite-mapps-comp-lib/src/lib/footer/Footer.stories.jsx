import React from 'react';
import { Footer } from './Footer';
import { 
  footerNavigationData
} from './test-data/';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layout/Footer (Home Office)',
  component: Footer,
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => 
  <Footer {...args}>
  </Footer>;

export const Default = Template.bind({});
Default.args = {
  children: 'A Home Office Digital, Data and Technology service'
};

const FooterNavigationTemplate = (args) => 
  <Footer {...args}>
  </Footer>;

export const FooterNavigation = FooterNavigationTemplate.bind({});
FooterNavigation.args = {
  ...footerNavigationData
};

