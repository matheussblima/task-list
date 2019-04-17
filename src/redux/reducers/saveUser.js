import {
    SAVE_USER_REQUEST,
    SAVE_USER_SUCCESS,
    SAVE_USER_FAILURE
  } from '../actions/saveUser';
  
  const initialState = {
    isSuccess: false,
    message: '',
    isFetch: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_USER_REQUEST:
        return Object.assign({}, state, {
          isFetch: action.isFetch,
          isSuccess: action.isSuccess
        });
      case SAVE_USER_SUCCESS:
        return Object.assign({}, state, {
          isFetch: action.isFetch,
          isSuccess: action.isSuccess,
          message: action.message
        });
      case SAVE_USER_FAILURE:
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
  