import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function Dashboard() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <p>Your role is {user?.role}</p>
    </div>
  );
}

export default Dashboard;
