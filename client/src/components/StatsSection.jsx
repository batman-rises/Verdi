import { FaTree, FaBolt, FaUsers, FaBoxOpen } from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    {
      icon: FaTree,
      value: "50K+",
      label: "Trees Saved",
    },
    {
      icon: FaBolt,
      value: "1.2M+",
      label: "kWh Energy Saved",
    },
    {
      icon: FaUsers,
      value: "10K+",
      label: "Active Users",
    },
    {
      icon: FaBoxOpen,
      value: "5K+",
      label: "Products Donated",
    },
  ];

  return (
    <section className="stats">
      <div className="stat-grid flex flex-row gap-20 justify-center items-center py-8">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card text-center">
            <stat.icon className="text-3xl text-green-500 mx-auto mb-2" />
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
