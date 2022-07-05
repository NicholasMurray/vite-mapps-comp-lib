import React from 'react';

export const defaultAccordionData = {
  id: 'accordion-default',
  items: [
    {
      heading: {
        text: 'Writing well for the web'
      },
      content: {
        html: <p className='govuk-body'>This is the content for Writing well for the web.</p>
      }
    },
    {
      heading: {
        text: 'Writing well for specialists'
      },
      content: {
        html: <p className='govuk-body'>This is the content for Writing well for specialists.</p>
      }
    },
      {
      heading: {
        text: 'Know your audience'
      },
      content: {
        html: <p className='govuk-body'>This is the content for Know your audience.</p>
      }
    },
      {
      heading: {
        text: 'How people read'
      },
      content: {
        html: <p className='govuk-body'>This is the content for How people read.</p>
      }
    }
  ]
};