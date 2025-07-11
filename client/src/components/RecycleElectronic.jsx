import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Smartphone,
  Check,
  AlertTriangle,
} from "lucide-react";

const RecycleElectronics = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const recyclingItems = [
    {
      id: 1,
      name: "Smartphones & Tablets",
      category: "Electronic Items",

      status: "Recyclable",
      statusColor: "bg-green-100 text-green-800",
      icon: <Check className="w-4 h-4 text-green-600" />,
      steps: [
        "Back up and wipe all personal data",
        "Remove SIM card and memory cards",
        "Take to certified e-waste recycling center",
        "Consider manufacturer take-back programs",
      ],
      tip: "Many manufacturers offer trade-in or recycling programs",
    },
    {
      id: 2,
      name: "Batteries",
      category: "Electronic Items",

      status: "Recyclable",
      statusColor: "bg-green-100 text-green-800",
      icon: <Check className="w-4 h-4 text-green-600" />,
      steps: [
        "Never put batteries in regular trash",

        "Take to battery recycling locations",
        "Many electronics stores accept old batteries",
        "Check for hazardous waste collection events",
      ],
      tip: "Lithium batteries can be dangerous if not disposed properly",
    },
    {
      id: 3,
      name: "Old Computers",
      category: "Electronic Items",

      status: "Recyclable",
      statusColor: "bg-green-100 text-green-800",
      icon: <Check className="w-4 h-4 text-green-600" />,
      steps: [
        "Back up important files",
        "Wipe hard drive completely",
        "Remove personal information",
        "Take to certified e-waste facility",
      ],
      tip: " Some organizations refurbish computers for donation",
    },
  ];

  const toggleExpanded = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-violet-400 rounded-xl flex items-center justify-center">
          <Smartphone className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Electronics</h2>
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
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm text-green-800">
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

export default RecycleElectronics;
