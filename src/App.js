import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return state + 1;
    case 'Decrement':
      return state - 1;
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state} </h1>
      <button onClick={() => dispatch({ type: 'Increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'Decrement' })}>Decrement</button>
    </div>
  );
}
