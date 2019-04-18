import { AsyncStorage } from 'react-native';
import storage from '../../config/variables';

export const ADD_TASK_REQUEST = 'ADD_TASK_REQUEST';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE';


const addTaskRequest = () => ({
  type: ADD_TASK_REQUEST,
  isSuccess: false,
  isFetch: true
});

const addTaskSuccess = (message) => ({
  type: ADD_TASK_SUCCESS,
  message,
  isSuccess: true,
  isFetch: false,
});

const addTaskFailure = (message) => ({
  type: ADD_TASK_FAILURE,
  message,
  isSuccess: false,
  isFetch: false
});

const addTask = (taskInfo) => async dispatch => {
  dispatch(addTaskRequest());

  try {
    if(taskInfo.nameTask && taskInfo.descriptionTask) {
        let task = await AsyncStorage.getItem(`${storage.storageName}task`);
        let taskArray = [];

        if( task !== null) {
          if(JSON.parse(task).length > 0) {
            taskArray = JSON.parse(task);
            taskInfo.id = taskArray.length - 1;
            taskArray.push(taskInfo);
          }
        } else {
          taskInfo.id = 0;
          taskArray.push(taskInfo);
        }

        await AsyncStorage.setItem(`${storage.storageName}task`, JSON.stringify(taskArray));
    } else {
        return dispatch(addTaskFailure("Verifique se os campos estão preenchidos"));
    }
    return dispatch(addTaskSuccess("Tarefa salva com sucesso"));
  } catch (error) {
    console.info(error);
    return dispatch(addTaskFailure("Erro ao salvar o Tarefa"));
  }
};

export default addTask;
