import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const SortableTable = ({ head, rows }) => {

  const [sortableTableData, setSortableTableData] = useState({});

  useEffect(() => {
    setSortableTableData({ head: head, rows: rows});
  }, []);

  const dataSorter = (sortableTableData, sortByType, sortByColNum) => {
    if (sortByType !== 'text') {
      return sortableTableData.rows.sort((a, b) => (parseInt(a[sortByColNum].attributes['data-sort-value']) - parseInt(b[sortByColNum].attributes['data-sort-value'])));
    }
    return sortableTableData.rows.sort((a, b) => (a[sortByColNum].text < b[sortByColNum].text ? -1 : 1));
  };

  const sortTableData = (sortByColNum, sortByType, reverseSort) => {
    setSortableTableData(sortableTableData => ({
        ...sortableTableData,
        head: sortableTableData.head.map((item, index) => {
          let temp = Object.assign({}, item);
          if (index === sortByColNum) {
            if (temp.attributes['aria-sort'] === 'none') {
              temp.attributes['aria-sort'] = 'ascending';
            } else if (temp.attributes['aria-sort'] === 'ascending') {
              temp.attributes['aria-sort'] = 'descending';
            } else {
              temp.attributes['aria-sort'] = 'ascending';
            }
          } else {
            temp.attributes['aria-sort'] = 'none';
          }
          return temp;
        }),
        rows: reverseSort ? 
            (dataSorter(sortableTableData, sortByType, sortByColNum)) :
            (dataSorter(sortableTableData, sortByType, sortByColNum)).reverse()
    }));
  };

  return (
    <table className="govuk-table" data-module={sortableTableData.attributes && sortableTableData.attributes['data-module'] }>
      { sortableTableData.head && (
        <thead className="govuk-table__head">
          <tr className="govuk-table__row">
            {sortableTableData.head.map((item, index) => (
              <th 
                aria-sort={ item.attributes['aria-sort'] } 
                className={`govuk-table__header${item.format === 'numeric' ? ' govuk-table__header--numeric' : ''}`} 
                key={`sortableTableData-${item.text.toString()}`} 
                scope="col"
              >
                <button 
                  data-index={index}
                  onClick={() => { 
                    sortTableData(
                        index, 
                        (item.format === 'numeric' ? 'numeric' : 'text'),
                        (item.attributes['aria-sort'] === 'ascending' ? false : true),
                      );
                  } }
                  type="button" 
                >
                  { item.text }
                </button>
              </th>
            ))}
          </tr>
        </thead>
      )}
      {sortableTableData.rows && (
        <tbody className="govuk-table__body">
          {sortableTableData.rows.map((row, index) => (
            <tr key={index} className="govuk-table__row">
              {row.map(item => (
                <td 
                  key={item.text.toString()} className={`govuk-table__cell${item.format === 'numeric' ? ' govuk-table__cell--numeric' : ''}` }
                  data-sort-value={item.attributes && item.attributes['data-sort-value'] }
                >
                  {item.text}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
};

SortableTable.propTypes = {
  head: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      attributes: PropTypes.shape({
        'aria-sort': PropTypes.string
      })
    })
  ),
  rows: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        format: PropTypes.string,
        attributes: PropTypes.shape({
          'data-sort-value': PropTypes.string
        })
      })
    )
  )
};
