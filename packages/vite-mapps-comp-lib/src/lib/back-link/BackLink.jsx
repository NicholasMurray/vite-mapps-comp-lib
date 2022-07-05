import React from 'react';
import PropTypes from 'prop-types';

export const BackLink = ({ text, href }) => {
  return (
          <a 
            className="govuk-back-link" 
            href={href} 
          >
            {text}
          </a>
        );
};

BackLink.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string
};

BackLink.defaultProps = {};
