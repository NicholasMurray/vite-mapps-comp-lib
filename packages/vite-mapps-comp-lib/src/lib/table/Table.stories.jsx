import React from 'react';
import { Table } from './Table';
import { 
  defaultTableData, 
  defaultTableFirstCellIsNotHeaderData,
  captionTableData, 
  headersTableData, 
  numbersTableData, 
  customColumnWidthTableData 
} from './test-data/';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Content presentation/Table',
  component: Table,
};

const Template = (args) => 
  <Table {...args}>
  </Table>;
export const Default = Template.bind({});
Default.args = {
  ...defaultTableData
};

const TableFirstCellIsNotHeaderTemplate = (args) => 
  <Table {...args}>
  </Table>;
export const TableFirstCellIsNotHeader = TableFirstCellIsNotHeaderTemplate.bind({});
TableFirstCellIsNotHeader.args = {
  ...defaultTableFirstCellIsNotHeaderData
};

const TableCaptionsTemplate = (args) => 
  <Table {...args}>
  </Table>;
export const TableCaptions = TableCaptionsTemplate.bind({});
TableCaptions.args = {
  ...captionTableData
};

const TableHeadersTemplate = (args) => 
  <Table {...args}>
  </Table>;
export const TableHeaders = TableHeadersTemplate.bind({});
TableHeaders.args = {
  ...headersTableData
};

const TableNumbersTemplate = (args) => 
  <Table {...args}>
  </Table>;
export const TableNumbers = TableNumbersTemplate.bind({});
TableNumbers.args = {
  ...numbersTableData
};

const CustomColumnWidthTableTemplate = (args) => 
  <Table {...args}>
  </Table>;
export const CustomColumnWidth = CustomColumnWidthTableTemplate.bind({});
CustomColumnWidth.args = {
  ...customColumnWidthTableData
};
