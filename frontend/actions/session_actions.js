import * as SessionsApiUtil from "../util/sessions_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = ({ user }) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser: user,
  })
};

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const login = (user) => (dispatch) => (
  SessionsApiUtil.login(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON))
  )
);

export const logout = () => (dispatch) => (
  SessionsApiUtil.logout().then(
    () => dispatch(logoutCurrentUser()),
    (errors) => dispatch(receiveSessionErrors(errors))
  )
);