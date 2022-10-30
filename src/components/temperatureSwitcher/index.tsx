import { useSelector, useDispatch } from 'react-redux';
import { setTemperatureScale } from '../../redux/slices/weather';
import { RootState } from '../../redux/store';

import './TemperatureSwitcher.scss';

const TemperatureSwitcher = () => {
  const dispatch = useDispatch();
  const f = useSelector((state: RootState) => state.weather.temperatureScale);

  const onHandleCheck = () => {
    dispatch(setTemperatureScale());
  };

  return (
    <form className="temperature-switcher">
      <label className="toggle">
        <div className="toggle__wrapper">
          <input
            type="checkbox"
            className="checkbox"
            onChange={onHandleCheck}
          />
          <div className="toggle__bg">
            <div className="toggle__sphere">
              <div className="toggle__sphere-bg"></div>
              <div className="toggle__sphere-overlay"></div>
            </div>
          </div>
        </div>
      </label>
    </form>
  );
};

export default TemperatureSwitcher;
