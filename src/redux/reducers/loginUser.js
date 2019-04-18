import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
  } from '../actions/loginUser';
  
  const initialState = {
    isSuccess: false,
    message: '',
    isFetch: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER_REQUEST:
        return Object.assign({}, state, {
          isFetch: action.isFetch,
          isSuccess: action.isSuccess
        });
      case LOGIN_USER_SUCCESS:
        return Object.assign({}, state, {
          isFetch: action.isFetch,
          isSuccess: action.isSuccess,
          message: action.message
        });
      case LOGIN_USER_FAILURE:
        return Object.assign({}, state, {
          isFetch: action.isFetch,
          isSuccess: action.isSuccess,
          message: action.message
        });
      default:
        return state;
    }
  };
  
  export default reducer;
  