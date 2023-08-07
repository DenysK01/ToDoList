import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {TodosState, UpdateTodoType} from './types';
import uuid from 'uuid-random';

const initialState: TodosState = {
  todoList: [
    {
      id: uuid(),
      isChecked: false,
      title: 'First item',
    },
    {
      id: uuid(),
      isChecked: false,
      title: 'Second item',
    },
    {
      id: uuid(),
      isChecked: false,
      title: 'Third item',
    },
  ],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    /**
     * Pass it to dispatch from useAppDispatch() with a new title to add a new Todo to the list
     */
    addTodo: (state, action: PayloadAction<string>) => {
      state.todoList.push({
        id: uuid(),
        isChecked: false,
        title: action.payload,
      });
    },

    /**
     * Pass it to dispatch from useAppDispatch() with ID to delete the Todo item
     */
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(
        item => item.id !== action.payload,
      );
    },

    /**
     * Pass it to dispatch from useAppDispatch() with ID to check or uncheck the Todo item
     */
    toggleTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            isChecked: !item.isChecked,
          };
        }

        return item;
      });
    },

    /**
     * Pass it to dispatch from useAppDispatch() with ID and a new text to update the Todo item
     */
    updateTodo: (state, action: PayloadAction<UpdateTodoType>) => {
      state.todoList = state.todoList.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: action.payload.title,
          };
        }

        return item;
      });
    },
  },
});

// add actions to export
export const {addTodo, deleteTodo, toggleTodo, updateTodo} = todosSlice.actions;

export default todosSlice.reducer;
