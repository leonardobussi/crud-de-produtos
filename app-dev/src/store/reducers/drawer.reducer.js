import { actionTypes } from '../actions/drawer.action';

const initialState = {
  open: false
}

export default (state = initialState, { type, payload }) => {

  switch(type){
    case actionTypes.CHANGE_DRAWER:
      return {
        ...state, 
        open: payload
      }
    default:
      return state 
  }
}