import PropTypes from 'prop-types';
import React from 'react';
import classes from './BurgerIngredint.module.css'

const Burgeringredint = (props) => {
  let ingredient = null;
  switch (props.type) {
    case ('bread-bottom'):
      ingredient = <div className={classes.BreadBottom}></div>
      break;
    case ('bread-top'):
      ingredient = <div className={classes.BreadTop}></div>
      break;
    case ('meat'):
      ingredient = <div className={classes.Meat}></div>
      break;
    case ('cheese'):
      ingredient = <div className={classes.Cheese}></div>
      break;
    case ('salad'):
      ingredient = <div className={classes.Salad}></div>
      break;
    case ('bacon'):
      ingredient = <div className={classes.Bacon}></div>
      break;
    default:
      ingredient = null;
  }

  return ingredient;
}

Burgeringredint.propTypes = {
  type: PropTypes.string.isRequired
}

export default Burgeringredint;
