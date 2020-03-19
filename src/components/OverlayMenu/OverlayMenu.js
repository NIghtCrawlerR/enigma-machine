import React from 'react';

import Button from '../Button';
import './OverlayMenu.scss';

class OverlayMenu extends React.Component {
  state = {
    count: 3,
    countdownActive: false,
    showDescription: false,
  };

  startCountDown = () => {
    this.setState({ countdownActive: true });

    this.interval = setInterval(() => {
      if (this.state.count === 0) {
        const { startTimer } = this.props;

        clearInterval(this.interval);
        startTimer();
        return false;
      }

      this.setState({ count: this.state.count - 1 })
    }, 1000);
  }

  toggleDescription = () => {
    this.setState({ showDescription: !this.state.showDescription })
  }

  render() {
    const { count, countdownActive } = this.state;
    const { endGame, gameStatus } = this.props;

    return (
      <div className="OverlayMenu">
        <div className="OverlayMenu__content">
          {!endGame && <h3 className="OverlayMenu__title">Enigma machine</h3>}
          {endGame && (
            <h3 className="OverlayMenu__title">
              {gameStatus === 'WIN' && 'Congratulations! You win!'}
              {gameStatus === 'LOSS' && 'You lose! Try again'}
            </h3>
          )}
          {countdownActive && <div className="OverlayMenu__countdown">{count === 0 ? 'START' : count}</div>}
          {!countdownActive && <Button onClick={this.startCountDown}>Ready? GO!</Button>}

          <div className="OverlayMenu__game-description">
            <p className="OverlayMenu__game-description-title" onClick={this.toggleDescription}>How to play?</p>
            {this.state.showDescription && (
               <div className="OverlayMenu__game-description-text">
                There will be two sections, one on top and one on the bottom. Each section will be made up of two rows of symbols. 
                The top section is the example, and the bottom section is the actual puzzle that you’ll need to solve. 
                Your overall goal here is to make the bottom section match the top, thereby solving the enigma.
              </div>
            )}
           
          </div>
        </div>
        
      </div>
    )
  }
}

export default OverlayMenu;
