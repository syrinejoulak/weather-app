import React from 'react';

import { filteringWeatherMainData } from '../../utils/filteringData';

import './ForcastSwiper.scss';

interface ForcastCardProps {
  main: string;
  description: string;
  humidity: number;
  wind: number;
}

const ForcastCard = ({
  main,
  description,
  humidity,
  wind,
}: ForcastCardProps) => {
  const currentHour = new Date().getHours();

  let weatherDescription;
  if (main !== 'Clear') {
    weatherDescription = filteringWeatherMainData(main);
  } else {
    currentHour > 5 && currentHour < 19
      ? (weatherDescription = 'sunny')
      : (weatherDescription = 'night');
  }

  return (
    <div className="forcast-card">
      <div
        className={`card-bg card-${weatherDescription}`}
        data-testid="forcast-card"
      >
        <div className={weatherDescription}></div>
      </div>

      <div className="details-container">
        <div className="caracteristics">
          <div className="details">
            <div>{humidity}%</div>
            <p>Humidity</p>
          </div>

          <div className="details">
            <div>{wind}SI</div>
            <p>Winds</p>
          </div>
        </div>

        <div className="weather-description">
          {description?.charAt(0).toUpperCase() + description?.slice(1)}
        </div>
      </div>
    </div>
  );
};

export default ForcastCard;
