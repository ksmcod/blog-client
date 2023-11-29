import React from "react";

export default function NewBlog() {
  return (
    <div className="max-w-4xl mx-auto py-4">
      <h1 className="text-center text-primary text-5xl">New Blog</h1>

      <form
        action=""
        name="form"
        className="px-8 flex flex-col gap-2 max-w-3xl mx-auto space-y-2"
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
            // onChange={(e) => formHandler(e)}
            // value={state.email}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="content" className="text-xl px-2">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            className="py-1 px-2 rounded-lg focus:outline-secondary focus:border-secondary  border border-gray-400 resize-none"
            placeholder="Enter content for your blog"
          ></textarea>
        </div>

        <button
          className="bg-primary active:bg-blue-800 py-2 text-white font-bold rounded disabled:opacity-70 flex justify-center"
          //   disabled={isLoading}
          //   onClick={(e) => submitForm(e)}
        >
          {/* {isLoading ? (
            <span className="loader border-4 w-6 h-6"></span>
          ) : (
            "Login"
          )} */}
          Submit
        </button>
      </form>
    </div>
  );
}
