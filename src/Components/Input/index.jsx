import React from "react";
import PropTypes from "prop-types";

const Input = ({ name, type, placeholder, handleChange, ...rest }) => {
  return (
    <input type={type} name={name} placeholder={placeholder} onChange={handleChange} {...rest} />
  );
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func
};

Input.defaultProps = {
    type: "text",
    placeholder: "",
    handleChange: () => {}
};

export default Input;
