import React from 'react'
import './Burger.css'
import BurgerIngredients from './BurgerIngredient/BurgerIngredients'

export default function Burger(props) {
  let MainIng = Object.keys(props.ingredients).map(inkey =>{
    return [...Array(props.ingredients[inkey])].map((_,i) =>{
      return <BurgerIngredients key={inkey + i} type={inkey}/>
    })
  }).reduce((arr,ell) =>{
    return arr.concat(ell)
  }, [])

  if(MainIng.length === 0){
     MainIng = <p>Please add ingredients!</p>
     
  }
  return (
    <div className='Burger'>

      <h1 className='title'>Burger house</h1>

      <BurgerIngredients type='bread-top'/>
        {MainIng}
      <BurgerIngredients type='bread-bottom'/>

    </div>
  )
}
