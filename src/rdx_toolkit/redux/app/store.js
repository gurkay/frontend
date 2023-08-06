import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "../features/counter/counterSlice";
import countrySlice from "../features/country/countrySlice";
import navbarSlice from "../features/navbar/navbarSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    country: countrySlice,
    navbar: navbarSlice
  }
});
