import React, { Component } from 'react'
import BuildControls from '../../components/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxx'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    }
  }
  render() {
    return (
      <>
      <Aux>
        <Burger ingredients ={this.state.ingredients}/>
        <BuildControls  />
      </Aux>
      </>
    )
  }
}

export default BurgerBuilder;