import React from 'react';

import RandomPairs from '../RandomPairs';
import SwitcherLayout from '../SwitcherLayout';
import Timer from '../Timer';

import './index.scss';

class Board extends React.Component {
  constructor() {
    super();

    this.seconds = 10;
    this.interval = null;

    this.state = {
      chosenPair: {},
      count: null,
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer = () => {
    this.setState({ count: this.seconds })
    this.interval = setInterval(() => {
      const { count } = this.state;
      console.log("COUNT", count)
      if (count <= 0) return this.endGame(false);
      this.setState({ count: count - 1 })
    }, 1000);
  }

  updateChoosenPair = (index, shape) => {
    this.setState({
      chosenPair: {
        ...this.state.chosenPair,
        [index]: shape,
      }
    })
  };

  resetTimer = () => {
    clearInterval(this.interval);
    this.startTimer();
  }

  endGame = win => {
    clearInterval(this.interval);

    if (win) {
      alert('CONGRATULATIONS')
    } else {
      alert('TRY AGAIN')
    }
  }

  render() {
    const { chosenPair, count } = this.state;

    return (
      <div className="Board">
        <Timer count={count} totalSeconds={this.seconds} />
        <RandomPairs chosenPair={chosenPair} resetTimer={this.resetTimer} endGame={this.endGame} />
        <SwitcherLayout updateChoosenPair={this.updateChoosenPair} />
      </div>
    )
  }
}

export default Board;
