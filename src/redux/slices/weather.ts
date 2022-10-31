import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

      if (state.temperatureScale) {
        state.temperature = ((state.temperature - 32) * 5) / 9;
      } else {
        state.temperature = state.temperature * (9 / 5) + 32;
      }
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.activeSlide = action.payload;

      if (state.temperatureScale) {
        state.temperature = state.data[state.activeSlide].temperature - 273.15;
      } else {
        state.temperature =
          (state.data[state.activeSlide].temperature - 273.15) * (9 / 5) + 32;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTemperatureScale, setCity, setData, setActiveIndex } =
  weatherSlice.actions;

export default weatherSlice.reducer;
