import React from 'react';
import PropTypes from 'prop-types';

export const SubNavigation = ({
    label,
    items
}) => {
  return (
    <nav className="moj-sub-navigation" {...(label && { 'aria-label' : label})}>
      {
        items &&
        (
          <ul className="moj-sub-navigation__list">
            {
              items.map((item, index) => (
                <li 
                  key={`SubNavigation-${index}`} 
                  className={`moj-sub-navigation__item${item.active ? ' moj-sub-navigation__item--active' : ''}`}
                >
                  <a 
                    className="moj-sub-navigation__link"
                    href={item.href} 
                    {...(item.active && { 'aria-current' : 'page'})}
                  >
                    {item.text}
                  </a>
                </li>
                )
              )
            }
          </ul>
        )
      }
    </nav>
  );
};

SubNavigation.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
      active: PropTypes.bool
    })
  )
};

SubNavigation.defaultProps = {};
