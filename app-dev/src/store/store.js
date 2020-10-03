import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import ReduxThunk from 'redux-thunk';

let middleware = [ReduxThunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));