import React from "react";
import NewsCard from "../components/NewsCard";

// Your data array. In the future, this will come from a database API!
const newsArticles = [
  {
    id: 1,
    title: "Government Subsidy Scheme Released",
    summary: "The government has launched a new subsidy scheme to support small and marginal farmers across rural regions. Apply before the end of the month.",
    location: "West Bengal",
    date: "12 Jan 2026",
  },
  {
    id: 2,
    title: "Monsoon Forecast Update",
    summary: "Meteorological department predicts above-average rainfall for the upcoming Kharif season, bringing relief to local farmers.",
    location: "Odisha",
    date: "10 Jan 2026",
  },
  {
    id: 3,
    title: "New Organic Farming Hub",
    summary: "A cooperative society has established a new organic seed distribution center to promote sustainable agriculture and reduce chemical dependency.",
    location: "Punjab",
    date: "08 Jan 2026",
  },
  {
    id: 4,
    title: "Smart Irrigation Subsidies",
    summary: "Local banks are now offering 0% interest loans for farmers looking to install tech-driven drip irrigation systems.",
    location: "Maharashtra",
    date: "05 Jan 2026",
  }
];

const News = () => {
  return (
    // Moved the amber background here to cover the whole page
    <div className="min-h-screen bg-amber-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-center text-4xl font-bold text-[#1f4d3a] mb-8">
          GramLink News
        </h1>

        {/* Responsive Grid: 
          1 column on mobile, 2 on tablets (md), 3 on desktops (lg)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {newsArticles.map((article) => (
            <NewsCard
              key={article.id}
              id={article.id}
              title={article.title}
              summary={article.summary}
              location={article.location}
              date={article.date}
            />
          ))}

        </div>
      </div>
    </div>
  );
};

export default News;