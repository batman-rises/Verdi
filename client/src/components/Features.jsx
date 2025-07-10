import { FaCalculator, FaLeaf, FaGift, FaRecycle } from "react-icons/fa";

export default function FeaturesSection() {
  const Features = [
    {
      icon: FaCalculator,
      title: "Carbon Calculator",
      description:
        "Track your carbon footprint with our Intelligent Carbon Calculator",
    },
    {
      icon: FaLeaf,
      title: "Eco Products",
      description:
        "Discover eco-friendly products that help you live sustainably",
    },
    {
      icon: FaGift,
      title: "Donation Portal",
      description:
        "Give your items a second life through our donation platform.",
    },
    {
      icon: FaRecycle,
      title: "Recycling Guide",
      description: "Learn how to recycle effectively and reduce waste",
    },
  ];
  return (
    <div className="bg-gradient-to-br from-green-50 to-teal-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Everything You Need for{" "}
          <span className="text-green-600">Sustainable Living</span>
        </h2>
        <p className="text-gray-500 text-center text-lg mb-12 max-w-3xl mx-auto">
          Comprehensive tools and resources to help you make environmentally
          conscious decisions every day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center hover:scale-105"
            >
              <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                {" "}
                {/* Square icon container */}
                <feature.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
