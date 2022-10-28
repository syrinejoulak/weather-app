import React from 'react';

import Card from '../UI/Card/Card';

import './ForcastSwiper.scss';

interface ForcastCardProps {
  weather: string;
  description: string;
}

const ForcastCard = ({ weather, description }: ForcastCardProps) => {
  return (
    <Card className="forcast-card">
      <div className={`card-bg card-${weather}`}>
        <div className={weather}></div>
      </div>

      <div className="details-container">
        <div className="caracteristics">
          <div className="details">
            <div>70%</div>
            <p>Humidity</p>
          </div>

          <div className="details">
            <div>2MPH</div>
            <p>Winds</p>
          </div>
        </div>

        <div className="weather-description">{description}</div>
      </div>
    </Card>
  );
};

export default ForcastCard;
