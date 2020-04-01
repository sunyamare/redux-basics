export const increment = (increment = 1) => {
  return {
    type: "INCREMENT",
    payload: increment
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};
export const logIn = () => {
  return {
    type: "SIGN_IN"
  };
};
export const logOut = () => {
  return {
    type: "SIGN_OUT"
  };
};
export const toggleLogin = () => {
  return {
    type: "TOGGLE"
  };
};
