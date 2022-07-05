import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { axe, toHaveNoViolations } from 'jest-axe';
import { ErrorMessage } from './ErrorMessage';
import { defaultErrorMessageData } from './test-data/defaultErrorMessageData';
import { noVisuallyHiddenTextErrorMessageData } from './test-data/noVisuallyHiddenTextErrorMessageData';

expect.extend(toHaveNoViolations);

describe('ErrorMessage Component', () => {
  it('should have display error message and have visually hidden text', () => {
    render(
      <ErrorMessage {...defaultErrorMessageData}>
      </ErrorMessage>
    );
    expect(screen.getByText('The date your passport was issued must be in the past')).toBeTruthy();
    expect(screen.getByText('Error:')).toBeInTheDocument();
  });

  it('should display error message and no default visually hidden text', () => {
    render(
      <ErrorMessage {...noVisuallyHiddenTextErrorMessageData}>
      </ErrorMessage>
    );
    expect(screen.getByText('The date your passport was issued must be in the past')).toBeTruthy();
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(
      <ErrorMessage {...defaultErrorMessageData}>
      </ErrorMessage>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();    
  });
});
