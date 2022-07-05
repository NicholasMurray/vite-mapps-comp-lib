import { useState } from 'react'
import './App.scss'
import { Alert, Button, SideNavigation, SubNavigation, SortableTable } from 'vite-mapps-comp-lib'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React + MAPPS</p>
        <p>
          <Button type="button" handleClick={() => setCount((count) => count + 1)}>
            Count is: {count}
          </Button>
        </p>

        <Alert heading="New Passport">
            We'll send your new passport by secure delivery. The cost is included in the passport fee.
        </Alert>
        
        <Button variant="primary" isStartButton>Hello World</Button>
        
        <SubNavigation
          items={[
            {
              href: '#1',
              text: 'Nav item 1'
            },
            {
              active: true,
              href: '#2',
              text: 'Nav item 2'
            },
            {
              href: '#3',
              text: 'Nav item 3'
            }
          ]}
          label="Sub navigation"
        />
        
        <SideNavigation
          items={[
            {
              href: '#1',
              text: 'Nav item 1'
            },
            {
              active: true,
              href: '#2',
              text: 'Nav item 2'
            },
            {
              href: '#3',
              text: 'Nav item 3'
            }
          ]}
          label="Side navigation"
        />

        <SortableTable
          attributes={{
            'data-module': 'moj-sortable-table'
          }}
          head={[
            {
              attributes: {
                'aria-sort': 'ascending'
              },
              text: 'Name'
            },
            {
              attributes: {
                'aria-sort': 'none'
              },
              text: 'Elevation'
            },
            {
              attributes: {
                'aria-sort': 'none'
              },
              text: 'Continent'
            },
            {
              attributes: {
                'aria-sort': 'none'
              },
              format: 'numeric',
              text: 'First summit'
            }
          ]}
          rows={[
            [
              {
                text: 'Aconcagua'
              },
              {
                attributes: {
                  'data-sort-value': '6961'
                },
                text: '6,961 meters'
              },
              {
                text: 'South America'
              },
              {
                attributes: {
                  'data-sort-value': '1897'
                },
                format: 'numeric',
                text: '1897'
              }
            ],
            [
              {
                text: 'Denali'
              },
              {
                attributes: {
                  'data-sort-value': '6194'
                },
                text: '6,194 meters'
              },
              {
                text: 'North America'
              },
              {
                attributes: {
                  'data-sort-value': '1913'
                },
                format: 'numeric',
                text: '1913'
              }
            ],
            [
              {
                text: 'Elbrus'
              },
              {
                attributes: {
                  'data-sort-value': '5642'
                },
                text: '5,642 meters'
              },
              {
                text: 'Europe'
              },
              {
                attributes: {
                  'data-sort-value': '1874'
                },
                format: 'numeric',
                text: '1874'
              }
            ],
            [
              {
                text: 'Everest'
              },
              {
                attributes: {
                  'data-sort-value': '8850'
                },
                text: '8,850 meters'
              },
              {
                text: 'Asia'
              },
              {
                attributes: {
                  'data-sort-value': '1953'
                },
                format: 'numeric',
                text: '1953'
              }
            ],
            [
              {
                text: 'Kilimanjaro'
              },
              {
                attributes: {
                  'data-sort-value': '5895'
                },
                text: '5,895 meters'
              },
              {
                text: 'Africa'
              },
              {
                attributes: {
                  'data-sort-value': '1889'
                },
                format: 'numeric',
                text: '1889'
              }
            ],
            [
              {
                text: 'Puncak Jaya'
              },
              {
                attributes: {
                  'data-sort-value': '4884'
                },
                text: '4,884 meters'
              },
              {
                text: 'Australia'
              },
              {
                attributes: {
                  'data-sort-value': '1962'
                },
                format: 'numeric',
                text: '1962'
              }
            ],
            [
              {
                text: 'Vinson'
              },
              {
                attributes: {
                  'data-sort-value': '4897'
                },
                text: '4,897 meters'
              },
              {
                text: 'Antarctica'
              },
              {
                attributes: {
                  'data-sort-value': '1966'
                },
                format: 'numeric',
                text: '1966'
              }
            ]
          ]}
        />
      </header>
    </div>
  )
}

export default App
