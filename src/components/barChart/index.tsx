import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import './BarChart.scss';
import { getWeekDay } from '../../utils/dataConversion';
import LoadingSpinner from '../UI/Spinner/LoadingSpinner';
import useWindowSize from '../../hooks/useWindowSize';

const BarChartContainer = () => {
  const size = useWindowSize();
  const storeData = useSelector((state: RootState) => state.weather.data);

  const data = storeData?.map((forcast: any) => {
    return {
      name: getWeekDay(forcast.date),
      temperature: forcast?.temperature?.temperatureInC?.toFixed(2),
      humidity: forcast?.humidity,
    };
  });

  let width;
  let height;

  if (size.width > 1024) {
    width = 600;
    height = 400;
  } else if (size.width > 1024) {
    width = 500;
    height = 300;
  } else {
    width = 340;
    height = 240;
  }

  return (
    <div className="barchart-container">
      {Object.keys(storeData[0]).length === 0 ? (
        <LoadingSpinner />
      ) : (
        <BarChart
          width={width}
          height={height}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          className="barchart"
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="temperature" fill="#8884d8" />
          <Bar dataKey="humidity" fill="#82ca9d" />
        </BarChart>
      )}
    </div>
  );
};

export default BarChartContainer;
