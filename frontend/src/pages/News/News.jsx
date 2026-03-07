import React from "react";
import NewsCard from "../../components/Cards/NewsCard";

const News = () => {
  return (
    <div className="p-6">
      <h1 className="text-center text-2xl font-bold text-[#1f4d3a] mb-4">Gramlink News</h1>
      <NewsCard />
      <NewsCard  
    title={"Government"}
    summary={"The government has launched a new subsidy scheme to support small and marginal farmers across rural regions."}
    location= {"West Bengal"}
    date= {"12 Jan 2026"}  />
      <NewsCard />
      <NewsCard />
    </div>
  );
};

export default News;
