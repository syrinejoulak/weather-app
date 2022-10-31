import { useSelector } from 'react-redux';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RootState } from '../../redux/store';
import ForcastCard from './ForcastCard';

import './ForcastSwiper.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ForcastSwiper = () => {
  const data = useSelector((state: RootState) => state.weather.data);

  console.log('first', data);

  const forcasts = data.map((forcast: any, key: number) => (
    <SwiperSlide key={key}>
      <ForcastCard
        main={forcast.weather.main}
        description={forcast.weather.description}
        humidity={forcast.humidity}
        wind={forcast.wind}
      />
    </SwiperSlide>
  ));

  return (
    <div className="forcast-cards-container">
      <Swiper slidesPerView={3} modules={[Navigation]} navigation loop>
        {forcasts}
      </Swiper>
    </div>
  );
};

export default ForcastSwiper;
