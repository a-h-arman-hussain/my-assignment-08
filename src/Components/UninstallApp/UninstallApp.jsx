import React from "react";
import { CiSaveDown2 } from "react-icons/ci";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { removeFromStoreDb } from "../../utility/utility";
import { toast } from "react-toastify";

const UninstallApp = ({ a, onRemove }) => {
  //   const [remove, setRemove] = useState(false);

  const { id, image, title, downloads, ratingAvg, size } = a;
  console.log(a);

  const handleRemove = (id) => {
    toast.success(`${title} installed successfully!`, { autoClose: 2000 });

    removeFromStoreDb(id);
    onRemove(id);
  };
  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded-2xl p-3">
      <div className="flex items-center gap-3">
        <img className="w-20 h-20 rounded-xl" src={image} alt={title} />
        <div>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <div
            className="flex gap-5
          "
          >
            <p className="flex items-center  text-green-500">
              <CiSaveDown2 /> {downloads}
            </p>
            <p className="flex items-center  text-orange-500">
              <FaRegStarHalfStroke /> {ratingAvg}
            </p>
            <p className="text-gray-600">{size} MB</p>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleRemove(id)}
          className="btn bg-red-500 text-white"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default UninstallApp;
