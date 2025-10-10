import React from "react";
import { CiSaveDown2 } from "react-icons/ci";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { image, title, downloads, ratingAvg, id } = app;
  console.log();
  return (
    <div className="card bg-base-100 w-70 shadow-sm hover:scale-105 transition ease-in-out">
      <Link to={`/appDetails/${id}`}>
        <figure className="px-10 pt-10">
          <img src={image} alt={title} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <div className="flex gap-20">
            <p className="flex items-center bg-green-100 text-green-700 font-semibold p-1 rounded-md">
              {" "}
              <CiSaveDown2 />
              {downloads}
              M
            </p>
            <p className="flex items-center justify-end bg-green-100 text-green-700 font-semibold p-1 rounded-md">
              {" "}
              <FaRegStarHalfStroke />
              {ratingAvg}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AppCard;
