// import all action types
import * as action from "./actionTypes";
import { addErrorHandler } from "./error";
import axios from "axios";
let URL =
  process.env.URL || "https://django-deploy-heroku-backend.herokuapp.com";

URL = "https://jobmatcher-api-prod.herokuapp.com";

const signUpHandler = user => ({
  type: action.SIGNUP__USER,
  user
});
const loginHandler = currentUser => ({
  type: action.LOGIN__USER,
  currentUser
});
const updateUserHandler = currentUser => ({
  type: action.UPDATE__USER,
  currentUser
});

const deleteUserHandler = () => ({
  type: action.DELETE__USER
});
export const loginOut = () => ({
  type: action.LOGOUT__USER
});
export const signUpUser = data => {
  return function(dispatch) {
    dispatch({ type: action.FETCHING });
    axios
      .post(`${URL}/api/v1/signup`, data)
      .then(result => {
        dispatch(signUpHandler(result.data));
      })
      .catch(error => {
        console.log("errorr", { error });
        error.response
          ? dispatch(addErrorHandler(error.response.data))
          : dispatch(addErrorHandler(error.message));
      });
  };
};

export const login = data => {
  return function(dispatch) {
    dispatch({ type: action.FETCHING });

    axios
      .post(`${URL}/api/v1/signin`, data)
      .then(result => {
        localStorage.setItem("token", result.data.token);
        dispatch(loginHandler(result.data));
      })
      .catch(error => {
        console.log("errorr", { error });
        error.response
          ? dispatch(addErrorHandler(error.response.data))
          : dispatch(addErrorHandler(error.message));
      });
  };
};

export const updateUser = (id, data) => {
  return function(dispatch) {
    dispatch({ type: action.FETCHING });

    axios
      .put(`${URL}/api/v1/users/${id}`, data)
      .then(result => {
        localStorage.removeItem("jwt", "id");

        localStorage.setItem("jwt", result.data.token);
        localStorage.setItem("id", result.data.id);
        dispatch(updateUserHandler(result.data));
      })
      .catch(error => {
        console.log("errorr", error);
        dispatch(addErrorHandler(error.response.data));
      });
  };
};
export const deleteUser = id => {
  return function(dispatch) {
    dispatch({ type: action.FETCHING });

    axios
      .delete(`${URL}/api/v1/users/${id}`)
      .then(result => {
        localStorage.removeItem("jwt", "id");
        dispatch(deleteUserHandler());
      })
      .catch(error => {
        console.log("errorr", error);
        dispatch(addErrorHandler(error.response.data));
      });
  };
};
