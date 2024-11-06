import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';
import reducers from './reducers';
import { thunks } from './thunks';
const triviaSlice = createSlice({
  name: 'trivia',
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder
      .addCase(thunks.fetchCountryNames.fulfilled, (state, action) => {
        state.loading = false;
        state.countryNames = action.payload;
      })
      .addCase(thunks.fetchCountryNames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(thunks.fetchRandomCountries.fulfilled, (state, action) => {
        state.currentCountry = action.payload.currentCountry;
        state.incorrectOption = action.payload.incorrectOption;
        state.status = 'succeeded';
      })
      .addCase(thunks.fetchRandomCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const actions = triviaSlice.actions;
export default triviaSlice.reducer;
