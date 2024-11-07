import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';
import reducers from './reducers';
import extraReducers from './extraReducers';
const triviaSlice = createSlice({
  name: 'trivia',
  initialState,
  reducers,
  extraReducers,
});

export const actions = triviaSlice.actions;
export default triviaSlice.reducer;
