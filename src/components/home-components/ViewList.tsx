import { useNavigate } from "react-router-dom";

import viewListImage1 from "../../assets/ViewListImage1.png";
import viewListImage2 from "../../assets/ViewListImage2.png";
import viewListImage3 from "../../assets/ViewListImage3.png";
import viewListImage4 from "../../assets/ViewListImage4.png";
import viewListImage5 from "../../assets/ViewListImage5.png";

const ViewList = () => {
  const navigate = useNavigate();
  const handleViewListOnClick = () => {
    navigate("/list");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row  items-center">
        <div
          className="py-14 w-full md:px-6 lg:p-10 rounded-3xl "
          style={{
            background: "linear-gradient(180deg, #FFF 0%, #D2FFFA 100%)",
          }}
        >
          <div className="flex justify-center md:justify-start -ml-16">
            <img
              src={viewListImage1}
              alt="View List Image 1"
              className="w-16 h-16 md:w-20 md:h-20 translate-x-16 z-30"
            />
            <img
              src={viewListImage2}
              alt="View List Image 2"
              className="w-16 h-16 md:w-20 md:h-20 translate-x-12 z-20"
            />
            <img
              src={viewListImage3}
              alt="View List Image 3"
              className="w-16 h-16 md:w-20 md:h-20 translate-x-8 z-10"
            />
            <img
              src={viewListImage4}
              alt="View List Image 4"
              className="w-16 h-16 md:w-20 md:h-20 translate-x-4"
            />
            <img
              src={viewListImage5}
              alt="View List Image 5"
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <h1 className="font-Clash-Display text text-color-royal-blue text-4xl md:text-5xl w-96 text-center md:text-left">
            Best Fashion Influencers in Jordan
          </h1>

          <div className="text-center lg:text-left pt-4">
            <button
              className="bg-color-light-blue text-color-white font-bold rounded-full px-8 py-2 lg:px-12 lg:py-3 
               font-font-source-sans-pro text-sm md:text-base "
              onClick={handleViewListOnClick}
            >
              View List
            </button>
          </div>
        </div>
        <div
          className="h-10 w-80 lg:h-72 lg:w-20 rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none opacity-40"
          style={{ background: "#E9FFFC" }}
        ></div>
        <div
          className="h-10 w-72 lg:h-64 lg:w-20 rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none opacity-30"
          style={{ background: "#95D1E8" }}
        ></div>
      </div>
    </>
  );
};

export default ViewList;
