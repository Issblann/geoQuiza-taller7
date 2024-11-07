import { thunks } from './thunks';

const extraReducers = (builder) => {
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
};

export default extraReducers;
