import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RootState } from '../../redux/store';
import ForcastCard from './ForcastCard';

import './ForcastSwiper.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { setActiveIndex } from '../../redux/slices/weather';
import LoadingSpinner from '../UI/Spinner/LoadingSpinner';
import Card from '../UI/Card/Card';

const ForcastSwiper = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.weather.data);

  // console.log('first', data);

  const forcasts = data?.map((forcast: any, key: number) => (
    <SwiperSlide key={key}>
      {Object.keys(forcast).length === 0 ? (
        <Card className="forcast-card forcast-card__spinner">
          <LoadingSpinner />
        </Card>
      ) : (
        <ForcastCard
          main={forcast.weather.main}
          description={forcast.weather.description}
          humidity={forcast.humidity}
          wind={forcast.wind}
        />
      )}
    </SwiperSlide>
  ));

  return (
    <div className="forcast-cards-container">
      <Swiper
        slidesPerView={3}
        modules={[Navigation]}
        navigation
        centeredSlides
        speed={1000}
        onActiveIndexChange={(swiper) =>
          dispatch(setActiveIndex(swiper.realIndex))
        }
      >
        {forcasts}
      </Swiper>
    </div>
  );
};

export default ForcastSwiper;
