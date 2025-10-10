import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useApps from "../../hooks/useApps";
import UninstallApp from "../../Components/UninstallApp/UninstallApp";
import { getStoreDb } from "../../utility/utility";
import Loader from "../../Components/Loader/Loader";
import { Link } from "react-router";

const Installation = () => {
  const [installedApps, setIsInstalledApp] = useState([]);
  const [sort, setSort] = useState("");
  const { apps } = useApps();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const storedAppData = getStoreDb();

    const convertedStoredApp = storedAppData.map((id) => parseInt(id));
    console.log(convertedStoredApp);
    const installedApp = apps.filter((app) =>
      convertedStoredApp.includes(app.id)
    );
    console.log(installedApp);
    setIsInstalledApp(installedApp);
    setloading(false);
  }, [apps]);
  if (loading) {
    return <Loader></Loader>;
  }
  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "downloads") {
      const sortedByDownloads = [...installedApps].sort(
        (a, b) => a.downloads - b.downloads
      );
      setIsInstalledApp(sortedByDownloads);
    }

    if (sortType === "downloads") {
      const sortedBySize = [...installedApps].sort(
        (a, b) => b.downloads - a.downloads
      );
      setIsInstalledApp(sortedBySize);
    }
  };
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Your Installed Apps</h1>
      <p className="text-center mb-5">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex justify-between">
        <h3 className="text-3xl font-bold mb-2">
          Installed Apps{" "}
          <span className="text-xl text-gray-500">
            ({installedApps.length})
          </span>
        </h3>
        <label className="form-control w-full max-w-xs">
          <select className="select select-bordered">
            Sort by : {sort ? sort : ""}
            <option onClick={() => handleSort("downloads")} value="downloads">
              Low - Hight
            </option>
            <option onClick={() => handleSort("downloads")} value="downloads">
              Hight - Low
            </option>
          </select>
        </label>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Install Apps</Tab>
          </TabList>

          <TabPanel>
            {installedApps.length === 0 ? (
              <div className="flex flex-col justify-center items-center gap-5">
                <p className="text-center text-4xl font-bold text-gray-500 mt-3">
                  No apps installed
                </p>
                <Link
                  to="/"
                  className="btn bg-gradient-to-r from-purple-900  to-purple-500 text-white"
                >
                  Go To Home
                </Link>
              </div>
            ) : (
              <div className="grid gap-4">
                {installedApps.map((a) => (
                  <UninstallApp
                    key={a.id}
                    a={a}
                    onRemove={(id) => {
                      const updated = installedApps.filter(
                        (app) => app.id !== id
                      );
                      setIsInstalledApp(updated);
                    }}
                  ></UninstallApp>
                ))}
              </div>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Installation;
