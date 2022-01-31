import React from 'react';
import classes from './BuildControls.module.css';
import Buildcontrol from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]

const Buildcontrols = (props) => {
  console.log(props.purchasable);
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <b>{props.price.toFixed(2)}$</b></p>
      {controls.map(ctrl => (
        <Buildcontrol
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]} />
      ))}
      <button disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW</button>
    </div>
  );
}

export default Buildcontrols;
