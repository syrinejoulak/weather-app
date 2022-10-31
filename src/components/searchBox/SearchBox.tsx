import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';

import axios from 'axios';

import Card from '../UI/Card/Card';

import './SearchBox.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setActiveIndex, setCity, setData } from '../../redux/slices/weather';
import { filteringAPIData } from '../../utils/filteringData';

const SearchBox = () => {
  const dispatch = useDispatch();

  const city = useSelector((state: RootState) => state.weather.city);
  const data = useSelector((state: RootState) => state.weather.data);

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=762385c71cb82e47ad4fdd68f06f6271`;

  const searchCity = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        const filteredData = filteringAPIData(response);

        dispatch(setData(filteredData));
        dispatch(setCity(response.data.city.name));
      });
    }
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCity(event.target.value));
  };

  useEffect(() => {
    axios.get(url).then((response) => {
      const filteredData = filteringAPIData(response);
      dispatch(setData(filteredData));
      dispatch(setActiveIndex(0));
    });
  }, []);

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
