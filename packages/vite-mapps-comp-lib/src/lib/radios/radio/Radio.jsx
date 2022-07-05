import React from 'react';
import PropTypes from 'prop-types';
import { Hint } from './../../hint/Hint';

export const Radio = ({ 
  checked, 
  children, 
  conditional, 
  disabled, 
  hint, 
  id, 
  name,
  onChangeFunction, 
  text, 
  value 
}) => {
  return (
    <>
      <div className="govuk-radios__item js-enabled">
        <input 
          checked={checked}
          className="govuk-radios__input"
          disabled={disabled}
          id={id} 
          name={name} 
          onChange={onChangeFunction}
          type="radio" 
          value={value} 
          aria-describedby={hint.id}
          {...(conditional && {'data-aria-controls' : `conditional-${id}`})}
        />
        <label className="govuk-label govuk-radios__label" htmlFor={id}>
          { text }
        </label>
        { hint && (
          <Hint id={hint.id} classes={hint.classes} text={hint.text} />
        )}
    </div>
    { conditional && (
      <div 
        className={`govuk-radios__conditional${checked ? '' : ' govuk-radios__conditional--hidden'}`}
        {...(conditional && {'data-aria-controls' : `conditional-${id}`})}
      >
        {children}
      </div>
    )}
  </>
  );
};

Radio.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  conditional: PropTypes.bool,
  disabled: PropTypes.bool,
  hint: PropTypes.shape({
    classes: PropTypes.string,
    id: PropTypes.string,
    text: PropTypes.string
  }),
  id: PropTypes.string,
  name: PropTypes.string,
  onChangeFunction: PropTypes.func,
  text: PropTypes.string,
  value: PropTypes.string
};

Radio.defaultProps = {};

