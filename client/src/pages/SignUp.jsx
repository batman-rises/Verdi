import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setformData] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value });
    if (error) setError(""); // clear error on typing
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        // Show backend error message or fallback
        throw new Error(
          data.message || "Something went wrong. Please try again."
        );
      }

      // If success, redirect to login page
      navigate("/");
    } catch (error) {
      setError("Server error. Please try again later.");
      console.error("Error during sign up:", error);
    }
  };

  return (
    <div>
      <a href="/" className="text-green-500 hover:underline block text-sm mb-4">
        ← Back to Home
      </a>
      <div className="mx-auto p-6 max-w-md bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <div className="mb-4 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full">
            <FaLeaf size={40} color="#ffffff" />
          </div>
          <h1 className="text-2xl font-bold">Join Verda</h1>
          <p className="text-gray-600">Start your sustainable journey today</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="name">Name:</label>
            <input
              className="border border-gray-300 p-2 rounded"
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              className="border border-gray-300 p-2 rounded"
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password:</label>
            <input
              className="border border-gray-300 p-2 rounded "
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              className="bg-green-500 text-white p-2 rounded w-full hover:bg-green-600 transition-colors duration-300"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div>
          <p className="text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-green-500 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded mt-2 text-sm">
          {error}
        </div>
      )}
    </div>
  );
};

export default SignUp;

// This code defines a SignUp component that allows users to create an account on the Verda platform.
// It includes a form for name, email, and password input, handles form submission, and displays error messages if sign-up fails.
// The component uses React hooks for state management and fetch API for making HTTP requests to the backend.
// It also provides a link to the login page for users who already have an account.
