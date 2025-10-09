// import React from "react"; // useState
// import { useParams } from "react-router";
// import useApps from "../../hooks/useApps";
// import { CiSaveDown2 } from "react-icons/ci";
// import { FaStar } from "react-icons/fa6";
// import { AiFillLike } from "react-icons/ai";
// import Chart from "../../Components/Chart/Chart";
// import AppsError from "../AppsError/AppsError";
// import Loader from "../../Components/Loader/Loader";
// import { addToStoreDb } from "../../utility/utility";
// import { ToastContainer, toast } from "react-toastify";

// const AppDetails = () => {
//   const { id } = useParams();

//   const [isInstalled, setIsInstalled] = useState(false);
//   const { apps, loading } = useApps();

//   const app = apps.find((a) => a.id === Number(id));

//   if (loading) return <Loader></Loader>;

//   if (!app) {
//     return <AppsError></AppsError>;
//   }

//   const {
//     title,
//     image,
//     companyName,
//     downloads,
//     reviews,
//     ratingAvg,
//     description,
//     ratings,
//   } = app || {};

//   const handleInstall = (id) => {
//     toast("Wow This App Downloading!");

//     addToStoreDb(id);
//   };

//   return (
//     <div>
//       <div className="hero bg-base-200 border-b border-gray-400 pb-5">
//         <div className="hero-content flex-col lg:flex-row">
//           <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
//           <div>
//             <div className="border-b border-gray-400 pb-5">
//               <h1 className="text-5xl font-bold">{title}</h1>
//               <p>
//                 Developed by{" "}
//                 <span className="text-purple-500">{companyName}</span>
//               </p>
//             </div>
//             <div className="flex justify-around gap-8">
//               <div className="py-4">
//                 <span className="text-green-500 text-3xl">
//                   <CiSaveDown2 />
//                 </span>
//                 <p className="text-gray-400">Downloads</p>
//                 <h1 className="text-4xl font-bold">{downloads}</h1>
//               </div>
//               <div className="py-4">
//                 <span className="text-orange-500 text-3xl">
//                   <FaStar />
//                 </span>
//                 <p className="text-gray-400">Average Ratings</p>
//                 <h1 className="text-4xl font-bold">{ratingAvg}</h1>
//               </div>
//               <div className="py-4">
//                 <span className="text-purple-500 text-3xl">
//                   <AiFillLike />
//                 </span>
//                 <p className="text-gray-400">Total Reviews</p>
//                 <h1 className="text-4xl font-bold">{reviews}</h1>
//               </div>
//             </div>
//             <button
//               className="btn"
//               onClick={() => handleInstall(id)}
//               disabled={isInstalled}
//               className={`btn text-white ${
//                 isInstalled ? "bg-green-500 cursor-not-allowed" : "bg-green-500"
//               }`}
//             >
//               {isInstalled ? "Installed" : "Install"}
//             </button>
//             <ToastContainer />
//           </div>
//         </div>
//       </div>
//       <Chart ratings={ratings}></Chart>
//       <div className="mt-20">
//         <h1 className="text-3xl font-bold my-5">Description</h1>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default AppDetails;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import { CiSaveDown2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import Chart from "../../Components/Chart/Chart";
import AppsError from "../AppsError/AppsError";
import Loader from "../../Components/Loader/Loader";
import { addToStoreDb } from "../../utility/utility";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const [isInstalled, setIsInstalled] = useState(false);

  const app = apps.find((a) => a.id === Number(id));

  useEffect(() => {
    const installed = JSON.parse(localStorage.getItem("installed")) || [];
    const already = installed.some((a) => a.id === Number(id));
    setIsInstalled(already);
  }, [id]);

  if (loading) return <Loader />;
  if (!app) return <AppsError />;

  const {
    title,
    image,
    companyName,
    downloads,
    reviews,
    ratingAvg,
    description,
    ratings,
  } = app;

  const handleInstall = () => {
    // if (isInstalled) {
    //   toast.info(`${title} is already installed!`, { autoClose: 2000 });
    //   return;
    // }

    const existing = JSON.parse(localStorage.getItem("installed")) || [];
    const updated = [...existing, { id: Number(id), title }];
    localStorage.setItem("installed", JSON.stringify(updated));

    addToStoreDb(id);

    setIsInstalled(true);
    toast.success(`${title} installed successfully!`, { autoClose: 2000 });
  };

  return (
    <div>
      <div className="hero bg-base-200 border-b border-gray-400 pb-5">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <div className="border-b border-gray-400 pb-5">
              <h1 className="text-5xl font-bold">{title}</h1>
              <p>
                Developed by{" "}
                <span className="text-purple-500">{companyName}</span>
              </p>
            </div>

            <div className="flex justify-around gap-8">
              <div className="py-4 text-center">
                <span className="text-green-500 text-3xl">
                  <CiSaveDown2 />
                </span>
                <p className="text-gray-400">Downloads</p>
                <h1 className="text-4xl font-bold">{downloads}</h1>
              </div>

              <div className="py-4 text-center">
                <span className="text-orange-500 text-3xl">
                  <FaStar />
                </span>
                <p className="text-gray-400">Average Ratings</p>
                <h1 className="text-4xl font-bold">{ratingAvg}</h1>
              </div>

              <div className="py-4 text-center">
                <span className="text-purple-500 text-3xl">
                  <AiFillLike />
                </span>
                <p className="text-gray-400">Total Reviews</p>
                <h1 className="text-4xl font-bold">{reviews}</h1>
              </div>
            </div>

            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`btn mt-5 text-white ${
                isInstalled
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {isInstalled ? "Installed" : "Install"}
            </button>

            <ToastContainer />
          </div>
        </div>
      </div>

      <Chart ratings={ratings} />

      <div className="mt-20">
        <h1 className="text-3xl font-bold my-5">Description</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
