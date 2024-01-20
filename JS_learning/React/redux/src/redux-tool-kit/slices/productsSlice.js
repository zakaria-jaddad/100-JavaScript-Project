import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }
);

export const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {
    getProducts: (state, action) => {
      return [action.payload];
    },
    addProduct: (state, action) => {
      return [...state, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.pending,
      (state, action) => {
        console.log("data is being pending....");
      }
    );
    builder.addCase(
      fetchProducts.fulfilled, // fulfilled af the promise status
      (state, action) => {
        //logic here after getting data
        state = action.payload;
        return state
      }
    );
  },
});

export const { getProducts, addProduct } = productsSlice.actions;
export default productsSlice.reducer;
