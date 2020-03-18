import React from 'react';
import classNames from 'classnames';

import {
  KEY_LEFT,
  KEY_RIGHT,
} from '../../config';
import Shape from '../Shape';
import './index.scss';

class ShapesSetSwitcher extends React.Component {
  constructor(props) {
    super();

    this.middleElement = Math.floor(props.set.length / 2);

    this.state = {
      setSwitched: [...props.set],
    }
  
    document.addEventListener('keyup', this.keyUpHandler)
  }

  componentDidMount() {
    const { index, set, updateChoosenPair } = this.props;
    updateChoosenPair(index, set[this.middleElement])
  }

  keyUpHandler = ({ keyCode }) => {
    const { setSwitched } = this.state;
    const { isActive, updateChoosenPair, index } = this.props;

    if (!isActive) return false;

    if (keyCode === KEY_LEFT) {
      const newArray = [setSwitched[setSwitched.length - 1], ...setSwitched];
      newArray.pop();

      this.setState({ setSwitched: newArray }, () => updateChoosenPair(index, newArray[this.middleElement]));
    }

    if (keyCode === KEY_RIGHT) {
      const newArray = [...setSwitched, setSwitched[0]];
      newArray.shift();

      this.setState({ setSwitched: newArray }, () => updateChoosenPair(index, newArray[this.middleElement]));
    }
  }

  render() {
    const { isActive } = this.props;
    const { setSwitched } = this.state;

    return (
      <div className={classNames("ShapesSetSwitcher", {
        "ShapesSetSwitcher--active": isActive,
      })}>
        <div className="chevron left" />
        <div className="ShapesSetSwitcher__inner">
          {setSwitched.map((shape, i) => <Shape key={i} shape={shape} active={i === this.middleElement} />)}
        </div>
        <div className="chevron right" />
      </div>
    )
  }
}

export default ShapesSetSwitcher;
