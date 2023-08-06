import {Linking, Platform} from 'react-native';

/**
 * open native settings for both Android and iOS platforms
 */
export const openSecuritySettings = () => {
  Platform.OS === 'ios'
    ? Linking.openURL('App-Prefs:PASSCODE')
    : Linking.sendIntent('android.settings.SECURITY_SETTINGS');
};
