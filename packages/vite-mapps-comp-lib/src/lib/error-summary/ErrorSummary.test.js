import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { axe, toHaveNoViolations } from 'jest-axe';
import { ErrorSummary } from './ErrorSummary';
import { defaultErrorSummaryData } from './test-data/defaultErrorSummaryData';
import { passportPostCodeErrorSummaryData } from './test-data/passportPostCodeErrorSummaryData';

expect.extend(toHaveNoViolations);

describe('ErrorSummary Component', () => {
  it('should have error summary with href target to input element', () => {
    render(
      <ErrorSummary {...defaultErrorSummaryData}></ErrorSummary>
    );
    expect(screen.getAllByRole('link')[0]).toHaveTextContent('Enter your full name');
    expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', '#full-name-input');
  });

  it('should have multiple error summaries if supplied', () => {
    render(
      <ErrorSummary {...passportPostCodeErrorSummaryData}></ErrorSummary>
    );
    expect(screen.getAllByRole('link')[0]).toHaveTextContent('The date your passport was issued must be in the past');
    expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', '#passport-issued-day');
    expect(screen.getAllByRole('link')[1]).toHaveTextContent('Enter a postcode, like AA1 1AA');
    expect(screen.getAllByRole('link')[1]).toHaveAttribute('href', '#postcode-input');
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(
      <ErrorSummary {...defaultErrorSummaryData}></ErrorSummary>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();    
  });
});
