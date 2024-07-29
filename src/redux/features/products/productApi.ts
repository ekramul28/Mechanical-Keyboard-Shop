import { baseApi } from "../../api/baseApi";
export type TProduct = {
  _id: string;
  id: string;
  image: string[];
  title: string;
  brand: string;
  availableQuantity: number;
  // price: number;
  // rating: number;
  description: string;
  keyboardType: string;
  offerPrice?: number;
  offer?: boolean;
  isDeleted?: boolean;
};
const ProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    product: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        console.log({ args });
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: `/products`,
          method: "GET",
          params: params,
        };
      },
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
