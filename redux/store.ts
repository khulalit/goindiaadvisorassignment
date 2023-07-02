import { configureStore } from '@reduxjs/toolkit';
import postSlice from './postSlice';

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    posts: postSlice.reducer,
  },
});

export default store;
