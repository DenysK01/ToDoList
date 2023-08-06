import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './modules/rootReducer';

const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

const store = makeStore();

type ReduxState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;

export type {AppDispatch, ReduxState};

export default store;
