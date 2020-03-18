import React from 'react';
import Board from './components/Board';

/*
Components:

SHAPE SWITCHER
1. Set of shapes:
  - top row
  - bottom row
2. Shape item (an array 3x3 with 1 and 0 that represents empty and filled cells)

RANDOM SHAPE PAIRS
1. Shape pair item (two shape items)
*/
function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
