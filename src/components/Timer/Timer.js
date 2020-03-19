import React from 'react';

import './Timer.scss';

class Timer extends React.Component {
  render() {
    const { count, totalSeconds } = this.props;
    const width = totalSeconds * count;

    return (
      <div className="Timer">
        <div className="Timer__inner">
          <div className="Timer__progressline" style={{ width: `${width}%` }}/>
        </div>
      </div>
    )
  }
}


export default Timer;
