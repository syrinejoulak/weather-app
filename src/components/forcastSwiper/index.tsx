import ForcastCard from './ForcastCard';

import './ForcastSwiper.scss';

const ForcastSwiper = () => {
  return (
    <div className="forcast-cards-container">
      <ForcastCard weather="night" description="Clear skies" />
      <ForcastCard weather="rain" description="Showers" />
      <ForcastCard weather="snow" description="Light flurry" />
      <ForcastCard weather="storm" description="Thunderstorms" />
      <ForcastCard weather="sunny" description="Mostly sunny" />
      <ForcastCard weather="cloud" description="Mostly cloudy" />
    </div>
  );
};

export default ForcastSwiper;
