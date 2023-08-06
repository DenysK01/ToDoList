import Snackbar from 'react-native-snackbar';

/**
 * Dispays a short success snackbar alerts with green background and a customizable message
 * @param message a message to display in the snackbar alerts. By default it displays 'Success!'
 */
export const showSuccessSnackbar = (message?: string) => {
  Snackbar.show({
    backgroundColor: 'green',
    text: message || 'Success!',
    duration: Snackbar.LENGTH_SHORT,
  });
};

/**
 * Dispays a long error snackbar alerts with red background and a customizable message
 * @param message a message to display in the snackbar alerts. By default it displays 'An error occurred!'
 */
export const showErrorSnackbar = (message?: string) => {
  Snackbar.show({
    backgroundColor: 'red',
    text: message || 'An error occurred',
    duration: Snackbar.LENGTH_LONG,
  });
};
