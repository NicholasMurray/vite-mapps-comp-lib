import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', function () {
  it('should have Hello Button innerText', function () {
    let { getByText } = render(<Button>Hello Button</Button>);
    expect(getByText('Hello Button')).toMatchInlineSnapshot(`
      <button
        class="govuk-button"
        data-module="govuk-button"
      >
        Hello Button
      </button>
    `);
  });

  it('should have default class with no variant class if no varaint specified', function () {
    let { getByText } = render(<Button>Hello Button</Button>);
    expect(getByText('Hello Button')).toMatchInlineSnapshot(`
      <button
        class="govuk-button"
        data-module="govuk-button"
      >
        Hello Button
      </button>
    `);
  });

  it('should have default class with no variant class if primary variant specified', function () {
    let { getByText } = render(<Button variant="primary">Hello Button</Button>);
    expect(getByText('Hello Button')).toMatchInlineSnapshot(`
      <button
        class="govuk-button"
        data-module="govuk-button"
      >
        Hello Button
      </button>
    `);
  });

  it('should have correct classes for secondary button variant', function () {
    let { getByText } = render(
      <Button variant="secondary">Secondary Button</Button>
    );
    expect(getByText('Secondary Button')).toMatchInlineSnapshot(`
      <button
        class="govuk-button govuk-button--secondary"
        data-module="govuk-button"
      >
        Secondary Button
      </button>
    `);
  });

  it('should have correct classes for warning button variant', function () {
    let { getByText } = render(
      <Button variant="warning">Warning Button</Button>
    );
    expect(getByText('Warning Button')).toMatchInlineSnapshot(`
      <button
        class="govuk-button govuk-button--warning"
        data-module="govuk-button"
      >
        Warning Button
      </button>
    `);
  });

  it('should have correct classes for disabled button variant and have a disabled property', function () {
    let { getByText } = render(
      <Button disabled={true}>Disabled Button</Button>
    );
    expect(getByText('Disabled Button')).toMatchInlineSnapshot(`
      <button
        aria-disabled="true"
        class="govuk-button govuk-button--disabled"
        data-module="govuk-button"
        disabled=""
      >
        Disabled Button
      </button>
    `);
  });

  it('should have correct classes supplied through classes prop', function () {
    let { getByText } = render(
      <Button classes="test-class">Test Class</Button>
    );
    expect(getByText('Test Class')).toMatchInlineSnapshot(`
      <button
        class="govuk-button test-class"
        data-module="govuk-button"
      >
        Test Class
      </button>
    `);
  });

  it('should have correct classes and arrow icon if isStartButton', function () {
    let { getByText } = render(<Button isStartButton>Start Button</Button>);
    expect(getByText('Start Button')).toMatchInlineSnapshot(`
      <button
        class="govuk-button govuk-button--start"
        data-module="govuk-button"
      >
        Start Button
        <svg
          aria-hidden="true"
          class="govuk-button__start-icon"
          focusable="false"
          height="19"
          viewBox="0 0 33 40"
          width="17.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0h13l20 20-20 20H0l20-20z"
            fill="currentColor"
          />
        </svg>
      </button>
    `);
  });

  it('should have correct classes for an anchor tag and anchor tags for an \'as a\' button', function () {
    let { getByText } = render(<Button element="a">Anchor Button</Button>);
    expect(getByText('Anchor Button')).toMatchInlineSnapshot(`
      <a
        class="govuk-button"
        data-module="govuk-button"
      >
        Anchor Button
      </a>
    `);
  });

  it('should have correct classes for an anchor tag and anchor tags if href is passed', function () {
    let { getByText } = render(<Button href="#">Href Button</Button>);
    expect(getByText('Href Button')).toMatchInlineSnapshot(`
      <a
        class="govuk-button"
        data-module="govuk-button"
        href="#"
      >
        Href Button
      </a>
    `);
  });

  it('should have the draggable html attribute if required', function () {
    let { getByText } = render(<Button>Draggable Button</Button>);
    expect(getByText('Draggable Button')).toMatchInlineSnapshot(`
      <button
        class="govuk-button"
        data-module="govuk-button"
      >
        Draggable Button
      </button>
    `);
  });

  it('should have the draggable html attribute if required', function () {
    let { getByText } = render(
      <Button draggable={true}>Draggable Button</Button>
    );
    expect(getByText('Draggable Button')).toMatchInlineSnapshot(`
      <button
        class="govuk-button"
        data-module="govuk-button"
        draggable="true"
      >
        Draggable Button
      </button>
    `);
  });

  it('should have the draggable html attibute set as false if required', function () {
    let { getByText } = render(
      <Button draggable={false}>Draggable Button</Button>
    );
    expect(getByText('Draggable Button')).toMatchInlineSnapshot(`
      <button
        class="govuk-button"
        data-module="govuk-button"
        draggable="false"
      >
        Draggable Button
      </button>
    `);
  });

  it('should have the draggable html attibute set as false if required', function () {
    let { getByText } = render(
      <Button draggable={false}>Draggable Button</Button>
    );
    expect(getByText('Draggable Button')).toMatchInlineSnapshot(`
      <button
        class="govuk-button"
        data-module="govuk-button"
        draggable="false"
      >
        Draggable Button
      </button>
    `);
  });

  it('should allow double clicks', () => {
    let count = 0;
    const incrementCount = () => {
      count++;
    };
    render(<Button handleClick={incrementCount}>Confirm</Button>);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(count).toBe(3);
  });

  it('should not allow double clicks if preventDoubleClick is false', () => {
    let count = 0;
    const incrementCount = () => {
      count++;
    };
    render(<Button handleClick={incrementCount}>Confirm</Button>);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(count).toBe(4);
  });

  it('should not error out if preventDoubleClick is true and no click function is supplied', () => {
    let count = 0;

    render(<Button preventDoubleClick={true}>Confirm</Button>);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(count).toBe(0);
  });

  jest.useFakeTimers('modern');
  it('should should prevent double clicks if preventDoubleClick is true', () => {
    const callback = jest.fn();

    render(
      <Button handleClick={callback} preventDoubleClick={true}>
        Confirm
      </Button>
    );
    const button = screen.getByRole('button');

    // At this point in time, the callback should not have been called yet
    expect(callback).not.toBeCalled();

    fireEvent.click(button);
    // Move on the timer
    jest.advanceTimersByTime(250);

    fireEvent.click(button);
    // Move on the timer
    jest.advanceTimersByTime(400);

    // Now our callback should have been called!
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
