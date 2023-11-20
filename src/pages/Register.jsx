import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [state, setState] = useState({ username: "", email: "", password: "" });

  function formHandler(e) {
    if (e.target == form) {
      e.preventDefault();
      console.log(`Form state is `, state);
    }

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
    <div className="">
      <div className="space-y-3">
        <h2 className="text-center text-secondary">Join the community</h2>
        <p className="font-bold text-center">
          Already have an account ?{" "}
          <span className="text-secondary">
            <Link to="/login">login</Link>
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
          type="text"
          name="username"
          placeholder="Enter a username"
          onChange={(e) => formHandler(e)}
          value={state.username}
        />
        <input
          className="py-1 px-2 rounded-lg focus:outline-secondary focus:border-secodary  border border-gray-400"
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
          placeholder="Enter a password"
          onChange={(e) => formHandler(e)}
          value={state.password}
        />
        {/* <button
          className="bg-primary active:bg-blue-700 py-2 text-white font-bold rounded disabled:opacity-70 flex justify-center"
          disabled={isLoading}
          onClick={(e) => submitForm(e)}
        >
          {isLoading ? (
            <span className="loader border-4 w-6 h-6"></span>
          ) : (
            "Register"
          )}
        </button> */}
      </form>
    </div>
  );
}
