import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NewsItem = ({ title, summary, location, date, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 border border-gray-100 mb-4"
    >
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <h3 className="text-xl font-semibold text-[#1f4d3a] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm line-clamp-3 mb-4">{summary}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        <span className="text-[#214e3b] font-medium">Read more →</span>
      </div>
    </motion.div>
  );
};

const NewsCard = () => {
  const navigate = useNavigate();

  

  return (
    <div className="bg-amber-50 p-4">
      <NewsItem onClick={() => navigate("/news/1")} />
      
    </div>
  );
};

export default NewsCard;
