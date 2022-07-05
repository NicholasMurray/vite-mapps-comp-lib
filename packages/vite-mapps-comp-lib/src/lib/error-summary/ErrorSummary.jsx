import React from 'react';
import PropTypes from 'prop-types';

export const ErrorSummary = ({ titleText, errorList }) => {
  return (
    <div 
      aria-labelledby="error-summary-title" 
      className="govuk-error-summary" 
      data-module="govuk-error-summary"
      role="alert"
    >
      <h2 className="govuk-error-summary__title" id="error-summary-title">
        {titleText}
      </h2>
      <div className="govuk-error-summary__body">
        { errorList && 
          <ul className="govuk-list govuk-error-summary__list">
            {
              errorList.map((item, index) => (
                <li  key={`error-list-${index}`}>
                  <a href={item.href}>
                    {item.text}
                  </a>
                </li>
              ))
            }
          </ul>
        }
      </div>
    </div>
  );
};

ErrorSummary.propTypes = {
  titleText: PropTypes.string,
  errorList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string
    })
  )
};

ErrorSummary.defaultProps = {};
