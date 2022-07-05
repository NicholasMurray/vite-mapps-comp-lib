import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Minus, Plus } from './../icons/';

export const Accordion = ({ 
  id,
  items,
  variant
 }) => {

  const defaultExpandedAccordions = [];
  items.map((item, index) => item.expanded && defaultExpandedAccordions.push('accordion-' + index));

  const [expandedAccordions, setExpandedAccordions] = useState(defaultExpandedAccordions);
  const toggleExpandedAccordions = (accordionIndex) => {
    if (expandedAccordions.includes(accordionIndex)) {
      const filterExpandedAccordions = expandedAccordions.filter(item => item != accordionIndex);
      setExpandedAccordions(filterExpandedAccordions);
    } else {
      setExpandedAccordions([...expandedAccordions, accordionIndex]);
    }
  };

  const toggleAllAccordions = () => {
    if (expandedAccordions.length === items.length) {
      setExpandedAccordions([]);
    } else {
      const accordions = [];
      items.map((item, index) => accordions.push('accordion-' + index));
      setExpandedAccordions(accordions);
    }
  };

  return (
    <div
      className="govuk-accordion js-enabled"
      data-module="govuk-accordion"
      id={id}
    >
      { variant !== 'PlusMinus' &&
        <div className="govuk-accordion__controls">
          <button
            aria-expanded={expandedAccordions.length === items.length ? 'true' : 'false'}
            className="govuk-accordion__show-all"
            onClick={toggleAllAccordions}
            type="button"
          >
            <span className="govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down"></span>
            <span className="govuk-accordion__show-all-text">{expandedAccordions.length === items.length ? 'Hide' : 'Show'} all sections</span>
          </button>
        </div>
      }

      { items && 
        items.map((item, index) => {
          const currIndex = 'accordion-' + index;
          return (
            <div 
              className={`govuk-accordion__section${expandedAccordions.includes(currIndex) ? ' govuk-accordion__section--expanded' : ''}`}
              key={currIndex}
            >
              <div className="govuk-accordion__section-header">
                <h2 className="govuk-accordion__section-heading">
                  <button
                    aria-controls={`accordion-default-content-${index}`}
                    aria-expanded={expandedAccordions.includes(currIndex) ? 'true' : 'false'}
                    className="govuk-accordion__section-button"
                    onClick={() => toggleExpandedAccordions(currIndex)}
                    type="button"
                  >

                    { variant === 'PlusMinus' &&
                      <span
                        style={{float: 'right'}}
                      >
                        {!expandedAccordions.includes(currIndex) ? <Plus /> : <Minus />}
                      </span>
                    }

                    <span
                      className="govuk-accordion__section-heading-text"
                      id={`accordion-default-heading-${index}`}
                    >
                      <span className="govuk-accordion__section-heading-text-focus">
                        { item.heading.text }
                      </span>
                    </span>
                    <span className="govuk-visually-hidden govuk-accordion__section-heading-divider">, </span>

                    {
                      item.summary && (
                        <>
                          <span className="govuk-accordion__section-summary govuk-body" id={`accordion-with-summary-sections-summary-1${index}`}>
                            <span className="govuk-accordion__section-summary-focus">
                              { item.summary.text }
                            </span>
                          </span>
                          <span className="govuk-visually-hidden govuk-accordion__section-heading-divider">, </span>
                        </>
                      )
                    }
                    { variant !== 'PlusMinus' &&
                      <span 
                        className="govuk-accordion__section-toggle" 
                        data-nosnippet=""
                      >
                        <span className="govuk-accordion__section-toggle-focus">
                          <span className={`govuk-accordion-nav__chevron${expandedAccordions.includes(currIndex) ? '' : ' govuk-accordion-nav__chevron--down'}`}></span>
                          <span className="govuk-accordion__section-toggle-text">
                            {!expandedAccordions.includes(currIndex) ? 'Show' : 'Hide'}
                            <span className="govuk-visually-hidden">this section</span>
                          </span>
                        </span>
                      </span>
                    }

                  </button>
                </h2>
              </div>
              <div
                aria-labelledby={`accordion-default-heading-${index}`}
                className="govuk-accordion__section-content"
                id={`accordion-default-content-${index}`}
              >
                { item.content.html }
              </div>
            </div>
        );})
      }
    </div>
  );
};

Accordion.propTypes = {
  id: PropTypes.string,
  items: PropTypes.arrayOf(
      PropTypes.shape({
      heading: PropTypes.shape({
        text: PropTypes.string
      }),
      content: PropTypes.shape({
        html: PropTypes.node
      })
    })
  ),
  variant: PropTypes.string
};

Accordion.defaultProps = {};
