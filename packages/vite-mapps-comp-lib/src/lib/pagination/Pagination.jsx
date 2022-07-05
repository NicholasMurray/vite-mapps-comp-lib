import React from 'react';
import PropTypes from 'prop-types';

export const Pagination = ({ 
  items,
  results,
  previous,
  next
}) => {
  return (
    <nav className="moj-pagination" aria-label="Pagination navigation"> 
      <ul className="moj-pagination__list">
        {
          previous && 
            (
              <li key={previous.text} className="moj-pagination__item  moj-pagination__item--prev">
                <a className="moj-pagination__link" href={previous.href}>Previous<span className="govuk-visually-hidden"> page</span></a>
              </li>
            )
        }
        {
          items && items.map((item, index) => (
            <li 
              key={`paginationData-${index}`}
              {...(item.selected && { 'aria-current' : 'page'})}
              {...(!item.type && item.selected && { 'aria-label' : `Page ${item.text} of ${results.count}`})}
              className={`moj-pagination__item${item.selected ? ' moj-pagination__item--active' : ''}${item.type ? ' moj-pagination__item--dots' : ''}`}
            >
              {item.type && '...'}
              {item.selected && item.text}
              {!item.type && !item.selected &&
                <a 
                  aria-label={`Page ${item.text} of ${results.count}`}
                  className="moj-pagination__link"
                  href={`/page=${item.text}`} 
              >
                {item.text}
              </a>
              }
            </li>
          ))
        }
        {
          next && 
          (
            <li key={next.text} className="moj-pagination__item  moj-pagination__item--next">
              <a 
                className="moj-pagination__link" 
                href={next.href}
              >
                Next<span className="govuk-visually-hidden"> page</span>
              </a>
            </li>
          )
        }
      </ul>
{'\n'}      
      { 
        results && 
        (
          <p className="moj-pagination__results">
            Showing <b>{results.from}</b> to <b>{results.to}</b> of <b>{results.count}</b> pages
          </p>
        )
      }
    </nav>
  );
};

Pagination.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
      selected: PropTypes.bool,
      type: PropTypes.string
    })
  ),
  results: PropTypes.shape({
    count: PropTypes.number,
    from: PropTypes.number,
    to: PropTypes.number,
    text: PropTypes.string
  }),
  previous: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string
  }),
  next: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string
  })
};

Pagination.defaultProps = {};