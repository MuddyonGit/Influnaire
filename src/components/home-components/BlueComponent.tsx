import BrandReviewMarquee from "./BrandReviewMarquee";
import InfluencerPlatform from "./InfluencerPlatform";
import ViewList from "./ViewList";

const BlueComponent = () => {
  return (
    <>
      <div
        className="py-20 pb-20 mt-32 md:mt-52 lg:mt-60 xl:80 2xl:mt-72 largerDevices:mt-96 extraLargerDevices:mt-144 hugeDevices:mt-144"
        style={{
          background: "linear-gradient(180deg, #43A8F1 0%, #0E3D82 100%)",
        }}
      >
        <div className="flex flex-col gap-8 md:flex-row justify-around items-center p-0 mt-20 lg:mt-48 largerDevices:max-w-7xl mx-auto">
          <div className="w-72 md:w-96 flex flex-col gap-4">
            <h1 className="text-color-blue-white font-Clash-Display text-3xl md:text-5xl font-bold">
              Curated Lists to make your life easier
            </h1>
            <p className="text-color-blue-white font-inter font-bold text-sm">
              An all-in-one platform for programs and paid campaigns combined
              with exceptional customer experience.
            </p>
            <button className="bg-color-orange text-color-white px-8 py-2 rounded-full  font-font-source-sans-pro w-40">
              Get Started
            </button>
          </div>
          <ViewList />
        </div>
        <InfluencerPlatform />
        <BrandReviewMarquee />
      </div>
    </>
  );
};

export default BlueComponent;
