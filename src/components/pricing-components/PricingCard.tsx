import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const PricingCard: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string>("Essential");

  const handleCardClick = (cardType: string) => {
    setActiveCard(cardType);
  };

  const handleSlideChange = (swiper: any) => {
    const activeIndex = swiper.activeIndex;
    const cards = ["Essential", "Basic", "Premium"];
    setActiveCard(cards[activeIndex]);
  };

  const renderPricingCard = (
    type: string,
    price: number,
    zIndex: number,
    benefit1: string,
    benefit2: string,
    benefit3: string
  ) => (
    <div
      className={`pricing-card ${
        activeCard === type
          ? "border-2 border-color-dodgerblue border-t-[2rem] rounded-md "
          : "border-2 border-color-dodgerblue border-t-[2rem] md:border-none rounded-t-md lg:roundedt-none"
      } m-2 lg:mx-0`}
      style={{ zIndex }}
      onClick={() => handleCardClick(type)}
    >
      <div
        className={`${
          activeCard === type ? "rounded-t-md" : ""
        }text-center bg-color-white px-16 py-4`}
      >
        <div className="text-center">
          <h3 className="text-color-black font-font-source-sans-pro font-black text-2xl">
            {type}
          </h3>
          <h3 className="text-color-black font-font-source-sans-pro font-black text-1xl">
            ${price}
            <span className="text-color-gray-black"> / month</span>
          </h3>
        </div>
      </div>
      <div className="bg-color-F5F5F5 px-4 py-6 space-y-6 rounded-b-md">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <FaCheck style={{ color: "dodgerblue" }} />
            <p className="font-font-source-sans-pro text-color-636363">
              {benefit1}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck style={{ color: "dodgerblue" }} />
            <p className="font-font-source-sans-pro text-color-636363">
              {benefit2}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck style={{ color: "dodgerblue" }} />
            <p className="font-font-source-sans-pro text-color-636363">
              {benefit3}
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            className={`${
              activeCard === type
                ? "bg-color-dodgerblue text-color-white"
                : "bg-color-dodgerblue text-color-white md:bg-color-F5F5F5 border-2 border-color-dodgerblue md:text-color-dodgerblue "
            } rounded-md font-font-source-sans-pro py-2 px-10`}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="hidden md:flex md:flex-row justify-center gap-4 -translate-y-28 lg:-translate-y-24">
        {renderPricingCard(
          "Basic",
          19,
          1,
          "Consequat ex proident sdfsjkssd",
          "Consequat ex proident",
          "Consequat ex proident"
        )}
        {renderPricingCard(
          "Essential",
          59,
          2,
          "Consequat ex proident sdfsjkssd",
          "Consequat ex proident",
          "Consequat ex proident"
        )}
        {renderPricingCard(
          "Premium",
          119,
          3,
          "Consequat ex proident sdfsjkssd",
          "Consequat ex proident",
          "Consequat ex proident"
        )}
      </div>
      <div className="md:hidden pb-4">
        <Swiper
          spaceBetween={20}
          loop={true}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          navigation={true}
          pagination={true}
          modules={[Pagination]}
          className="pb-4"
        >
          <SwiperSlide>
            {renderPricingCard(
              "Basic",
              19,
              1,
              "Consequat ex proident sdfsjkssd",
              "Consequat ex proident",
              "Consequat ex proident"
            )}
          </SwiperSlide>
          <SwiperSlide>
            {renderPricingCard(
              "Essential",
              59,
              2,
              "Consequat ex proident sdfsjkssd",
              "Consequat ex proident",
              "Consequat ex proident"
            )}
          </SwiperSlide>
          <SwiperSlide>
            {renderPricingCard(
              "Premium",
              119,
              3,
              "Consequat ex proident sdfsjkssd",
              "Consequat ex proident",
              "Consequat ex proident"
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default PricingCard;
