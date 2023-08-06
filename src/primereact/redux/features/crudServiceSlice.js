import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: []
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  // const data = await axios.get("http://localhost:3000/demo/data/products.json").catch((err) => console.log("error: " + err));
  // return data;

    const data = await axios.get("http://localhost:3000/demo/data/products.json")
      .then((res) => res.data.data)
      .catch((err) => console.log("error: " + err));

    console.log("getProducts");
    
    console.log(data);
    //return Promise.resolve(this.getProductsData());
    return Promise.resolve(data);

});

export const crudServiceSlice = createSlice({
  name: "crudProducts",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      console.log("setProducts");
      console.log(action.payload);
        state.products = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
  }
});

export const {setProducts} = crudServiceSlice.actions;

export default crudServiceSlice.reducer;