import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useAppDispatch} from '~store/hooks';
import styles from './styles';
import {addTodo} from '~store/modules/todos/slice';

function Footer() {
  const dispatch = useAppDispatch();

  const [newTodo, setNewTodo] = useState<string>('');

  /**
   * Adds a new Todo item to the list and clears the input field
   */
  const onAddTodo = () => {
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  return (
    <View style={styles.addContainer}>
      <TextInput
        style={styles.textInput}
        value={newTodo}
        onChangeText={text => setNewTodo(text)}
        placeholder="Add new Todo item"
        maxLength={24}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={onAddTodo}
        disabled={!newTodo}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Footer;
