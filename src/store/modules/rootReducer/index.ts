import {combineReducers} from '@reduxjs/toolkit';
import authReducer from '../auth/slice';

// add new reducers to this object
const rootReducer = combineReducers({auth: authReducer});

export default rootReducer;
