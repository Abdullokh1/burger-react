import React from 'react'
import './BuildControl.css'

export default function BuildControl (props) {
  return (
    <div className='BuildControl'>
      <div className='Label'>{props.label}</div>
      <button className='Less'>Remove</button>
      <button className='More'>Add</button>
      
    </div>
  )
}
