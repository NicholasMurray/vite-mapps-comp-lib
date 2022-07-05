import React from 'react';
import { Pagination } from './Pagination';
import { paginationData, nextPaginationData, prevPaginationData, prevNextPaginationData } from './test-data/index'; 

export default {
  title: 'Navigation/Pagination (MoJ)',
  component: Pagination,
};

const Template = (args) => <Pagination {...args}></Pagination>;
export const Default = Template.bind({});
Default.args = {
  ...paginationData
};

const NextTemplate = (args) => <Pagination {...args}></Pagination>;
export const NextNotDisplayed = NextTemplate.bind({});
NextNotDisplayed.args = {
  ...nextPaginationData
};

const PrevTemplate = (args) => <Pagination {...args}></Pagination>;
export const PreviousNotDisplayed = PrevTemplate.bind({});
PreviousNotDisplayed.args = {
  ...prevPaginationData
};

const PrevNextOnlyTemplate = () => <Pagination {...prevNextPaginationData}></Pagination>;
export const PreviousNextOnly = PrevNextOnlyTemplate.bind({});
PreviousNextOnly.args = {
  ...prevNextPaginationData
};
