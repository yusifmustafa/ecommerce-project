import { configureStore } from "@reduxjs/toolkit";

import ecommerceReducer from "../redux/EcommerceSlice";


const store = configureStore({
  reducer: {
    ecommerce: ecommerceReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
