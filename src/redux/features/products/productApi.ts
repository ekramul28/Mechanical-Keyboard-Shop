import { baseApi } from "../../api/baseApi";
export type TProduct = {
  _id: string;
  image: string[];
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
  description: string;
  keyboardType: string;
  offerPrice?: number;
  offer?: boolean;
  isDeleted?: boolean;
};
const ProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    product: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    singleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useProductQuery, useSingleProductQuery } = ProductApi;
