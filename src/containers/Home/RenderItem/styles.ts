import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 48,
    margin: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 6,
  },
  wrap: {
    flexDirection: 'row',
    flex: 1,
  },
  textInput: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    marginRight: 6,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
  checkButton: {
    width: 24,
    height: 24,
    borderRadius: 8,
    backgroundColor: 'lightblue',
    marginRight: 6,
  },
  editButton: {
    width: 40,
    height: 36,
    borderRadius: 12,
    backgroundColor: 'lightyellow',
    marginRight: 6,
  },
  deleteButton: {
    width: 48,
    height: 36,
    borderRadius: 12,
    backgroundColor: 'lightblue',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 12,
  },
  buttonsWrap: {
    flexDirection: 'row',
  },
});
