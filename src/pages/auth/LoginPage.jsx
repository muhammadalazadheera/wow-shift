import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";


function LoginPage() {
  const navigate = useNavigate();
  const { signInUser, user } = use(AuthContext);
  const loginUser = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((user) => {
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  if(user) {
    navigate("/");
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 uppercase">Login</h1>
      <form
        onSubmit={loginUser}
        className="border p-4 max-w-sm w-full bg-white shadow-md rounded-md"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Login
        </button>
        <p className="my-2">Don't have a account? <b><Link className="text-green-700" to="/register">Register</Link></b></p>
      </form>
    </div>
  );
}

export default LoginPage;
