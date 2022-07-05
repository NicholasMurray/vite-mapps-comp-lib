import React from 'react';
import PropTypes from 'prop-types';

export const ButtonGroup = ({ children }) => {
  return (<div className="govuk-button-group">{children}</div>);
};

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

ButtonGroup.defaultProps = {};
