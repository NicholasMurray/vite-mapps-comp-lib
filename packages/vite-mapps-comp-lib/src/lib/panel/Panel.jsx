import React from 'react';
import PropTypes from 'prop-types';

export const Panel = ({ titleText, children, ...props}) => {
  return (
    <div className="govuk-panel govuk-panel--confirmation" {...props}>
      <h1 className="govuk-panel__title">{titleText}</h1>
      <div className="govuk-panel__body">{children}</div>
    </div>
  );
};

Panel.propTypes = {
  titleText: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Panel.defaultProps = {};
