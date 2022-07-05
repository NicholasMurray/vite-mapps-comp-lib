import React from 'react';
import PropTypes from 'prop-types';

export const Breadcrumbs = ({ collapseOnMobile, items}) => {
  return (
    <div className={`govuk-breadcrumbs${collapseOnMobile ? ' govuk-breadcrumbs--collapse-on-mobile' : ''}`}>
      {
        items &&
        (
          <ol className="govuk-breadcrumbs__list">
            {
              items.map((item, index) => (
                <li 
                  key={`breadcrumb-${index}`} 
                  className="govuk-breadcrumbs__list-item"
                >
                  <a 
                    className="govuk-breadcrumbs__link"
                    href={item.href}
                  >
                    {item.text}
                  </a>
                </li>
                )
              )
            }
          </ol>
        )
      }
    </div>
  );
};

Breadcrumbs.propTypes = {
  collapseOnMobile: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string
    })
  )
};

Breadcrumbs.defaultProps = {};
