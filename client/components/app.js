import React from 'react'
import Header from './header'
import BetterHeader from './better-header'
import FormTextArea from './form-text-area'
import StylinButton from './stylin-button'
import ShowAndHider from './show-and-hider'
import BestList from './best-list'
import SpecialFilter from './special-filter'


class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      musketeers: this.props.musketeers,
      animals:    this.props.animals
    }
    // we put these in state, because we might want to add/ remove these from the state later
  }

  render() {
    console.log('props in App: ', this.props)
    const { title, formClasses, buttonClasses, buttonStyle, options } = this.props
    const { musketeers, animals } = this.state 

    return (
      <div>
        <Header />
        <BetterHeader title={title} />
        <FormTextArea formClasses={formClasses} buttonClasses={buttonClasses} />
        <StylinButton style={this.props.buttonStyle} />
        <ShowAndHider displayOptions={true} options={options} />
        <BestList items={musketeers} />  
        <SpecialFilter filter="cat" items={animals} />
      </div>
    )
  }
}

module.exports = App
