import React from "react";
import { brandList } from "../../utilities/data";
import Marquee from "react-fast-marquee";

const ListBrandMarquee: React.FC = () => {
  const oddIndexItems = brandList.filter((_, index) => index % 2 === 0);
  const evenIndexItems = brandList.filter((_, index) => index % 2 === 1);

  return (
    <div className="h-16">
      <div className="-translate-y-80 ">
        <Marquee direction="left" speed={50} pauseOnHover={true}>
          {oddIndexItems.map((member, index) => (
            <div key={index}>
              <div
                className="flex relative bg-cover bg-center h-48 w-120 rounded-3xl mr-4"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${member.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="">
                  <div>
                    <h1 className="text-color-white font-bold font-font-source-sans-pro text-2xl absolute top-1/4 left-1/4 ">
                      {member.name}
                    </h1>
                    <p className="text-color-white font-font-source-sans-pro text-lg font absolute top-1/3 left-1/4 mt-2 ">
                      {member.userName}
                    </p>
                  </div>
                  <div className="flex flex-row gap-6 justify-center items-center absolute bottom-1/4 left-1/4 text-color-white ">
                    <div className="flex flex-col">
                      <p className="font-bold">{member.facebookFollowers}</p>
                      <p>followers</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">{member.instagramFollowers}</p>
                      <p>followers</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">{member.youtubeFollowers}</p>
                      <p>followers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>

        <Marquee direction="right" speed={50} pauseOnHover={true}>
          {evenIndexItems.map((member, index) => (
            <div key={index} className="mt-2">
              <div
                className="flex relative bg-cover bg-center h-48 w-120 rounded-3xl mr-4"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${member.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="">
                  <div>
                    <h1 className="text-color-white font-bold font-font-source-sans-pro text-2xl absolute top-1/4 left-1/4 ">
                      {member.name}
                    </h1>
                    <p className="text-color-white font-font-source-sans-pro text-lg font absolute top-1/3 left-1/4 mt-2 ">
                      {member.userName}
                    </p>
                  </div>
                  <div className="flex flex-row gap-6 justify-center items-center absolute bottom-1/4 left-1/4 text-color-white ">
                    <div className="flex flex-col">
                      <p className="font-bold">{member.facebookFollowers}</p>
                      <p>followers</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">{member.instagramFollowers}</p>
                      <p>followers</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">{member.youtubeFollowers}</p>
                      <p>followers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ListBrandMarquee;
