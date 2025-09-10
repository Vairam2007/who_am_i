import React, { useState } from "react";

const herbsData = [
  { name: "Basil", description: "Aromatic herb commonly used in cooking.", image: "https://images.unsplash.com/photo-1617196031632-61b2b7fbd5f8?auto=format&fit=crop&w=400&q=80" },
  { name: "Mint", description: "Refreshing herb great for beverages and desserts.", image: "https://images.unsplash.com/photo-1592928301108-cf54e8a8f5fa?auto=format&fit=crop&w=400&q=80" },
  { name: "Rosemary", description: "Strong-scented herb, perfect for meats and oils.", image: "https://images.unsplash.com/photo-1623542923611-b5a78a45f93c?auto=format&fit=crop&w=400&q=80" },
  { name: "Thyme", description: "Culinary and medicinal herb with a strong aroma.", image: "https://images.unsplash.com/photo-1608131645676-9b34fc3a3d2c?auto=format&fit=crop&w=400&q=80" },
  { name: "Sage", description: "Culinary and medicinal herb with earthy flavor.", image: "https://images.unsplash.com/photo-1580584123123-58d0f1d0c5f6?auto=format&fit=crop&w=400&q=80" },
  { name: "Chamomile", description: "Soothing herb used in teas for relaxation.", image: "https://images.unsplash.com/photo-1584270354949-5a6f0d4aebbb?auto=format&fit=crop&w=400&q=80" },
  { name: "Lavender", description: "Fragrant herb used for aromatherapy and decoration.", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80" },
  { name: "Parsley", description: "Popular culinary herb used for garnish and flavor.", image: "https://images.unsplash.com/photo-1616514800003-1d8dc87b9f28?auto=format&fit=crop&w=400&q=80" },
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
      <div className="flex justify-between items-center mb-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-400">Herbal Dashboard</h1>
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
      <div className="max-w-4xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search herbs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Herbs List - each card full row */}
      <div className="max-w-4xl mx-auto space-y-6">
        {filteredHerbs.map((herb, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center bg-gray-800 rounded-2xl shadow-xl p-5 hover:scale-105 transform transition-transform duration-300"
          >
            <img
              src={herb.image}
              alt={herb.name}
              className="w-full sm:w-48 h-48 object-cover rounded-xl mb-4 sm:mb-0 sm:mr-6 border-2 border-green-400"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-semibold text-green-300 mb-2">{herb.name}</h2>
              <p className="text-gray-300">{herb.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
