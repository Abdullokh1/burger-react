import React from 'react'
import './BuildControl.css'

export default function BuildControl (props) {
  return (
    <div className='BuildControl'>
      <div className='Label'>{props.label}</div>
      <button className='Less' disabled={props.disabled} onClick={props.removed}>Remove</button>
      <button className='More' onClick={props.added}>Add</button>
      
    </div>
  )
}
