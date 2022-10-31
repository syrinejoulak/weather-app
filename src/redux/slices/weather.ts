import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { convertCelciusAndFarenheit } from '../../utils/dataConversion';

interface WeatherState {
  temperatureScale: boolean;
  temperature: number;
  city: string;
  data: any;
  activeSlide: number;
}

const initialState: WeatherState = {
  temperatureScale: true,
  temperature: 0,
  city: 'Tunis',
  data: [{}],
  activeSlide: 0,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setTemperatureScale: (state) => {
      state.temperatureScale = !state.temperatureScale;

      state.temperature = convertCelciusAndFarenheit(
        state.temperature,
        state.temperatureScale
      );
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
    },
    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.activeSlide = action.payload;
      let activeData = state.data[state.activeSlide];

      state.temperatureScale
        ? (state.temperature = activeData.temperatureInC)
        : (state.temperature = activeData.temperatureInF);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTemperatureScale, setCity, setData, setActiveIndex } =
  weatherSlice.actions;

export default weatherSlice.reducer;
