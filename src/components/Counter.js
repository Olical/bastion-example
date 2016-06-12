import React from 'react'

export default class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render () {
    return (
      <section>
        <button onClick={::this.dec}>-</button>
        <span>{this.state.count}</span>
        <button onClick={::this.inc}>+</button>
      </section>
    )
  }

  dec () {
    this.setState({
      count: this.state.count - 1
    })
  }

  inc () {
    this.setState({
      count: this.state.count + 1
    })
  }
}
