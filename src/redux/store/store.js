import { configureStore } from '@reduxjs/toolkit';
import triviaSlice from '../slice/trivia/slice';
export const store = configureStore({
  reducer: {
    trivia: triviaSlice,
  },
});
