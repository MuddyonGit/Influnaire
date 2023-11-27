import { useMyContext } from "../../MyContext";
import "@fontsource/source-sans-pro";

function ToggleSwitch() {
  const { toggleSwitch, selectedMode } = useMyContext();

  return (
    <div className="px-8 lg:px-12 md:px-14">
      <div className="custom-toggle-switch w-64 relative h-10">
        <label
          className={`${
            selectedMode === "brand"
              ? "bg-color-yellow z-10 border-2 border-solid border-color-white"
              : " z-10 border-2 border-solid border-color-white rounded-r-none"
          } px-8 py-4 cursor-pointer rounded-full absolute top-0 left-0 w-1/2 text-color-white text-center font-bold`}
          onClick={toggleSwitch}
        >
          Brand
        </label>
        <label
          className={`${
            selectedMode === "influencer"
              ? "bg-color-yellow  z-10 border-2 border-solid border-color-white"
              : "border-2 border-solid border-color-white z-10 rounded-l-none border-l-0"
          } px-8 py-4 cursor-pointer rounded-full absolute top-0 right-0 w-1/2 -translate-x-6 text-color-white text-center font-bold`}
          onClick={toggleSwitch}
        >
          Influencer
        </label>
      </div>
    </div>
  );
}

export default ToggleSwitch;
