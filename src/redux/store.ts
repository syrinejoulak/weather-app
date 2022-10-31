import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';

import weatherSlice from './slices/weather';
import modalSlice from './slices/modal';

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    modal: modalSlice,
  },
});

// Create the root reducer separately so we can extract the RootState type

const rootReducer = combineReducers({
  weather: weatherSlice,
  modal: modalSlice,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
