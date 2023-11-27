import { useMyContext } from "../MyContext";
import { useNavigate } from "react-router-dom";

const TopFooter = () => {
  const navigate = useNavigate();
  const { selectedMode } = useMyContext();

  const handleSendUsAMessageOnClick = () => {
    // Navigate to another screen
    navigate("/message");
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div
        className="text-center p-4 md:p-32 space-y-4"
        style={
          selectedMode === "brand"
            ? {
                background: "linear-gradient(180deg, #F1B643 0%, #F9E000 100%)",
              }
            : {
                background:
                  "linear-gradient(213deg, #F36600 12.5%, #F30000 56.39%)",
              }
        }
      >
        <h1
          className={`${
            selectedMode === "brand"
              ? "text-color-dark-blue"
              : "text-color-white"
          } font-Clash-Display font-bold text-3xl md:text-4xl lg:text-5xl w-80 md:w-144 mx-auto`}
        >
          Not sure whether Influnaire is for you?
        </h1>
        <button
          className="bg-color-cyan text-color-141414 font-font-source-sans-pro rounded-full px-4 py-2 shadow-md"
          onClick={handleSendUsAMessageOnClick}
        >
          Send us a message
        </button>
      </div>
    </>
  );
};

export default TopFooter;
