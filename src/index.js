import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";

// *** actions -> function that returns an object
// increase a counter
const increment = () => {
  return {
    type: "INCREMENT"
  };
};
const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

// *** reducers
// handle actions, holds the state?!
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

// *** store -> (usually) globalized state
// add reducer to the store
let store = createStore(counter);
store.subscribe(() => console.log(store.getState()));

// *** dispatch
// dispatch an action using reducers
store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
