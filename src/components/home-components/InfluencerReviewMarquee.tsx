import React from "react";
import { influencerReviewList } from "../../utilities/data";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const InfluencerReviewMarquee: React.FC = () => {
  const oddIndexItems = influencerReviewList.filter(
    (_, index) => index % 2 === 0
  );
  const evenIndexItems = influencerReviewList.filter(
    (_, index) => index % 2 === 1
  );

  return (
    <div className="mt-48 md:mt-60 lg:mt-28">
      <Marquee speed={50} pauseOnHover={true} direction="left">
        {oddIndexItems.map((review, index) => (
          <div key={index} className="influencer-card">
            <div className="flex flex-row">
              <div>
                <img src={review.image} className="w-72 lg:h-72" />
              </div>
              <div className="bg-color-sky-blue p-6 flex flex-col justify-around  w-96 lg:h-72">
                <p className="text-color-white font-bold">{review.review}.</p>
                <div className="text-color-white flex flex-col gap-0">
                  <p className="font-bold text-xs">{review.name}</p>
                  <p className="font-bold text-xxs opacity-70">
                    {review.followers} FOLLOWERS
                  </p>
                  <p className="font-bold text-xxs opacity-70">
                    {review.genre}
                  </p>
                  <Link to="#">
                    <p className="font-bold text-xxs opacity-70 underline">
                      {review.channelName}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>

      <Marquee speed={50} pauseOnHover={true} direction="right">
        {evenIndexItems.map((review, index) => (
          <div key={index} className="influencer-card">
            <div className="flex flex-row-reverse">
              <div>
                <img src={review.image} className="w-72 lg:h-72" />
              </div>
              <div className="bg-color-sky-blue p-6 flex flex-col justify-around w-96 lg:h-72">
                <p className="text-color-white font-bold">{review.review}.</p>
                <div className="text-color-white flex flex-col gap-0">
                  <p className="font-bold text-xs">{review.name}</p>
                  <p className="font-bold text-xxs opacity-70">
                    {review.followers} FOLLOWERS
                  </p>
                  <p className="font-bold text-xxs opacity-70">
                    {review.genre}
                  </p>
                  <p className="font-bold text-xxs opacity-70 underline">
                    {review.channelName}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default InfluencerReviewMarquee;
