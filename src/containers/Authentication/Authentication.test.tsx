import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import Authentication from '.';

const mockDispatch = jest.fn();
jest.mock('../../store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
}));

// Mock setAuthenticated function that is passed to dispatch
const mockSetAuthenticated = jest.fn(x => x);
jest.mock('../../store/modules/auth/slice', () => ({
  setAuthenticated: (x: boolean) => mockSetAuthenticated(x),
}));

jest.mock('expo-local-authentication', () => ({
  getEnrolledLevelAsync: jest.fn(),
  authenticateAsync: jest.fn(),
}));

jest.mock('../../helpers/snackbar', () => ({
  showErrorSnackbar: jest.fn(),
  showSuccessSnackbar: jest.fn(),
}));

// Mock useState to change the current authentication level
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('Authentication container', () => {
  it('Render the Authenticate button when user has enrolled authentication', () => {
    // Mock state when user has entrolled authentication
    require('react').useState.mockImplementation(() => [1]);

    const {getByText} = render(<Authentication />);
    const authenticateButton = getByText('Authenticate');

    expect(authenticateButton).toBeDefined();
  });

  it('Renders correctly without authentication button when not enrolled', () => {
    // Mock state when user has not entrolled authentication
    require('react').useState.mockImplementation(() => [0]);

    const {getByText, queryByText} = render(<Authentication />);

    const authenticateButton = queryByText('Authenticate');
    expect(authenticateButton).toBeNull();
    const setAuthButton = getByText('Set Authentication to Proceed');
    expect(setAuthButton).toBeDefined();
  });

  it('Calls showSuccessSnackbar on successful authentication', async () => {
    // Mock state when user has entrolled authentication
    require('react').useState.mockImplementation(() => [1]);

    require('expo-local-authentication').authenticateAsync.mockResolvedValue({
      success: true,
    });

    const {getByText} = render(<Authentication />);
    const authenticateButton = getByText('Authenticate');

    fireEvent.press(authenticateButton);

    await expect(LocalAuthentication.authenticateAsync).toHaveBeenCalled();

    /* if authenticateAsync returns {success: true}
      authenticated should be set to true and success snackbar should be displayed */
    expect(mockDispatch).toHaveBeenCalledWith(mockSetAuthenticated(true));
    expect(
      require('../../helpers/snackbar').showSuccessSnackbar,
    ).toHaveBeenCalledWith('Successfully authenticated!');
  });

  it('Calls showErrorSnackbar on failed authentication', async () => {
    // Mock state when user has entrolled authentication
    require('react').useState.mockImplementation(() => [1]);

    require('expo-local-authentication').authenticateAsync.mockResolvedValue({
      success: false,
    });

    const {getByText} = render(<Authentication />);
    const authenticateButton = getByText('Authenticate');

    fireEvent.press(authenticateButton);

    await expect(LocalAuthentication.authenticateAsync).toHaveBeenCalled();

    /* if authenticateAsync returns {success: false}
      error snackbar should be displayed */
    expect(
      require('../../helpers/snackbar').showErrorSnackbar,
    ).toHaveBeenCalledWith('Please try again');
  });
});
