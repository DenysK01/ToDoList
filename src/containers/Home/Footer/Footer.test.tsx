import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Footer from '.';

const mockDispatch = jest.fn();

jest.mock('../../../store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
}));

// mock addTodo function that is passed to dispatch
const mockAddTodo = jest.fn(x => x);
jest.mock('../../../store/modules/todos/slice', () => ({
  addTodo: (x: string) => mockAddTodo(x),
}));

describe('Footer in Home container', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('Renders correctly', () => {
    const {getByPlaceholderText, getByText} = render(<Footer />);

    const inputElement = getByPlaceholderText('Add new Todo item');
    const addButton = getByText('ADD');

    expect(inputElement).toBeDefined();
    expect(addButton).toBeDefined();
  });

  it('Dispatches addTodo action on button click and clears input', () => {
    const {getByPlaceholderText, getByText} = render(<Footer />);

    const inputElement = getByPlaceholderText('Add new Todo item');
    const addButton = getByText('ADD');

    const newText = 'New Todo Item';
    fireEvent.changeText(inputElement, newText);
    fireEvent.press(addButton);

    expect(mockDispatch).toHaveBeenCalledWith(mockAddTodo(newText));
    expect(inputElement.props.value).toBe('');
  });
});
