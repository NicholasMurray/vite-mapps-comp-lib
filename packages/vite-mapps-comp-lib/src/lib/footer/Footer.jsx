import React from 'react';
import PropTypes from 'prop-types';

export const Footer = ({ children, navigation }) => {
  return (
    <footer className="hods-footer" role="contentinfo">
      <div className="hods-footer__inner">
        <div
          className="hods-footer__container hods-width-container"
        >
          <div className="hods-footer__content">
            {children}
          </div>
          { navigation &&       
            <div className="hods-footer__navigation">
              <ul
                id="navigation"
                className="hods-footer__navigation-list"
              >
                {
                  navigation.map((item, index) => (
                    <li key={`footer-nav-${index}`} className={`hods-footer__navigation-item${item.active ? ' active' : ''}`}>
                      <a
                        className="hods-footer__link"
                        href={item.href}
                      >
                        {item.text}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
      active: PropTypes.bool
    })
  )
};

Footer.defaultProps = {};
