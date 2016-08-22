const addToCart = function (productId, price) {
  return { 
    type: 'ADD_TO_CART', 
    payload: { 
      productId: productId,
      price: price
    }
  }
}

const removeFromCart = function (productId) {
  return { type: 'REMOVE_FROM_CART', payload: productId }
}

module.exports = {
  addToCart,
  removeFromCart
}

