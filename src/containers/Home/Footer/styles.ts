import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  addContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    padding: 12,
  },
  textInput: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    marginRight: 6,
    paddingLeft: 12,
  },
  button: {
    width: 48,
    height: 36,
    borderRadius: 12,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 12,
  },
});
