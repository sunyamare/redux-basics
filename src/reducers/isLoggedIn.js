const loginReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return true;
    case "SIGN_OUT":
      return false;
    case "TOGGLE":
      return !state;
    default:
      return state;
  }
};
export default loginReducer;
