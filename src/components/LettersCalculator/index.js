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
          <p className="para">Enter the phrase</p>
          <input
            placeholder="Enter the phrase"
            className="search-input"
            type="text"
            value={input}
            onChange={this.onChangeInput}
          />
          <br />
          <button className="button" type="button">
            No.of Letters: {input.length}
          </button>
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
