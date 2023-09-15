import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {input: ''}

  onChangeInput = e => {
    this.setState({input: e.target.value})
  }

  render() {
    const {input} = this.state
    return (
      <div className="bg-container">
        <div className="data-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="para" htmlFor="input">
            Enter the phrase
          </label>
          <input
            placeholder="Enter the phrase"
            className="search-input"
            type="text"
            id="input"
            value={input}
            onChange={this.onChangeInput}
          />
          <br />
          <p className="button">No.of letters: {input.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
