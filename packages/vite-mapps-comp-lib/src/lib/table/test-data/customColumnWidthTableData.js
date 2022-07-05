export const customColumnWidthTableData = {
  caption: 'Month you apply',
  captionClasses: 'govuk-table__caption--m',
  firstCellIsHeader: true,
  head: [
    {
      text: 'Date',
      classes: 'govuk-!-width-one-half'
    },
    {
      text: 'Rate for vehicles',
      classes: 'govuk-!-width-one-quarter'
    },
    {
      text: 'Rate for bicycles',
      classes: 'govuk-!-width-one-quarter'
    }
  ],
  rows: [
    [
      {
        text: 'First 6 weeks'
      },
      {
        text: '£109.80 per week'
      },
      {
        text: '£59.10 per week'
      }
    ],
    [
      {
        text: 'Next 33 weeks'
      },
      {
        text: '£159.80 per week'
      },
      {
        text: '£89.10 per week'
      }
    ],
    [
      {
        text: 'Total estimated pay'
      },
      {
        text: '£4,282.20'
      },
      {
        text: '£2,182.20'
      }
    ]
  ]
};
