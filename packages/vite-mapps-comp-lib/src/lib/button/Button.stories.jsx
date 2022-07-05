import React from 'react';
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/Button',
  component: Button,
};

const Template = (args) => <Button {...args} ></Button>;
export const Default = Template.bind({});
Default.args = {
  children: 'Button'
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary'
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning',
  variant: 'warning'
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true
};

const ClassesTemplate = (args) => 
  <Button {...args}>
    Classes
  </Button>;

export const Classes = ClassesTemplate.bind({});
Classes.args = {
  classes: 'test-class'
};

const StartButtonTemplate = (args) => 
  <Button as="a" href="#" {...args} isStartButton={true}>
    Start now
  </Button>;

export const Start = StartButtonTemplate.bind({});

export const Element = (args) => <Button {...args} >A Tag</Button>;
Element.args = {
  element: 'a'
};

const DraggableTemplate = (args) => 
  <Button draggable={true} {...args} >
  </Button>;

export const Draggable = DraggableTemplate.bind({});
Draggable.args = {
  children: 'Draggable',
  variant: 'primary'
};

const DraggableFalseTemplate = (args) => 
  <Button draggable={false} {...args} >
  </Button>;

export const NonDraggable = DraggableFalseTemplate.bind({});
NonDraggable.args = {
  children: 'Non Draggable',
  variant: 'primary'
};

const OnClickTemplate = (args) => {
  let count = 0;
  const confirm = () => {
    // eslint-disable-next-line no-undef
    let confirmCount = document.getElementById('confirm-count-allowed');
    count ++;
    confirmCount.textContent = 'Confirmed and sent count:' + count;
  };
  return (
    <>
      <div id='confirm-count-allowed' className="govuk-body-m"></div>
      <Button handleClick={(confirm)} {...args} ></Button>
    </>
  );
};

export const OnClick = OnClickTemplate.bind({});
OnClick.args = {
  children: 'Confirm and Send',
  variant: 'primary'
};

const PreventDoubleClickTemplate = (args) => {
  let count = 0;
  const confirm = () => {
    // eslint-disable-next-line no-undef
    let confirmCount = document.getElementById('confirm-count-prevented');
    count ++;
    confirmCount.textContent = 'Confirmed and sent count:' + count;
  };
  return (
    <>
      <div id='confirm-count-prevented' className="govuk-body-m"></div>
      <Button handleClick={(confirm)} preventDoubleClick={ true } {...args}></Button>
    </>
  );
};

export const PreventDoubleClick = PreventDoubleClickTemplate.bind({});
PreventDoubleClick.args = {
  children: 'Confirm and Send',
  variant: 'primary'
};
