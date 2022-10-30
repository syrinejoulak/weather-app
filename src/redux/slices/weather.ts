import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  temperatureScale: boolean;
  temperature: number;
  city: string;
  data: any;
}

const initialState: WeatherState = {
  temperatureScale: false,
  temperature: 70,
  city: 'Tunis',
  data: [],
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
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTemperatureScale, setCity, setData } = weatherSlice.actions;

export default weatherSlice.reducer;
