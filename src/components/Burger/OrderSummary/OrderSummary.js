import React from 'react';
import Button from '../../UI/Button/Button';

const Ordersummary = (props) => {
  const ingredientSummar = Object.keys(props.ingredients)
    .map((igKey, i) => {
      return (
        <li key={igKey + i}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
          {props.ingredients[igKey]}
        </li>
      )
    })
  return (
    <div>
      <h3>Your order</h3>
      <p>Lorem Ipsum is simply dummy text of the printing </p>
      <ul>
        {ingredientSummar}
      </ul>
      <p>Total Price: <b>{props.price.toFixed(2)}$</b> </p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.purchasingCancel} btnType="Danger">CANCEL</Button>
      <Button clicked={props.purchasingContinue} btnType="Success">CONTINUE</Button>
    </div>
  );
}

export default Ordersummary;
