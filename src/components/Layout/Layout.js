import React from 'react';
import Aux from '../../hoc/Auxs';
import classes from './Layout.module.css'

const Layout = (props) => {
  return (
    <Aux>
      <div> Sidebar, Herader </div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  );
}

export default Layout;
