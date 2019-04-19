import { AsyncStorage } from 'react-native';
import storage from '../../config/variables';

export const EDIT_TASK_REQUEST = 'EDIT_TASK_REQUEST';
export const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS';
export const EDIT_TASK_FAILURE = 'EDIT_TASK_FAILURE';


const editTaskRequest = () => ({
  type: EDIT_TASK_REQUEST,
  isSuccess: false,
  isFetch: true
});

const editTasKSuccess = (message) => ({
  type: EDIT_TASK_SUCCESS,
  message,
  isSuccess: true,
  isFetch: false,
});

const editTaskFailure = (message) => ({
  type: EDIT_TASK_FAILURE,
  message,
  isSuccess: false,
  isFetch: false
});

const editTask = (oldTask, newTask) => async dispatch => {
  dispatch(editTaskRequest());

  try {
    if(newTask.nameTask && newTask.descriptionTask) {
        const task = await AsyncStorage.getItem(`${storage.storageName}task`);
        let taskArray = [];
        
        if(task !== null) {
          if(JSON.parse(task).length > 0) {
    
            taskArray = JSON.parse(task);
            const indexTask = taskArray.findIndex((task) => task.id === oldTask.id);
    
            taskArray[indexTask].nameTask = newTask.nameTask;
            taskArray[indexTask].descriptionTask = newTask.descriptionTask;
    
            await AsyncStorage.setItem(`${storage.storageName}task`, JSON.stringify(taskArray));
            return dispatch(editTasKSuccess("Tarefas editada"));
          } else {
            return dispatch(editTaskFailure("Não foi possivel editar a tarefa"));
        }
      }
    } else {
      return dispatch(editTaskFailure("Verifique se os campos estão preenchidos"));
    }
  } catch (error) {
    console.info(error)
    return dispatch(editTaskFailure("Erro ao alterar a tarefa"));
  }
};

export default editTask;
