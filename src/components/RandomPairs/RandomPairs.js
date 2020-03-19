import React from 'react';
import { isEqual } from 'lodash';

import {
  SHAPES_SET_TOP,
  SHAPES_SET_BOTTOM,
  KEY_ENTER,
} from '../../config';
import PairItem from './PairItem';

import './RandomPairs.scss';

class RandomPairs extends React.Component {
  constructor() {
    super();

    this.pairsAmount = 7;
    this.state = {
      pairs: [],
      activePair: 0,
    };

    document.addEventListener('keyup', this.keyUpHandler);
  }

  componentDidMount() {
    this.generateRandomPairs();
  }

  keyUpHandler = ({ keyCode }) => {
    const { chosenPair, resetTimer, endGame } = this.props;
    const { pairs, activePair } = this.state;

    if (keyCode === KEY_ENTER) {
      const equal = isEqual(chosenPair, pairs[activePair]);
      console.log(equal)
      if (equal) {
        console.log("EQUAL")
        resetTimer();
        this.setState({ activePair: activePair + 1 }, () => {
          if (this.state.activePair === this.pairsAmount) {
            endGame(true)
          };
        })
      } 
    }
  }

  getRandom = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  generateRandomPairs = () => {
    const pairs = [];

    for(let i = 0; i < this.pairsAmount; i++) {
      const randomNumberPair = [
        this.getRandom(0, SHAPES_SET_TOP.length - 1),
        this.getRandom(0, SHAPES_SET_BOTTOM.length - 1),
      ];

      pairs[i] = {
        0: SHAPES_SET_TOP[randomNumberPair[0]],
        1: SHAPES_SET_BOTTOM[randomNumberPair[1]],
      }
    }

    this.setState({ pairs });
  }

  render() {
    const { pairs, activePair } = this.state;

    return (
      <div className="RandomPairs">
        {pairs.map((pair, i) => <PairItem key={i} pair={pair} isActive={i === activePair} />)}
      </div>
    )
  }
}

export default RandomPairs;
