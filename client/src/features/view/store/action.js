import Api from "../../../api";
export const GET_RANDOM = "GET_RANDOM";
export const VIEW_SUCCESS = "VIEW_SUCCESS";
export const VIEW_ERROR = "VIEW_ERROR";

const getRandomHandler = user => ({
  type: "GET_RANDOM_USER_SUCCESS",
  user
});

const geterrorHandler = error => ({
  type: "GET_RANDOM_USER_FAIL",
  error
});

export const getRandomUser = userType => dispatch => {
  // console.log("current user:",this );
  dispatch({ type: "GET_RANDOM_USER" });

  Api.endpoints
    .random(userType)
    .then(result => {
      // console.log({ result });
      dispatch(getRandomHandler(result.data));
    })
    .catch(error => {
      dispatch(geterrorHandler({ error }));
    });
};
export const postSuperAction = data => dispatch => {
  console.log("DATA READY TO BE POST ", { data });
  //dispatch({ type: "POST_SUPER_ACTION" });

  Api.endpoints
    .postMatches(data)
    .then(result => {
      console.log("WHAT I GET BACK FROM SERVER ", { result });
      //dispatch(getRandomHandler(result));
    })
    .catch(error => {
      console.log("WHAT I GET BACK FROM SERVER", { error });
      //dispatch(geterrorHandler({ error }));
    });
};
