import React from 'react';
import { Radios } from './Radios';
import { 
  defaultRadiosData,
  preseletedRadiosData,
  disabledRadiosData,
  radiosNoPageHeadingData,
  radiosInlineData,
  radioItemsWithHintsData,
  radioItemsWithATextDividerData,
  radioItemsSmallData,
  radiosErrorMessagesData,
  conditionallyRevealRadiosData
} from './test-data/';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/Radios',
  component: Radios,
};

const Template = (args) => 
  <Radios {...args}></Radios>;
export const Default = Template.bind({});
Default.args = {
  ...defaultRadiosData
};

const RadioPreseletedTemplate = (args) => 
  <Radios {...args}></Radios>;
export const RadioPreseleted = RadioPreseletedTemplate.bind({});
RadioPreseleted.args = {
  ...preseletedRadiosData
};

const RadioDisabledTemplate = (args) => 
  <Radios {...args}></Radios>;
export const RadioDisabled = RadioDisabledTemplate.bind({});
RadioDisabled.args = {
  ...disabledRadiosData
};
  
const RadiosNoPageHeadingTemplate = (args) => 
  <Radios {...args}></Radios>;
export const NoPageHeading = RadiosNoPageHeadingTemplate.bind({});
NoPageHeading.args = {
  ...radiosNoPageHeadingData
};

const RadiosInlineTemplate = (args) => 
  <Radios {...args}></Radios>;
export const InlineWithHint = RadiosInlineTemplate.bind({});
InlineWithHint.args = {
  ...radiosInlineData
};
  
const RadiosItemsWithHintsTemplate = (args) => 
  <Radios {...args}></Radios>;
export const RadiosItemsWithHints = RadiosItemsWithHintsTemplate.bind({});
RadiosItemsWithHints.args = {
  ...radioItemsWithHintsData
};
  
const RadioItemsWithATextDividerTemplate = (args) => 
  <Radios {...args}></Radios>;
export const RadioItemsWithATextDivider = RadioItemsWithATextDividerTemplate.bind({});
RadioItemsWithATextDivider.args = {
  ...radioItemsWithATextDividerData
};

const RadioItemsSmallTemplate = (args) => 
  <Radios {...args}></Radios>;
export const SmallerRadios = RadioItemsSmallTemplate.bind({});
SmallerRadios.args = {
  ...radioItemsSmallData
};

const RadiosErrorMessagesTemplate = (args) => 
  <Radios {...args}></Radios>;
export const ErrorMessages = RadiosErrorMessagesTemplate.bind({});
ErrorMessages.args = {
  ...radiosErrorMessagesData
};

const RadiosConditionallyRevealTemplate = (args) => 
  <Radios {...args}></Radios>;
export const RadiosConditionallyReveal = RadiosConditionallyRevealTemplate.bind({});
RadiosConditionallyReveal.args = {
  ...conditionallyRevealRadiosData
};
