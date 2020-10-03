import {Http} from '../../config/globalConfig';
import { changeloading } from './loading.action';
import { changeNotify } from './notify.action';

export const actionTypes = {
  GET_TOKEN: 'GET_TOKEN',
  LOGOUT: 'LOGOUT',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  CHANGE: 'CHANGE'
}

export const getToken = (token) => ({
  type: actionTypes.GET_TOKEN,
  token
})
export const removeToken = () => ({
  type: actionTypes.LOGOUT
})
export const loginSuccess = bool => ({
  type: actionTypes.SUCCESS,
  bool
})
export const loginError = (error) => ({
  type: actionTypes.ERROR,
  error
})
export const changeValue = (payload) => ({
  type: actionTypes.CHANGE,
  payload
})
export const loading = (bool, msg = null) => ({
  type: actionTypes.LOADING,
  isLoading: {
    active: bool,
    msg: msg
  }
})
export const getUserToken = () => dispatch =>
  localStorage.getItem('access_token')
  .then(res =>{
    dispatch(loading(false));
    if(typeof res !== 'undefined'){
      dispatch(getToken(res));
    }
  })

  export const setUserToken = (token) => dispatch => {
  localStorage.setItem('access_token', token);
    dispatch(loading(false));
    dispatch(loginSuccess(true));  
  }
export const login = (credentials) => {
  return dispatch =>{
    dispatch(changeloading({
      open: true,
      msg: 'autenticando'
    }));
    return Http.post('/oauth/token', {
      grant_type: 'password',
      client_id: 2,
      client_secret: 'eoqNcf9Dn6j44hYOCt1CPWxI9IGaqeToBFG5icek',
      username: credentials.username,
      password: credentials.password,
    })
    .then(res => {
      dispatch(changeloading({
        open: false,
        msg: ''
      }));
      if(typeof res !== 'undefined'){
        dispatch(setUserToken(res.data.access_token))
      }
    })
    .catch(error => {
      dispatch(changeloading({
        open: false,
        msg: ''
      }));
      if(error.response){
        if(error.response.status === 401 || error.response.status === 400){
          dispatch(changeNotify({
            open: true,
            msg: 'E-mail ou Senha incorreta',
            class: 'error'
          })) 
        }
      }else{
        dispatch(changeNotify({
          open: true,
          msg: 'Error in execpct of Login',
          class: 'error'
        })) 
      }
    })
  }
}