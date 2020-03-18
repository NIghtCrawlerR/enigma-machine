import React from 'react';
import classNames from 'classnames';

import Shape from '../Shape';

class PairItem extends React.Component {
  render() {
    const { pair, isActive } = this.props;

    return (
      <div className={classNames("PairItem", {
        "PairItem--active": isActive,
      })}>
        <Shape shape={pair[0]} />
        <Shape shape={pair[1]} />
      </div>
    )
  }
}

export default PairItem;
