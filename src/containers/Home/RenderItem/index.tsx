import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useAppDispatch} from '~store/hooks';
import {toggleTodo, deleteTodo, updateTodo} from '~store/modules/todos/slice';
import {TodoItem} from '~store/modules/todos/types';

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
      <View>
        <TextInput
          value={updatedTitle}
          onChangeText={text => setUpdatedTitle(text)}
          placeholder="Enter here"
        />
        <Button title="SAVE" onPress={onUpdateTodo} disabled={!updatedTitle} />
      </View>
    );
  }

  return (
    <View>
      <View>
        <View>
          <Button title="X" onPress={onToggleTodo} />
          <View>
            {/* draw a line through the title if current item is checked */}
            <Text
              style={[item.isChecked && {textDecorationLine: 'line-through'}]}>
              {item.title}
            </Text>
          </View>
        </View>
        <Button title="edit" onPress={editTodo} />
        <Button title="delete" onPress={onDeleteTodo} />
      </View>
    </View>
  );
}

export default RenderItem;
