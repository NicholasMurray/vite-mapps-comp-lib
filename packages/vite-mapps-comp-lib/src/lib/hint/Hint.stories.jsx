import React from 'react';
import { Hint } from './Hint';
import { defaultHintData } from './test-data/defaultHintData';

export default {
  title: 'Form/Hint',
  component: Hint,
};

const Template = (args) => 
  <Hint {...args}>
  </Hint>;

export const Default = Template.bind({});
Default.args = {
  ...defaultHintData
};
