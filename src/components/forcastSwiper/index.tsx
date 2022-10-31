import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RootState } from '../../redux/store';
import ForcastCard from './ForcastCard';
import { setActiveIndex } from '../../redux/slices/weather';
import LoadingSpinner from '../UI/Spinner/LoadingSpinner';
import Card from '../UI/Card/Card';
import useWindowSize from '../../hooks/useWindowSize';

import './ForcastSwiper.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ForcastSwiper = () => {
  const dispatch = useDispatch();

  const { width } = useWindowSize();

  const data = useSelector((state: RootState) => state.weather.data);

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
        slidesPerView={width > 599 ? 3 : 1}
        spaceBetween={0}
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
