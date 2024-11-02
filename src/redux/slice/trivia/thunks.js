import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const getTwoRandomCountries = (countryNames) => {
  const shuffled = [...countryNames].sort(() => 0.5 - Math.random());
  return [shuffled[0], shuffled[1]];
};

export const thunks = {
  fetchCountryNames: createAsyncThunk(
    'trivia/fetchCountryNames',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(
          'https://restcountries.com/v3.1/all?fields=name'
        );
        return response.data.map((country) => country.name.common);
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  ),

  fetchRandomCountries: createAsyncThunk(
    'trivia/fetchRandomCountries',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState().trivia;
      if (state.countryNames.length === 0) {
        return thunkAPI.dispatch(thunks.fetchCountryNames());
      }

      const [firstCountryName, secondCountryName] = getTwoRandomCountries(
        state.countryNames
      );

      try {
        const [firstCountryResponse, secondCountryResponse] = await Promise.all(
          [
            axios.get(
              `https://restcountries.com/v3.1/name/${firstCountryName}`
            ),
            axios.get(
              `https://restcountries.com/v3.1/name/${secondCountryName}`
            ),
          ]
        );

        return {
          currentCountry: {
            name: firstCountryResponse.data[0].name.common,
            flag: firstCountryResponse.data[0].flags.png,
          },
          incorrectOption: {
            name: secondCountryResponse.data[0].name.common,
            flag: secondCountryResponse.data[0].flags.png,
          },
        };
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  ),
};
