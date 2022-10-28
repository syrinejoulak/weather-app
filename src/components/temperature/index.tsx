import React from 'react';

import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';

import './Temperature.scss';

const Temperature = () => {
  const isHight = true;

  return (
    <div className="temperature-container">
      <span className="temperature-dial-spoke"></span>
      <span className="temperature-dial-spoke"></span>
      <span className="temperature-dial-spoke"></span>
      <span className="temperature-dial-spoke"></span>
      <span className="temperature-dial-spoke"></span>
      <span className="temperature-dial-spoke"></span>

      <div className="temperature-dial-top"></div>
      <div className="temperature-dial-label">
        {isHight ? <FaTemperatureHigh /> : <FaTemperatureLow />}
        <div>7&deg;F</div>
      </div>
    </div>
  );
};

export default Temperature;
