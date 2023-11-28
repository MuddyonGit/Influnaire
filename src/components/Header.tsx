import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import influnaireLogo from "../assets/InflunaireLogo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const getHeaderStyle = () => {
    if (
      location.pathname === "/contact" ||
      location.pathname === "/message" ||
      location.pathname === "/faq"
    ) {
      return {
        background: "#033856",
        top: 0,
      };
    } else {
      return {
        background: "none",
      };
    }
  };

  return (
    <div className="relative">
      <div
        className="hidden lg:flex items-center justify-between w-full absolute inset-x-0 top-3 z-20 p-4 "
        style={getHeaderStyle()}
      >
        <div className="">
          <Link to="/">
            <img src={influnaireLogo} alt="Influnaire Logo" className="w-1/2" />
          </Link>
        </div>
        <div className="flex gap-8 text-color-white text-base font-normal font-font-source-sans-pro">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Link
            to="https://app.influnaire.dreamkashmir.com/influencer/login"
            className="text-color-white text-base font-normal font-font-source-sans-pro"
          >
            Login
          </Link>
          <button className="text-color-light-blue bg-color-white px-4 py-1 rounded-md font-semibold font-font-source-sans-pro">
            Join The Community
          </button>
        </div>
      </div>

      {/* Display the simplified header for screens below lg */}
      <div className="lg:hidden">
        <div
          className="flex items-center justify-between w-full absolute inset-x-0 top-3 z-20 p-4"
          style={getHeaderStyle()}
        >
          <div className="">
            <Link to="/">
              <img
                src={influnaireLogo}
                alt="Influnaire Logo"
                className="w-1/2"
              />
            </Link>
          </div>
          <div>
            {isMenuOpen ? (
              <FaTimes
                className="text-color-white text-2xl cursor-pointer"
                onClick={closeMenu}
              />
            ) : (
              <FaBars
                className="text-color-yellow text-2xl cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
          <button className="text-color-light-blue bg-color-white px-4 py-1 rounded-md font-semibold font-font-source-sans-pro hidden sm:visible md:visible">
            Join The Community
          </button>
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-color-dark-blue bg-opacity-100 z-30">
            <div className="flex justify-end p-4">
              <FaTimes
                className="text-color-white text-2xl cursor-pointer"
                onClick={closeMenu}
              />
            </div>
            <div className="flex flex-col items-center text-color-white text-base font-normal font-font-source-sans-pro gap-6">
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
              <Link to="/about" onClick={closeMenu}>
                About Us
              </Link>
              <Link to="/pricing" onClick={closeMenu}>
                Pricing
              </Link>
              <Link to="/contact" onClick={closeMenu}>
                Contact Us
              </Link>
              <Link to="/faq" onClick={closeMenu}>
                FAQ
              </Link>
              <Link
                to="https://app.influnaire.dreamkashmir.com/influencer/login"
                onClick={closeMenu}
              >
                Login
              </Link>
            </div>
            <div className="flex justify-center mt-6">
              <button className="text-color-light-blue bg-color-white px-4 py-1 rounded-md font-semibold font-font-source-sans-pro sm:visible md:visible">
                Join The Community
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
