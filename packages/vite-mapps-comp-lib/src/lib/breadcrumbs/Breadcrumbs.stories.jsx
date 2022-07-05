import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { defaultBreadcrumbsData } from './test-data/defaultBreadcrumbsData';
import { mobileBreadcrumbsData } from './test-data/mobileBreadcrumbsData';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
};

const Template = (args) => 
  <Breadcrumbs {...args}></Breadcrumbs>;

const MobileBreadcrumbsTemplate = (args) => 
<Breadcrumbs {...args}></Breadcrumbs>;

export const Default = Template.bind({});
Default.args = {
  items: defaultBreadcrumbsData.items
};

export const MobileBreadcrumbs = MobileBreadcrumbsTemplate.bind({});
MobileBreadcrumbs.args = {
  collapseOnMobile: mobileBreadcrumbsData.collapseOnMobile,
  items: mobileBreadcrumbsData.items
};
