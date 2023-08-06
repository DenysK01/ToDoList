import type {ReduxState} from '~store';

/**
 * Pass it to useAppSelector to get list of todos
 */
export const getTodoList = (state: ReduxState) => state.todos.todoList;
