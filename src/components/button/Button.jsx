import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

const Button = ({ children, type, disabled }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    type={type}
    disabled={disabled}
    className="bt more-bt"
  >
    <span className="fl" />
    <span className="sfl" />
    <span className="cross" />
    <i />
    <p>{children}</p>
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};


export default Button;
