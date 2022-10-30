import { createSlice } from '@reduxjs/toolkit';

export interface WeatherState {
  temperatureScale: boolean;
}

const initialState: WeatherState = {
  temperatureScale: false,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setTemperatureScale: (state) => {
      state.temperatureScale = !state.temperatureScale;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTemperatureScale } = weatherSlice.actions;

export default weatherSlice.reducer;
