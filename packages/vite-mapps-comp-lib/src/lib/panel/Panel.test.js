import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Panel } from './Panel';

expect.extend(toHaveNoViolations);

describe('Panel Component', () => {
  it('should have display error message and have visually hidden text', () => {
    render(
      <Panel titleText="Application complete">
        Your reference number<br />
       <strong>HDJ2123F</strong>
      </Panel>
    );
    expect(screen.getByText('Application complete')).toBeTruthy();
    expect(screen.getByText('Your reference number')).toBeTruthy();
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(
    <Panel titleText="Application complete">
      Your reference number<br />
      <strong>HDJ2123F</strong>
    </Panel>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();    
  });
});
