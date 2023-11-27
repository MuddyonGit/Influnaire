import { useMyContext } from "../../MyContext";

const ListTopSection = () => {
  const { selectedMode } = useMyContext();
  return (
    <>
      <div
        className=" p-16 pb-32 pt-32 flex flex-col justify-center items-center gap-4 "
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
        <h3 className="text-center font-font-source-sans-pro text-color-white font-bold uppercase tracking-[10px] opacity-70 relative">
          Curated Lists
        </h3>
        <h1 className="font-Clash-Display font-bold text-5xl text-color-white text-center relative">
          Best Fashion <br /> Influencers in Jordan
        </h1>
      </div>
    </>
  );
};

export default ListTopSection;
