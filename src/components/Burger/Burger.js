import React from 'react';
import classes from './Burger.module.css';
import Burgeringredint from './BurgerIngredint/BurgerIngredint';

const Burger = (props) => {
  return (
    <div className={classes.Burger}>
      <Burgeringredint type='bread-top' />
      <Burgeringredint type='bacon' />
      <Burgeringredint type='cheese' />
      <Burgeringredint type='cheese' />
      <Burgeringredint type='meat' />
      <Burgeringredint type='meat' />
      <Burgeringredint type='bread-bottom' />
    </div >
  );
}

export default Burger;
