import React from "react";
import { useSelector, useDispatch } from "react-redux"; // useSelecter is for reducers, useDispatcher for actions
import { increment, decrement, logIn, logOut, toggleLogin } from "./actions";

function App() {
  const count = useSelector(state => state.count);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <div style={{ margin: "auto", maxWidth: "600px" }}>
      <h1>Counter:</h1>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(increment(5));
        }}
      >
        +5
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <h2>Super secret words only logged-in users can see ...</h2>
      <button
        onClick={() => {
          dispatch(logIn());
        }}
      >
        Log in
      </button>
      <button
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log out
      </button>
      <button
        onClick={() => {
          dispatch(toggleLogin());
        }}
      >
        Toggle Login
      </button>
      {isLoggedIn && <p>Bazinga</p>}
    </div>
  );
}

export default App;
