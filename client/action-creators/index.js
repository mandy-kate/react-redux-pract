const addToCart = function (productId, price) {
  return {
    type: 'ADD_TO_CART',
    payload: {
      productId: productId,
      price: price
    }
  }
}

const removeFromCart = function (productId, price) {
  return { type: 'REMOVE_FROM_CART',
    payload: {
      productId: productId,
      price: price
    }
  }
}

module.exports = {
  addToCart,
  removeFromCart
}

