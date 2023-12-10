import { api } from "./api";

const BLOG_URL = "/blog";

const blogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postBlog: builder.mutation({
      query: (body) => ({
        url: `${BLOG_URL}`,
        method: "POST",
        credentials: "include",
        body,
      }),
      invalidatesTags: ["Blogs"],
    }),
    getAllBlogs: builder.query({
      query: () => `${BLOG_URL}`,
      providesTags: ["Blogs"],
    }),
  }),
});

export const { usePostBlogMutation, useGetAllBlogsQuery } = blogApi;
