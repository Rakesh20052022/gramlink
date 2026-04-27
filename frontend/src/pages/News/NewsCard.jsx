import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

// We consolidated the component so it directly accepts your data as props
const NewsCard = ({ id, title, summary, location, date }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      // Dynamically navigate to the specific news article ID
      onClick={() => navigate(`/news/${id}`)}
      // Added flex classes so cards in a grid always stretch to the same height
      className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 border border-gray-100 flex flex-col h-full"
    >
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      
      <h3 className="text-xl font-semibold text-[#1f4d3a] mb-2">
        {title}
      </h3>
      
      {/* flex-grow pushes the footer to the bottom if the text is short */}
      <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
        {summary}
      </p>
      
      {/* mt-auto ensures the footer sticks to the bottom of the card */}
      <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
        <div className="flex items-center gap-1">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        <span className="text-[#214e3b] font-medium">Read more →</span>
      </div>
    </motion.div>
  );
};

export default NewsCard;