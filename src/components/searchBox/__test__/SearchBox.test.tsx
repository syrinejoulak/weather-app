import { Provider } from 'react-redux';
import { it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { store } from '../../../redux/store';
import SearchBox from '../SearchBox';

const rtlRender = (component: any) =>
  render(<Provider store={store}>{component}</Provider>);

describe('SearchBox', () => {
  it('should render input element', () => {
    rtlRender(<SearchBox />);

    const inputElement = screen.getByPlaceholderText(/Enter City/);

    expect(inputElement).toBeInTheDocument();
  });

  it('should be able to type into input', () => {
    rtlRender(<SearchBox />);

    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText(/Enter City/);

    fireEvent.change(inputElement, { target: { value: 'Tunis' } });

    expect(inputElement.value).toBe('Tunis');
  });

  it('should be keep the value after submit', () => {
    rtlRender(<SearchBox />);

    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText(/Enter City/);

    fireEvent.change(inputElement, { target: { value: 'Tunis' } });
    fireEvent.keyDown(inputElement);

    expect(inputElement.value).toBe('Tunis');
  });
});
