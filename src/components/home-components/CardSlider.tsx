import { useMyContext } from "../../MyContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import variantImage from "../../assets/Variant3 1.png";
import payamentImage from "../../assets/Property 1=payment.png";
import groupImage from "../../assets/Group 26086211 (1).svg";
import { useState, useEffect } from "react";

const CardSlider = () => {
  const { selectedMode } = useMyContext();
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth <= 768 ? 1 : 2);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {selectedMode !== "brand" ? (
        <div className="">
          <div className="card-swiper mx-1 md:ml-10 -translate-y-52 md:-translate-y-28 relative z-10  ">
            <Swiper
              spaceBetween={20}
              loop={true}
              pagination={false}
              slidesPerView={slidesPerView}
            >
              <SwiperSlide
                style={{
                  background:
                    "linear-gradient(213deg, #F36600 12.5%, #F30000 56.39%)",
                }}
                className="h-auto"
              >
                <div className="flex flex-col gap-12 md:flex-row items-center justify-between p-6 md:pb-4 md:p-12">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-color-white font-bold text-2xl md:text-4xl font-segoe-ui">
                      Join #1 destination where <br /> brands discover <br />{" "}
                      influencers in MENA
                    </h1>
                    <p className="text-color-white font-inter text-base font-medium w-80">
                      Put your game in front of highly relevant content creator
                      communities and scale your influencer marketing to new
                      heights.
                    </p>
                    <button className="text-color-light-blue bg-color-white font-font-source-sans-pro rounded-md font-semibold py-2 w-32">
                      Register Now
                    </button>
                  </div>
                  <div className="flex justify-end">
                    <div className="flex flex-col  md:w-3/5">
                      <img
                        src={variantImage}
                        alt=""
                        className="object-cover w-full"
                      />
                      <img
                        src={payamentImage}
                        alt=""
                        className="object-cover w-full"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  background:
                    "linear-gradient(256deg, #31AEF9 65%, #31AEF9 86.93%, #3F3BF6 96.12%, #EA3356 96.36%)",
                }}
                className="h-auto"
              >
                <div className="flex flex-col gap-4 px-6 p-10 md:p-10">
                  <p className="text-color-white font-segoe-ui font-bold text-sm">
                    Mobile Games
                  </p>
                  <h1 className="text-color-white font-segoe-ui font-bold text-4xl">
                    Go global with <br /> your game
                  </h1>
                  <p className="text-color-white font-inter font-bold font-base w-80 md:w-96">
                    Scale your influencer marketing and drive awareness for your
                    titles with our influencer ad buying solution. The result?
                    More installs of your game, higher engagement, and better
                    ROAS.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      ) : (
        <div className="card-swiper mx-1 md:ml-10 -translate-y-52 md:-translate-y-28 relative z-10">
          <Swiper
            spaceBetween={20}
            loop={true}
            pagination={false}
            slidesPerView={slidesPerView}
          >
            <SwiperSlide
              style={{
                background:
                  "linear-gradient(256deg, #FFAB00 86.93%, #FF5630 96.12%, #FF5630 100%)",
              }}
              className="rounded-md h-auto"
            >
              <div className="flex flex-col gap-12 md:flex-row items-center justify-between p-6   md:pb-4 md:p-12">
                <div className="flex flex-col gap-4">
                  <h1 className="text-color-black font-bold text-3xl md:text-4xl font-segoe-ui">
                    Manage your Profile
                  </h1>
                  <p className="text-color-black font-inter text-sm md:text-base font-bold w-80">
                    Put your game in front of highly relevant content creator
                    communities and scale your influencer marketing to new
                    heights.
                  </p>
                </div>
                <div className="flex justify-end">
                  <img
                    src={groupImage}
                    alt=""
                    className="object-cover  w-full"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                background:
                  "linear-gradient(256deg, #31AEF9 65%, #31AEF9 86.93%, #3F3BF6 96.12%, #EA3356 96.36%)",
              }}
              className="rounded-md h-auto"
            >
              <div className="flex flex-col gap-4 px-4 p-10 md:p-10">
                <p className="text-color-white font-segoe-ui font-bold text-sm">
                  Mobile Games
                </p>
                <h1 className="text-color-white font-segoe-ui font-bold text-4xl">
                  Go global with <br /> your game
                </h1>
                <p className="text-color-white font-inter font-bold font-base w-80 md:w-96">
                  Scale your influencer marketing and drive awareness for your
                  titles with our influencer ad buying solution. The result?
                  More installs of your game, higher engagement, and better
                  ROAS.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </>
  );
};

export default CardSlider;
