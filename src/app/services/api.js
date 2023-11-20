import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
    timeout: 10000,
  }),

  tagTypes: ["Post"],

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
  }),
});

export const { useGetCurrentUserQuery, useLoginMutation } = api;
