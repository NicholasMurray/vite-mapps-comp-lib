import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ 
    accountHref,
    organisationName,
    serviceName,
    serviceUrl,
    signOutHref,
    signOutText,
    username,
    navigation
}) => {
  return (
    <header className="hods-header" role="banner" data-module="hods-header">
      <div className="hods-header__container hods-width-container">
        <div className="hods-header__main">
          <div className="hods-header__logo">
            <span className="govuk-body-l">{organisationName}</span>
          </div>
          { serviceName &&
            <div className="hods-header__title">
              <a 
                aria-current="page"
                className="hods-header__link hods-header__link--service-name hods-header__link--active"
                href={serviceUrl} 
              >
                Service name
              </a>
            </div>
          }
          { signOutHref &&
            <div className="hods-header__account-menu">
              <ul>
                <li>
                  <a className="hods-header__link" href={accountHref}>
                    {username}
                  </a>
                </li>
                <li>
                  <a className="hods-header__link" href={signOutHref}>
                    {signOutText}
                  </a>
                </li>
              </ul>
            </div>
          }
        </div>
        { navigation &&
          <nav aria-label="Menu" className="hods-header__navigation">
            <ul 
              aria-label="Top Level Navigation" 
              className="hods-header__navigation-list"
            >
              {
                navigation.map((item, index) => (
                  <li 
                    key={`header-nav-${index}`}
                    className={`hods-header__navigation-list__item${item.active ? ' hods-header__navigation-item--active' : ''}`}
                  >
                    <a className="hods-header__navigation-list__link" href={item.href}>
                      {item.text}
                    </a>
                  </li>
                ))
              }
            </ul>
          </nav>
          }
      </div>
    </header>
  );
};

Header.propTypes = {
  accountHref: PropTypes.string,
  organisationName: PropTypes.string,
  serviceName: PropTypes.string,
  serviceUrl: PropTypes.string,
  signOutHref: PropTypes.string,
  signOutText: PropTypes.string,
  username: PropTypes.string,
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
      active: PropTypes.bool
    })
  )
};

Header.defaultProps = {};
