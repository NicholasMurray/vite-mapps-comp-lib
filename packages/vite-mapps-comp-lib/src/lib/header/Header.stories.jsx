import React from 'react';
import { Header } from './Header';
import { 
  defaultHeaderData, 
  serviceNameHeaderData, 
  serviceNameUsernameSignoutHeaderData,
  serviceNameAndNavigationHeaderData
} from './test-data/';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layout/Header (Home Office)',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => 
  <Header {...args}>
  </Header>;

export const Default = Template.bind({});
Default.args = {
  ...defaultHeaderData
};

const HeaderServiceNameTemplate = (args) => 
  <Header {...args}>
  </Header>;

export const HeaderServiceName = HeaderServiceNameTemplate.bind({});
HeaderServiceName.args = {
  ...serviceNameHeaderData
};

const HeaderServiceNameUsernameSignoutTemplate = (args) => 
  <Header {...args}>
  </Header>;

export const HeaderServiceUsernameSignoutName = HeaderServiceNameUsernameSignoutTemplate.bind({});
HeaderServiceUsernameSignoutName.args = {
  ...serviceNameUsernameSignoutHeaderData
};

const HeaderServiceNameAndNavigataionTemplate = (args) => 
  <Header {...args}>
  </Header>;

export const HeaderNavigation = HeaderServiceNameAndNavigataionTemplate.bind({});
HeaderNavigation.args = {
  ...serviceNameAndNavigationHeaderData
};
