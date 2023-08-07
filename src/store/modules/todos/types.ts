export type TodoItem = {
  /**
   * Unique ID
   */
  id: string;

  /**
   * Determines if current todo item should be checked
   */
  isChecked: boolean;

  /**
   * Title of the todo item
   */
  title: string;
};

export type TodosState = {
  /**
   * List of user's Todos
   */
  readonly todoList: Array<TodoItem>;
};

/**
 * necessary fields to update a Todo item
 */
export type UpdateTodoType = Omit<TodoItem, 'isChecked'>;
