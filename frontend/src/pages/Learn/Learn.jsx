import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Leaf, IndianRupee, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";
import Chat from "./Chat";

// Import your new JSON data
import learnData from "E:/gramlink/frontend/src/data/learnData.json";

// Map the string names from JSON to the actual Icon components
const IconMap = {
  Leaf: <Leaf className="w-8 h-8 text-green-700" />,
  IndianRupee: <IndianRupee className="w-8 h-8 text-green-700" />,
  BookOpen: <BookOpen className="w-8 h-8 text-green-700" />,
  Smartphone: <Smartphone className="w-8 h-8 text-green-700" />,
};

const Learn = () => {
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);

 useEffect(() => {
    document.body.style.overflow = showChat ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showChat]);

  return (
    <section className="min-h-screen bg-amber-50 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1f4d3a]">
            Learn with GramLink
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Simple learning resources designed for farmers and rural communities
          </p>
        </div>

        {/* Animated Clickable Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learnData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => navigate(item.path)}
              className="cursor-pointer bg-white rounded-xl shadow-md p-6"
            >
              {/* Render icon based on the string key in JSON */}
              <div className="mb-4">{IconMap[item.iconName]}</div>

              <h3 className="text-xl font-semibold text-[#1f4d3a]">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-[#214e3b] text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold">Knowledge Empowers Villages 🌾</h2>
          <p className="mt-3 max-w-xl mx-auto text-sm opacity-90">
            GramLink helps farmers grow smarter, earn better, and stay informed.
          </p>
          <button
            type="button"
            onClick={() => setShowChat(true)}
            className="mt-6 bg-white text-[#214e3b] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Learn with AI
          </button>
        </div>
      </div>
      {showChat && <Chat onClose={() => setShowChat(false)} />}
    </section>
  );
};

export default Learn;