import { api } from "./api";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => ({
        url: "/user/user",
        credentials: "include",
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        credentials: "include",
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        credentials: "include",
        body,
      }),
    }),
  }),
});

export const { useGetCurrentUserQuery, useLoginMutation, useRegisterMutation } =
  userApi;
