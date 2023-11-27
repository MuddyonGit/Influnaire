import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import facebookIcon from "../../assets/FacebookIcon.svg";
import instagramIcon from "../../assets/InstagramIcon.svg";
import youtubeIcon from "../../assets/YoutubeIcon.svg";
import { brandCardList } from "../../utilities/data";
import {
  IoLocationOutline,
  IoCalendarOutline,
  IoTimerOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const BrandCardMarquee: React.FC = () => {
  const [showAllItems, setShowAllItems] = useState(
    brandCardList.map(() => false)
  );

  const toggleShowItems = (index: number) => {
    setShowAllItems((prev) => {
      const newShowAllItems = [...prev];
      newShowAllItems[index] = !newShowAllItems[index];
      return newShowAllItems;
    });
  };

  return (
    <Marquee direction="left" speed={50} pauseOnHover={true}>
      {brandCardList.map((member, index) => (
        <div key={index} className="pt-8 pb-32">
          <div className="flex flex-col justify-center ">
            <div className="">
              <img
                src={member.image}
                className="w-80 lg:w-120 lg:h-52 rounded-t-3xl  mr-10 border-2 border-light-gray border-b-0"
              />
            </div>
            <div className="bg-color-white p-4 lg:p-6 flex flex-col gap-2 w-80  lg:w-120 border-2 border-light-gray border-t-0 rounded-b-3xl  shadow-2xl">
              <div className="flex flex-col lg:gap-4">
                <div className="flex justify-start gap-4 lg:justify-between items-center">
                  <div className="flex items-center lg:gap-2">
                    <img
                      src={member.brandIconImage}
                      className="h-8 object-cover"
                    />
                    <h3 className="font-font-source-sans-pro">
                      {member.brandName}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <Link
                      to={member.brandFacebookLink}
                      className="h-8 translate-x-2"
                    >
                      <img
                        src={facebookIcon}
                        alt="Facebook Icon"
                        className="h-full object-cover"
                      />
                    </Link>
                    <Link to={member.brandInstagramLink} className="h-8 ">
                      <img
                        src={instagramIcon}
                        alt="Instagram Icon"
                        className="h-full object-cover"
                      />
                    </Link>
                    <Link
                      to={member.brandYoutubeLink}
                      className="h-8 -translate-x-2"
                    >
                      <img
                        src={youtubeIcon}
                        alt="Youtube Icon"
                        className="h-full object-cover"
                      />
                    </Link>
                  </div>
                </div>
                <h1 className="font-font-source-sans-pro font-bold w-56 lg:w-full">
                  {member.title}
                </h1>
              </div>

              <hr className="border-t-2 h-0" />
              <div className="flex flex-col  lg:flex-row lg:items-center gap-2">
                <div className="flex items-center text-gray-500">
                  <IoLocationOutline />
                  <p className="">{member.location}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.itemArray
                    .slice(0, showAllItems[index] ? undefined : 2)
                    .map((item, itemIndex) => (
                      <p
                        key={itemIndex}
                        className="border border-color-whitesmoke px-4 py-1 rounded-full text-gray-500"
                      >
                        #{item}
                      </p>
                    ))}
                  {member.itemArray.length > 2 && (
                    <button
                      className="text-color-sky-blue underline"
                      onClick={() => toggleShowItems(index)}
                    >
                      {showAllItems[index] ? "Show Less" : "Show More"}
                    </button>
                  )}
                </div>
              </div>
              <div className="flex justify-between text-xs lg:text-sm  lg:gap-6">
                <div className="flex items-center gap-1">
                  <div className="text-color-sky-blue">
                    <IoCalendarOutline />
                  </div>
                  {member.fromDate} - {member.toDate}
                </div>
                <div className="flex items-center gap-1">
                  <div className="text-color-yellow">
                    <IoTimerOutline />
                  </div>
                  <p className="">Ends in {member.days} days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Marquee>
  );
};

export default BrandCardMarquee;
