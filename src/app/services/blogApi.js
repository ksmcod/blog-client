import { api } from "./api";

const BLOG_URL = "/blog";

const blogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postBlog: builder.mutation({
      query: (body) => ({
        url: `${BLOG_URL}/blog`,
        method: "POST",
        credentials: "include",
        body,
      }),
    }),
  }),
});

export const { usePostBlogMutation } = blogApi;
