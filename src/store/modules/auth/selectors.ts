import type {ReduxState} from '~store';

/**
 * Pass it to useAppSelector to get user's current authentication status
 */
export const getIsAuthenticated = (state: ReduxState) =>
  state.auth.isAuthenticated;
