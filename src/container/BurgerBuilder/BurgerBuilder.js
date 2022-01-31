import React, { Component } from 'react';
import Aux from '../../hoc/Auxs';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';


class Burgerbuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false
  }

  INGREDIENTS_PRICE = {
    salad: 0.4,
    bacon: 0.7,
    cheese: 0.3,
    meat: 1.2
  }

  updatePurchasable = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }


  addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients
    }
    updateIngredients[type] = updateCount;

    const priceAddition = this.INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    this.updatePurchasable(updateIngredients);
  }

  removeIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return

    const updateCount = oldCount - 1;
    const updateIngredients = {
      ...this.state.ingredients
    }
    updateIngredients[type] = updateCount;

    const priceAddition = this.INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    this.updatePurchasable(updateIngredients);
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <Aux>
        {/* <Modal /> */}
        <Burger ingredients={this.state.ingredients} />
        <Buildcontrols
          ingredientAdded={this.addIngredientsHandler}
          ingredientRemoved={this.removeIngredientsHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice} />
        <button onClick={this.updatePurchasable}>one</button>
      </Aux>
    );
  }
}

export default Burgerbuilder;
