import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  convertCelciusAndFarenheit,
  convertDay,
} from '../../utils/dataConversion';

interface WeatherState {
  temperatureScale: boolean;
  temperature: number | null;
  date: string;
  city: string;
  data: any;
  activeSlide: number;
}

const initialState: WeatherState = {
  temperatureScale: true,
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
      state.temperatureScale = !state.temperatureScale;

      if (state.temperature) {
        state.temperature = convertCelciusAndFarenheit(
          state.temperature,
          state.temperatureScale
        );
      }
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      let activeData = state.data[state.activeSlide];

      state.temperatureScale
        ? (state.temperature = activeData.temperatureInC)
        : (state.temperature = activeData.temperatureInF);

      state.date = convertDay(activeData.date);
    },
    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.activeSlide = action.payload;
      let activeData = state.data[state.activeSlide];

      state.temperatureScale
        ? (state.temperature = activeData.temperatureInC)
        : (state.temperature = activeData.temperatureInF);

      state.date = convertDay(activeData.date);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTemperatureScale, setCity, setData, setActiveIndex } =
  weatherSlice.actions;

export default weatherSlice.reducer;
