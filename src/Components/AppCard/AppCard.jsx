import React from "react";
import { CiSaveDown2 } from "react-icons/ci";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const AppCard = ({ app }) => {
  console.log(app);
  const { image, title, downloads, ratingAvg } = app;
  console.log();
  return (
    <div className="card bg-base-100 w-96 shadow-sm hover:scale-105 transition ease-in-out cursor-pointer">
      <figure className="h-48 overflow-hidden">
        <img className="w-full object-cover" src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between gap-48">
          <p className="flex items-center bg-green-100 text-green-700 font-semibold p-1 rounded-md w-0">
            {" "}
            <CiSaveDown2 />
            {downloads}
          </p>
          <p className="flex items-center justify-end bg-green-100 text-green-700 font-semibold p-1 rounded-md w-0">
            {" "}
            <FaRegStarHalfStroke />
            {ratingAvg}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
