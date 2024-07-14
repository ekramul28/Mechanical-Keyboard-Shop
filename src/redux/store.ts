import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import cartSlice from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cards: cartSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
