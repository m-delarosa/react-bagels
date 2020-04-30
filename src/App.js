import React, { Component } from "react"
import "./App.css"
import BagelForm from "./BagelForm"
import BagelContainer from "./BagelContainer"

class App extends Component {
  state = {
    bagels: [],
  }

  componentDidMount() {
    fetch('http://bagel-api-fis.herokuapp.com/bagels')
      .then(response => response.json())
      .then(bagels => this.setState({ bagels }))
  }

  render() {
    return (
      <>
        <h1>This is our Bagels App</h1>
        <BagelForm />
        <BagelContainer bagels={this.state.bagels} />
      </>
    )
  }
}

export default App
