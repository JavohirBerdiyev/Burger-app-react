import React, { Component } from 'react';
import Aux from '../../hoc/Auxs';
import Burger from '../../components/Burger/Burger'

class Burgerbuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Buger Control</div>
      </Aux>
    );
  }
}

export default Burgerbuilder;