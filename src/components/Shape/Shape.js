import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import './Shape.scss';

const Shape = ({ shape, active }) => (
  <div className={classNames("Shape", {
    "Shape--active": active,
  })}>
    {shape.map(row => (
      <div key={uuidv4()} className="Shape__row">
        {row.map(cell => (
          <div key={uuidv4()} className="Shape__cell-wrap">
            <div className={classNames("Shape__cell", {
              "Shape__cell--filled": cell,
              "Shape__cell--empty": !cell,
            })} />
          </div>
        ))}
      </div>
    ))}
  </div>
);

Shape.propTypes = {
  shape: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number),
  ).isRequired,
};

export default Shape;
