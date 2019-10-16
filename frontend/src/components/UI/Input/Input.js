import React from 'react';

import classes from './Input.module.scss';

const Input = (props) => {
  const { onChange, placeholder, type, value } = props;
  return (
    <input
      className={classes.Input}
      type={type || 'text'}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
