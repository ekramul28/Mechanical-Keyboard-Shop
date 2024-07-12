import { baseApi } from "../../api/baseApi";

const CartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    cartProduct: builder.query({
      query: (email) => ({
        url: `/cart/${email}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCartProductQuery } = CartApi;
