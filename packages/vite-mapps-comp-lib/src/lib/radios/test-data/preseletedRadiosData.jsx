export const preseletedRadiosData = {
  idPrefix: 'preselected-where-do-you-live',
  name: 'preselected-where-do-you-live',
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