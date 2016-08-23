const test = require('tape')
const reducer = require('../reducers')
const initialState = require('../state')
const actionCreators = require('../action-creators')
const addToCart = actionCreators.addToCart
const removeFromCart = actionCreators.removeFromCart

console.log('reducers', reducer, initialState)

//arrange
var expectedState = {
  product: {
    tiger: { id: 'tiger', name: 'tiger', price: 3000, stock: 9 },
    lion: { id: 'lion', name: 'lion', price: 4000, stock: 5 },
    parrot: { id: 'parrot', name: 'parrot', price: 2500, stock: 6 },
    monkey: { id: 'monkey', name: 'monkey', price: 2000, stock: 8 },
  },
  cart: [ 'tiger' ],
  total: 3000
}

test('addToCart adds the product to the cart', t => {
  const actual = reducer(initialState, addToCart('tiger', 3000))
  console.log('actual state ', actual)
  t.deepEqual(actual, expectedState)

  t.end()


})

//arrange
var expectedState1 = {
  product: {
    tiger: { id: 'tiger', name: 'tiger', price: 3000, stock: 11 },
    lion: { id: 'lion', name: 'lion', price: 4000, stock: 5 },
    parrot: { id: 'parrot', name: 'parrot', price: 2500, stock: 6 },
    monkey: { id: 'monkey', name: 'monkey', price: 2000, stock: 8 },
  },
  cart: [],
  total: 0
}

test('removeFromCart removes the product from the cart', t => {
  const actual = reducer(initialState, removeFromCart('tiger', 3000))
  console.log('actual state ', actual)
  t.deepEqual(expectedState1, actual)

  t.end()


})

//arrange
var expectedState2 = {
  product: {
    tiger: { id: 'tiger', name: 'tiger', price: 3000, stock: 10 },
    lion: { id: 'lion', name: 'lion', price: 4000, stock: 4 },
    parrot: { id: 'parrot', name: 'parrot', price: 2500, stock: 6 },
    monkey: { id: 'monkey', name: 'monkey', price: 2000, stock: 8 },
  },
  cart: ['lion'],
  total: 4000
}

test('clickHandler adds product to cart', t => {
  const actual = reducer(initialState, addToCart('lion', 4000))
  console.log('actual state ', actual)
  t.deepEqual(actual, expectedState2)

  t.end()


})







