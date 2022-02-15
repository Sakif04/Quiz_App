import { configureStore } from '@reduxjs/toolkit';
import settingReducer from '../features/settings/actions';

export const store = configureStore({
  reducer: {
    settingReducer  
  },
});
