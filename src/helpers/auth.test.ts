import {Linking, Platform} from 'react-native';
import {openSecuritySettings} from './auth'; // Adjust the path as needed

jest.mock('react-native', () => ({
  Linking: {
    openURL: jest.fn(),
    sendIntent: jest.fn(),
  },
  Platform: {
    OS: 'ios',
  },
}));

describe('auth helpers', () => {
  it('Should open security settings on iOS', () => {
    Platform.OS = 'ios';
    openSecuritySettings();
    expect(Linking.openURL).toHaveBeenCalledWith('App-Prefs:PASSCODE');
  });

  it('Should open security settings on Android', () => {
    Platform.OS = 'android';
    openSecuritySettings();
    expect(Linking.sendIntent).toHaveBeenCalledWith(
      'android.settings.SECURITY_SETTINGS',
    );
  });
});
