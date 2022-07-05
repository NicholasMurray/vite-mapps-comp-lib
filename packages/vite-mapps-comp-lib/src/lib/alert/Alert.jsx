import React from 'react';
import PropTypes from 'prop-types';

export const Alert = ({ heading, children, variant }) => {
  return (
    <div 
      className={`hods-alert${variant ? (variant === 'success' ? ' hods-alert--success' : ' hods-alert--error') : ''}`}
      role="alert"
    >
      <h2 className="hods-alert__heading">
        {heading}
      </h2>
      <p>
        {children}
      </p>
    </div>
  );
};

Alert.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
  variant: PropTypes.oneOf(['error', 'success']),
};

Alert.defaultProps = {};
