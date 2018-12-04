import * as actionType from "./actionType";
import Api from "../../../api";

const getMatchesHandler = data => ({
  type: actionType.FETCHING_MATCHES_JOBS,
  data
});
const errorHandler = error => ({
  type: actionType.FETCHING_MATCHES_ERROR,
  error
});

export const getMatches = (userType, id) => dispatch => {
  dispatch({ type: actionType.FETCHING_MATCHES });

  Api.endpoints
    .getMatches(userType, id)
    .then(result => {
      dispatch({ type: actionType.FETCHING_MATCHES_SUCCESS });
      dispatch(getMatchesHandler(result.data));
    })
    .catch(error => {
      error.response
        ? dispatch(errorHandler(error.response.data))
        : dispatch(errorHandler(error.message));
    });
};
