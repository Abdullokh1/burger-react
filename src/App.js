import React, { Component } from 'react'
import Layout from './components/layout/Layout'
import './App.css'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {

  render(){

    return (
      
    <div className='App'>
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
    

      
    )
  }
  
}

export default App
