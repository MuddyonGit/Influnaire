import { useMyContext } from "../../MyContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import MarketingCard from "./MarketingCard";

import { FaAngleRight, FaEnvelope, FaSearch } from "react-icons/fa";

const MarketingCycle = () => {
  const { selectedMode } = useMyContext();

  const [slidesPerView, setSlidesPerView] = useState(1);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768) {
        setSlidesPerView(1);
      } else if (screenWidth > 768 && screenWidth <= 1280) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center gap-6 -mt-52 md:-mt-20 py-10 largerDevices:max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="font-Clash-Display  font-bold gradient-text leading-tight text-2xl  md:text-3xl lg:text-4xl xl:text-5xl">
            Manage complete Influencer Marketing <br />
            lifecycle from a single platform
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div
            className={`${
              activeSlideIndex === 0
                ? "bg-color-dark-blue text-color-white  p-4 rounded-full md:bg-color-whitesmoke md:text-color-dim-black"
                : "bg-color-whitesmoke"
            }  p-4 rounded-full`}
          >
            <FaSearch />
          </div>
          <div className="flex items-center text-gray-500">
            <hr className="w-3 md:w-32 lg:w-40 border-dashed border-gray-500" />
            <FaAngleRight />
          </div>

          <div
            className={`${
              activeSlideIndex === 1
                ? "bg-color-dark-blue text-color-white p-4 rounded-full lg:bg-color-whitesmoke lg:text-color-dim-black"
                : "bg-color-whitesmoke"
            }  p-4 rounded-full`}
          >
            <FaEnvelope />
          </div>
          <div className="flex items-center text-gray-500">
            <hr className="w-3 md:w-32 lg:w-40 border-dashed border-gray-500" />
            <FaAngleRight />
          </div>

          <div
            className={`${
              activeSlideIndex === 2
                ? "bg-color-dark-blue text-color-white p-4 rounded-full lg:bg-color-whitesmoke lg:text-color-dim-black"
                : "bg-color-whitesmoke"
            }  p-4 rounded-full`}
          >
            <FaSearch />
          </div>
          <div className="flex items-center text-gray-500">
            <hr className="w-3 md:w-32 lg:w-40 border-dashed border-gray-500" />
            <FaAngleRight />
          </div>

          <div
            className={`${
              activeSlideIndex === 3
                ? "bg-color-dark-blue text-color-white p-4 rounded-full lg:bg-color-whitesmoke lg:text-color-dim-black"
                : "bg-color-whitesmoke"
            }  p-4 rounded-full`}
          >
            <FaSearch />
          </div>
        </div>
        {selectedMode !== "brand" ? (
          <div className="flex justify-center items-center">
            <Swiper
              spaceBetween={window.innerWidth <= 768 ? 0 : 0}
              loop={true}
              pagination={false}
              slidesPerView={slidesPerView}
              // centeredSlides={true}
              onActiveIndexChange={(e) => setActiveSlideIndex(e.realIndex)}
            >
              <SwiperSlide>
                <div className="flex justify-center items-center">
                  <MarketingCard
                    title="Discover Influencers"
                    description="Find influencers that will take your brand to "
                    onGetStartedClick={() => {}}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center">
                  <MarketingCard
                    title="Invite Influencers"
                    description="Find influencers that will take your brand to a next level "
                    onGetStartedClick={() => {}}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center">
                  <MarketingCard
                    title="Manage Campaign"
                    description="Find influencers that will take your brand to a next level "
                    onGetStartedClick={() => {}}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center">
                  <MarketingCard
                    title="Analyze ROI for Campaign"
                    description="Find influencers that will take your brand to a next level "
                    onGetStartedClick={() => {}}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        ) : (
          <div className="flex justify-center items-center ">
            <Swiper
              spaceBetween={window.innerWidth <= 768 ? 0 : 0}
              loop={true}
              pagination={false}
              slidesPerView={slidesPerView}
              // centeredSlides={true}
              onActiveIndexChange={(e) => setActiveSlideIndex(e.realIndex)}
            >
              <SwiperSlide>
                <div className="flex justify-center items-center">
                  <MarketingCard
                    title="Discover Campaigns"
                    description="Find influencers that will take your brand to "
                    onGetStartedClick={() => {}}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center">
                  <MarketingCard
                    title="Send Proposals"
                    description="Find influencers that will take your brand to a next level "
                    onGetStartedClick={() => {}}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center">
                  <MarketingCard
                    title="Create Content"
                    description="Find influencers that will take your brand to a next level "
                    onGetStartedClick={() => {}}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center">
                  <MarketingCard
                    title="Upload content"
                    description="Find influencers that will take your brand to a next level "
                    onGetStartedClick={() => {}}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )}
      </div>
    </>
  );
};

export default MarketingCycle;
