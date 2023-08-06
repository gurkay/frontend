import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  showCountries: false,
  loading: false,
  countries: []
};

export const getCountry = createAsyncThunk("getCountry", async () => {
  const response = await axios.get("https://restcountries.com/v3.1/all");

  return response;
});

export const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setShowCountries: (state) => {
      state.showCountries = !state.showCountries;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCountry.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCountry.fulfilled, (state, action) => {
      state.countries = action.payload;
      state.loading = false;
    });
  }
});
export const { setShowCountries } = countrySlice.actions;
export default countrySlice.reducer;
