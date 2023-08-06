import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {AuthState} from './types';

const initialState: AuthState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /**
     * Pass it to dispatch from useAppDispatch() to set user's current authentication status
     */
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

// add actions to export
export const {setAuthenticated} = authSlice.actions;

export default authSlice.reducer;
