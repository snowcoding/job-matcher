const intialState = {
  FETCHING_GET_VIEW: false,
  data: null
};
export default (state = intialState, action) => {
  switch (action.type) {
    case "GET_RANDOM_USER":
      return { ...state, FETCHING_GET_VIEW: true };
    case "GET_RANDOM_USER_SUCCESS":
      return { ...state, FETCHING_GET_VIEW: true, data: action.user };
    case "GET_RANDOM_USER_FAIL":
      return { ...state, FETCHING_GET_VIEW: false, data: action.user };
    default:
      return { ...state };
  }
};
