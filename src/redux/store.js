import { configureStore } from "@reduxjs/toolkit";
import ecommerceSlice from "../redux/EcommerceSlice";

const store = configureStore({
  reducer: {
    ecommerce: ecommerceSlice,
  },
});

export default store;
