import { baseApi } from "../../api/baseApi";

const AuthApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => {
        console.log({ api: data });
        return {
          url: "/user",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation({
      query: (data) => {
        console.log({ api: data });
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});
export const { useCreateUserMutation, useLoginUserMutation } = AuthApi;
