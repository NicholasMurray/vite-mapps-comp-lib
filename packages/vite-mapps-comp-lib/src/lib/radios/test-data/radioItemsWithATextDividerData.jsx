export const radioItemsWithATextDividerData = {
  idPrefix: 'where-do-you-live',
  name: 'where-do-you-live',
  fieldset: {
    legend: {
      text: 'Where do you live?',
      isPageHeading: true,
      classes: 'govuk-fieldset__legend--l'
    }
  },
  items: [
    {
      value: 'england',
      text: 'England'
    },
    {
      value: 'scotland',
      text: 'Scotland'
    },
    {
      value: 'wales',
      text: 'Wales'
    },
    {
      divider: 'or'
    },
    {
      value: 'northern-ireland',
      text: 'Northern Ireland'
    }
  ]
};