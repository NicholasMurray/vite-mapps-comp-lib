import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { axe, toHaveNoViolations } from 'jest-axe';
import { BackLink } from './BackLink';

expect.extend(toHaveNoViolations);

describe('Backlink Component', () => {
  it('should render back link with text and href supplied', () => {
    render(
      <BackLink text="Back" href="#"></BackLink>
    );
    expect(screen.getByText('Back')).toBeTruthy();
    expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', '#');
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(<BackLink text="Back" href="#"></BackLink>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();    
  });
});
