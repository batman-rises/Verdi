import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="top-0 z-50">
      <div className="max-w-7xl p-2">
        {/* ✅ Logo - Clickable to Home */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full">
            <FaLeaf size={16} color="#ffffff" />
          </div>
          <span className="text-xl font-bold text-green-800">Verdi</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
