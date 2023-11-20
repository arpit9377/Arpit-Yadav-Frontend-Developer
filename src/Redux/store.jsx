// store.js
import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rocketSlice'; // Adjust the path as needed


const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

export default store;
