const initialState = {
  currentUser: null
}
const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        currentUser: action.user
      }
      break;
    case "LOG_OUT":
      return {
        ...state,
        currentUser: null
      }
    default:
      return state;
  }
}

export default auth;
