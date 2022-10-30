import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';

import axios from 'axios';

import Card from '../UI/Card/Card';

import './SearchBox.scss';

const SearchBox = () => {
  const [data, setData] = useState<any[]>([]);
  const [city, setCity] = useState('Tunis');

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=762385c71cb82e47ad4fdd68f06f6271`;

  const searchCity = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
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

        setData(filteredData);
      });
    }
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
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

      setData(filteredData);
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
