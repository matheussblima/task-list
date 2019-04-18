import {
    SHOW_TASK_REQUEST,
    SHOW_TASK_FAILURE,
    SHOW_TASK_SUCCESS
  } from '../actions/showTask';
  
  const initialState = {
    isSuccess: false,
    message: '',
    isFetch: false,
    tasks: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_TASK_REQUEST:
        return Object.assign({}, state, {
          isFetch: action.isFetch,
          isSuccess: action.isSuccess
        });
      case SHOW_TASK_SUCCESS:
        return Object.assign({}, state, {
          isFetch: action.isFetch,
          isSuccess: action.isSuccess,
          message: action.message,
          tasks: action.tasks
        });
      case SHOW_TASK_FAILURE:
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
  