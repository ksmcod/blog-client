import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoMdLogOut } from "react-icons/io";
import {
  useGetCurrentUserQuery,
  useLogoutMutation,
  useUpdateUserMutation,
} from "../app/services/userApi";
import { clearUser, setUser } from "../features/user/userSlice";

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({ username: "", email: "", password: "" });

  const { data } = useGetCurrentUserQuery();
  const [logout] = useLogoutMutation();
  const [update, { isLoading, isError, error }] = useUpdateUserMutation();

  async function logoutUser() {
    await logout();
    dispatch(clearUser());
    // navigate("/", { replace: true });
    <Navigate to={"/"} replace />;
    console.log("LOGOUT USER CALLED!");
  }

  async function updateUser(e) {
    e.preventDefault();
    try {
      console.log("The state is: ", state);
      const newInfo = await update(state).unwrap();
      console.log("New info is: ", newInfo);
      dispatch(setUser(newInfo));
      window.location.reload();
    } catch (error) {
      console.log(error);
      if (error.status === 401) {
        navigate("/", { replace: true });
      }
    }
  }

  function formHandler(e) {
    // if (e.target == form) {
    //   e.preventDefault();
    //   console.log("The state is: ", state);
    //   const newInfo = update(state).unwrap();
    //   console.log("New info is:", newInfo);
    //   dispatch(setUser(newInfo));
    // }

    if (e.target.name == "username") {
      setState((prevState) => ({ ...prevState, username: e.target.value }));
    }

    if (e.target.name == "email") {
      setState((prevState) => ({ ...prevState, email: e.target.value }));
    }

    if (e.target.name == "password") {
      setState((prevState) => ({ ...prevState, password: e.target.value }));
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-5 px-4">
      <div className="flex justify-end">
        <button
          className="py-1 px-4 border border-black active:bg-gray-200 rounded-md flex items-center gap-1"
          onClick={() => logoutUser()}
        >
          <IoMdLogOut /> <span>Logout</span>
        </button>
      </div>

      <h2 className="text-center text-secondary">Profile</h2>

      <form
        name="form"
        onSubmit={(e) => updateUser(e)}
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
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="loader border-4 w-6 h-6"></span>
          ) : (
            "Confirm"
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
