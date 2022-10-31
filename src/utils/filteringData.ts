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

export const filteringWeatherMainData = (main: string) => {
  let weatherDescription = '';

  switch (main) {
    case 'Drizzle':
      weatherDescription = 'rain';
      break;
    case 'Thunderstorm':
      weatherDescription = 'storm';
      break;
    case 'Rain':
      weatherDescription = 'rain';
      break;
    case 'Snow':
      weatherDescription = 'snow';
      break;
    case 'Mist':
      weatherDescription = 'cloud';
      break;
    case 'Smoke':
      weatherDescription = 'cloud';
      break;
    case 'Haze':
      weatherDescription = 'cloud';
      break;
    case 'Dust':
      weatherDescription = 'cloud';
      break;
    case 'Fog':
      weatherDescription = 'cloud';
      break;
    case 'Sand':
      weatherDescription = 'cloud';
      break;
    case 'Ash':
      weatherDescription = 'cloud';
      break;
    case 'Squall':
      weatherDescription = 'rain';
      break;
    case 'Clear':
      weatherDescription = 'clear sky';
      break;
    case 'Tornado':
      weatherDescription = 'storm';
      break;
    case 'Clouds':
      weatherDescription = 'cloud';
      break;

    default:
      break;
  }

  return weatherDescription;
};
