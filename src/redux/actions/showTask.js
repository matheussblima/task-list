import { AsyncStorage } from 'react-native';
import storage from '../../config/variables';

export const SHOW_TASK_REQUEST = 'SHOW_TASK_REQUEST';
export const SHOW_TASK_SUCCESS = 'SHOW_TASK_SUCCESS';
export const SHOW_TASK_FAILURE = 'SHOW_TASK_FAILURE';


const showTaskRequest = () => ({
  type: SHOW_TASK_REQUEST,
  isSuccess: false,
  isFetch: true
});

const showTasKSuccess = (message, tasks) => ({
  type: SHOW_TASK_SUCCESS,
  message,
  tasks,
  isSuccess: true,
  isFetch: false,
});

const showTaskFailure = (message) => ({
  type: SHOW_TASK_FAILURE,
  message,
  isSuccess: false,
  isFetch: false
});

const saveUser = () => async dispatch => {
  dispatch(showTaskRequest());

  try {
    const task = await AsyncStorage.getItem(`${storage.storageName}task`);

    if(JSON.parse(task).length > 0) {
        return dispatch(showTasKSuccess("Verifique se os campos estão preenchidos", JSON.parse(task)));
    } else {
        return dispatch(showTaskFailure("Não tem tarefas"));
    }
   
  } catch (error) {
    return dispatch(showTaskFailure("Erro ao buscar o usuario"));
  }
};

export default saveUser;
