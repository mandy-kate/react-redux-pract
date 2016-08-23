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
const map = require('lodash.map')

class App extends React.Component {
   constructor(props) {
    super(props)
      this.handleClick = this.handleClick.bind(this)
      this.deleteClick = this.deleteClick.bind(this)
  }

  handleClick (productId, price) {
    this.props.addProduct(productId, price)
  }

  deleteClick (productId, price) {
    this.props.deleteProduct(productId, price)
  }

  render() {
    console.log('these are the props inside App:', this.props)
    const { products } = this.props
    return (
      <div>
        <div>
          <h1>Add Animals</h1>
      {
        map(products, product => {
          return (
            <button
              onClick={() => {
                this.handleClick(product.id, product.price)
              }}>{product.name}</button>
          )
        })
      }
        </div>
        <div>
          <h1>Delete Animals</h1>
            {
              map(products, product => {
                return (
                  <button
                    onClick={() => {
                      this.deleteClick(product.id, product.price)
                    }}>{product.name}</button>
                )
              })
            }
        </div>
      </div>
    )
  }
}

module.exports = connect(
  (state) => state,
   (dispatch) => {
      return ({
        addProduct: (productId, price) => {
          dispatch(actionCreators.addToCart(productId, price))
        },
        deleteProduct: (productId, price) => {
          dispatch(actionCreators.removeFromCart(productId, price))
        }
      })
    }
)(App)
