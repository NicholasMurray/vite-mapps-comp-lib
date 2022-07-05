import React from 'react';
import { ErrorMessage } from './ErrorMessage';
import { defaultErrorMessageData } from './test-data/defaultErrorMessageData';
import { noVisuallyHiddenTextErrorMessageData } from './test-data/noVisuallyHiddenTextErrorMessageData';

export default {
  title: 'Form/Error message',
  component: ErrorMessage,
};

const Template = (args) => 
<ErrorMessage {...args}></ErrorMessage>;

export const Default = Template.bind({});
Default.args = {
  text: defaultErrorMessageData.text,
  visuallyHiddenText: defaultErrorMessageData.visuallyHiddenText
};

const NoVisuallyHiddenTextTemplate = (args) => 
  <ErrorMessage {...args}></ErrorMessage>;

export const NoVisuallyHiddenText = NoVisuallyHiddenTextTemplate.bind({});
NoVisuallyHiddenText.args = {
  text: noVisuallyHiddenTextErrorMessageData.text
};
