import React from 'react'
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Meat', type: 'meat'},
  {label: 'Cheese', type: 'cheese'},
]


export default function BuildControls() {
  return (
    <div className='BuildControls'>
      {controls.map(item =>(
        <BuildControl key={item.label} label={item.label} />
     ))}
    </div>
  )
}
