import React from 'react'
import Header from './header'
import BetterHeader from './better-header'
import FormTextArea from './form-text-area'
import StylinButton from './stylin-button'
import ShowAndHider from './show-and-hider'
import BestList from './best-list'
import SpecialFilter from './special-filter'
import { connect } from 'react-redux'
import actionCreators from '../action-creators'

class App extends React.Component {


  render() {
    console.log('these are the props inside App: ', this.props)

    return (
      <div>
      <h1>It works</h1>
      </div>
    )
  }
}






module.exports = connect(
  (state) => state,
   (dispatch) => {
      return {
        addProduct: (productId, price) => {
          dispatch(actionCreators.addToCart(productId, price)) 

        }

      }

  }
)(App)
