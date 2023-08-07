import Snackbar from 'react-native-snackbar';
import {showSuccessSnackbar, showErrorSnackbar} from './snackbar';

jest.mock('react-native-snackbar', () => ({
  show: jest.fn(),
}));

describe('snackbar helpers', () => {
  it('Should show a success snackbar with default message', () => {
    showSuccessSnackbar();
    expect(Snackbar.show).toHaveBeenCalledWith({
      backgroundColor: 'green',
      text: 'Success!',
      duration: Snackbar.LENGTH_SHORT,
    });
  });

  it('Should show a success snackbar with custom message', () => {
    const customMessage = 'Custom success message';
    showSuccessSnackbar(customMessage);
    expect(Snackbar.show).toHaveBeenCalledWith({
      backgroundColor: 'green',
      text: customMessage,
      duration: Snackbar.LENGTH_SHORT,
    });
  });

  it('Should show an error snackbar with default message', () => {
    showErrorSnackbar();
    expect(Snackbar.show).toHaveBeenCalledWith({
      backgroundColor: 'red',
      text: 'An error occurred',
      duration: Snackbar.LENGTH_LONG,
    });
  });

  it('Should show an error snackbar with custom message', () => {
    const customMessage = 'Custom error message';
    showErrorSnackbar(customMessage);
    expect(Snackbar.show).toHaveBeenCalledWith({
      backgroundColor: 'red',
      text: customMessage,
      duration: Snackbar.LENGTH_LONG,
    });
  });
});
