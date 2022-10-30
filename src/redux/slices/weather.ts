import { createSlice } from '@reduxjs/toolkit';

export interface WeatherState {
  temperatureScale: boolean;
  temperature: number;
}

const initialState: WeatherState = {
  temperatureScale: false,
  temperature: 70,
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
        state.temperature = (state.temperature * 9) / 5 + 32;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTemperatureScale } = weatherSlice.actions;

export default weatherSlice.reducer;
