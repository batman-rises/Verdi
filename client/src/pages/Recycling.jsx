import React from "react";
import Header from "../components/Header";
import { FaTree, FaBolt, FaRecycle } from "react-icons/fa";
import RecyclePlastic from "../components/RecyclePlastic";
import RecycleElectronics from "../components/RecycleElectronic";
import RecycleGlass from "../components/RecycleGlass";
import RecyclePaper from "../components/RecyclePaper";

const Recycling = () => {
  return (
    <>
      <Header />
      <div className="p-4 mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-4">Recycling Guide</h1>
        <p className="text-gray-700 text-sm">
          Learn how to properly recycle different materials and reduce your
          environmental impact
        </p>
        <div></div>
        <div className="flex flex-col md:flex-row gap-6 mt-8 justify-center px-2 max-w-5xl mx-auto">
          <div className="flex-1 h-35 p-6 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-3xl text-center text-white">
            <div className="mb-2">
              <FaRecycle className="text-white mx-auto text-2xl" />
            </div>
            <h1 className="text-white font-bold text-3xl mb-1">75%</h1>
            <p className="text-white text-base font-sm">
              Waste Can Be Recycled
            </p>
          </div>
          <div className="flex-1 h-35 p-6 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-3xl text-center text-white">
            <div className="mb-2">
              <FaTree className="text-white mx-auto text-2xl" />
            </div>
            <h1 className="text-white font-bold text-3xl mb-1">17</h1>
            <p className="text-white text-base font-sm">Trees Saved Per Ton</p>
          </div>
          <div className="flex-1 h-35 p-6 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-3xl text-center text-white">
            <div className="mb-2">
              <FaBolt className="text-white mx-auto text-2xl" />
            </div>
            <h1 className="text-white font-bold text-3xl mb-1">60%</h1>
            <p className="text-white text-base font-sm">Energy Saved vs New</p>
          </div>
        </div>
        <div className="mt-8">{<RecyclePlastic />}</div>
        <div className="mt-8">{<RecycleElectronics />}</div>
        <div className="mt-8">{<RecycleGlass />}</div>
        <div className="mt-8">{<RecyclePaper />}</div>
      </div>
    </>
  );
};

export default Recycling;
// This page provides a recycling guide with a search bar and tips on how to recycle different materials.
