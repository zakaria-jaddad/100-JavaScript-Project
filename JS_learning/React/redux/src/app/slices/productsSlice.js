import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsAPI from "../util/productsAPI";


// creating the thunk
export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts", 
  async () => {
    const productsData = await productsAPI.getProducts();
    return productsData;
  }
)


const productsSlice = createSlice({
  name: "productsSlice",
  initialState: [], 
  reducers: {
    getProducts: (state, action) => {
      return action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action) => {
        state = action.payload;
        return state
      }
    )
  }
});

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
