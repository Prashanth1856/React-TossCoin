// Write your code here
import {Component} from 'react'

import './index.css'

const head = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tail = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    coinTossed: true,
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
  }

  onChangeCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({coinTossed: true})
      this.setState(prevState => ({headsCount: prevState.headsCount + 1}))
      this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
    } else {
      this.setState({coinTossed: false})
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
      this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
    }
  }

  render() {
    const {coinTossed, totalCount, headsCount, tailsCount} = this.state
    const displayCoin = coinTossed ? head : tail

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="head-tail">Heads (or) Tails</p>
          <img src={displayCoin} alt="toss result" className="coin-img" />
          <button type="button" className="button" onClick={this.onChangeCoin}>
            Toss Coin
          </button>
          <div className="score-container">
            <p className="total result">Total: {totalCount}</p>
            <p className="heads result">Heads: {headsCount}</p>
            <p className="tails result">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
