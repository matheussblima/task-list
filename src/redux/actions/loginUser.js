import { AsyncStorage } from 'react-native';
import storage from '../../config/variables';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';


const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST,
  isSuccess: false,
  isFetch: true
});

const loginUserSuccess = (message) => ({
  type: LOGIN_USER_SUCCESS,
  message,
  isSuccess: true,
  isFetch: false,
});

const loginUserFailure = (message) => ({
  type: LOGIN_USER_FAILURE,
  message,
  isSuccess: false,
  isFetch: false
});

const saveUser = (username, password) => async dispatch => {
  dispatch(loginUserRequest());

  try {
    if(username && password) {
        const usernameStore = await AsyncStorage.getItem(`${storage.storageName}username`);
        const passwordStore = await AsyncStorage.getItem(`${storage.storageName}password`);

        if (usernameStore !== null && passwordStore !== null) {
            if (usernameStore === username && passwordStore === password) {
                return dispatch(loginUserSuccess("Acesso concedido"));
            } else {
                return dispatch(loginUserFailure("Verifique os dados preenchidos"));
            }
        } else {
            return dispatch(loginUserFailure("Usuario não encontado"));
        }
    } else {
        return dispatch(loginUserFailure("Verifique se os campos estão preenchidos"));
    }
  } catch (error) {
    return dispatch(loginUserFailure("Erro ao buscar o usuario"));
  }
};

export default saveUser;
