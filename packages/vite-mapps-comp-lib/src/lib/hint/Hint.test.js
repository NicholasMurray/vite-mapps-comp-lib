import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Hint } from './Hint';
import { defaultHintData } from './test-data/defaultHintData';

expect.extend(toHaveNoViolations);

describe('Hint Component', () => {
  it('should have Hello Button innerText', () => {
    render(
      <Hint {...defaultHintData}></Hint>
    );
    const hint = screen.getByText('Some hint text');
    expect(screen.getByText('Some hint text')).toBeTruthy();
    expect(hint).toHaveAttribute('id', 'hint-id');
    expect(hint).toHaveAttribute('class', 'govuk-hint test-class');
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(<Hint {...defaultHintData}></Hint>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();    
  });
});
