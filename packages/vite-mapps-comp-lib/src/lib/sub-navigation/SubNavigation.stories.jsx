import React from 'react';
import { SubNavigation } from './SubNavigation';
import { subNavigationData } from './test-data/subNavigationData';

export default {
  title: 'Navigation/Sub navigation (MoJ)',
  component: SubNavigation,
};

const Template = (args) => 
  <SubNavigation {...args}>
  </SubNavigation>;

export const Default = Template.bind({});
Default.args = {
  ...subNavigationData
};
