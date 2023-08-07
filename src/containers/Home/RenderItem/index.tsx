import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useAppDispatch} from '~store/hooks';
import {toggleTodo, deleteTodo, updateTodo} from '~store/modules/todos/slice';
import {TodoItem} from '~store/modules/todos/types';
import styles from './styles';

type Props = {
  item: TodoItem;
};

function RenderItem(props: Props) {
  const {item} = props;
  const dispatch = useAppDispatch();

  // is editing mode for current Todo item enabled
  const [isEditing, setEditing] = useState<boolean>(false);
  const [updatedTitle, setUpdatedTitle] = useState<string>('');

  /**
   * toggle the current item
   */
  const onToggleTodo = () => {
    dispatch(toggleTodo(item.id));
  };

  /**
   * delete the current item
   */
  const onDeleteTodo = () => {
    dispatch(deleteTodo(item.id));
  };

  /**
   * enable editing mode for the item and change input field to the current title
   */
  const editTodo = () => {
    setEditing(true);
    setUpdatedTitle(item.title);
  };

  /**
   * save changes and disable editing mode
   */
  const onUpdateTodo = () => {
    dispatch(updateTodo({id: item.id, title: updatedTitle}));
    setEditing(false);
  };

  // if editing mode is enabled render the text input and button to save changes
  if (isEditing) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={updatedTitle}
          onChangeText={text => setUpdatedTitle(text)}
          placeholder="Enter here"
        />
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={onUpdateTodo}
          disabled={!updatedTitle}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <TouchableOpacity
          style={[styles.button, styles.checkButton]}
          onPress={onToggleTodo}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>

        {/* draw a line through the title if current item is checked */}
        <Text
          style={[
            styles.text,
            item.isChecked && {textDecorationLine: 'line-through'},
          ]}>
          {item.title}
        </Text>
      </View>
      <View style={styles.buttonsWrap}>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={editTodo}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={onDeleteTodo}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default RenderItem;
