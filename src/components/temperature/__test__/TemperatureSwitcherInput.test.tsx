import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

import { Provider } from 'react-redux';
import { store } from '../../../redux/store';

import TempertureContent from '../TempertureContent';

// const render = (component: any) =>
//   rtlRender(<Provider store={store}>{component}</Provider>);

describe('Temperature', () => {
  it('should render the correct temperature in C', async () => {
    render(<TempertureContent temperature={12.36} temperatureScale={true} />);

    const paragraphEl = screen.getByText(/12°C/i);

    expect(paragraphEl).toBeInTheDocument();
  });

  it('should render the correct temperature in F', async () => {
    render(<TempertureContent temperature={12.36} temperatureScale={false} />);

    const paragraphEl = screen.getByText(/12°F/i);

    expect(paragraphEl).toBeInTheDocument();
  });
});
