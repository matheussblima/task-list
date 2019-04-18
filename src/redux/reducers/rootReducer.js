import { combineReducers } from 'redux';

import saveUser from './saveUser';
import loginUser from './loginUser';
import addTask from './addTask';
import showTask from './showTask';

export default combineReducers({
    saveUser,
    loginUser,
    addTask,
    showTask
});
