import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[50vh] space-y-4">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-purple-600 animate-spin"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-md"></div>
      </div>

      <h2 className="text-xl font-semibold text-gray-700 animate-pulse">
        Loading Apps...
      </h2>

      <div className="flex space-x-1">
        <span className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></span>
        <span className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-100"></span>
        <span className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-200"></span>
      </div>
    </div>
  );
};

export default Loader;
