import React from 'react';

export const conditionallyRevealRadiosData = {
  idPrefix: 'contact',
  name: 'contact',
  fieldset: {
    legend: {
      text: 'How would you prefer to be contacted?',
      isPageHeading: true,
      classes: 'govuk-fieldset__legend--l'
    }
  },
  hint: {
    text: 'Select one option.'
  },
  items: [
    {
      text: 'Email',
      value: 'email',
      conditional: {
        html: <>
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="contact-by-email">
              Email address
            </label>
            <input className="govuk-input govuk-!-width-one-third" id="contact-by-email" name="contact-by-email" type="email" spellCheck="false" autoComplete="email" />
          </div>
        </>
      }
    },
    {
      defaultChecked: true,
      text: 'Phone',
      value: 'phone',
      conditional: {
        html: <>
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="contact-by-phone">
              Phone number
            </label>
            <input className="govuk-input govuk-!-width-one-third" id="contact-by-phone" name="contact-by-phone" type="tel" autoComplete="tel" />
          </div>
        </>
      }
    },
    {
      text: 'Text message',
      value: 'text',
      conditional: {
        html: <>
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="contact-by-text">
              Mobile phone number
            </label>
            <input className="govuk-input govuk-!-width-one-third" id="contact-by-text" name="contact-by-text" type="tel" autoComplete="tel" />
          </div>
        </>
      }
    }
  ]
};