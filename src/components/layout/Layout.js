import React from 'react'
import Aux from '../../hoc/Auxx'
import './Layout.css'

function Layout(props) {
  return (
    <Aux>
       <main>
         {props.children}
       </main>

    </Aux>
  )
}

export default Layout