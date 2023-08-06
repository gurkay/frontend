import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavExpanded: false
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setIsNavExpanded: (state) => {
      state.isNavExpanded = !state.isNavExpanded;
    }
  }
});

export const { setIsNavExpanded } = navbarSlice.actions;

export default navbarSlice.reducer;
