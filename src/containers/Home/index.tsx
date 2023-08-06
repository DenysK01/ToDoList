import React, {useState} from 'react';
import {Button, FlatList, Text, TextInput, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '~store/hooks';
import {getTodoList} from '~store/modules/todos/selectors';
import {addTodo} from '~store/modules/todos/slice';
import RenderItem from './RenderItem';

function Home() {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector(getTodoList);

  const [newTodo, setNewTodo] = useState<string>('');

  /**
   * Adds a new Todo item to the list and clears the input field
   */
  const onAddTodo = () => {
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  return (
    <View>
      <View>
        <Text>Todo:</Text>
        <FlatList
          keyExtractor={item => item.id}
          data={todoList}
          renderItem={({item}) => <RenderItem item={item} />}
        />
      </View>
      <View>
        <TextInput
          value={newTodo}
          onChangeText={text => setNewTodo(text)}
          placeholder="Add new Todo item"
        />
        <Button title="ADD" onPress={onAddTodo} disabled={!newTodo} />
      </View>
    </View>
  );
}

export default Home;
