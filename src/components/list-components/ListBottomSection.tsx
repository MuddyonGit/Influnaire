import EngagementRateCard from "./EngagementRateCard";
import engagementRateCardImage from "../../assets/BrandCardImage1.jpg";
import FollowersCard from "./FollowersCard";

const ListBottomSection = () => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(180deg, #D5D5D5 0%, #FFF 38.71%)",
        }}
        className="py-10 px-2"
      >
        <h1 className="font-Clash-Display text-center font-bold text-color-blue text-3xl">
          Showing 200 infuencers
        </h1>
        <div className="flex flex-col justify-center items-center xl:flex-row w-full pt-10">
          <EngagementRateCard
            id={1}
            image={engagementRateCardImage}
            name="Huda Saud"
            username="hudasaud"
            instaLink="#"
            facebookLink="#"
            youtubeLink="#"
            engagementRate={17}
            followers={22}
          />
          <EngagementRateCard
            id={1}
            image={engagementRateCardImage}
            name="Huda Saud"
            username="hudasaud"
            instaLink="#"
            facebookLink="#"
            youtubeLink="#"
            engagementRate={17}
            followers={22}
          />
          <EngagementRateCard
            id={1}
            image={engagementRateCardImage}
            name="Huda Saud"
            username="hudasaud"
            instaLink="#"
            facebookLink="#"
            youtubeLink="#"
            engagementRate={17}
            followers={22}
          />
        </div>
        <FollowersCard />
      </div>
    </>
  );
};

export default ListBottomSection;
