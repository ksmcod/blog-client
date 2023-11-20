import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
    timeout: 10000,
  }),

  tagTypes: ["Post"],

  endpoints: (builder) => ({}),
});
