import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import RenderItem from '.';
import {UpdateTodoType} from '~store/modules/todos/types';

const mockDispatch = jest.fn();
jest.mock('../../../store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
}));

// mock functions that are passed to dispatch
const mockToggleTodo = jest.fn(x => x);
const mockDeleteTodo = jest.fn(x => x);
const mockUpdateTodo = jest.fn(x => x);

jest.mock('../../../store/modules/todos/slice', () => ({
  toggleTodo: (x: string) => mockToggleTodo(x),
  deleteTodo: (x: string) => mockDeleteTodo(x),
  updateTodo: (x: UpdateTodoType) => mockUpdateTodo(x),
}));

const mockTodo = {
  id: '1',
  isChecked: false,
  title: 'Mock Todo',
};

describe('RenderItem in Home container', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render unedited Todo item', () => {
    const {getByText} = render(<RenderItem item={mockTodo} />);

    expect(getByText(mockTodo.title)).toBeTruthy();
    expect(getByText('Edit')).toBeTruthy();
    expect(getByText('Delete')).toBeTruthy();
  });

  it('Should toggle editing Todo mode and save changes', () => {
    const {getByPlaceholderText, getByText} = render(
      <RenderItem item={mockTodo} />,
    );

    const editButton = getByText('Edit');
    fireEvent.press(editButton);

    // after th Edit button is pressed, text input and Save button should render

    const input = getByPlaceholderText('Enter here');
    const updatedText = 'Updated Todo';
    fireEvent.changeText(input, updatedText);

    const saveButton = getByText('Save');
    fireEvent.press(saveButton);

    expect(mockDispatch).toHaveBeenCalledWith(
      mockUpdateTodo({id: mockTodo.id, title: updatedText}),
    );
  });

  it('Should toggle Todo item', () => {
    const {getByText} = render(<RenderItem item={mockTodo} />);

    const toggleButton = getByText('X');
    fireEvent.press(toggleButton);

    expect(mockDispatch).toHaveBeenCalledWith(mockToggleTodo(mockTodo.id));
  });

  it('Should delete Todo item', () => {
    const {getByText} = render(<RenderItem item={mockTodo} />);

    const deleteButton = getByText('Delete');
    fireEvent.press(deleteButton);

    expect(mockDispatch).toHaveBeenCalledWith(mockDeleteTodo(mockTodo.id));
  });
});
