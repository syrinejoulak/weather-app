import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import TemperatureSwitcherInput from '../TemperatureSwitcherInput';
import { expect, it } from 'vitest';

import { Provider } from 'react-redux';
import { store } from '../../../redux/store';

const rtlRender = (component: any) =>
  render(<Provider store={store}>{component}</Provider>);

describe('', () => {
  it('should render input element', () => {
    rtlRender(<TemperatureSwitcherInput />);

    const checkbox = screen.getByTestId('checkbox-temp');

    expect(checkbox).toBeInTheDocument();
  });

  it('should be checked on click', () => {
    rtlRender(<TemperatureSwitcherInput />);

    const checkbox: HTMLInputElement = screen.getByTestId('checkbox-temp');

    fireEvent.click(checkbox);

    expect(checkbox.checked).toBeTruthy();
  });

  it('should be unchecked on double click', () => {
    rtlRender(<TemperatureSwitcherInput />);

    const checkbox: HTMLInputElement = screen.getByTestId('checkbox-temp');

    fireEvent.click(checkbox);
    fireEvent.click(checkbox);

    expect(checkbox.checked).toBeFalsy();
  });
});
