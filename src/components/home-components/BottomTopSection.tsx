import { useMyContext } from "../../MyContext";

const BottomTpoSection = () => {
  const { selectedMode } = useMyContext();
  return (
    <>
      <div className="relative flex flex-col">
        <div className="text-center  top-10 left-10 md:left-32 lg:left-48 xl:left-120 z-10 space-y-4">
          <p className="text-color-dim-white font-font-source-sans-pro md:text-2xl font-bold ">
            {selectedMode === "brand" ? (
              <>Ready to amplify your brand?</>
            ) : (
              <>Ready to amplify your Creator Profile?</>
            )}{" "}
          </p>
          <h1 className="text-color-white font-Clash-Display font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl lg:w-1/2 mx-auto">
            {selectedMode === "brand" ? (
              <>Influencer Collaboration Made Simple</>
            ) : (
              <>Earn a steady income while doing what you love</>
            )}
          </h1>
        </div>
      </div>
    </>
  );
};

export default BottomTpoSection;
