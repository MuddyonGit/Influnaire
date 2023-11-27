import React from "react";
import { brandReviewList } from "../../utilities/data";
import Marquee from "react-fast-marquee";
import { FaQuoteLeft } from "react-icons/fa";

const BrandReviewMarquee: React.FC = () => {
  return (
    <Marquee direction="left" speed={50} pauseOnHover={true}>
      {brandReviewList.map((member, index) => (
        <div key={index} className="pt-8 pb-20">
          <div className="flex flex-col justify-center">
            <div className="">
              <img src={member.image} className="w-72 lg:h-72  mr-10" />
            </div>
            <div className="bg-color-sky-blue p-6 flex flex-col gap-6 w-72">
              <div className="text-color-white text-2xl flex items-center justify-between">
                <div>
                  {Array.from({ length: member.rating }, (_, index) => (
                    <span key={index} className="star-icon">
                      &#9733;
                    </span>
                  ))}
                </div>
                <div className="text-color-white text-5xl opacity-10">
                  <FaQuoteLeft />
                </div>
              </div>
              <p className="text-color-white font-bold">{member.review}.</p>
              <div className="flex justify-between">
                <div className="text-color-white flex flex-col gap-0">
                  <p className="font-bold text-xs">{member.name}</p>
                  <p className="font-bold text-xxs opacity-70">
                    {member.position}
                  </p>
                </div>
                <h1 className="text-color-accent-blue-light font-bold font-manrope text-1xl">
                  What <br />
                  they say
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Marquee>
  );
};

export default BrandReviewMarquee;
