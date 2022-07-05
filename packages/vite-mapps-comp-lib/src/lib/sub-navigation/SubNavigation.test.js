import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { axe, toHaveNoViolations } from 'jest-axe';
import { SubNavigation } from './SubNavigation';
import { subNavigationData } from './test-data/subNavigationData';

expect.extend(toHaveNoViolations);

describe('SubNavigation Component', function () {
  it('should display Side Navigation correctly with correct item selected', function () {
    render(
      <SubNavigation {...subNavigationData}></SubNavigation>
    );
    expect(screen.getAllByRole('link')[0]).toHaveTextContent('Nav item 1');
    expect(screen.getAllByRole('link')[1]).toHaveTextContent('Nav item 2');
    expect(screen.getAllByRole('link')[2]).toHaveTextContent('Nav item 3');
    expect(screen.getAllByRole('link')[1]).toHaveAttribute('aria-current', 'page');
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(<SubNavigation {...subNavigationData}></SubNavigation>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();    
  });
});
