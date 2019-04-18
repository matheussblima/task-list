import { combineReducers } from 'redux';

import saveUser from './saveUser';
import addTask from './addTask';
import loginUser from './loginUser';
import showTask from   './showTask';
import deleteTask from './deleteTask';
import editTask from './editTask';

export default combineReducers({
    saveUser,
    loginUser,
    addTask,
    showTask,
    deleteTask,
    editTask
});
