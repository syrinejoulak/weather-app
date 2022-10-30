import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';

import axios from 'axios';

import Card from '../UI/Card/Card';

import './SearchBox.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setCity, setData } from '../../redux/slices/weather';

const SearchBox = () => {
  const dispatch = useDispatch();

  const city = useSelector((state: RootState) => state.weather.city);
  const data = useSelector((state: RootState) => state.weather.data);

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=762385c71cb82e47ad4fdd68f06f6271`;

  const searchCity = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        dispatch(setCity(response.data.city.name));

        const neededData = response.data.list.map((data: any) => {
          return {
            date: data.dt_txt,
            weather: {
              main: data.weather[0].main,
              description: data.weather[0].description,
            },
            temperature: data.main.temp,
            wind: data.wind.speed,
            humidity: data.main.humidity,
          };
        });

        const actualTime = neededData[0].date.split(' ')[1];

        const filteredData = neededData.filter((weatherData: any) =>
          weatherData.date.includes(actualTime)
        );

        dispatch(setData(filteredData));
      });
    }
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCity(event.target.value));
  };

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log('city', response.data.city.name);
      const neededData = response.data.list.map((data: any) => {
        return {
          date: data.dt_txt,
          weather: {
            main: data.weather[0].main,
            description: data.weather[0].description,
          },
          temperature: data.main.temp,
          wind: data.wind.speed,
          humidity: data.main.humidity,
        };
      });

      const actualTime = neededData[0].date.split(' ')[1];

      const filteredData = neededData.filter((weatherData: any) =>
        weatherData.date.includes(actualTime)
      );

      dispatch(setData(filteredData));
    });
  }, []);

  console.log('test', data);

  return (
    <Card className="searchbox-card">
      <input
        type="text"
        className="searchbox-input"
        placeholder="Enter City"
        value={city}
        onChange={onChangeHandler}
        onKeyDown={searchCity}
      />
    </Card>
  );
};

export default SearchBox;
