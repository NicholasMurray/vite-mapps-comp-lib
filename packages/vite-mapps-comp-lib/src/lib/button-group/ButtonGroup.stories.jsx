import React from 'react';
import { Button } from './../button/Button';
import { ButtonGroup } from './ButtonGroup';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/Button group',
  component: ButtonGroup,
};

const Template = () => 
  <ButtonGroup>
    <Button>Save and continue</Button>
    <Button variant="secondary">Save as draft</Button>
  </ButtonGroup>;

const ButtonGroupWithLinkTemplate = () => 
  <ButtonGroup>
    <Button>Continue</Button>
    <a className="govuk-link" href="#">Cancel</a>
  </ButtonGroup>;

export const Default = Template.bind({});
Default.args = {};

export const ButtonGroupWithLink = ButtonGroupWithLinkTemplate.bind({});