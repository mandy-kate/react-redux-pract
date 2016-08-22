const test = require('tape')
const reducer = require('../reducers')
const initialState = require('../state')
const actionCreators = require('../action-creators')
const addToCart = actionCreators.addToCart

console.log('reducers', reducer, initialState)

//arrange
const expectedState = {
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

  t.deepEqual(actual, expectedState)

  t.end()


})    






    
