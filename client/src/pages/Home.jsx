import React from "react";
import Header from "../components/Header";
import { FaLeaf, FaBell, FaRecycle, FaGlobeAsia } from "react-icons/fa";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/Features";
import CallToAction from "../components/CallToAction.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <div className="bg-green-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-8 py-16">
          {/* Left Section */}
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-snug">
              Build a <span className="text-green-600">Sustainable</span> Future
            </h1>
            <p className="text-gray-600 mt-6 text-lg">
              Join thousands of eco-conscious users reducing their environmental
              impact through smart choices, carbon tracking, and sustainable
              living.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition">
                Get Started →
              </button>
              <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition">
                Try Calculator
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-80 h-80 rounded-3xl bg-gradient-to-br from-green-400 to-teal-500 shadow-2xl overflow-hidden">
              {/* Top-left Icon */}
              <div className="absolute top-4 left-4 bg-white/20 p-3 rounded-full backdrop-blur-sm animate-bounce [animation-duration:2.5s]">
                <FaLeaf className="text-white text-xl" />
              </div>

              {/* Top-right Icon */}
              <div className="absolute top-4 right-4 bg-white/20 p-3 rounded-full backdrop-blur-sm animate-bounce [animation-duration:3s]">
                <FaBell className="text-white text-xl" />
              </div>

              {/* Bottom-left Icon */}
              <div className="absolute bottom-4 left-4 bg-white/20 p-3 rounded-full backdrop-blur-sm animate-bounce [animation-duration:4s]">
                <FaRecycle className="text-white text-xl" />
              </div>
              {/* Bottom-right Icon */}
              <div className="absolute bottom-4 right-4 bg-white/20 rounded-full p-2 backdrop-blur-sm animate-bounce [animation-duration:2.5s]">
                <FaGlobeAsia className="text-white text-xl" />
              </div>
              {/* Center Content */}
              <div className="flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-4xl font-bold">2.3M</h1>
                <p className="text-white/90 mt-1">kWh Saved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <StatsSection />
      {/* Features Section */}
      <FeaturesSection />
      {/* Call to Action Section */}
      <CallToAction />
      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Home;
