import React from "react";
import googlePlayIcon from "../../assets/google-play-svgrepo-com.svg";
import appStoreIcon from "../../assets/App_Store_(iOS)-Logo.wine.svg";
import bannerPic from "../../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <h1 className="text-[50px] font-bold text-center">
        We Build <br /> <span className="text-purple-500">Productive </span>{" "}
        Apps
      </h1>
      <p className="text-gray-700 text-center">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center items-center gap-4 mt-4">
        <a href="https://play.google.com/store/games?hl=en">
          <button className="btn btn-outline">
            <img
              className="w-6 h-6
        "
              src={googlePlayIcon}
              alt=""
            />
            Google Play
          </button>
        </a>
        <a href="https://www.apple.com/app-store/">
          <button className="btn btn-outline">
            <img className="w-6 h-6" src={appStoreIcon} alt="" />
            App Store
          </button>
        </a>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <img src={bannerPic} alt="" />
        <div className="bg-gradient-to-r from-purple-700  to-purple-500 w-full p-10">
          <h3 className="text-4xl font-bold text-center text-white">
            Trusted by Millions, Built for You
          </h3>
          <div className="flex flex-col md:flex-row  justify-around px-5 mt-8">
            <div>
              <p className="text-center text-white">Total Downloads</p>
              <h1 className="text-center text-5xl font-bold text-white">
                29.6M
              </h1>
              <p className="text-center text-white">21% more than last month</p>
            </div>
            <div>
              <p className="text-center text-white">Total Reviews</p>
              <h1 className="text-center text-5xl font-bold text-white">
                906K
              </h1>
              <p className="text-center text-white">46% more than last month</p>
            </div>
            <div>
              <p className="text-center text-white">Active Apps</p>
              <h1 className="text-center text-5xl font-bold text-white">
                132+
              </h1>
              <p className="text-center text-white">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
