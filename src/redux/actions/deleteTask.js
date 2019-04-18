import { AsyncStorage } from 'react-native';
import storage from '../../config/variables';

export const DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE';


const deleteTaskRequest = () => ({
  type: DELETE_TASK_REQUEST,
  isSuccess: false,
  isFetch: true
});

const deleteTasKSuccess = (message) => ({
  type: DELETE_TASK_SUCCESS,
  message,
  isSuccess: true,
  isFetch: false,
});

const deleteTaskFailure = (message) => ({
  type: DELETE_TASK_FAILURE,
  message,
  isSuccess: false,
  isFetch: false
});

const deleteTask = (deleteTaskselect) => async dispatch => {
  dispatch(deleteTaskRequest());

  console.info(deleteTaskselect);

  try {
    const task = await AsyncStorage.getItem(`${storage.storageName}task`);
    let taskArray = [];
    
    if(task !== null) {
      if(JSON.parse(task).length > 0) {

        taskArray = JSON.parse(task);
        const indexTask = taskArray.findIndex((task) => task.id === deleteTaskselect.id);

        taskArray.splice(indexTask, 1);

        await AsyncStorage.setItem(`${storage.storageName}task`, JSON.stringify(taskArray));
        return dispatch(deleteTasKSuccess("Tarefas Deletada"));
      } else {
        return dispatch(deleteTaskFailure("Não foi possivel Deletar a tarefa"));
      }
    }
  } catch (error) {
    console.info(error)
    return dispatch(deleteTaskFailure("Erro ao alterar a Deletar"));
  }
};

export default deleteTask;
