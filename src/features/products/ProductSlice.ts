import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product, ProductState } from "../../types";

// Simulación de fetch a una API
// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     const res = await fetch("/api/products");
//     const data = await res.json();
//     return data as Product[];
//   }
// );

const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchProducts.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchProducts.fulfilled, (state, action) => {
  //       state.items = action.payload;
  //       state.loading = false;
  //     })
  //     .addCase(fetchProducts.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message ?? "Error al cargar productos";
  //     });
  // },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
