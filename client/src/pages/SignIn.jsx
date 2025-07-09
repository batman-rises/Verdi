import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { FaLeaf } from "react-icons/fa";

function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { fetchUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/login", form, {
        withCredentials: true,
      });
      await fetchUser();
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(""); // clear error on typing
  };
  return (
    <div>
      <a href="/" className="text-green-500 hover:underline block text-sm mb-4">
        ← Back to Home
      </a>

      <div className="mx-auto p-6 max-w-md bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
            <FaLeaf size={40} color="#ffffff" />
          </div>
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-sm text-gray-600">
            Please login to continue your sustainable journey
          </p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
          <button
            className="bg-green-500 text-white p-2 rounded w-full"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-green-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
      {error && (
        <p className="text-red-500 text-sm text-center mt-2">{error}</p>
      )}
    </div>
  );
}
export default SignIn;
// This code defines a SignIn component that allows users to log in to the application.
// It includes a form for email and password input, handles form submission, and displays error messages if login fails.
// The component uses React hooks for state management and Axios for making HTTP requests to the backend.
// It also utilizes the AuthContext to fetch user data after a successful login and redirects the user to the dashboard page.
