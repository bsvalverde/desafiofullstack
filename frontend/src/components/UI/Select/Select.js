import React from 'react';

import classes from './Select.module.scss';

const Select = (props) => {
  const { onChange, options, value } = props;
  let values = props.values || options;

  const optionTags = [];
  for (var i = 0; i < options.length; i++) {
    optionTags.push(
      <option key={i} value={values[i]}>
        {options[i]}
      </option>
    );
  }

  return (
    <select
      className={classes.Select}
      onChange={onChange}
      value={value}
    >
      {optionTags}
    </select>
  );
};

export default Select;
