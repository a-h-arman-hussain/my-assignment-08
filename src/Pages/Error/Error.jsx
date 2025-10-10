import React from "react";
import errorImg from "../../assets/error-404.png";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center mt-5">
      <img src={errorImg} alt="" />
      <h1 className="text-4xl font-bold text-blue-900">
        Oops, page not found!
      </h1>
      <p>The page you are looking for is not available.</p>
      <Link
        to="/"
        className="btn bg-gradient-to-r from-purple-900  to-purple-500  text-white"
      >
        Go To Home!
      </Link>
    </div>
  );
};

export default Error;
