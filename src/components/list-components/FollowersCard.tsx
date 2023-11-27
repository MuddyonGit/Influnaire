import React, { useState, useRef } from "react";
import { followersCard } from "../../utilities/data";
import {
  PiInstagramLogoThin,
  PiYoutubeLogoLight,
  PiFacebookLogoThin,
} from "react-icons/pi";
import { Link } from "react-router-dom";

const FollowersCard: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const showAllButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleButtonClick = () => {
    setShowAll(!showAll);

    if (showAll) {
      const element = document.getElementById("first-follower-card");

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const displayedData = showAll ? followersCard : followersCard.slice(0, 4);

  return (
    <div className="py-10">
      <div
        className="flex flex-wrap justify-center gap-4"
        id="first-follower-card"
      >
        {displayedData.map((member) => (
          <div
            key={member.id}
            className="flex flex-col justify-center items-center py-3 gap-2 rounded-3xl w-60 mb-4 sm:w-12 md:w-1/3 lg:w-1/5"
            style={{
              background:
                "var(--grad, linear-gradient(180deg, #D3F2FF 59.9%, #CAE9FF 100%))",
            }}
          >
            <img
              src={member.image}
              className="w-14 h-14 rounded-full object-cover"
              alt={`${member.name}'s profile`}
            />
            <div className=" text-center">
              <h3 className="text-1xl text-color-light-blue font-font-source-sans-pro font-semibold">
                {member.name}
              </h3>
              <div className="flex gap-2 justify-center">
                <Link to={member.instaLink}>
                  <PiInstagramLogoThin style={{ color: "#0093DB" }} />
                </Link>
                <Link to={member.facebookLink}>
                  <PiFacebookLogoThin style={{ color: "#0093DB" }} />
                </Link>
                <Link to={member.youtubeLink}>
                  <PiYoutubeLogoLight style={{ color: "#FF0000" }} />
                </Link>
              </div>
            </div>
            <h1 className="font-font-source-sans-pro font-semibold text-color-light-blue text-2xl">
              {member.followers}K
              <span className="text-color-light-cyan text-base ml-2">
                Followers
              </span>
            </h1>
            <button className="text-color-white font-font-source-sans-pro font-bold bg-color-dodgerblue rounded-full px-4 py-1 text-xs">
              View Full Profile Analysis
            </button>
          </div>
        ))}
      </div>
      <div className="text-center">
        {followersCard.length > 4 && (
          <button
            ref={showAllButtonRef}
            className="text-color-white font-font-source-sans-pro font-bold bg-color-light-blue rounded-full px-8 py-3 text-xs mt-4"
            onClick={handleButtonClick}
          >
            {showAll ? "View Less" : "View All"}
          </button>
        )}
      </div>
    </div>
  );
};

export default FollowersCard;
