import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addProduct(state, action) {
      const existingProduct = state.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseProduct(state, action) {
      const existingProduct = state.find((item) => item.id === action.payload);

      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decreaseProduct(state,action){
      const existingProduct = state.find((item) => item.id === action.payload);

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          
          existingProduct.quantity -= 1;
        }
      
      }
    },
    removeProduct(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct, increaseProduct, decreaseProduct } = cartSlice.actions;
export default cartSlice.reducer;
