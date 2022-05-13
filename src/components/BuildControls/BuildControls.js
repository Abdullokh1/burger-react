import React from 'react'
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Meat', type: 'meat'},
  {label: 'Cheese', type: 'cheese'},
]


export default function BuildControls(props) {
  return (
    <div className='BuildControls'>
      <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(item =>(
        <BuildControl 
          key={item.label}
          label={item.label}
          added={() => props.ingredientAdded(item.type)}
          removed={() => props.removeingredient(item.type)}
          disabled ={props.disabledInfo[item.type]}
        />
     ))}

     <button onClick={props.ordered} disabled={!props.purchasable} className='OrderButton'>ORDER NOW</button>
    </div>
  )
}
