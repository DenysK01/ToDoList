import {combineReducers} from '@reduxjs/toolkit';
import authReducer from '../auth/slice';
import todosReducer from '../todos/slice';

// add new reducers to this object
const rootReducer = combineReducers({
  auth: authReducer,
  todos: todosReducer,
});

export default rootReducer;
