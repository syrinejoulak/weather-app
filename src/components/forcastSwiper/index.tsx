import ForcastCard from './ForcastCard';

import './ForcastSwiper.scss';

const ForcastSwiper = () => {
  return (
    <div className="forcast-cards-container">
      <ForcastCard weather="night" />
    </div>
  );
};

export default ForcastSwiper;
