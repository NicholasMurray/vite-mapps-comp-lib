import React from 'react';
import { Alert } from './Alert';
import { defaultAlertData, errorAlertData, successAlertData } from './test-data';

export default {
  title: 'Content presentation/Alert (Home Office)',
  component: Alert,
};

const Template = (args) => 
  <Alert  {...args}>
  </Alert>;

export const Default = Template.bind({});
Default.args = {
  ...defaultAlertData
};

export const Success = Template.bind({});
Success.args = {
  ...successAlertData
};

export const Error = Template.bind({});
Error.args = {
  ...errorAlertData
};

