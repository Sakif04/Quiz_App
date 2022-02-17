import { configureStore } from '@reduxjs/toolkit';
import settingReducer from '../features/settings/reducer';

export const store = configureStore({
  reducer: {
   setting: settingReducer  
  },
});
 