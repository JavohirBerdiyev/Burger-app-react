import React from 'react';
import classes from './Burger.module.css';
import Burgeringredint from './BurgerIngredint/BurgerIngredint';

const Burger = (props) => {
  let transforIngredents = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <Burgeringredint key={ingKey + i} type={ingKey} />
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    })
  if (transforIngredents.length === 0) {
    transforIngredents = <p>Please start adding ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <Burgeringredint type='bread-top' />
      {transforIngredents}
      <Burgeringredint type='bread-bottom' />
    </div >
  );
}

export default Burger;
