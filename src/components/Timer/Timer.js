import React from 'react';

import './index.scss';

class Timer extends React.Component {
  render() {
    const { count, totalSeconds } = this.props;
    const width = totalSeconds * count;

    return (
      <div className="Timer">
        <div className="Timer__inner" style={{ width: `${width}%` }} />
      </div>
    )
  }
}


export default Timer;
