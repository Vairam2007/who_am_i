// UserDashboard.jsx
import React, { useState } from "react";

const herbsData = [
  {
    name: "siriyanangai",
    description:
      "Known for its powerful medicinal value in Siddha medicine, used to treat fever, cold, and liver disorders.",
    image: "./2.jpg",
  },
  {
    name: "ranakalli",
    description:
      "Traditionally used for wound healing and pain relief, also believed to help in reducing inflammation.",
    image: "./3.jpg",
  },
  {
    name: "insulin",
    description:
      "Medicinal plant used for managing diabetes, helps in regulating blood sugar levels naturally.",
    image: "./4.jpg",
  },
  {
    name: "tulsi",
    description:
      "Holy basil, sacred in India, known for boosting immunity, relieving stress, and curing respiratory issues.",
    image: "./6.jpg",
  },
  {
    name: "karpooravalli",
    description:
      "Aromatic herb used for cough, cold, asthma, and digestive problems; often taken as herbal tea.",
    image: "./5.jpg",
  },
  {
    name: "lemon grass",
    description:
      "Fragrant herb used in teas and soups, relieves stress, aids digestion, and repels mosquitoes.",
    image: "./7.jpg",
  },
];

export default function UserDashboard() {
  const [search, setSearch] = useState("");

  const filteredHerbs = herbsData.filter((herb) =>
    herb.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleLogout = () => {
    alert("Logged out!");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-950 to-gray-800 p-4">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-green-400">🌿 Herbal Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-300 font-medium">Hello, User</span>
          <button
            onClick={handleLogout}
            className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-400 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-6xl mx-auto mb-6 w-full">
        <input
          type="text"
          placeholder="Search herbs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Herbs List - full width on laptop */}
      <div className="max-w-6xl mx-auto space-y-6 w-full">
        {filteredHerbs.map((herb, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center bg-gray-800 rounded-2xl shadow-xl p-5 hover:scale-[1.02] transform transition-transform duration-300 w-full"
          >
            <img
              src={herb.image}
              alt={herb.name}
              className="w-full sm:w-64 h-64 object-cover rounded-xl mb-4 sm:mb-0 sm:mr-6 border-2 border-green-400"
            />
            <div className="text-center sm:text-left w-full">
              <h2 className="text-2xl font-semibold text-green-300 mb-2">
                {herb.name}
              </h2>
              <p className="text-gray-300">{herb.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
