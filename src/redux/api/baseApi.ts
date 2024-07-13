import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mechanical-keyboard-shop-server-zeta.vercel.app/api/v1/",
  }),
  tagTypes: ["cart", "cart2"],
  endpoints: () => ({}),
});
