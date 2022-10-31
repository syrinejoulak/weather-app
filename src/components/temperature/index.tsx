import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { isHigh } from '../../utils/filteringData';

import './Temperature.scss';

const Temperature = () => {
  const temperatureScale = useSelector(
    (state: RootState) => state.weather.temperatureScale
  );
  const temperature = useSelector(
    (state: RootState) => state.weather.temperature
  );

  const isHight = isHigh(temperatureScale, temperature);

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
          {Math.trunc(temperature)}&deg;{temperatureScale ? 'C' : 'F'}
        </div>
      </div>
    </div>
  );
};

export default Temperature;
