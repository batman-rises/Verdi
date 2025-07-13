import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full">
              <FaLeaf size={16} color="#ffffff" />
            </div>
            <span className="text-xl font-bold text-green-800">Verdi</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-600 hover:underline transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/retailer-dashboard"
              className="text-gray-700 hover:text-green-600 hover:underline transition-colors duration-200"
            >
              R. Dashboard
            </Link>
            <Link
              to="/dashboard"
              className="text-gray-700 hover:text-green-600 hover:underline transition-colors duration-200"
            >
              Dashboard
            </Link>
            <Link
              to="/calculator"
              className="text-gray-700 hover:text-green-600 hover:underline transition-colors duration-200"
            >
              Calculator
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-green-600 hover:underline transition-colors duration-200"
            >
              Products
            </Link>
            <Link
              to="/donations"
              className="text-gray-700 hover:text-green-600 hover:underline transition-colors duration-200"
            >
              Donations
            </Link>
            <Link
              to="/recycling"
              className="text-gray-700 hover:text-green-600 hover:underline transition-colors duration-200"
            >
              Recycling
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="text-green-600 px-4  py-2 rounded-md hover:bg-pink-300 font-medium transition-colors duration-200 cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-ء600"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                to="/"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Dashboard
              </Link>
              <Link
                to="/calculator"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Calculator
              </Link>
              <Link
                to="/products"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Products
              </Link>
              <Link
                to="/donations"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Donations
              </Link>
              <Link
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                to="/recycling"
              >
                Recycling
              </Link>

              {/* Mobile Auth Buttons */}
              <div className="pt-4 space-y-2">
                <button
                  onClick={() => navigate("/login")}
                  className="w-full text-left px-3 py-2 text-green-600 hover:text-green-800 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md transition-colors duration-200"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
