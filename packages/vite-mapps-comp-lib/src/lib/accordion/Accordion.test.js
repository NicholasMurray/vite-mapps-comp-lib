import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Accordion } from './Accordion';
import { defaultAccordionData, expandedAccordionData, summaryAccordionData } from './test-data/';

expect.extend(toHaveNoViolations);

describe('Accordion Component', () => {
  it('should initially display default accordions as contracted', () => {
    render(
      <Accordion id={defaultAccordionData.id} items={defaultAccordionData.items} />
    );
    defaultAccordionData.items.map((item, index) => {
      const contentHTML = item.content.html.props.children.toString();
      expect(screen.getByText(item.heading.text)).toBeTruthy();
      expect(screen.getByText(contentHTML)).toBeTruthy();
      expect(screen.getAllByRole('button')[index + 1].parentElement.parentElement.parentElement).not.toHaveClass('govuk-accordion__section--expanded');
    });
  });

  it('should expand and contract an accordion when show/hide button clicked', () => {
    render(
      <Accordion id={defaultAccordionData.id} items={defaultAccordionData.items} />
    );
    // exclude'Show all sections' buton from the show button click selection
    const secondShowButton = screen.getAllByRole('button')[2];
    expect(secondShowButton.parentElement.parentElement.parentElement).not.toHaveClass('govuk-accordion__section--expanded');
    fireEvent.click(secondShowButton);
    expect(secondShowButton.parentElement.parentElement.parentElement).toHaveClass('govuk-accordion__section--expanded');
    fireEvent.click(screen.getAllByText('Hide')[0]);
    expect(secondShowButton.parentElement.parentElement.parentElement).not.toHaveClass('govuk-accordion__section--expanded');
  });

  it('should expand and contract all accordions when show/hide all sections button clicked', () => {
    render(
      <Accordion id={defaultAccordionData.id} items={defaultAccordionData.items} />
    );
    const showHideAllButton = screen.getAllByRole('button')[0];

    fireEvent.click(showHideAllButton);
    defaultAccordionData.items.map((item, index) => {
      const contentHTML = item.content.html.props.children.toString();
      expect(screen.getByText(item.heading.text)).toBeTruthy();
      expect(screen.getByText(contentHTML)).toBeTruthy();
      expect(screen.getAllByRole('button')[index + 1].parentElement.parentElement.parentElement).toHaveClass('govuk-accordion__section--expanded');
    });

    fireEvent.click(showHideAllButton);
    defaultAccordionData.items.map((item, index) => {
      const contentHTML = item.content.html.props.children.toString();
      expect(screen.getByText(item.heading.text)).toBeTruthy();
      expect(screen.getByText(contentHTML)).toBeTruthy();
      expect(screen.getAllByRole('button')[index + 1].parentElement.parentElement.parentElement).not.toHaveClass('govuk-accordion__section--expanded');
    });
  });

  it('should display summary text if supplied', () => {
    render(
      <Accordion id={summaryAccordionData.id} items={summaryAccordionData.items} />
    );
    summaryAccordionData.items.map(item => {
      expect(screen.getByText(item.heading.text)).toBeTruthy();
      expect(screen.getByText(item.summary.text)).toBeTruthy();
    });
  });

  it('should display default expanded accordion if specified', () => {
    render(
      <Accordion id={expandedAccordionData.id} items={expandedAccordionData.items} />
    );
    expect(screen.getAllByRole('button')[2].parentElement.parentElement.parentElement).toHaveClass('govuk-accordion__section--expanded');
  });

  it('should not display show all sections if PlusMinus variant', () => {
    render(
      <Accordion id={expandedAccordionData.id} items={expandedAccordionData.items} variant="PlusMinus" />
    );
    expect(screen.queryByText('Show all sections')).toBeNull();
  });

  it('should expand and contract an accordion when expand contract button is clicked and variant id PlusMinuw', () => {
    render(
      <Accordion id={defaultAccordionData.id} items={defaultAccordionData.items} variant="PlusMinus" />
    );
    const secondShowButton = screen.getAllByRole('button')[2];
    expect(secondShowButton.parentElement.parentElement.parentElement).not.toHaveClass('govuk-accordion__section--expanded');
    fireEvent.click(secondShowButton);
    expect(secondShowButton.parentElement.parentElement.parentElement).toHaveClass('govuk-accordion__section--expanded');
    fireEvent.click(secondShowButton);
    expect(secondShowButton.parentElement.parentElement.parentElement).not.toHaveClass('govuk-accordion__section--expanded');
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(
      <Accordion id={summaryAccordionData.id} items={summaryAccordionData.items} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();    
  });
});
