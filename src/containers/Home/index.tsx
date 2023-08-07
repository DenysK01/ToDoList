import React from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {useAppSelector} from '~store/hooks';
import {getTodoList} from '~store/modules/todos/selectors';
import RenderItem from './RenderItem';
import styles from './styles';
import Footer from './Footer';

function Home() {
  const todoList = useAppSelector(getTodoList);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={60}
        style={styles.wrap}>
        <View>
          <Text style={styles.header}>Todo:</Text>
          <FlatList
            testID="flatlist"
            keyExtractor={item => item.id}
            data={todoList}
            renderItem={({item}) => <RenderItem item={item} />}
            ListFooterComponent={Footer}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Home;
