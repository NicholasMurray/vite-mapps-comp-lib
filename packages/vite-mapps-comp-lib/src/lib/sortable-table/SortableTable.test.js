import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { axe, toHaveNoViolations } from 'jest-axe';
import { SortableTable } from './SortableTable';
import tableData from './test-data/tableData';
import tableDataPeople from './test-data/tableDataPeople';

expect.extend(toHaveNoViolations);

describe('SortableTable Component', function () {
  it('should order elements correctly by table column expected order', function () {
    render(
      <SortableTable {...tableData}></SortableTable>
    );
    expect(screen.getAllByRole('cell')[0]).toHaveTextContent('Aconcagua');
    fireEvent.click(screen.getByText(/Elevation/i));
    expect(screen.getAllByRole('cell')[0]).toHaveTextContent('Puncak Jaya');
    fireEvent.click(screen.getByText(/Elevation/i));
    expect(screen.getAllByRole('cell')[0]).toHaveTextContent('Everest');
    fireEvent.click(screen.getByText(/Elevation/i));
    expect(screen.getAllByRole('cell')[0]).toHaveTextContent('Puncak Jaya');
  });

  it('should order elements correctly by table column expected order', function () {
    render(
      <SortableTable {...tableDataPeople}></SortableTable>
    );
    expect(screen.getAllByRole('cell')[4]).toHaveTextContent('11');
    fireEvent.click(screen.getByText(/Age/i));
    expect(screen.getAllByRole('cell')[4]).toHaveTextContent('9');
    fireEvent.click(screen.getByText(/Age/i));
    expect(screen.getAllByRole('cell')[4]).toHaveTextContent('90');
    fireEvent.click(screen.getByText(/Id/i));
    expect(screen.getAllByRole('cell')[4]).toHaveTextContent('1');
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(<SortableTable {...tableData}></SortableTable>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();    
  });
});
