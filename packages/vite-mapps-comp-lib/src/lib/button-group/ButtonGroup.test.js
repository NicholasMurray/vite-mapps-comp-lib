import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { ButtonGroup } from './ButtonGroup';
import { Button } from './../button/Button';

expect.extend(toHaveNoViolations);

describe('ButtonGroup Component', () => {
  it('should have Hello Button innerText', () => {
    render(
      <ButtonGroup>
        <Button>Save and continue</Button>
        <Button variant="secondary">Save as draft</Button>
      </ButtonGroup>
    );
    const buttonGroup = screen.getAllByRole('button')[0].parentElement;
    expect(buttonGroup).toMatchInlineSnapshot(`
      <div
        class="govuk-button-group"
      >
        <button
          class="govuk-button"
          data-module="govuk-button"
        >
          Save and continue
        </button>
        <button
          class="govuk-button govuk-button--secondary"
          data-module="govuk-button"
        >
          Save as draft
        </button>
      </div>
    `);
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(
    <ButtonGroup>
      <Button>Save and continue</Button>
      <Button variant="secondary">Save as draft</Button>
    </ButtonGroup>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();    
  });
});
