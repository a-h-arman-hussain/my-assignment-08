import React from "react";
import useApps from "../../hooks/useApps";
import AppCard from "../AppCard/Appcard";
import { NavLink } from "react-router";
import Loader from "../Loader/Loader";
import Error from "../../Pages/Error/Error";

const Main = () => {
  const { apps, loading, error} = useApps();
  
  if (loading) {
    return <Loader></Loader>;
  }
  if (error) {
    return <Error></Error>;
  }
  const trendingApps = apps.slice(0, 8);
  return (
    <div className="my-10">
      <h1 className="text-4xl font-bold text-center">Trending Apps</h1>
      <p className="text-center mt-2">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 md:py-10">
        {trendingApps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
      <div className="flex justify-center">
        <NavLink
          to="apps"
          className="btn bg-gradient-to-r from-purple-900  to-purple-500 text-white"
        >
          Show All Apps
        </NavLink>
      </div>
    </div>
  );
};

export default Main;
