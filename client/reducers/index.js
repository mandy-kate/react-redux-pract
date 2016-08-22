const combineReducers = require('redux').combineReducers
const initialState = require('../state')

const productReducer = (state, action) => {

  switch (action.type) {
    case 'ADD_TO_CART':
      const product = state[action.payload.productId]
      const updatedProduct = Object.assign({}, product, { stock: product.stock -1 } )  
      const update = {}
      update[product.id] = updatedProduct
      return Object.assign({}, state, update)
    default:
      return state
  }


}


const cartReducer = (state, action) => {

  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload.productId]
    default:
      return state
  }



}


const totalReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state + action.payload.price
    default:
      return state
  }



}



module.exports = (state=initialState, action) => {
  return { 
    product: productReducer(state.products, action),
    cart: cartReducer(state.cart, action),
    total: totalReducer(state.total, action)
  }
}
