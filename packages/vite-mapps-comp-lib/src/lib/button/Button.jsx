import React, { useEffect , useMemo } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { Arrow } from './../icons';

const BLOCK_ELEMENT = 'govuk-button';

const getClassModifiersVariant = (variant) => {
  switch (variant) {
    case 'primary':
      return '';
    case 'secondary':
      return 'govuk-button--secondary';
    case 'warning':
      return 'govuk-button--warning';  
    default:
      return '';
  }
};

const getClassModifiersDisabled = (disabled) => {
  return disabled ? 'govuk-button--disabled' :  '';
};

const getClassModifiersStart = (isStartButton) => {
  return isStartButton ? 'govuk-button--start' :  '';
};

const getClassBlock = (disabled, isStartButton, variant) => {
  return `${BLOCK_ELEMENT} ${getClassModifiersVariant(variant)} ${getClassModifiersDisabled(disabled)} ${getClassModifiersStart(isStartButton)}`
  .replaceAll('   ', ' ').replaceAll('  ', ' ').trim(); 
};

export const Button = ({ 
  children, 
  classes,
  disabled, 
  draggable, 
  element, 
  handleClick, 
  href,
  isStartButton, 
  preventDoubleClick, 
  variant 
}) => {

  /* Display as an anchor element if element 'a' or a href supplied */
  const Component = ((element == 'a' || href !== undefined) ? 'a' : 'button');

  const debouncedOnClick = useMemo(
    () => debounce(handleClick ? handleClick : () => null, 300)
  , []);

  // Stop the invocation of the debounced function
  // after unmounting
  useEffect(() => {
    return () => {
      debouncedOnClick.cancel();
    };
  }, []);

  return (
    <Component 
      {...(disabled ? { 'aria-disabled' : 'true'} : {})}
      className={`${getClassBlock(disabled, isStartButton, variant)}${classes ? ` ${classes}` : ''}` } 
      data-module='govuk-button'
      disabled={disabled}
      {...(draggable !== undefined ? { 'draggable' : draggable} : {})}
      {...(href ? { 'href' : href} : {})}
      onClick={handleClick ? (!preventDoubleClick ? handleClick : debouncedOnClick) : undefined}
    >
      { children }
      { isStartButton &&
        (<Arrow />)
      }
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
  classes: PropTypes.string,
  disabled: PropTypes.bool,
  draggable: PropTypes.bool,
  element: PropTypes.oneOf(['a', 'input']),
  handleClick: PropTypes.func,
  href: PropTypes.string,
  isStartButton: PropTypes.bool,
  preventDoubleClick: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'warning']),
};

Button.defaultProps = {
  disabled: false,
  preventDoubleClick: false,
};