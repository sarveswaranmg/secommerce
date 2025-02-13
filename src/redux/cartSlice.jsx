import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartQuantity: 0,
    cartProducts: [],
  },
  reducers: {
    addToCart: (state, obj) => {
      state.cartQuantity++;
      const productToBeAdded = obj.payload;
      const requiredProduct = state.cartProducts.find(
        (product) => product.id == productToBeAdded.id
      );
      if (requiredProduct) {
        requiredProduct.qty++;
      } else {
        productToBeAdded.qty = 1;
        state.cartProducts.push(productToBeAdded);
      }
    },
    removeFromCart: (state, obj) => {
      const productToBeRemoved = obj.payload;
      const productIdx = state.cartProducts.findIndex(
        (product) => product.id == productToBeRemoved.id
      );
      if (productIdx != -1) {
        if (state.cartProducts[productIdx].qty == 1) {
          state.cartQuantity--;
          state.cartProducts[productIdx].qty--;
          state.cartProducts.splice(productIdx, 1);
        } else {
          state.cartQuantity--;
          state.cartProducts[productIdx].qty--;
        }
      }
    },
  },
});

export default cartSlice;
export const actions = cartSlice.actions;
