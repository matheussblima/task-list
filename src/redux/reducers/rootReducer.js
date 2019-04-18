import { combineReducers } from 'redux';

import saveUser from './saveUser';
import loginUser from './loginUser';
import addTask from './addTask';

export default combineReducers({
    saveUser,
    loginUser,
    addTask
});
