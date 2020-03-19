import React from 'react';

import RandomPairs from '../RandomPairs';
import SwitcherLayout from '../SwitcherLayout';
import Timer from '../Timer';
import OverlayMenu from '../OverlayMenu';

import './Board.scss';

class Board extends React.Component {
  constructor() {
    super();

    this.seconds = 10;
    this.interval = null;

    this.state = {
      chosenPair: {},
      count: this.seconds,
      gameActive: false,
      endGame: false,
      gameStatus: null,
    };
  }

  startTimer = (e) => {
    this.setState({ gameActive: true, count: this.seconds });

    this.interval = setInterval(() => {
      this.countdown();
    }, 1000);
  }

  countdown = () => {
    const { count } = this.state;

    if (count > 0) {
      this.setState({ count: count - 1 });
    } else {
      this.endGame(false);
    }
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
    this.setState({ count: this.seconds })
  }

  endGame = win => {
    clearInterval(this.interval);
    this.setState({ gameActive: false, endGame: true })

    if (win) {
      console.warn('CONGRATULATIONS')
      this.setState({ gameStatus: 'WIN' })
    } else {
      this.setState({ gameStatus: 'LOSS' })
    }
  }

  render() {
    const { chosenPair, count, gameActive, endGame, gameStatus } = this.state;

    return (
      <div className="Board">
        {!gameActive && <OverlayMenu startTimer={this.startTimer} endGame={endGame} gameStatus={gameStatus} />}
        <Timer count={count} totalSeconds={this.seconds} />
        <RandomPairs chosenPair={chosenPair} resetTimer={this.resetTimer} endGame={this.endGame} />
        <SwitcherLayout updateChoosenPair={this.updateChoosenPair} />
      </div>
    )
  }
}

export default Board;
