import React from "react";
import useApps from "../../hooks/useApps";

const Installation = () => {
  const { apps, loading } = useApps();
  console.log(apps, loading)
  const { image, title } = apps;
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Your Installed Apps</h1>
      <p className="text-center mb-5">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex justify-between">
        <h3>Installation Apps</h3>
        <label className="form-control w-full max-w-xs">
          <select className="select select-bordered">
            <option value="none">Sort by price</option>
            <option value="price-asc">Low-&gt;High</option>
            <option value="price-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div>
        <div>
          <img src={image} alt="" />
          <div>
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
