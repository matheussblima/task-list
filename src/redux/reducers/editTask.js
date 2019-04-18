import {
    EDIT_TASK_FAILURE,
    EDIT_TASK_REQUEST,
    EDIT_TASK_SUCCESS
  } from '../actions/editTask';
  
  const initialState = {
    isSuccess: false,
    message: '',
    isFetch: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case EDIT_TASK_REQUEST:
        return Object.assign({}, state, {
          isFetch: action.isFetch,
          isSuccess: action.isSuccess
        });
      case EDIT_TASK_SUCCESS:
        return Object.assign({}, state, {
          isFetch: action.isFetch,
          isSuccess: action.isSuccess,
          message: action.message
        });
      case EDIT_TASK_FAILURE:
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
  