import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useApps from "../../hooks/useApps";
import { getStoreDb } from "../../utility/utility";
import App from "../../Components/App/App";
import Loader from "../../Components/Loader/Loader";
import Error from "../Error/Error";

const Installation = () => {
  const [installedApps, setIsInstalledApp] = useState([]);
  const [sort, setSort] = useState("");
  const { apps, loading, error } = useApps();

  //   if (loading) return <Loader></Loader>;
  //   if (error) return <Error></Error>;

  useEffect(() => {
    const storedAppData = getStoreDb();

    const convertedStoredApp = storedAppData.map((id) => parseInt(id));
    console.log(convertedStoredApp);
    const installedApp = apps.filter((app) =>
      convertedStoredApp.includes(app.id)
    );
    console.log(installedApp);
    setIsInstalledApp(installedApp);
  }, [apps]);

  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "downloads") {
      const sortedByDownloads = [...installedApps].sort(
        (a, b) => a.downloads - b.downloads
      );
      setIsInstalledApp(sortedByDownloads);
    }

    if (sortType === "size") {
      const sortedBySize = [...installedApps].sort((a, b) => a.size - b.size);
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
        <h3>Installation Apps</h3>
        <label className="form-control w-full max-w-xs">
          <select className="select select-bordered">
            Sort by : {sort ? sort : ""}
            {/* <option value="none">Sort by : {sort ? sort : ""}</option> */}
            <option onClick={() => handleSort("downloads")} value="downloads">
              Downloaded MB
            </option>
            <option onClick={() => handleSort("size")} value="size">
              Downloading People
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
              <div>
                <p className="text-center text-4xl font-bold text-gray-500 mt-3">
                  No apps installed
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                {installedApps.map((a) => (
                  <App
                    key={a.id}
                    a={a}
                    onRemove={(id) => {
                      const updated = installedApps.filter(
                        (app) => app.id !== id
                      );
                      setIsInstalledApp(updated);
                    }}
                  ></App>
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
