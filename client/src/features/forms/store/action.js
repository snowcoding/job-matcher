import * as actionType from "./actionType";
import Api from "../../../api";

const userImgUpdateHandler = img => ({
  type: actionType.UPDATE_PROFILE_IMG,
  img
});

const profileErrorHandler = error => ({
  type: actionType.ERROR_UPDATE_PROFILE,
  error
});

export const updateProfileImg = () => dispatch => {
  dispatch({ type: actionType.FETCHING_UPDATE_PROFILE });
  Api.endpoints
    .me()
    .then(result => {
      dispatch(userImgUpdateHandler(result.data));
    })
    .catch(error => {
      error.response
        ? dispatch(profileErrorHandler(error.response.data))
        : dispatch(profileErrorHandler(error));
    });
};
