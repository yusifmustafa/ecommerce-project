import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
  basketItems: [],
};

const ecommerceSlice = createSlice({
  name: "ecommerce",
  initialState: initialState,

  reducers: {
    async insertBasket(state, action) {
      console.log(action.payload.data);
      // const response = await fetch(
      //   BACKEND_URL + `/products/${action.payload.data}`
      // );
      // const basketItem = await response.json();
      //console.log("basketitem", basketItem);
      const datas = [];
      datas.push(action.payload.data);
      console.log("datas",datas);
      state.basketItems=datas;
      // state.basketItems.push({ ...state.basketItems, basketItem });
      console.log("basketItems", state.basketItems);
    },
  },
});

export const ecommerceActions = ecommerceSlice.actions;
export default ecommerceSlice.reducer;
