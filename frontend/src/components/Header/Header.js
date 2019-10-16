import React from 'react';

import classes from './Header.module.scss';

export const Header = () => {
  return (
    <header>
      <h1 className={classes.HeaderTitle}>StackOverflow</h1>
    </header>
  );
};

export default Header;
