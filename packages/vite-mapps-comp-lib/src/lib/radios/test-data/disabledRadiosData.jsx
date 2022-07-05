export const disabledRadiosData = {
  idPrefix: 'disabled-where-do-you-live',
  name: 'disabled-where-do-you-live',
  fieldset: {
    legend: {
      text: 'Where do you live?',
      isPageHeading: true,
      classes: 'govuk-fieldset__legend--l'
    }
  },
  items: [
    {
      text: 'England',
      value: 'england',
    },
    {
      disabled: true,
      text: 'Scotland',
      value: 'scotland',
    },
    {
      defaultChecked: true,
      text: 'Wales',
      value: 'wales',
    },
    {
      text: 'Northern Ireland',
      value: 'northern-ireland',
    }
  ]
};