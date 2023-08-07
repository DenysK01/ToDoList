import {Store, configureStore} from '@reduxjs/toolkit';
import {authSlice} from './slice';

describe('authSlice', () => {
  let store: Store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        auth: authSlice.reducer,
      },
    });
  });

  it('Should set authentication to true', () => {
    store.dispatch(authSlice.actions.setAuthenticated(true));
    const state = store.getState().auth;
    expect(state.isAuthenticated).toBe(true);
  });
});
