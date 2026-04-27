import { useState } from "react";
import { Search } from "lucide-react";

const categories = [
  "All",
  "Farmers",
  "Shops",
  "Services",
  "Buyers",
  "Self Help Groups",
];

const directoryData = [
  {
    id: 1,
    name: "Ramesh Patra",
    category: "Farmers",
    village: "Kharagpur",
    contact: "🌾 Paddy, Wheat",
  },
  {
    id: 2,
    name: "Maa Fertilizer Store",
    category: "Shops",
    village: "Balichak",
    contact: "🛒 Seeds & Fertilizers",
  },
  {
    id: 3,
    name: "Suresh Electrician",
    category: "Services",
    village: "Debra",
    contact: "⚡ Electrical Repair",
  },
  {
    id: 4,
    name: "GreenHarvest Buyer",
    category: "Buyers",
    village: "Medinipur",
    contact: "💰 Bulk Crop Buyer",
  },
  {
    id: 5,
    name: "Mahila SHG",
    category: "Self Help Groups",
    village: "Pingla",
    contact: "👩‍🌾 Handicrafts & Food",
  },
];

const Directory = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredData = directoryData.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.village.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#1f4d3a]">
            GramLink Village Directory
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Find farmers, services, buyers and local businesses from nearby villages
          </p>
        </div>

        {/* Search */}
        <div className="flex items-center max-w-xl mx-auto bg-white rounded-lg shadow px-4 py-2 mb-8">
          <Search className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search by name or village..."
            className="w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition
                ${
                  activeCategory === cat
                    ? "bg-[#214e3b] text-white"
                    : "bg-white text-[#214e3b] hover:bg-[#214e3b] hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Directory Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-[#1f4d3a]">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                📍 {item.village}
              </p>

              <span className="inline-block mt-3 text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full">
                {item.category}
              </span>

              <p className="mt-4 text-gray-700">
                {item.contact}
              </p>

              <button className="mt-5 w-full bg-[#214e3b] text-white py-2 rounded-lg font-medium hover:bg-[#023322] transition">
                Contact
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <p className="text-center text-gray-500 mt-12">
            No results found.
          </p>
        )}
      </div>
    </section>
  );
};

export default Directory;
