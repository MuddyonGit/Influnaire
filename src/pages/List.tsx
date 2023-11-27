import ListBottomSection from "../components/list-components/ListBottomSection";
import ListBrandMarquee from "../components/list-components/ListBrandMarquee";
import ListTopSection from "../components/list-components/ListTopSection";

const List = () => {
  return (
    <>
      <div className="w-full h-[45%] absolute top-17 left-0 z-0"></div>
      <ListTopSection />
      <div
        className="h-60"
        style={{
          background: "linear-gradient(180deg, #F1B643 0%, #F9E000 100%",
        }}
      ></div>
      <ListBrandMarquee />
      <ListBottomSection />
    </>
  );
};

export default List;
