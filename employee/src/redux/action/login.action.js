const loginSuccess = (res) => ({
  type: "LOGIN_SUCCESS",
  payload: res,
});

export const dispatchUserLoginDetails = (value) => (dispatch) => {
  dispatch(loginSuccess(value));
};
