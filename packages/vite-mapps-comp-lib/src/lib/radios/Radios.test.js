import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Radios } from './Radios';
import { 
  defaultRadiosData, 
  preseletedRadiosData,
  disabledRadiosData,
  radiosNoPageHeadingData,
  radiosInlineData,
  radioItemsWithHintsData,
  radioItemsWithATextDividerData,
  radiosErrorMessagesData,
  conditionallyRevealRadiosData

} from './test-data/';

expect.extend(toHaveNoViolations);

describe('Radios Component', () => {

  it('should render radio items with preselected radio if supplied', () => {
    render(
      <Radios {...preseletedRadiosData}></Radios>
    );
    expect(screen.getAllByRole('radio')[2]).toHaveAttribute('checked');
  });

  it('should render radio items with disabled radio if supplied', () => {
    render(
      <Radios {...disabledRadiosData}></Radios>
    );
    expect(screen.getAllByRole('radio')[1]).toBeDisabled();
  });

  it('should render pageheading fieldset containing radio buttons array', () => {
    render(
      <Radios {...defaultRadiosData}></Radios>
    );
    const firstRadio = screen.getAllByRole('radio')[0];
    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('Where do you live?');
    expect(firstRadio).toHaveAttribute('id', 'where-do-you-live');
    expect(firstRadio).toHaveAttribute('name', 'where-do-you-live');
    expect(firstRadio.value).toBe('england');
    expect(screen.getByLabelText('England')).toEqual(firstRadio);

    const fourthRadio = screen.getAllByRole('radio')[3];
    expect(fourthRadio).toHaveAttribute('id', 'where-do-you-live-4');
    expect(fourthRadio).toHaveAttribute('name', 'where-do-you-live');
    expect(fourthRadio.value).toBe('northern-ireland');
    expect(screen.getByLabelText('Northern Ireland')).toEqual(fourthRadio);
  });

  it('should not render pageheading fieldset if not supplied', () => {
    render(
      <Radios {...radiosNoPageHeadingData}></Radios>
    );
    expect(screen.getByText('Where do you live?')).toBeTruthy();
    expect(screen.queryByRole('heading', {level: 1})).toBeFalsy();
  });

  it('should render radios inline with hint if supplied', () => {
    render(
      <Radios {...radiosInlineData}></Radios>
    );
    expect(screen.getByText('This includes changing your last name or spelling your name differently.')).toBeTruthy();
    expect(screen.getByRole('group')).toHaveAttribute('aria-describedby', 'changed-name-hint');
  });

  it('should render radio items with hints if supplied', () => {
    render(
      <Radios {...radioItemsWithHintsData}></Radios>
    );
    expect(screen.getByText('You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before.')).toBeTruthy();
    expect(screen.getAllByRole('radio')[0]).toHaveAttribute('aria-describedby', 'sign-in-item-hint');
  });

  it('should render radio items with divider if supplied', () => {
    render(
      <Radios {...radioItemsWithATextDividerData}></Radios>
    );
    const dividerValue = 'or';
    expect(screen.getByText(dividerValue)).toBeTruthy();
  });

  it('should render radio items with error message if supplied', () => {
    render(
      <Radios {...radiosErrorMessagesData}></Radios>
    );
    const errorMessage = 'Select the country where you live';
    expect(screen.getByText(errorMessage)).toBeTruthy();
  });

  it('should render radio items conditional children displayed by default, or revealed conditionally', () => {
    render(
      <Radios {...conditionallyRevealRadiosData}></Radios>
    );
    expect(screen.getByText('Phone number').parentElement.parentElement).not.toHaveClass('govuk-radios__conditional--hidden');
    expect(screen.getByText('Mobile phone number').parentElement.parentElement).toHaveClass('govuk-radios__conditional--hidden');
    fireEvent.click(screen.getByText('Text message'));
    expect(screen.getByText('Mobile phone number').parentElement.parentElement).not.toHaveClass('govuk-radios__conditional--hidden');
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(<Radios {...defaultRadiosData}></Radios>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();    
  });
});
