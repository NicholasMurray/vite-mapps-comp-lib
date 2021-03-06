export const radiosInlineData = {
  classes: 'govuk-radios--inline',
  idPrefix: 'changed-name',
  name: 'changed-name',
  fieldset: {
    legend: {
      text: 'Have you changed your name?',
      isPageHeading: true,
      classes: 'govuk-fieldset__legend--l'
    }
  },
  hint: {
    text: 'This includes changing your last name or spelling your name differently.'
  },
  items: [
    {
      value: 'yes',
      text: 'Yes'
    },
    {
      value: 'no',
      text: 'No'
    }
  ]
};