import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../app/services/userApi";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";

export default function Login() {
  const [state, setState] = useState({ email: "", password: "" });
  const [useLogin, { isLoading, isError, error }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function submitForm(e) {
    e.preventDefault();
    try {
      const res = await useLogin(state).unwrap();
      console.log("Res is: ", res);
      dispatch(setUser({ ...res }));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  function formHandler(e) {
    // if (e.target == form) {
    //   // const response = await fetch("http://localhost:4000/api/auth/login", {
    //   //   method: "POST",
    //   //   body: JSON.stringify(state),
    //   //   headers: { "Content-Type": "application/json" },
    //   //   credentials: "include",
    //   // });
    //   // const result = await response.json();
    //   // if (!response.ok) {
    //   //   console.log("An error occured!");
    //   // }
    //   // console.log(result);
    // }

    if (e.target.name == "email") {
      setState((prevState) => ({ ...prevState, email: e.target.value }));
    }

    if (e.target.name == "password") {
      setState((prevState) => ({ ...prevState, password: e.target.value }));
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-3">
        <h2 className="text-center text-secondary">Login to your account</h2>
        <p className="font-bold text-center">
          Don't have an account ?{" "}
          <span className="text-secondary">
            <Link to="/register">sign up</Link>
          </span>
        </p>
      </div>

      <form
        name="form"
        onSubmit={(e) => formHandler(e)}
        className="pt-5 px-8 sm:px-32 max-w-3xl mx-auto flex flex-col gap-2"
      >
        <input
          className="py-1 px-2 rounded-lg focus:outline-secondary focus:border-secondary  border border-gray-400"
          type="email"
          name="email"
          placeholder="Enter your e-mail"
          onChange={(e) => formHandler(e)}
          value={state.email}
        />
        <input
          className="py-1 px-2 rounded-lg focus:outline-secondary focus:border-secondary  border border-gray-400"
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => formHandler(e)}
          value={state.password}
        />
        <button
          className="bg-primary active:bg-blue-700 py-2 text-white font-bold rounded disabled:opacity-70 flex justify-center"
          disabled={isLoading}
          onClick={(e) => submitForm(e)}
        >
          {isLoading ? (
            <span className="loader border-4 w-6 h-6"></span>
          ) : (
            "Login"
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
