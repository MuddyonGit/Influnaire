import { useMyContext } from "../../MyContext";
import ImageSlider from "./ImageSlider";
import ToggleSwitch from "./ToggleSwitch";
import TopLeftSection from "./TopLeftSection";
import BottomTopSection from "./BottomTopSection";

const TopSection = () => {
  const { selectedMode } = useMyContext();
  return (
    <div>
      <div
        className={` px-0 pt-36 pb-72 lg:pb-60 relative `}
        style={
          selectedMode === "brand"
            ? {
                background:
                  "linear-gradient(204deg, #009BF3 15.18%, #0052F3 54.65%)",
              }
            : {
                background:
                  "linear-gradient(213deg, #F36600 12.5%, #F30000 56.39%)",
              }
        }
      >
        <div
          style={{
            background:
              " linear-gradient(255deg, rgba(0, 155, 243, 0.00) 22.45%, rgba(0, 82, 243, 0.87) 63.28%)",
          }}
          className="w-full  absolute inset-0 z-10"
        ></div>
        <div className="">
          <div className="largerDevices:max-w-7xl mx-auto">
            <ToggleSwitch />
          </div>
          <div className="relative">
            <ImageSlider />
          </div>
          <div className="largerDevices:max-w-7xl mx-auto">
            <div className="absolute top-56 z-10 largerDevices:max-w-7xl mx-auto ">
              <TopLeftSection />
            </div>
          </div>
        </div>
        <BottomTopSection />
      </div>
    </div>
  );
};

export default TopSection;
