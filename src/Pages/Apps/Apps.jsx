import React, { useState } from "react";
import useApps from "../../hooks/useApps";
import AppCard from "../../Components/AppCard/Appcard";
import { Link } from "react-router";

const Apps = () => {
  const { apps, loading, error } = useApps();
  console.log(apps, loading, error);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Our All Applications</h1>
      <p className="text-center mb-5 md:mb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between ">
        <h3 className="text-lg font-bold">
          <span className="text-sm">({filteredApps.length})</span>Apps Found
        </h3>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 md:py-10">
        {filteredApps && filteredApps.length > 0 ? (
          filteredApps.map((app) => <AppCard key={app.id} app={app} />)
        ) : (
          <div className="text-center col-span-3 flex flex-col items-center gap-4">
            <p className="text-gray-500 text-6xl font-bold">No Apps Found</p>
            {/* <Link
              to="/apps"
              className="btn bg-gradient-to-r from-purple-900  to-purple-500  text-white"
            >
              Show All Apps
            </Link> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
