import React from 'react';
import {render} from '@testing-library/react-native';
import Home from '.';

jest.mock('../../store/hooks', () => ({
  useAppSelector: jest.fn(),
}));

jest.mock('./RenderItem', () => jest.requireActual('react-native').View);
jest.mock('./Footer', () => jest.requireActual('react-native').View);

describe('Home container', () => {
  it('Renders correctly', () => {
    require('../../store/hooks').useAppSelector.mockReturnValue([
      {
        id: '1',
        isChecked: false,
        title: 'First item',
      },
      {
        id: '2',
        isChecked: false,
        title: 'Second item',
      },
    ]);

    const {getByText, getByTestId} = render(<Home />);

    const headerElement = getByText('Todo:');
    const flatListElement = getByTestId('flatlist');

    expect(headerElement).toBeDefined();
    expect(flatListElement).toBeDefined();
  });
});
