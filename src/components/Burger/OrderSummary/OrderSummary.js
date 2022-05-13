import React from 'react'
import Aux from '../../../hoc/Auxx'
import Button from '../../Ui/Button/Button'

export default function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients)
  .map(igKey =>{
    return <li key={igKey+1}> <span style={{textTransform:  'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
  })
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total Price: <strong>{props.price.toFixed(2)}$</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType='Danger' clicked={props.purchaseCancel}>CANCEL</Button>
      <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>

    </Aux>
  )
}
