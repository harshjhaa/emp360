const initialState = {
  loggedInUser: {},
};

const registerReducer = (state = initialState, action) => {
  if (!action) return state;
  console.log(action.payload);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loggedInUser: action.payload,
      };
    default:
      return state;
  }
};

export default registerReducer;
