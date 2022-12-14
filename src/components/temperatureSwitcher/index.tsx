import TemperatureSwitcherInput from './TemperatureSwitcherInput';

import './TemperatureSwitcher.scss';

const TemperatureSwitcher = () => {
  return (
    <form className="temperature-switcher">
      <label className="toggle">
        <div className="toggle__wrapper">
          <TemperatureSwitcherInput />
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
