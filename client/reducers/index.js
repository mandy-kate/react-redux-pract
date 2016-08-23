const combineReducers = require('redux').combineReducers
const initialState = require('../state')

const productReducer = (state, action) => {

  switch (action.type) {
    case 'ADD_TO_CART':
      var product = state[action.payload.productId]
      var updatedProduct = Object.assign({}, product, { stock: product.stock -1 } )
      var update = {}
      update[product.id] = updatedProduct
      return Object.assign({}, state, update)
    case 'REMOVE_FROM_CART':
      var product = state[action.payload.productId]
      var updatedProduct = Object.assign({}, product, { stock: product.stock +1 } )
      var update = {}
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
    case 'REMOVE_FROM_CART' :
      return [...state.slice(0, action.payload.productId.length),
        ...state.slice(action.payload.productId.length +1)]
    default:
      return state
  }



}


const totalReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state + action.payload.price
    case 'REMOVE_FROM_CART' :
      if (state.total >= action.payload.price) {
        return state - action.payload.price
      }
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
