import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Breadcrumbs } from './Breadcrumbs';
import { defaultBreadcrumbsData } from './test-data/defaultBreadcrumbsData';
import { mobileBreadcrumbsData } from './test-data/mobileBreadcrumbsData';

expect.extend(toHaveNoViolations);

describe('Breadcrumbs Component', () => {
  it('should render breadcrumbs with text and href supplied', () => {
    render(
      <Breadcrumbs {...defaultBreadcrumbsData}></Breadcrumbs>
    );
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', '#');
    expect(screen.getByText('Travel abroad')).toBeTruthy();
    expect(screen.getAllByRole('link')[2]).toHaveAttribute('href', '#');
  });

  it('should render mobile collapsed breadcrumbs with text and href supplied', () => {
    render(
      <Breadcrumbs {...mobileBreadcrumbsData}></Breadcrumbs>
    );
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', '#');
    expect(screen.getByText('Economic growth in rural areas')).toBeTruthy();
    expect(screen.getAllByRole('link')[1]).toHaveAttribute('href', '#');
    expect(screen.getByRole('list').parentElement).toHaveAttribute('class', 'govuk-breadcrumbs govuk-breadcrumbs--collapse-on-mobile');
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(<Breadcrumbs {...defaultBreadcrumbsData}></Breadcrumbs>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();    
  });
});
