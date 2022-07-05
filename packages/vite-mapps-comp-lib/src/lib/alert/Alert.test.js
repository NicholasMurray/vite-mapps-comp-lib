import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Alert } from './Alert';
import { defaultAlertData, errorAlertData, successAlertData } from './test-data';

expect.extend(toHaveNoViolations);

describe('Alert Component', () => {
  it('should have a heading of level 2 and information displayed', () => {
    render(
      <Alert {...defaultAlertData}></Alert>
    );
    expect(screen.getByRole('heading', {level: 2})).toHaveTextContent('New Passport');
    expect(screen.getByText('send your new passport by secure delivery', { exact: false})).toBeTruthy();
  });

  it('should success styling for variant of success', () => {
    render(
      <Alert {...successAlertData}></Alert>
    );
    expect(screen.getByRole('alert')).toHaveAttribute('class', 'hods-alert hods-alert--success');
  });

  it('should error styling for variant of error', () => {
    render(
      <Alert {...errorAlertData}></Alert>
    );
    expect(screen.getByRole('alert')).toHaveAttribute('class', 'hods-alert hods-alert--error');
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(
      <Alert {...defaultAlertData}></Alert>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();    
  });
});
