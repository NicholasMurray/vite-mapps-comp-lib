import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Pagination } from './Pagination';
import { paginationData, nextPaginationData, prevPaginationData, prevNextPaginationData } from './test-data/index'; 

expect.extend(toHaveNoViolations);

describe('Pagination Component', () => {
  it('should have Previous, Next, linked numbers and selected number with active styling and correct links', () => {
    render(
      <Pagination {...paginationData}></Pagination>
    );
    expect(screen.getAllByRole('link')[0]).toHaveTextContent('Previous');
    expect(screen.getAllByRole('link')[1]).toHaveTextContent('1');
    expect(screen.getAllByRole('link')[2]).toHaveTextContent('3');
    expect(screen.getAllByRole('link')[3]).toHaveTextContent('5');
    expect(screen.getAllByRole('link')[4]).toHaveTextContent('Next');

    expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', '/page=1');
    expect(screen.getAllByRole('link')[1]).toHaveAttribute('href', '/page=1');
    expect(screen.getAllByRole('link')[2]).toHaveAttribute('href', '/page=3');
    expect(screen.getAllByRole('link')[3]).toHaveAttribute('href', '/page=5');
    expect(screen.getAllByRole('link')[4]).toHaveAttribute('href', '/page=3');
  });

  it('should not display next button if not supplied in data', () => {
    render(
      <Pagination {...nextPaginationData}></Pagination>
    );
    expect(screen.getAllByRole('link')[0]).toHaveTextContent('Previous');
    expect(screen.getAllByRole('link')[1]).toHaveTextContent('1');
    expect(screen.getAllByRole('link')[2]).toHaveTextContent('2');
    expect(screen.getAllByRole('link')[3]).toHaveTextContent('4');
    expect(screen.queryByText('Next')).not.toBeInTheDocument();

    expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', '/page=4');
    expect(screen.getAllByRole('link')[1]).toHaveAttribute('href', '/page=1');
    expect(screen.getAllByRole('link')[2]).toHaveAttribute('href', '/page=2');
    expect(screen.getAllByRole('link')[3]).toHaveAttribute('href', '/page=4');
  });

  it('should not display previous button if not supplied in data', () => {
    render(
      <Pagination {...prevPaginationData}></Pagination>
    );
    expect(screen.getAllByRole('link')[0]).toHaveTextContent('2');
    expect(screen.getAllByRole('link')[1]).toHaveTextContent('3');
    expect(screen.getAllByRole('link')[2]).toHaveTextContent('4');
    expect(screen.getAllByRole('link')[3]).toHaveTextContent('5');
    expect(screen.queryByText('Previous')).not.toBeInTheDocument();

    expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', '/page=2');
    expect(screen.getAllByRole('link')[1]).toHaveAttribute('href', '/page=3');
    expect(screen.getAllByRole('link')[2]).toHaveAttribute('href', '/page=4');
    expect(screen.getAllByRole('link')[3]).toHaveAttribute('href', '/page=5');
    expect(screen.getAllByRole('link')[4]).toHaveAttribute('href', '/page=2');
  });

  it('should not display page numbers if not supplied in data', () => {
    render(
      <Pagination {...prevNextPaginationData}></Pagination>
    );
    expect(screen.getAllByRole('link')[0]).toHaveTextContent('Previous');
    expect(screen.getAllByRole('link')[1]).toHaveTextContent('Next');
    expect(screen.queryByText('Showing')).not.toBeInTheDocument();

    expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', '/page=1');
    expect(screen.getAllByRole('link')[1]).toHaveAttribute('href', '/page=3');
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(<Pagination {...nextPaginationData}></Pagination>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();    
  });
});
