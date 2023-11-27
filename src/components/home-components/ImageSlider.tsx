import Marquee from "react-fast-marquee";
import { useMyContext } from "../../MyContext";
import { influencersList, brandList } from "../../utilities/data";
import facebookIcon from "../../assets/FacebookIcon.svg";
import instagramIcon from "../../assets/InstagramIcon.svg";
import youtubeIcon from "../../assets/YoutubeIcon.svg";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  const { selectedMode } = useMyContext();

  return (
    <div className="">
      {selectedMode === "brand" ? (
        <Marquee direction="left" speed={50} pauseOnHover={true}>
          {brandList.map((member, index) => (
            <div
              key={index}
              className={`relative ${index % 2 === 0 ? "mt-32" : ""}`}
            >
              <div className="flex justify-center mr-10">
                <img
                  src={member.image}
                  className="w-72 lg:h-96 rounded-3xl object-cover"
                />
                <h1 className="text-color-white font-bold font-font-source-sans-pro text-2xl absolute top-52 lg:top-56">
                  {member.name}
                </h1>
                <p className="text-color-white font-font-source-sans-pro text-lg font absolute top-60 lg:top-64">
                  {member.userName}
                </p>
                <div className="flex flex-row gap-6 justify-center items-center absolute top-72 lg:top-80 text-color-white">
                  <div className="flex flex-col">
                    <p>{member.facebookFollowers}</p>
                    <p>followers</p>
                  </div>
                  <div className="flex flex-col">
                    <p>{member.instagramFollowers}</p>
                    <p>followers</p>
                  </div>
                  <div className="flex flex-col">
                    <p>{member.youtubeFollowers}</p>
                    <p>followers</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      ) : (
        <Marquee direction="left" speed={50} pauseOnHover={true}>
          {influencersList.map((member, index) => (
            <div
              key={index}
              className={`relative ${index % 2 === 0 ? "mt-32" : ""}`}
            >
              <div className="flex justify-center mr-10">
                <img
                  src={member.image}
                  className="w-72 lg:h-96 rounded-3xl object-cover"
                />
                <p className="font-font-source-sans-pro text-color-white text-center absolute top-56  text-lg">
                  Seize the day
                </p>
                <div className="flex justify-center absolute top-64 lg:top-72 ml-6">
                  <Link to={member.facebookLink}>
                    <img src={facebookIcon} alt="Facebook Icon" />
                  </Link>
                  <Link to={member.instagranLink}>
                    <img
                      src={instagramIcon}
                      alt="Facebook Icon"
                      className="-translate-x-4"
                    />
                  </Link>
                  <Link to={member.youtubeLink}>
                    <img
                      src={youtubeIcon}
                      alt="Youtube Icon"
                      className="-translate-x-8"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      )}
    </div>
  );
};

export default ImageSlider;
