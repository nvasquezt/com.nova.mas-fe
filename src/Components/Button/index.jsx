import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, type, handleClick, ...rest }) => {
  return (
    <button type={type} onClick={handleClick} {...rest}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  handleClick: () => {},
};

export default Button;
