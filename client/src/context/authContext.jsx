import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/me", {
        withCredentials: true,
      });
      setUser(res.data);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};
// This code defines an authentication context for a React application.
// It creates an `AuthContext` using React's Context API and provides an `AuthProvider` component.
// The `AuthProvider` manages the authentication state of the user, fetching user data from the backend when the component mounts.
// It uses Axios to make HTTP requests to the backend API for user authentication.
// The `fetchUser` function retrieves the current user's information and updates the state accordingly.
// The `AuthContext` can be used throughout the application to access the current user's information and trigger re-fetching of user data when needed.
// The `AuthProvider` wraps the application, allowing any component to access the authentication state via the `AuthContext`.
// This is typically used in applications that require user authentication, such as login and registration systems.
// The `AuthContext` provides a way to manage and access user authentication state across the application.
// The `AuthProvider` component fetches the current user's data from the backend when it mounts and provides this data to its children via the `AuthContext`.
