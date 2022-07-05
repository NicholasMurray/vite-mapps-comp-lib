import React from 'react';
import PropTypes from 'prop-types';

export const Hint = ({ 
    classes,
    id,
    text
}) => {
  return (<div id={id} className={`govuk-hint${classes ? ` ${classes}` : ''}`}>{text}</div>);
};

Hint.propTypes = {
  classes: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string
};

Hint.defaultProps = {};
