import ForcastCard from './ForcastCard';

import './ForcastSwiper.scss';

const ForcastSwiper = () => {
  return (
    <div className="forcast-cards-container">
      <ForcastCard weather="night" description="Clear skies" />
      <ForcastCard weather="rain" description="Showers" />
      <ForcastCard weather="snow" description="Light flurry" />
      <ForcastCard weather="night" description="Clear skies" />
      <ForcastCard weather="night" description="Clear skies" />
    </div>
  );
};

export default ForcastSwiper;
