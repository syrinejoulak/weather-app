import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import Card from '../UI/Card/Card';

import './ForcastDate.scss';

const ForcastDate = () => {
  const date = useSelector((state: RootState) => state.weather.date);

  return (
    <Card className="forcast-date">
      <div>{date}</div>
    </Card>
  );
};

export default ForcastDate;
