import React from 'react';
import { ErrorSummary } from './ErrorSummary';
import { defaultErrorSummaryData } from './test-data/defaultErrorSummaryData';
import { passportPostCodeErrorSummaryData } from './test-data/passportPostCodeErrorSummaryData';

export default {
  title: 'Form/Error summary',
  component: ErrorSummary,
};

const Template = (args) => 
  <ErrorSummary  {...args}>
  </ErrorSummary>;

export const Default = Template.bind({});
Default.args = {
  ...defaultErrorSummaryData
};

const ErrorSummaryUsageTemplate = (args) =>
  <div>
    <ErrorSummary  {...args}></ErrorSummary>
    <div className="govuk-form-group govuk-form-group--error">
      <fieldset className="govuk-fieldset" role="group" aria-describedby="passport-issued-error">
        <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
          <h1 className="govuk-fieldset__heading">
            When was your passport issued?
          </h1>
        </legend>
        <p id="passport-issued-error" className="govuk-error-message">
          <span className="govuk-visually-hidden">Error:</span> Passport issue date must include a year
        </p>
        <div className="govuk-date-input" id="passport-issued">
          <div className="govuk-date-input__item">
            <div className="govuk-form-group">
              <label className="govuk-label govuk-date-input__label" htmlFor="passport-issued-day">
                Day
              </label>
              <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-day" name="passport-issued-day" type="text" value="5" inputMode="numeric" />
            </div>
          </div>
          <div className="govuk-date-input__item">
            <div className="govuk-form-group">
              <label className="govuk-label govuk-date-input__label" htmlFor="passport-issued-month">
                Month
              </label>
              <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-month" name="passport-issued-month" type="text" value="12" inputMode="numeric" />
            </div>
          </div>
          <div className="govuk-date-input__item">
            <div className="govuk-form-group">
              <label className="govuk-label govuk-date-input__label" htmlFor="passport-issued-year">
                Year
              </label>
              <input className="govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error" id="passport-issued-year" name="passport-issued-year" type="text" inputMode="numeric" />
            </div>
          </div>
        </div>
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="postcode-input">
            Postcode
          </label>
          <input className="govuk-input govuk-input--width-10" id="postcode-input" name="address-postcode" type="text" autoComplete="postal-code" />
        </div>
      </fieldset>
    </div>
  </div>;

export const ErrorSummaryUsage = ErrorSummaryUsageTemplate.bind({});
ErrorSummaryUsage.args = {
  ...passportPostCodeErrorSummaryData
};
