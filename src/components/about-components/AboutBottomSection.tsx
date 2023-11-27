import aboutBottomSectionImage from "../../assets/AboutBottomSectionImage.png";

const AboutBottomSection = () => {
  return (
    <>
      <div className="flex flex-col gap-8 lg:flex-row justify-around items-center p-10 pb-60 bg-color-light-whitesmoke">
        <div className="bg-color-white p-6 flex flex-col gap-4 rounded-3xl">
          <h1 className="font-font-source-sans-pro text-color-blueblack text-3xl font-bold">
            Our Story
          </h1>
          <p className="font-font-source-sans-pro text-color-dim-black w-60 md:w-96 lg:w-120">
            Influnaire emerged from a shared belief that influencer marketing
            should be accessible, efficient, and transparent. Our team of
            creative minds, tech enthusiasts, and marketing experts came
            together to transform the influencer marketing landscape.
          </p>
        </div>
        <div className="w-full md:w-2/5 lg:w-2/6">
          <img
            src={aboutBottomSectionImage}
            alt="About Bottom Section Image"
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default AboutBottomSection;
