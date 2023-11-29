import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostBlogMutation } from "../app/services/blogApi";

export default function NewBlog() {
  const navigate = useNavigate();
  const [state, setState] = useState({ title: "", content: "" });
  const [postBlog, { isLoading, isError, isSuccess, error }] =
    usePostBlogMutation();

  async function submitForm() {
    try {
      const blog = await postBlog(state).unwrap();
      if (blog) {
        navigate;
      }
    } catch (error) {
      console.log(error);
      if (error.status === 401) navigate("/login", { replace: true });
    }
  }

  function formHandler(e) {
    if (e.target == form) {
      e.preventDefault();
      console.log("The blog is: ", state);
    }

    if (e.target.name === "title") {
      setState((prevState) => ({ ...prevState, title: e.target.value }));
    }

    if (e.target.name === "content") {
      setState((prevState) => ({ ...prevState, content: e.target.value }));
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-4">
      <h1 className="text-center text-primary text-5xl">New Blog</h1>

      <form
        action=""
        name="form"
        className="px-8 flex flex-col gap-2 max-w-3xl mx-auto space-y-2"
        onSubmit={(e) => formHandler(e)}
      >
        <div className="flex flex-col">
          <label htmlFor="title" className="text-xl px-2">
            Title
          </label>
          <input
            className="py-1 px-2 rounded-lg focus:outline-secondary focus:border-secondary  border border-gray-400"
            type="text"
            name="title"
            placeholder="Enter a title for your blog"
            onChange={(e) => formHandler(e)}
            value={state.title}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="content" className="text-xl px-2">
            Content
          </label>
          <textarea
            name="content"
            onChange={(e) => formHandler(e)}
            value={state.content}
            id="content"
            cols="30"
            rows="10"
            className="py-1 px-2 rounded-lg focus:outline-secondary focus:border-secondary  border border-gray-400 resize-none"
            placeholder="Enter content for your blog"
          ></textarea>
        </div>

        <button
          className="bg-primary active:bg-blue-800 py-2 text-white font-bold rounded disabled:opacity-70 flex justify-center"
          disabled={isLoading}
          onClick={(e) => submitForm(e)}
        >
          {isLoading ? (
            <span className="loader border-4 w-6 h-6"></span>
          ) : (
            "Submit"
          )}
        </button>

        {!isLoading && isError && (
          <div className="bg-rose-200 px-4 py-2 text-center text-red-600 font-bold text-xl">
            {error?.data?.error || "An error occured!"}
          </div>
        )}
      </form>
    </div>
  );
}
