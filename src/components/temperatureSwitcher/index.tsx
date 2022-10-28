import './TemperatureSwitcher.scss';

const TemperatureSwitcher = () => {
  const city = '';
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=762385c71cb82e47ad4fdd68f06f6271`;

  return (
    <form className="temperature-switcher">
      <label className="toggle">
        <div className="toggle__wrapper">
          <input type="checkbox" className="checkbox" />
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
