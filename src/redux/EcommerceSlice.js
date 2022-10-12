import { createSlice } from "@reduxjs/toolkit";
import { BACKEND_URL } from "../Backend";

const initialState = {
  basketItems: [],
};

const ecommerceSlice = createSlice({
  name: "ecommerce",
  initialState: initialState,

  reducers: {
    async insertBasket(state, action) {
      console.log("actionpayload", action.payload);

      const response = await fetch(
        BACKEND_URL + `/products/${action.payload.data}`
      );
      const basketItem = await response.json();
      console.log("basketitem", basketItem);
      state.basketItems.push(basketItem);
      console.log("basketItems", state.basketItems);
    },
  },
});

export const ecommerceActions = ecommerceSlice.actions;
export default ecommerceSlice.reducer;
