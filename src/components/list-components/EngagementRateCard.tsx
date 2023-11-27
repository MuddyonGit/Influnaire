import { Link } from "react-router-dom";
import {
  PiInstagramLogoThin,
  PiYoutubeLogoLight,
  PiFacebookLogoThin,
} from "react-icons/pi";
import { BiBarChartAlt2 } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";

interface EngagementRateCardProps {
  id: number;
  image: string;
  name: string;
  username: string;
  instaLink: string;
  facebookLink: string;
  youtubeLink: string;
  engagementRate: number;
  followers: number;
}

const EngagementRateCard: React.FC<EngagementRateCardProps> = (props) => {
  return (
    <>
      <div
        className="bg-color-white flex flex-col sm:flex-row  justify-center items-center gap-6 px-2 py-14 rounded-2xl mt-2 xl:mt-0 lg:mr-2 w-full sm:w-full md:w-144"
        style={{
          boxShadow: "0px 1.69714px 1.69714px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div
          className="flex flex-col justify-center items-center py-3 gap-2 rounded-3xl w-full md:w-44"
          style={{
            background:
              "var(--grad, linear-gradient(180deg, #D3F2FF 59.9%, #CAE9FF 100%))",
          }}
        >
          <img
            src={props.image}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="leading-4 text-center">
            <h3 className="text-sm text-color-light-blue font-font-source-sans-pro">
              {props.name}
            </h3>
            <p className="text-xs text-color-gray-black">@{props.username}</p>
          </div>
          <div className="flex gap-1">
            <Link
              to={props.instaLink}
              className="bg-color-white p-1 rounded-full"
            >
              <PiInstagramLogoThin style={{ color: "#0093DB" }} />
            </Link>
            <Link
              to={props.youtubeLink}
              className="bg-color-white p-1 rounded-full"
            >
              <PiYoutubeLogoLight style={{ color: "#FF0000" }} />
            </Link>
            <Link
              to={props.facebookLink}
              className="bg-color-white p-1 rounded-full"
            >
              <PiFacebookLogoThin style={{ color: "#0093DB" }} />
            </Link>
          </div>
          <button className="text-color-white font-font-source-sans-pro font-bold bg-color-dodgerblue rounded-full px-4 py-1 text-xxs">
            View Full Profile Analysis
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col gap-2 sm:gap-4">
            <div className="flex items-center sm:items-center text-color-light-blue font-font-source-sans-pro sm:gap-1">
              <div className="text-3xl">
                <BiBarChartAlt2 />
              </div>
              <p className="text-xs sm:text-sm ">Engagement Rate</p>
            </div>
            <h1 className="font-bold text-color-dim-black text-2xl">
              {props.engagementRate}%
            </h1>
          </div>
          <div className="flex flex-col gap-2 sm:gap-4 ">
            <div className="flex items-center text-color-light-blue font-font-source-sans-pro gap-1">
              <div className="text-3xl">
                <BsPeople />
              </div>
              <p className="text-xs sm:text-sm">Followers</p>
            </div>
            <h1 className="font-bold text-color-dim-black text-2xl">
              {props.followers}K
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default EngagementRateCard;
