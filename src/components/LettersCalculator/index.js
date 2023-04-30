import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  getNumberOfLetters = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <div className="content-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="label-input" htmlFor="input" placeholder="">
              Enter the phrase
            </label>
            <br />
            <input
              className="input-element"
              id="input"
              placeholder="Enter the phrase"
              onChange={this.getNumberOfLetters}
            />
            <div className="counter-container">
              <p className="counter-para">No.of letters: {count}</p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
