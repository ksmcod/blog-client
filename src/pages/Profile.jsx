import React, { useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { useGetCurrentUserQuery } from "../app/services/userApi";

export default function Profile() {
  const [state, setState] = useState({ username: "", email: "", password: "" });

  const { data } = useGetCurrentUserQuery();
  console.log(data);

  return (
    <div className="max-w-4xl mx-auto space-y-5">
      <div className="flex justify-end">
        <button className="py-1 px-4 border border-black active:bg-gray-200 rounded-md flex items-center gap-1">
          <IoMdLogOut /> <span>Logout</span>
        </button>
      </div>

      <h2 className="text-center text-secondary">Profile</h2>

      <form
        name="form"
        onSubmit={(e) => formHandler(e)}
        className="pt-5 px-8 sm:px-32 max-w-3xl mx-auto flex flex-col gap-2 space-y-2"
      >
        <div className="w-full flex flex-col gap-1">
          <p className="text-xs px-2 text-gray-400">
            Current username:{" "}
            <span className="font-bold"> {data?.username}</span>
          </p>
          <input
            type="text"
            className="py-1 px-2 w-full rounded-lg focus:outline-secondary focus:border-secondary border border-gray-400"
            name="username"
            placeholder="Enter new username"
            onChange={(e) => formHandler(e)}
            value={state.username}
          />
        </div>

        <div className="w-full flex flex-col gap-1">
          <p className="text-xs px-2 text-gray-400">
            Current email: <span className="font-bold">{data?.email}</span>
          </p>
          <input
            className="py-1 px-2 rounded-lg focus:outline-secondary focus:border-secondary  border border-gray-400"
            type="email"
            name="email"
            placeholder="Enter your new email"
            onChange={(e) => formHandler(e)}
            value={state.email}
          />
        </div>
        <div className="w-full">
          <input
            className="py-1 px-2 rounded-lg w-full focus:outline-secondary focus:border-secondary  border border-gray-400"
            type="password"
            name="password"
            placeholder="Enter your new password"
            onChange={(e) => formHandler(e)}
            value={state.password}
          />
        </div>
        <button
          className="bg-primary active:bg-blue-700 py-2 text-white font-bold rounded disabled:opacity-70 flex justify-center"
          onClick={(e) => submitForm(e)}
        >
          Submit
        </button>

        {/* {!isLoading && isError && (
          <div className="bg-rose-200 px-4 py-2 text-center text-red-600 font-bold text-xl">
            {error?.data?.error || "An error occured!"}
          </div>
        )} */}
      </form>
    </div>
  );
}
