const tableData = {
  attributes: {
    'data-module': 'moj-sortable-table'
  },
  head: [
    {
      text: 'Name',
      attributes: {
        'aria-sort': 'ascending'
      }
    },
    {
      text: 'Elevation',
      attributes: {
        'aria-sort': 'none'
      }
    },
    {
      text: 'Continent',
      attributes: {
        'aria-sort': 'none'
      }
    },
    {
      text: 'First summit',
      attributes: {
        'aria-sort': 'none'
      },
      format: 'numeric'
    }
  ],
  rows: [
    [
      {
        text: 'Aconcagua'
      },
      {
        text: '6,961 meters',
        attributes: {
          'data-sort-value': '6961'
        }
      },
      {
        text: 'South America'
      },
      {
        text: '1897',
        format: 'numeric',
        attributes: {
          'data-sort-value': '1897'
        }
      }
    ],
    [
      {
        text: 'Denali'
      },
      {
        text: '6,194 meters',
        attributes: {
          'data-sort-value': '6194'
        }
      },
      {
        text: 'North America'
      },
      {
        text: '1913',
        format: 'numeric',
        attributes: {
          'data-sort-value': '1913'
        }
      }
    ],
    [
      {
        text: 'Elbrus'
      },
      {
        text: '5,642 meters',
        attributes: {
          'data-sort-value': '5642'
        }
      },
      {
        text: 'Europe'
      },
      {
        text: '1874',
        format: 'numeric',
        attributes: {
          'data-sort-value': '1874'
        }
      }
    ],
    [
      {
        text: 'Everest'
      },
      {
        text: '8,850 meters',
        attributes: {
          'data-sort-value': '8850'
        }
      },
      {
        text: 'Asia'
      },
      {
        text: '1953',
        format: 'numeric',
        attributes: {
          'data-sort-value': '1953'
        }
      }
    ],
    [
      {
        text: 'Kilimanjaro'
      },
      {
        text: '5,895 meters',
        attributes: {
          'data-sort-value': '5895'
        }
      },
      {
        text: 'Africa'
      },
      {
        text: '1889',
        format: 'numeric',
        attributes: {
          'data-sort-value': '1889'
        }
      }
    ],
    [
      {
        text: 'Puncak Jaya'
      },
      {
        text: '4,884 meters',
        attributes: {
          'data-sort-value': '4884'
        }
      },
      {
        text: 'Australia'
      },
      {
        text: '1962',
        format: 'numeric',
        attributes: {
          'data-sort-value': '1962'
        }
      }
    ],
    [
      {
        text: 'Vinson'
      },
      {
        text: '4,897 meters',
        attributes: {
          'data-sort-value': '4897'
        }
      },
      {
        text: 'Antarctica'
      },
      {
        text: '1966',
        format: 'numeric',
        attributes: {
          'data-sort-value': '1966'
        }
      }
    ]
  ]
};

export default tableData;