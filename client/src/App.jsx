import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//hello copilot write something so that i can whether you  are active or not!
//add headeer component to the app
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Calculator from "./pages/Calculator";
import Products from "./pages/Products";
import Donations from "./pages/Donations";
import Recycling from "./pages/Recycling";
import RetailerDashboard from "./pages/RetailerDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/retailer-dashboard"
          element={
            <ProtectedRoute>
              <RetailerDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/products" element={<Products />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/recycling" element={<Recycling />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
