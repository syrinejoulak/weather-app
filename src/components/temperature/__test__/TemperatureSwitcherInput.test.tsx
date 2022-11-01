import React from 'react';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

import TempertureContent from '../TempertureContent';

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
