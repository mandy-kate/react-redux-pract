
import React from 'react'
import BestList from './best-list' // <- a clue!!

class SpecialFilter extends React.Component {
  render() {
    return (
			<div>
         <BestList items={[]} />
			</div>
    )
  }

}

module.exports = SpecialFilter
