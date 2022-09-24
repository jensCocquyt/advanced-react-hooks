// useReducer: simple Counter
// 💯 simulate setState with an object OR function
// http://localhost:3000/isolated/final/01.extra-3.js

import * as React from 'react'

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + action.step}
    default:
      throw Error()
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
