import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  convertCelciusAndFarenheit,
  convertDay,
} from '../../utils/dataConversion';

export type DataType = {
  date: string;
  humidity: number;
  temperature: { temperatureInC: number; temperatureInF: number };
  weather: {
    main: string;
    description: string;
  };
  wind: number;
};

interface WeatherState {
  isCelcius: boolean;
  temperature: number | null;
  date: string;
  city: string;
  data: DataType[] | [{}, {}, {}, {}, {}];
  activeSlide: number;
}

const initialState: WeatherState = {
  isCelcius: true,
  temperature: null,
  date: '',
  city: 'Tunis',
  data: [{}, {}, {}, {}, {}],
  activeSlide: 0,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setTemperatureScale: (state) => {
      state.isCelcius = !state.isCelcius;

      if (state.temperature) {
        state.temperature = convertCelciusAndFarenheit(
          state.temperature,
          state.isCelcius
        );
      }
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      let activeData: any = state.data[state.activeSlide];

      state.isCelcius
        ? (state.temperature = activeData?.temperature?.temperatureInC)
        : (state.temperature = activeData?.temperature?.temperatureInF);

      state.date = convertDay(activeData.date);
    },
    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.activeSlide = action.payload;
      let activeData: any = state.data[state.activeSlide];

      state.isCelcius
        ? (state.temperature = activeData?.temperature?.temperatureInC)
        : (state.temperature = activeData?.temperature?.temperatureInF);

      state.date = convertDay(activeData.date);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTemperatureScale, setCity, setData, setActiveIndex } =
  weatherSlice.actions;

export default weatherSlice.reducer;
