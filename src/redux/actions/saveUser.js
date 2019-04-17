import { AsyncStorage } from 'react-native';

export const SAVE_USER_REQUEST = 'SAVE_USER_REQUEST';
export const SAVE_USER_SUCCESS = 'SAVE_USER_SUCCESS';
export const SAVE_USER_FAILURE = 'SAVE_USER_FAILURE';


const saveUserRequest = () => ({
  type: SAVE_USER_REQUEST,
  isSuccess: false,
  isFetch: true
});

const saveUserSuccess = (message) => ({
  type: SAVE_USER_SUCCESS,
  message,
  isSuccess: true,
  isFetch: false,
});

const saveUserFailure = (message) => ({
  type: SAVE_USER_FAILURE,
  message,
  isSuccess: false,
  isFetch: false
});

const saveUser = (username, password) => async dispatch => {
  dispatch(saveUserRequest());

  try {
    await AsyncStorage.setItem('@taskListStorage:username', username);
    await AsyncStorage.setItem('@taskListStorage:password', password);

    return dispatch(saveUserSuccess("Usuario salvo com sucesso"));
  } catch (error) {
    return dispatch(saveUserFailure("Erro ao salvar o usuario"));
  }
};

export default saveUser;
