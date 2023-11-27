import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { faqData } from "../../utilities/data";

const FaqQuestions: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-color-F7F7FB p-4 lg:p-20 flex flex-col justify-center rounded-2xl">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="mb-4 flex flex-col  bg-color-white p-6 rounded-md"
        >
          <div
            className="flex justify-between  cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <h3 className="text-lg font-semibold text-color-blueblack font-font-source-sans-pro">
              {faq.question}
            </h3>
            <div className="mr-10">
              {activeIndex === index ? (
                <div className="bg-color-hot-blue text-color-white p-1 rounded-full">
                  <FaChevronDown />
                </div>
              ) : (
                <div className="bg-color-whitesmoke rounded-full p-1">
                  <FaChevronRight />
                </div>
              )}
            </div>
          </div>
          {activeIndex === index && (
            <p className="text-color-gray-black font-font-source-sans-pro mt-2">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqQuestions;
