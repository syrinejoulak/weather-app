import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import Card from '../UI/Card/Card';
import LoadingSpinner from '../UI/Spinner/LoadingSpinner';

import './ForcastDate.scss';

const ForcastDate = () => {
  const date = useSelector((state: RootState) => state.weather.date);

  return (
    <Card className="forcast-date">
      {date ? (
        <div>{date}</div>
      ) : (
        <div>
          <LoadingSpinner />
          <LoadingSpinner />
          <LoadingSpinner />
        </div>
      )}
    </Card>
  );
};

export default ForcastDate;
