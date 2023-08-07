import React, {useLayoutEffect, useState} from 'react';
import {AppState, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import {openSecuritySettings} from '~helpers/auth';
import {useAppDispatch} from '~store/hooks';
import {setAuthenticated} from '~store/modules/auth/slice';
import {showErrorSnackbar, showSuccessSnackbar} from '~helpers/snackbar';
import styles from './styles';

function Authentication() {
  const dispatch = useAppDispatch();
  const [authLevel, setAuthLevel] =
    useState<LocalAuthentication.SecurityLevel>(0);

  // 0 indicates no enrolled authentication
  const isAuthEnrolled = authLevel !== 0;

  // check if user has enrolled authentication
  const checkAuthLevel = async () => {
    const level = await LocalAuthentication.getEnrolledLevelAsync();
    setAuthLevel(level);
  };

  // offer user to pass authentication
  const startAuth = async () => {
    const result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
      dispatch(setAuthenticated(true));
      showSuccessSnackbar('Successfully authenticated!');
    } else {
      showErrorSnackbar('Please try again');
    }
  };

  /*
    Everytime the application becomes active check if user has enrolled authentication.
    This way we can ensure that we should show an authentication button to the user.
  */
  useLayoutEffect(() => {
    const stateListener = AppState.addEventListener('change', state => {
      if (state === 'active') {
        checkAuthLevel();
      }
    });

    return () => {
      stateListener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {
          /* If the user doesn't have enrolled authentication we offer him to do so */
          isAuthEnrolled
            ? 'Please authenticate to continue'
            : 'Set Authentication to Proceed'
        }
      </Text>
      {
        /* Show the 'Authenticate' button only if user has enrolled authentication */
        isAuthEnrolled && (
          <TouchableOpacity style={styles.button} onPress={startAuth}>
            <Text style={styles.buttonText}>Authenticate</Text>
          </TouchableOpacity>
        )
      }
      <TouchableOpacity style={styles.button} onPress={openSecuritySettings}>
        <Text style={styles.buttonText}>Open Settings</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Authentication;
