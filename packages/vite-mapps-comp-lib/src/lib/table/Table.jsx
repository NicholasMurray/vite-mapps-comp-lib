import React from 'react';
import PropTypes from 'prop-types';

export const Table = ({ 
  caption,
  captionClasses,
  firstCellIsHeader,
  head,
  rows
}) => {

  return (
    <table className="govuk-table">
      { caption && 
        <caption 
          className={`govuk-table__caption${captionClasses && ` ${captionClasses}`}`}
        >
          {caption}
        </caption>
      }
      { head && (
        <thead className="govuk-table__head">
          <tr key="dataTable-thead-tr" className="govuk-table__row">
            {head.map((item, index) => (
              <th 
                className={
                    `govuk-table__header${item.format === 'numeric' ?
                     ' govuk-table__header--numeric' : ''}${item.classes ? (' ' + item.classes) : ''}`
                  } 
                key={`dataTable-thead-tr-th-${index}`}
                scope="col"
              >
                { item.text }
              </th>
            ))}
          </tr>
        </thead>
      )}
      {rows && (
        <tbody className="govuk-table__body">
          {rows.map((row, rowIndex) => (
            <tr key={`dataTable-tbody-tr-${rowIndex}`} className="govuk-table__row">
              {row.map((item, index) => (
                <React.Fragment key={`rf-key-${rowIndex}-${index}`}>
                  {
                    index == 0 && firstCellIsHeader &&
                      <th
                        className="govuk-table__header"
                        data-key={`dataTable-tbody-th-${rowIndex}-${index}`}
                        scope="row" 
                      >
                        {item.text}
                      </th>
                  }
                  {
                    (index != 0 || !firstCellIsHeader) && 
                      <td 
                        data-key={`dataTable-tbody-td-${rowIndex}-${index}`}
                        className={`govuk-table__cell${item.format === 'numeric' ? ' govuk-table__cell--numeric' : ''}` }
                      >
                        {item.text}
                      </td>
                  }
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
};

Table.propTypes = {
  caption: PropTypes.string,
  captionClasses: PropTypes.string,
  firstCellIsHeader: PropTypes.bool,
  head: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      format: PropTypes.string
    })
  ),
  rows: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        format: PropTypes.string
      })
    )
  )
};
