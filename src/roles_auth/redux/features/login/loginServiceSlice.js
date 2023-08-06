import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: []
};

export const getUsers = createAsyncThunk("getUsers", async () => {
    const data = await axios.get("http://localhost:3000/demo/data/login_data.json")
      .then((res) => res.data.LoginData)
      .catch((err) => console.log("error: " + err));

    return Promise.resolve(data);
});

export const loginServiceSlice = createSlice({
  name: "crudProducts",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
  }
});

export default loginServiceSlice.reducer;