import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Store,
  BookOpen,
  Lightbulb,
  Handshake,
  Newspaper,
  LayoutGrid,
} from "lucide-react";

const FeaturesSection = () => {
  // Features Data

  const features = [
    {
      id: 1,
      name: "Marketplace",
      icon: Store,
      color: "green",
      path: "/marketplace",
    },
    {
      id: 2,
      name: "Learn",
      icon: BookOpen,
      color: "green",
      path: "/learn",
    },
    {
      id: 3,
      name: "Ideas",
      icon: Lightbulb,
      color: "yellow",
      path: "/ideas",
    },
    {
      id: 4,
      name: "Help",
      icon: Handshake,
      color: "yellow",
      path: "/help",
    },
    {
      id: 5,
      name: "News",
      icon: Newspaper,
      color: "green",
      path: "/news",
    },
    {
      id: 6,
      name: "Directory",
      icon: LayoutGrid,
      color: "green",
      path: "/directory",
    },
  ];


  const navigate = useNavigate();

  const handleFeatureClick = (path) => {
    navigate(path); // Go to the specific page
  };

  return (
    <section className="min-h-screen bg-amber-50 p-8 md:p-16 font-sans">
      <div className="max-w-4xl mx-auto ">
        {/* Title */}
        <h2 className="text-3xl md:text-3xl font-bold text-green-900 mb-12 text-center pb-6 border-b border-green-200">
          Features
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 ">
          {features.map((feature) => (
            <button
              key={feature.id}
              type="button"
              onClick={() => handleFeatureClick(feature.path)}
              className="flex flex-col items-center group cursor-pointer bg-transparent border-none p-0"
            >
              {/* Icon Circle Container */}
              <div
                className={`
                  w-24 h-24 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110
                  ${
                    feature.color === "green" ? "bg-[#ECFCCB]" : "bg-[#FEF9C3]"
                  } 
                  `}
              >
                {/* Render the Icon */}
                <feature.icon
                  size={50}
                  strokeWidth={2.5}
                  className={`
                    ${
                      feature.color === "green"
                        ? "text-[#406a05]"
                        : "text-[#EAB308]"
                    }
                  `}
                />
              </div>

              {/* Label */}
              <h3 className="font-bold text-[#1A3824] mt-1">{feature.name}</h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
