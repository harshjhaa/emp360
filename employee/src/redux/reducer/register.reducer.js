const initialState = {
  registeredUserDetails: [],
};

const registerReducer = (state = initialState, action) => {
  if (!action) return state;
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return {
        ...state,
        registeredUserDetails: action.payload,
      };
    default:
      return state;
  }
};

export default registerReducer;
