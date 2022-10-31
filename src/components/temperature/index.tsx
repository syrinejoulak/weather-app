import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { isHigh } from '../../utils/filteringData';

import './Temperature.scss';

const Temperature = () => {
  const weather = useSelector((state: RootState) => state.weather);

  const isHight = isHigh(weather.temperatureScale, weather.temperature);

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
        <div>
          {Math.trunc(weather.temperature)}&deg;
          {weather.temperatureScale ? 'C' : 'F'}
        </div>
      </div>
    </div>
  );
};

export default Temperature;
