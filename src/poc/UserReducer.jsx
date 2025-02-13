import React from "react";
import { useReducer } from "react";
const counterReducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "INCREMENTBY5":
      return state + 5;
    case "DECREMENTBY5":
      return state - 5;
  }
};
const initialState = 0; //intial State of your state
function UserReducer() {
  //counterReducer is used to store all the handler functions
  const [cState, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <p>Counter: {cState} </p>
      <button
        onClick={() => {
          dispatch("INCREMENT");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch("DECREMENT");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch("INCREMENTBY5");
        }}
      >
        +5
      </button>
      <button
        onClick={() => {
          dispatch("DECREMENTBY5");
        }}
      >
        -5
      </button>
    </div>
  );
}

export default UserReducer;
