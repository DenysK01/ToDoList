import {Store, configureStore} from '@reduxjs/toolkit';
import {todosSlice} from './slice';

describe('todosSlice', () => {
  let store: Store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        todos: todosSlice.reducer,
      },
    });
  });

  it('Should add a Todo item', () => {
    store.dispatch(todosSlice.actions.addTodo('New todo'));
    const state = store.getState().todos;
    expect(state.todoList).toHaveLength(4);
    expect(state.todoList[3].title).toBe('New todo');
  });

  it('Should delete a Todo item', () => {
    const state = store.getState().todos;
    const id = state.todoList[0].id;
    expect(state.todoList).toHaveLength(3);

    store.dispatch(todosSlice.actions.deleteTodo(id));
    const newState = store.getState().todos;
    expect(newState.todoList).toHaveLength(2);
  });

  it('Should toggle a Todo item', () => {
    const state = store.getState().todos;
    const id = state.todoList[0].id;

    store.dispatch(todosSlice.actions.toggleTodo(id));
    const newState = store.getState().todos;
    expect(newState.todoList[0].isChecked).toBe(true);
  });

  it('Should update a Todo item', () => {
    const state = store.getState().todos;
    const id = state.todoList[0].id;
    expect(state.todoList[0].title).toBe('First item');

    store.dispatch(todosSlice.actions.updateTodo({id, title: 'New title'}));
    const newState = store.getState().todos;
    expect(newState.todoList[0].title).toBe('New title');
  });
});
