import { baseApi } from "../../api/baseApi";

const PaymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    payment: builder.mutation({
      query: (data) => ({
        url: "/Create-checkout-session",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePaymentMutation } = PaymentApi;
