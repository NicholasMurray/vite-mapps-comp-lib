import React from 'react';
import PropTypes from 'prop-types';

export const SideNavigation = ({ 
    label,
    items
}) => {
  return (
    <nav className="moj-side-navigation" {...(label && { 'aria-label' : label})}>
      {
        items &&
        (
          <ul className="moj-side-navigation__list">
            {
              items.map((item, index) => (
                <li 
                  key={`sideNavigation-${index}`} 
                  className={`moj-side-navigation__item${item.active ? ' moj-side-navigation__item--active' : ''}`}
                >
                  <a href={item.href} {...(item.active && { 'aria-current' : 'location'})}>{item.text}</a>
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

SideNavigation.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
      active: PropTypes.bool
    })
  )
};

SideNavigation.defaultProps = {};
