import React from 'react';

interface TempertureContentProps {
  temperature: number;
  temperatureScale: boolean;
}

const TempertureContent = ({
  temperature,
  temperatureScale,
}: TempertureContentProps) => {
  return (
    <p id="temperature">
      {Math.trunc(temperature)}&deg;{temperatureScale ? 'C' : 'F'}
    </p>
  );
};

export default TempertureContent;
