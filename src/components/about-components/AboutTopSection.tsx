import aboutTopSectionImage from "../../assets/AboutTopSectionImage.png";

const AboutTopSection = () => {
  return (
    <>
      <div
        className=" w-full pt-16 pb-32 xl:pb-0 "
        style={{
          background:
            " linear-gradient(255deg, rgba(0, 155, 243, 0.00) 22.45%, rgba(0, 82, 243, 0.87) 63.28%)",
        }}
      >
        <div className="largerDevices:max-w-7xl mx-auto flex flex-col-reverse lg:flex-row justify-center items-center ">
          <div className="w-1/2  flex justify-end">
            <h1 className="text-color-white font-font-source-sans-pro text-center font-bold text-3xl lg:text-4xl xl:text-6xl lg:96 md:w-96 xl:w-144">
              Connecting influence, creating impact: the influnaire story
            </h1>
          </div>
          <div className="w-full lg:w-1/2 largerDevices:w-1/2 ">
            <img
              src={aboutTopSectionImage}
              alt="About Top Section Image"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTopSection;
