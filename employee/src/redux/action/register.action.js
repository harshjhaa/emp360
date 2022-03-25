const registerSuccess = (res) => ({
  type: "REGISTER_SUCCESS",
  payload: res,
});

export const dispatchUserRegisterDetails = (value) => (dispatch) => {
  dispatch(registerSuccess(value));
};
