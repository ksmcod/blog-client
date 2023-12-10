import React from "react";
import { useGetAllBlogsQuery } from "../app/services/blogApi";
import Blog from "../components/Blog";

export default function Home() {
  const { isFetching, data } = useGetAllBlogsQuery();

  const renderedBlogs = [];

  if (!isFetching) {
    data.map((blog) => {
      const renderedBlog = (
        <Blog
          key={blog._id}
          title={blog.title}
          content={blog.content}
          author={blog.author}
          createdAt={blog.createdAt}
        />
      );

      renderedBlogs.push(renderedBlog);
    });
  }

  console.log("Rendered blogs are: ", renderedBlogs);
  return (
    <div className="max-w-4xl mx-auto space-y-12 sm:space-y-5 p-4">
      {renderedBlogs}

      {/* <Blog img="https://techcrunch.com/wp-content/uploads/2023/08/Yu_PressKit_Photo-Challenges.png?w=430&h=230&crop=1" />
      <Blog img="https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-1241184618.jpg?w=850&h=492&crop=1" />
      <Blog img="https://techcrunch.com/wp-content/uploads/2023/08/GettyImages-1487613502.jpg?w=430&h=230&crop=1" /> */}
    </div>
  );
}
