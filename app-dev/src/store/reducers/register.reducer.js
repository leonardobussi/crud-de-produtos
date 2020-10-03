import { actionTypes } from  '../actions/register.action';
import initialState from './initialState';

export default (state = initialState.register, { type, payload }) => {
  switch (type) {

  case actionTypes.CHANGE:
    return { 
        ...state, 
        data:{
          ...state.data,
          ...payload
        }
      }

  case actionTypes.SUCCESS:
    return { 
      ...state, 
      success: payload 
    }

  case actionTypes.ERROR:
    return {
      ...state,
      error: payload 
      }

  default:
    return state
  }
}
