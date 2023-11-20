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
        ulr: "/auth/login",
        method: "POST",
        credentials: "include",
        body,
      }),
    }),
  }),
});

export const { useGetCurrentUserQuery, useLoginMutation } = userApi;
