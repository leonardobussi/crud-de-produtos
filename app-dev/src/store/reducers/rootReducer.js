import { combineReducers } from "redux";
import authReducer from './auth.reducer';
import loadingReducer from './loading.reducer';
import notifyReducer from './notify.reducer';
import registerReducer from './register.reducer';
import drawerReducer from './drawer.reducer';

const rootReducer = combineReducers({
    authReducer,
    loadingReducer,
    notifyReducer,
    registerReducer,
    drawerReducer
});

export default rootReducer;