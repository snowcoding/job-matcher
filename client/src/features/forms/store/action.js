import * as actionType from "./actionType";
import Api from "../../../api";

const userImgUpdateHandler = currentUser => ({
  type: "UPDATE__USER",
  currentUser
});

const profileErrorHandler = error => ({
  type: actionType.ERROR_UPDATE_PROFILE,
  error
});

export const updateProfileImg = (userType, userId, data) => dispatch => {
  dispatch({ type: actionType.UPDATE_PROFILE_IMG });
  Api.endpoints
    .updateUser(userType, userId, data)
    .then(result => {
      dispatch(userImgUpdateHandler(result.data));
    })
    .catch(error => {
      error.response
        ? dispatch(profileErrorHandler(error.response.data))
        : dispatch(profileErrorHandler(error));
    });
};
