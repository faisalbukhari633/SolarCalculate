import { configureStore } from '@reduxjs/toolkit';
import applianceReducer from './Slice'


export default configureStore({
  reducer: {
    appliances: applianceReducer,
    // Add more reducers if needed
  },
});