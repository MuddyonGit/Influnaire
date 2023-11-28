import InnerMiddleSection from "./InnerMiddleSection";

const AboutMiddleSection = () => {
  return (
    <>
      <div className="bg-color-light-whitesmoke">
        <div className="bg-color-white p-4 pb-16 lg:pr-40 flex flex-col gap-4 mx-6 lg:mx-32 xl:mx-80 -translate-y-8 rounded-3xl largerDevices:max-w-7xl largerDevices:mx-auto">
          <h1 className="font-font-source-sans-pro text-color-blueblack text-3xl font-bold text-center lg:text-left">
            Mission
          </h1>
          <p className="font-font-source-sans-pro text-color-dim-black w-full text-sm 2xl:text-1xl lg:text-lg  md:w-72 lg:w-96 2xl:w-120">
            Our mission is to redefine and elevate the world of influencer
            marketing. We're committed to forging authentic, lasting
            partnerships between brands and influencers, fostering creativity,
            transparency, and mutual growth. Our platform is the embodiment of
            our unwavering belief that influencer marketing should be
            accessible, efficient, and a force for positive change in the
            digital landscape.
          </p>
        </div>
        <InnerMiddleSection />
      </div>
    </>
  );
};

export default AboutMiddleSection;
