import React from 'react';
import { SortableTable } from './SortableTable';
import tableData from './test-data/tableData';
import tableDataPeople from './test-data/tableDataPeople';

export default {
  title: 'Content presentation/Sortable table (MoJ)',
  component: SortableTable,
};

const Template = (args) => 
  <SortableTable {...args}>
  </SortableTable>;
export const Default = Template.bind({});
Default.args = {
  ...tableData
};

const PeopleTemplate = (args) => 
  <SortableTable {...args}>
  </SortableTable>;
export const People = PeopleTemplate.bind({});
People.args = {
  ...tableDataPeople
};
