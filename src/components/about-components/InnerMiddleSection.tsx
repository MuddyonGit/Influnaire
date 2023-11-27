import { HiUserGroup } from "react-icons/hi2";
import innerAboutSectionImage from "../../assets/InnerAboutSectionImage.png";
import bulbImage from "../../assets/fluent-emoji_light-bulb.svg";

const InnerMiddleSection = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="flex flex-col w-full  lg:w-1/4">
          <div className="bg-color-gray flex flex-col justify-center items-center gap-4 p-20  lg:h-1/2">
            <div className="flex lg:self-start 2xl:self-center gap-2">
              <div className="text-3xl text-color-dim-black">
                <HiUserGroup />
              </div>
              <p className="text-color-dim-black font-font-source-sans-pro text-2xl">
                Transparency
              </p>
            </div>
            <p className="w-60 text-color-dim-black font-font-source-sans-pro text-sm">
              We value transparency above all else. From campaign details to
              performance metrics, we're committed to providing clear, honest
              insights into every collaboration.
            </p>
          </div>
          <div className="bg-color-92CAFA flex flex-col justify-center items-center gap-4 p-20 h-1/2">
            <div className="flex lg:self-start 2xl:self-center gap-2">
              <div className="text-3xl text-color-dim-black">
                <HiUserGroup />
              </div>
              <p className="text-color-dim-black font-font-source-sans-pro text-2xl">
                Support
              </p>
            </div>
            <p className="w-60 text-color-dim-black font-font-source-sans-pro text-sm">
              We value transparency above all else. From campaign details to
              performance metrics, we're committed to providing clear, honest
              insights into every collaboration.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center lg:w-1/4">
          <img
            src={innerAboutSectionImage}
            alt="Inner About Section Image"
            className="object-cover h-full"
          />
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
          <div className="bg-color-4380C0  h-full lg:h-2/5 flex flex-col justify-center">
            <h1 className="text-color-white font-font-source-sans-pro text-3xl ml-10">
              What sets us apart
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row h-3/5">
            <div className="bg-color-gray flex flex-col justify-center items-center gap-4 p-12 lg:w-1/2 xl:w-full">
              <div className="flex lg:self-start 2xl:self-center gap-2">
                <div className="text-3xl text-color-dim-black">
                  <HiUserGroup />
                </div>
                <p className="text-color-dim-black font-font-source-sans-pro text-2xl">
                  Community
                </p>
              </div>
              <p className="w-60 text-color-dim-black font-font-source-sans-pro text-sm">
                We're at the forefront of innovation in influencer marketing.
                Our platform features cutting-edge tools that simplify
                collaboration while maximizing the impact of your campaigns.
              </p>
            </div>
            <div className="bg-color-3C74A4 flex flex-col justify-center items-center gap-4 p-12 lg:w-1/2 xl:w-full">
              <div className="flex lg:self-start 2xl:self-center gap-2">
                <img src={bulbImage} alt="Bulb" className="w-1/6" />
                <p className="text-color-white font-font-source-sans-pro text-2xl">
                  Innovation
                </p>
              </div>
              <p className="w-60 text-color-white font-font-source-sans-pro text-sm">
                We're at the forefront of innovation in influencer marketing.
                Our platform features cutting-edge tools that simplify
                collaboration while maximizing the impact of your campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InnerMiddleSection;
