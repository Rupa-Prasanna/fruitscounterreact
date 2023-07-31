import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  mangoCount = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  bananaCount = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1>
            Bob ate {mangoCount} mangoes {bananaCount} bananas
          </h1>
          <div className="img-container">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
          </div>
          <div className="button-container">
            <button className="button1" onClick={this.mangoCount} type="button">
              Eat Mango
            </button>
            <button
              className="button2"
              onClick={this.bananaCount}
              type="button"
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
