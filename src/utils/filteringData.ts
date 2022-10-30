export const isHigh = (temperatureScale: boolean, temperature: number) => {
  if (
    (temperatureScale && temperature >= 30) ||
    (!temperatureScale && temperature >= 86)
  ) {
    return true;
  } else {
    return false;
  }
};

export const filteringAPIData = (response: any) => {
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

  return neededData.filter((weatherData: any) =>
    weatherData.date.includes(actualTime)
  );
};
