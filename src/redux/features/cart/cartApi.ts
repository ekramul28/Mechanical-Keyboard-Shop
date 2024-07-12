import { baseApi } from "../../api/baseApi";

const CartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    cartProduct: builder.query({
      query: (email) => ({
        url: `/cart/${email}`,
        method: "GET",
      }),
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/cart",
        method: "POST",
        body: data,
      }),
    }),
    deleteProductCart: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
    }),
    updateProductCart: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useCartProductQuery,
  useAddProductMutation,
  useDeleteProductCartMutation,
  useUpdateProductCartMutation,
} = CartApi;
