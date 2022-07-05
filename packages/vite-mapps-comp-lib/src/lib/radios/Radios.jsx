import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Radio } from './radio/Radio';
import { Hint } from './../hint/Hint';

export const Radios = ({ 
    classes,
    idPrefix,
    name,
    fieldset,
    hint,
    items,
    errorMessage
}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const onChangeValue = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className={`govuk-form-group${errorMessage ? ' govuk-form-group--error' : ''}`}>
      <fieldset 
        className="govuk-fieldset"
        {...(hint && { 'aria-describedby' : `${idPrefix}-hint` })}
      >
        <legend className={`govuk-fieldset__legend${fieldset.legend.classes ? ` ${fieldset.legend.classes}` : ''}`} >
          { fieldset.legend.isPageHeading ?
            (
              <h1 className="govuk-fieldset__heading">
                { fieldset.legend.text }
              </h1>
            ) : 
            (
              <>
                { fieldset.legend.text }
              </>
            )
          }
          { hint && (
              <Hint id={`${idPrefix}-hint`} text={hint.text } />
            )       
          }
        </legend>
        { errorMessage &&
          <p id={`${idPrefix}-error`} className="govuk-error-message">
            <span className="govuk-visually-hidden">Error:</span> { errorMessage.text }
          </p>
        }
        <div className="govuk-radios" data-module="govuk-radios">
          { items && (
              <div className={`js-enabled govuk-radios${classes ? ` ${classes}` : ''}`} data-module="govuk-radios">
                {
                  items.map((item, index) => (
                      !item.divider ? (
                        <Radio 
                          key={`radio-${index}`}
                          checked={
                            (item.defaultChecked && selectedOption === '') ?
                            true :
                            item.value === selectedOption ? true : false
                          }
                          conditional={item.conditional ? true : false}
                          disabled={item.disabled ? true : false }
                          hint={{
                            id: `${idPrefix}${index !== 0 ? `-${index + 1}-item-hint` : '-item-hint'}`,
                            classes: 'govuk-radios__hint',
                            text: (item.hint && item.hint.text)
                          }}
                          id={`${idPrefix}${index !== 0 ? `-${index + 1}` : ''}`} 
                          onChangeFunction={onChangeValue}
                          name={name}
                          text={item.text} 
                          value={item.value} 
                        >
                          {item.conditional && item.conditional.html}
                        </Radio>
                      ) : (
                        <div 
                          key={`radio-divider-${index}`}
                          className="govuk-radios__divider"
                        >
                          {item.divider}
                        </div>
                      )
                  ))
                }
              </div>
            )
          }
        </div>
      </fieldset>
    </div>
  );
};

Radios.propTypes = {
    classes: PropTypes.string,
    idPrefix: PropTypes.string,
    name: PropTypes.string,
    fieldset: PropTypes.shape({
      legend: PropTypes.shape({
        text: PropTypes.string,
        isPageHeading: PropTypes.bool,
        classes: PropTypes.string
      })
    }),
    hint: PropTypes.shape({
      text: PropTypes.string
    }),
    items: PropTypes.arrayOf(
      PropTypes.shape({
        conditional: PropTypes.shape({
          html: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
          ])
        }),
        disabled: PropTypes.bool,
        divider: PropTypes.string,
        hint: PropTypes.shape({
          text: PropTypes.string
        }),
        text: PropTypes.string,
        value: PropTypes.string,
      })
    ),
    errorMessage: PropTypes.shape({
      text: PropTypes.string
    })
};

Radios.defaultProps = {};
