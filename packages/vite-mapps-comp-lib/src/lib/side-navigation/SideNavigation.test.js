import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { axe, toHaveNoViolations } from 'jest-axe';
import { SideNavigation } from './SideNavigation';
import { sideNavigationData } from './test-data/sideNavigationData';

expect.extend(toHaveNoViolations);

describe('SideNavigation Component', function () {
  it('should display Side Navigation correctly with correct item selected', function () {
    render(
      <SideNavigation {...sideNavigationData}></SideNavigation>
    );
    expect(screen.getAllByRole('link')[0]).toHaveTextContent('Nav item 1');
    expect(screen.getAllByRole('link')[1]).toHaveTextContent('Nav item 2');
    expect(screen.getAllByRole('link')[2]).toHaveTextContent('Nav item 3');
    expect(screen.getAllByRole('link')[1]).toHaveAttribute('aria-current', 'location');
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(<SideNavigation {...sideNavigationData}></SideNavigation>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();    
  });
});
