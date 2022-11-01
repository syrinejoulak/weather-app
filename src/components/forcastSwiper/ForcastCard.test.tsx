import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import ForcastCard from './ForcastCard';

describe('ForcastCard', () => {
  it('should render the component', () => {
    render(
      <ForcastCard description="clouds" humidity={20} main="" wind={12} />
    );

    const card = screen.getByTestId('forcast-card');

    expect(card).toBeInTheDocument();
  });

  it('should render the right description value', () => {
    render(
      <ForcastCard description="clouds" humidity={20} main="Clouds" wind={12} />
    );

    const descriptionEl = screen.getByText('Clouds');

    expect(descriptionEl).toBeInTheDocument();
  });

  it('should render the right humidity value', () => {
    render(
      <ForcastCard description="clouds" humidity={20} main="Clouds" wind={12} />
    );

    const humidityEl = screen.getByText('20%');

    expect(humidityEl).toBeInTheDocument();
  });

  it('should render the right wind value', () => {
    render(
      <ForcastCard description="clouds" humidity={20} main="Clouds" wind={12} />
    );

    const windEl = screen.getByText('12SI');

    expect(windEl).toBeInTheDocument();
  });

  it('should get the right className', () => {
    render(
      <ForcastCard description="clouds" humidity={20} main="Clouds" wind={12} />
    );

    const cardEl = screen.getByTestId('forcast-card');

    expect(cardEl.className).toBe('card-bg card-cloud');
  });
});
