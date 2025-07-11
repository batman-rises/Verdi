import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  Check,
  AlertTriangle,
} from "lucide-react";

const RecyclePaper = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const recyclingItems = [
    {
      id: 1,
      name: "Newspapers & Magazines",
      category: "Paper Items",
      status: "Recyclable",
      statusColor: "bg-green-100 text-green-800",
      icon: <Check className="w-4 h-4 text-green-600" />,
      steps: [
        "Remove plastic wrapping and rubber bands",
        "Keep papers dry and clean",
        "Bundle or place in paper recycling bin",
        "Remove any non-paper inserts or stickers",
      ],
      tip: "Glossy magazines and newspapers are both recyclable together",
    },
    {
      id: 2,
      name: "Cardboard Boxes",
      category: "Cardboard Items",
      status: "Recyclable",
      statusColor: "bg-green-100 text-green-800",
      icon: <Check className="w-4 h-4 text-green-600" />,
      steps: [
        "Remove all tape, labels, and staples",
        "Flatten boxes to save space",
        "Keep cardboard dry and clean",
        "Place in cardboard recycling bin",
      ],
      tip: "Wet or greasy cardboard cannot be recycled",
    },
    {
      id: 3,
      name: "Office Paper & Documents",
      category: "Paper Items",
      status: "Recyclable",
      statusColor: "bg-green-100 text-green-800",
      icon: <Check className="w-4 h-4 text-green-600" />,
      steps: [
        "Remove staples, paper clips, and binders",
        "Shred confidential documents if needed",
        "Keep papers clean and dry",
        "Place in paper recycling container",
      ],
      tip: "Shredded paper should be placed in a paper bag before recycling",
    },
    {
      id: 4,
      name: "Pizza Boxes & Food Containers",
      category: "Cardboard Items",
      status: "Special Handling",
      statusColor: "bg-yellow-100 text-yellow-800",
      icon: <AlertTriangle className="w-4 h-4 text-yellow-600" />,
      steps: [
        "Check for grease stains and food residue",
        "Cut off clean sections for recycling",
        "Compost greasy parts if possible",
        "Dispose of heavily soiled parts in trash",
      ],
      tip: "Only recycle the clean, non-greasy parts of food containers",
    },
    {
      id: 5,
      name: "Wax-Coated Paper & Cups",
      category: "Paper Items",
      status: "Not Recyclable",
      statusColor: "bg-red-100 text-red-800",
      icon: <AlertTriangle className="w-4 h-4 text-red-600" />,
      steps: [
        "Do not put in paper recycling",
        "Check for compostable alternatives",
        "Look for special collection programs",
        "Dispose in regular trash if no alternatives",
      ],
      tip: "Wax and plastic coatings prevent paper fibers from being recycled",
    },
    {
      id: 6,
      name: "Envelopes & Junk Mail",
      category: "Paper Items",
      status: "Recyclable",
      statusColor: "bg-green-100 text-green-800",
      icon: <Check className="w-4 h-4 text-green-600" />,
      steps: [
        "Remove plastic windows from envelopes",
        "Keep paper dry and clean",
        "No need to remove small amounts of tape",
        "Place in paper recycling bin",
      ],
      tip: "Envelopes with plastic windows need the plastic removed first",
    },
  ];

  const toggleExpanded = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">
          Paper & Cardboard
        </h2>
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

export default RecyclePaper;
