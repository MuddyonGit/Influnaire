import { useMyContext } from "../../MyContext";
import influencerCollaborationImage from "../../assets/InfluencerCollaborationImage.png";
import creatorAppImage from "../../assets/CreatorAppImage.png";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import playStoreIcon from "../../assets/PlayStoreIcon.jpg";

const BottomOfMiddleSection = () => {
  const { selectedMode } = useMyContext();
  return (
    <>
      <div className={selectedMode === "brand" ? "md:mt-16" : "md:mt-32"}>
        {selectedMode === "brand" ? (
          <div className="flex flex-col">
            <div className="flex flex-col gap-4 items-center">
              <h1 className="font-Clash-Display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text text-center leading-tight">
                The influencer <br /> collaboration platform
              </h1>
              <p className="text-color-dark-gray font-inter font-bold text-center w-80 md:w-144">
                An all-in-one platform for programs and paid campaigns combined
                with exceptional customer experience.
              </p>
              <button className="bg-color-dodgerblue text-color-white px-8 py-2 rounded-full font-bold font-font-source-sans-pro">
                Get Started
              </button>
            </div>
            <div className="flex justify-center relative">
              <img
                src={influencerCollaborationImage}
                alt=""
                className="md:w-3/5 lg:w-1/2 object-cover absolute z-10"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6 lg:flex-row justify-between  md:justify-around px-4 md:px-20">
            <div className="flex flex-col gap-8 w-full">
              <h1 className="font-Clash-Display text-5xl font-bold gradient-text leading-tight">
                Our Creator App
              </h1>
              <p className="text-color-dark-gray font-inter font-bold w-72 lg:w-96">
                Built by creators, for creators, our app Influnaire is your
                ticket to manage impactful campaigns on-the-go. Say hello to
                unified content management, performance metrics, and real-time
                updates — all at your fingertips.
              </p>
              <div className="flex  gap-4">
                <Link
                  to="#"
                  className="flex items-center bg-color-white px-4 py-1 rounded-sm shadow-md"
                >
                  <img src={playStoreIcon} alt="" className="w-10" />
                  <p className="font-font-source-sans-pro text-xs font-bold">
                    Get it on <br />
                    <span className="text-sm">Google Play</span>
                  </p>
                </Link>
                <Link
                  to="#"
                  className="flex items-center bg-color-white px-4 py-1 rounded-sm shadow-md"
                >
                  <FaApple style={{ height: "3rem" }} />
                  <p className="font-font-source-sans-pro text-xs font-bold ml-2">
                    Download on the <br />
                    <span className="text-sm">App Store</span>
                  </p>
                </Link>
              </div>
            </div>
            <div className="relative lg:w-full 2xl:w-1/2">
              <img
                src={creatorAppImage}
                alt=""
                className="w-full object-cover absolute z-10"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BottomOfMiddleSection;
