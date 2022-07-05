import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Table } from './Table';
import { 
  defaultTableData, 
  defaultTableFirstCellIsNotHeaderData,
  captionTableData, 
  headersTableData, 
  numbersTableData, 
  customColumnWidthTableData 
} from './test-data/';

expect.extend(toHaveNoViolations);

describe('Table Component', function () {
  it('should order elements correctly by table column header expected order', function () {
    render(
      <Table {...defaultTableData}></Table>
    );
    expect(screen.getAllByRole('columnheader')[0]).toHaveTextContent('Date');
    expect(screen.getAllByRole('columnheader')[1]).toHaveTextContent('Amount');
    expect(screen.getAllByRole('rowheader')[0]).toHaveTextContent('First 6 weeks');
    expect(screen.getAllByRole('cell')[0]).toHaveTextContent('£109.80 per week');
  });

  it('should render first cells in column as not to be row headers if specified', function () {
    render(
      <Table {...defaultTableFirstCellIsNotHeaderData}></Table>
    );
    expect(screen.getAllByRole('columnheader')[0]).toHaveTextContent('Date');
    expect(screen.getAllByRole('columnheader')[1]).toHaveTextContent('Amount');
    expect(screen.getAllByRole('cell')[0]).toHaveTextContent('First 6 weeks');
  });

  it('should have caption and order elements correctly by table column header expected order', function () {
    render(
      <Table {...captionTableData}></Table>
    );
    expect(screen.getAllByRole('table')[0]).toHaveTextContent('Months and rates');
    expect(screen.getAllByRole('columnheader')[0]).toHaveTextContent('Month you apply');
    expect(screen.getAllByRole('columnheader')[1]).toHaveTextContent('Rate for vehicles');
    expect(screen.getAllByRole('rowheader')[0]).toHaveTextContent('January');
    expect(screen.getAllByRole('cell')[0]).toHaveTextContent('£95');
  });

  it('should have correct table column headers', function () {
    render(
      <Table {...headersTableData}></Table>
    );
    expect(screen.getAllByRole('columnheader')[0]).toHaveTextContent('Date');
    expect(screen.getAllByRole('columnheader')[1]).toHaveTextContent('Amount');
  });

  it('should apply numeric classes when format is numeric', function () {
    render(
      <Table {...numbersTableData}></Table>
    );
    expect(screen.getAllByRole('cell')[0]).toHaveClass('govuk-table__cell--numeric');
  });

  it('should apply custom columns width classes when specified', function () {
    render(
      <Table {...customColumnWidthTableData}></Table>
    );
    expect(screen.getAllByRole('columnheader')[0]).toHaveClass('govuk-!-width-one-half');
    expect(screen.getAllByRole('columnheader')[1]).toHaveClass('govuk-!-width-one-quarter');
    expect(screen.getAllByRole('columnheader')[2]).toHaveClass('govuk-!-width-one-quarter');
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(<Table {...defaultTableData}></Table>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();    
  });
});
