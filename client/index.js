import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import domready from 'domready'

const INITIAL_DATA = {
  title:  'My Better App',
  formClasses: [ 'textarea-form', 'form' ], 
  buttonClasses: [ 'big', 'button' ],
  buttonStyle:  { backgroundColor: 'red', borderRadius: '5px' },
  options: [ 'yes', 'no', 'maybe' ],
  musketeers: [
    { text: 'Athos' },
    { text: 'Portos' },
    { text: 'Aramis' }
  ],
  animals: [
    { type: 'cat', text: 'tiger' },
    { type: 'dog', text: 'daschund' },
    { type: 'cat', text: 'panther' },
    { type: 'dog', text: 'labrador' },
    { type: 'cat', text: 'grumpy cat' }
  ]
}

domready(() => {
  ReactDOM.render(
    <App {...INITIAL_DATA} />, // see https://babeljs.io/docs/plugins/transform-object-rest-spread/ for the "..." feature of ES7
    document.querySelector('#app')
  )
})



