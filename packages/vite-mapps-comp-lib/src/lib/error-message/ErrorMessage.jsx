import React from 'react';
import PropTypes from 'prop-types';

export const ErrorMessage = ({ text, visuallyHiddenText }) => {
  return (
    <p className="govuk-error-message">
      {visuallyHiddenText 
      && <span className="govuk-visually-hidden">{visuallyHiddenText} </span>}
      {text}
    </p>
  );
};

ErrorMessage.propTypes = {
  text: PropTypes.string,
  visuallyHiddenText: PropTypes.string
};

ErrorMessage.defaultProps = {};
