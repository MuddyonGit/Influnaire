import BottomOfMiddleSection from "./BottomOfMiddleSection";
import CardSlider from "./CardSlider";
import MarketingCycle from "./MarketingCycle";
import { useMyContext } from "../../MyContext";
import CreateTestimonials from "./CreateTestimonials";
import BlueComponent from "./BlueComponent";
import InfluencerReviewMarquee from "./InfluencerReviewMarquee";
import FindPerfectCampaign from "./FindPerfectCampaign";
import BrandCardMarquee from "./BrandCardMarquee";

const MiddleSection = () => {
  const { selectedMode } = useMyContext();
  return (
    <>
      <div
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #D5D5D5 100%)",
        }}
      >
        <CardSlider />
        <MarketingCycle />
        <BottomOfMiddleSection />
        {selectedMode !== "brand" ? <CreateTestimonials /> : ""}
        {selectedMode === "brand" ? <BlueComponent /> : ""}
      </div>
      {selectedMode !== "brand" ? <InfluencerReviewMarquee /> : ""}
      {selectedMode !== "brand" ? <FindPerfectCampaign /> : ""}
      {selectedMode !== "brand" ? <BrandCardMarquee /> : ""}
    </>
  );
};

export default MiddleSection;
