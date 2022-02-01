import React from 'react';
import Logo from '../../Layout/Logo/Logo';
import classes from './Toolbar.module.css';

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>MUNU</div>
      <Logo />
      <nav>
        ...
      </nav>
    </header>
  );
}

export default Toolbar;
