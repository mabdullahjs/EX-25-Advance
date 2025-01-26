import { configureStore } from '@reduxjs/toolkit';
import locationReducer from '../reducers/locationSlice';

const store = configureStore({
  reducer: {
    location: locationReducer
  }
});

export default store;