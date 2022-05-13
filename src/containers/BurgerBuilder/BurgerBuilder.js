import React, { Component } from 'react'
import BuildControls from '../../components/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/Ui/Modal/Modal';
import Aux from '../../hoc/Auxx'


const INGREDIENT_PRICE = {
  salad: 0.1,
  meat: 0.8,
  cheese: 0.2,
  bacon: 0.4
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    },
    totalPrice: 1,
    purchasable: false,
    doContinue: false
  }

  purchaseHandler = () =>{
    this.setState({doContinue: true})
  }

  purchaseContinueHandler = () =>{
    alert('You continued')
  }

  purchaseCancelHandler = () =>{
    this.setState({doContinue: false})
  }
  updataPurchaseState(ingredients){

    const sum = Object.keys(ingredients).map(inkey =>{
      return ingredients[inkey]
    }).reduce((sum, el) => sum + el, 0)

    this.setState({purchasable: sum > 0 })
  }
  

  addIngredient = (type) =>{
    const oldCount = this.state.ingredients[type]
    const UpdataCount = oldCount+1
    const UpdataIngredient = {
      ...this.state.ingredients
    }

    UpdataIngredient[type] = UpdataCount;

    const PriceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const NewPrice = PriceAddition + oldPrice;

    this.setState({totalPrice: NewPrice, ingredients: UpdataIngredient})
    this.updataPurchaseState(UpdataIngredient)

  }

  RemoveIngredients = (type) =>{
    const oldCount = this.state.ingredients[type]

    if(oldCount <= 0){
      return
    }
    const UpdataCount = oldCount-1
    const UpdataIngredient = {
      ...this.state.ingredients
    }

    UpdataIngredient[type] = UpdataCount;

    const PriceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const NewPrice = oldPrice - PriceAddition;

    this.setState({totalPrice: NewPrice, ingredients: UpdataIngredient})
    this.updataPurchaseState(UpdataIngredient)

  }
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }

    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0;
    }


    return (
      <>
      <Aux>
        <Modal show={this.state.doContinue}>
          <OrderSummary
           ingredients={this.state.ingredients}
           purchaseContinued ={this.purchaseContinueHandler}
           purchaseCancel = {this.purchaseCancelHandler}
           price={this.state.totalPrice}
           />
        </Modal>

        <Burger ingredients ={this.state.ingredients}/>
        <BuildControls 
        ingredientAdded={this.addIngredient}
        removeingredient={this.RemoveIngredients}
        disabledInfo = {disabledInfo}
        price = {this.state.totalPrice}
        purchasable = {this.state.purchasable}
        ordered={this.purchaseHandler}
        />
      </Aux>
      </>
    )
  }
}

export default BurgerBuilder;