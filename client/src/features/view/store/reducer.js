const intialState = {
  VIEW_REQUEST: false,
  VIEW_SUCCESS: false,
  VIEW_ERROR: null,
  error: null,
  data: null
};
export default (state = intialState, action) => {
  switch (action.type) {
    case "GET_RANDOM_USER":
      return { ...state, VIEW_REQUEST: true };
    case "GET_RANDOM_USER_SUCCESS":
      return {
        ...state,
        VIEW_SUCCESS: true,
        VIEW_REQUEST: false,
        data: action.user
      };
    case "GET_RANDOM_USER_FAIL":
      return {
        ...state,
        VIEW_ERROR: true,
        VIEW_REQUEST: false,
        error: action.error
      };
    default:
      return { ...state };
  }
};
