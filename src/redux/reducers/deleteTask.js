import {
    DELETE_TASK_FAILURE,
    DELETE_TASK_REQUEST,
    DELETE_TASK_SUCCESS
  } from '../actions/deleteTask';
  
  const initialState = {
    isSuccess: false,
    message: '',
    isFetch: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_TASK_REQUEST:
        return Object.assign({}, state, {
          isFetch: action.isFetch,
          isSuccess: action.isSuccess
        });
      case DELETE_TASK_SUCCESS:
        return Object.assign({}, state, {
          isFetch: action.isFetch,
          isSuccess: action.isSuccess,
          message: action.message
        });
      case DELETE_TASK_FAILURE:
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
  