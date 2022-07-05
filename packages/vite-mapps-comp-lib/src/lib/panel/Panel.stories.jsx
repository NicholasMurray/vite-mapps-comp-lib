import React from 'react';
import { Panel } from './Panel';

export default {
  title: 'Content presentation/Panel',
  component: Panel,
};

const Template = () => 
  <Panel titleText="Application complete">
     Your reference number<br />
      <strong>HDJ2123F</strong>
  </Panel>;

export const Default = Template.bind({});
Default.args = {};