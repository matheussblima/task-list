import {
    ADD_TASK_FAILURE,
    ADD_TASK_REQUEST,
    ADD_TASK_SUCCESS
  } from '../actions/addTask';
  
  const initialState = {
    isSuccess: false,
    message: '',
    isFetch: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK_REQUEST:
        return Object.assign({}, state, {
          isFetch: action.isFetch,
          isSuccess: action.isSuccess
        });
      case ADD_TASK_SUCCESS:
        return Object.assign({}, state, {
          isFetch: action.isFetch,
          isSuccess: action.isSuccess,
          message: action.message
        });
      case ADD_TASK_FAILURE:
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
  