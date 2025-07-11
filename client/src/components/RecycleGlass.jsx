import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Wine,
  Check,
  AlertTriangle,
} from "lucide-react";

const RecycleGlass = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const recyclingItems = [
    {
      id: 1,
      name: "Glass Bottles & Jars",
      category: "Glass Items",
      status: "Recyclable",
      statusColor: "bg-green-100 text-green-800",
      icon: <Check className="w-4 h-4 text-green-600" />,
      steps: [
        "Remove all caps, lids, and labels",
        "Rinse thoroughly to remove food residue",
        "Separate by color if required (clear, brown, green)",
        "Place in designated glass recycling bin",
      ],
      tip: "Glass can be recycled endlessly without losing quality",
    },
    {
      id: 2,
      name: "Wine & Beer Bottles",
      category: "Glass Items",
      status: "Recyclable",
      statusColor: "bg-green-100 text-green-800",
      icon: <Check className="w-4 h-4 text-green-600" />,
      steps: [
        "Remove cork, foil, and labels completely",
        "Rinse out any liquid residue",
        "Check if your area accepts colored glass",
        "Place in glass recycling container",
      ],
      tip: "Some areas have bottle return programs for deposit refunds",
    },
    {
      id: 3,
      name: "Window Glass & Mirrors",
      category: "Glass Items",
      status: "Not Recyclable",
      statusColor: "bg-red-100 text-red-800",
      icon: <AlertTriangle className="w-4 h-4 text-red-600" />,
      steps: [
        "Do not put in regular glass recycling",
        "Contact local waste management for special pickup",
        "Check with glass specialty recyclers",
        "Consider donation if still in good condition",
      ],
      tip: "Window glass has different melting points than container glass",
    },
    {
      id: 4,
      name: "Drinking Glasses & Ceramics",
      category: "Glass Items",
      status: "Special Handling",
      statusColor: "bg-yellow-100 text-yellow-800",
      icon: <AlertTriangle className="w-4 h-4 text-yellow-600" />,
      steps: [
        "Cannot go in regular glass recycling",
        "Check for ceramic recycling programs",
        "Consider donating if in good condition",
        "Wrap safely before disposing in regular trash",
      ],
      tip: "Tempered glass and ceramics contaminate glass recycling",
    },
    {
      id: 5,
      name: "Lightbulbs",
      category: "Glass Items",
      status: "Special Handling",
      statusColor: "bg-yellow-100 text-yellow-800",
      icon: <AlertTriangle className="w-4 h-4 text-yellow-600" />,
      steps: [
        "Never put in regular glass recycling",
        "Take CFLs to hazardous waste collection",
        "LED bulbs can go to electronics recycling",
        "Wrap broken bulbs safely in newspaper",
      ],
      tip: "Some bulbs contain mercury and need special handling",
    },
  ];

  const toggleExpanded = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-emerald-400 rounded-xl flex items-center justify-center">
          <Wine className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Glass Products</h2>
      </div>

      {/* Recycling Items List */}
      <div className="space-y-4">
        {recyclingItems.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            {/* Item Header */}
            <div
              className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => toggleExpanded(item.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="font-medium text-gray-900">{item.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${item.statusColor}`}
                  >
                    {item.status}
                  </span>
                  {expandedItem === item.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedItem === item.id && (
              <div className="px-4 pb-4 border-t border-gray-100">
                <div className="pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Recycling Steps:
                  </h4>
                  <ol className="space-y-2 mb-4">
                    {item.steps.map((step, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="font-medium text-gray-900">
                          {index + 1}.
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div
                    className={`${
                      item.status === "Recyclable"
                        ? "bg-green-50 border-green-200"
                        : item.status === "Not Recyclable"
                        ? "bg-red-50 border-red-200"
                        : "bg-yellow-50 border-yellow-200"
                    } border rounded-lg p-3`}
                  >
                    <p
                      className={`text-sm ${
                        item.status === "Recyclable"
                          ? "text-green-800"
                          : item.status === "Not Recyclable"
                          ? "text-red-800"
                          : "text-yellow-800"
                      }`}
                    >
                      <span className="font-semibold">Tip:</span> {item.tip}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecycleGlass;
