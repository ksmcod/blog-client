import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUser } from "../features/user/userSlice";

export default function Login() {
  const dispatch = useDispatch();

  const [state, setState] = useState({ email: "", password: "" });

  async function formHandler(e) {
    if (e.target == form) {
      e.preventDefault();

      console.log("Form submitted! ", state);

      const response = await fetch("http://localhost:4000/api/user/login", {
        method: "POST",
        body: JSON.stringify(state),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const result = await response.json();
      if (!response.ok) {
        console.log("An error occured!");
      }
      console.log(result);
    }

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
        <button className="bg-primary py-2 text-white font-bold rounded">
          Login
        </button>
      </form>
    </div>
  );
}
