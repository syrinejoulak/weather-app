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

const BarChartContainer = () => {
  const storeData = useSelector((state: RootState) => state.weather.data);
  const data = storeData.map((forcast: any) => {
    return {
      name: getWeekDay(forcast.date),
      temperature: forcast.temperatureInC.toFixed(2),
      humidity: forcast.humidity,
    };
  });

  return (
    <div className="barchart-container">
      <BarChart
        width={600}
        height={400}
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
    </div>
  );
};

export default BarChartContainer;
