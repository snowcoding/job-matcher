// import all action types
import * as action from "./actionTypes";
import { addErrorHandler } from "./error";
import * as actionType from "../../forms/store/actionType";
import Api from "../../../api";

const signUpHandler = data => ({
  type: action.SIGNUP__USER,
  data
});
const loginHandler = data => ({
  type: action.LOGIN__USER,
  data
});
const updateUserHandler = currentUser => ({
  type: action.UPDATE__USER,
  currentUser
});

const getProfileHandler = user => ({
  type: actionType.GET_PROFILE,
  user
});

export const getProfile = () => dispatch => {
  dispatch({ type: actionType.FETCHING_GET_PROFILE });
  Api.endpoints
    .me()
    .then(result => {
      dispatch(getProfileHandler(result.data));
    })
    .catch(error => {
      error.response
        ? dispatch(addErrorHandler(error.response.data))
        : dispatch(addErrorHandler(error));
    });
};

export const logOut = () => ({
  type: action.LOGOUT__USER
});
export const signUpUser = (userType, data) => {
  return function(dispatch) {
    dispatch({ type: action.FETCHING });

    Api.endpoints
      .signUp(userType, data)
      .then(result => {
        dispatch(signUpHandler(result.data));
      })
      .catch(error => {
        error.response
          ? dispatch(addErrorHandler(error.response.data))
          : dispatch(addErrorHandler(error.message));
      });
  };
};

export const login = data => {
  return function(dispatch) {
    dispatch({ type: action.FETCHING });

    Api.endpoints
      .signIn(data)
      .then(result => {
        dispatch(loginHandler(result.data));
      })
      .catch(error => {
        error.response
          ? dispatch(addErrorHandler(error.response.data))
          : dispatch(addErrorHandler(error.message));
      });
  };
};

export const updateUser = (userType, userId, data) => {
  return function(dispatch) {
    dispatch({ type: action.FETCHING });
    Api.endpoints
      .updateUser(userType, userId, data)
      .then(result => {
        dispatch(updateUserHandler(result.data));
      })
      .catch(error => {
        error.response
          ? dispatch(addErrorHandler(error.response.data))
          : dispatch(addErrorHandler(error.message));
      });
  };
};
