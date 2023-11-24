import { api } from "./api";

const AUTH_URL = "/auth";
const USER_URL = "/user";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => ({
        url: `${USER_URL}/user`,
        credentials: "include",
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        credentials: "include",
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: `${AUTH_URL}/register`,
        method: "POST",
        credentials: "include",
        body,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USER_URL}/logout`,
        method: "POST",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
} = userApi;
