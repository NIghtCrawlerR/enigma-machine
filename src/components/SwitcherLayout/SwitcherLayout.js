import React from 'react';

import ShapesSetSwitcher from '../ShapesSetSwitcher';
import {
  SHAPES_SET_TOP,
  SHAPES_SET_BOTTOM,
  KEY_UP,
  KEY_DOWN,
} from '../../config';

import './index.scss';


class SwitcherLayout extends React.Component {
  constructor() {
    super();

    this.state = {
      activeSwitcher: 0,
    };

    document.addEventListener('keyup', this.keyUpHandler)
  }

  keyUpHandler = ({ keyCode }) => {
    if (keyCode === KEY_UP) {
      this.setState({ activeSwitcher: 0 })
    }

    if (keyCode === KEY_DOWN) {
      this.setState({ activeSwitcher: 1 })
    }
  }

  render() {
    const { activeSwitcher } = this.state;
    const { updateChoosenPair } = this.props;

    return (
      <div className="SwitcherLayout">
        <ShapesSetSwitcher set={SHAPES_SET_TOP} isActive={!activeSwitcher} index={0} updateChoosenPair={updateChoosenPair} />
        <ShapesSetSwitcher set={SHAPES_SET_BOTTOM} isActive={!!activeSwitcher} index={1} updateChoosenPair={updateChoosenPair} />
      </div>
    )
  }
}


export default SwitcherLayout;
