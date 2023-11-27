import React, { useState, useEffect } from "react";
import { useMyContext } from "../../MyContext";
import { FaSearch } from "react-icons/fa";
import nikeLogo from "../../assets/simple-icons_nike.png";
import addidasLogo from "../../assets/simple-icons_adidas.svg";
import pepsiLogo from "../../assets/simple-icons_pepsi.svg";
import jordanLogo from "../../assets/simple-icons_jordan.svg";
import starbucksLogo from "../../assets/simple-icons_starbucks.svg";

const TopLeftSection = () => {
  const { selectedMode } = useMyContext();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const placeholder = isDesktop
    ? "Find influencers that will take your brand to a next level"
    : "Find influencers that will take your brand... ";

  return (
    <>
      <div className="h-screen">
        <div className="px-8 lg:px-12 md:px-14 flex flex-col gap-3 md:gap-6">
          <div>
            <h1 className="text-color-white font-Clash-Display font-black text-2xl md:text-5xl lg:text-7xl ">
              {selectedMode === "brand" ? (
                <>
                  Empowering Influencers,
                  <br />
                  Elevating Brands
                </>
              ) : (
                <>
                  Everything you need to
                  <br />
                  make it as a creator.
                </>
              )}
            </h1>
          </div>
          <div>
            {selectedMode === "brand" ? (
              <>
                <div className="flex justify-between items-center gap-0 md:gap-16 px-4 md:px-8 py-4 border border-color-white rounded-full text-color-white font-font-source-sans-pro font-xl font-bold w-full md:w-144">
                  <input
                    className="w-full bg-transparent text-color-white outline-none placeholder-color-white text-xs sm:text-sm md:text-lg"
                    type="text"
                    placeholder={placeholder}
                  />
                  <button>
                    <FaSearch style={{ fontWeight: "lighter" }} />
                  </button>
                </div>
              </>
            ) : (
              <>
                <button className="text-color-light-blue bg-color-white px-4 py-2 rounded-md font-semibold font-font-source-sans-pro">
                  Join The Community
                </button>
              </>
            )}
          </div>
          <div className="flex gap-6 md:gap-24">
            <img src={nikeLogo} alt="Nike Logo" className="w-8" />
            <img src={addidasLogo} alt="Adidas Logo" className="w-8" />
            <img src={pepsiLogo} alt="Pepsi Logo" className="w-8" />
            <img src={jordanLogo} alt="Joradan Logo" className="w-8" />
            <img src={starbucksLogo} alt="Starbucks Logo" className="w-8" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopLeftSection;
