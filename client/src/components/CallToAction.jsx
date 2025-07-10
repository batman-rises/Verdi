import React, { use } from "react";
import { useNavigate } from "react-router-dom";

export default function CallToAction() {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-br from-green-600 to-teal-600 p-10 shadow-lg text-center">
      <h2 className="text-2xl font-bold text-white mb-4">
        Ready to Make a Difference?
      </h2>
      <p className="text-sm text-gray-200 mb-3">
        Join our community of eco-warriors and start your journey towards a more
        sustainable lifestyle today.
      </p>
      <div className="flex flex-row justify-center gap-4 mt-6">
        <button
          onClick={() => navigate("/signup")}
          className="w-60 bg-white rounded-lg px-6 py-3 text-green-600 font-semibold border hover:border-white hover:bg-green-400 hover:text-white transition"
        >
          Create Free Account
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="w-60 bg-yellow-400 rounded-lg px-6 py-3 text-white font-semibold border hover:border-white hover:bg-pink-300 hover:text-green-600 transition"
        >
          View Dashboard
        </button>
      </div>
    </section>
  );
}
