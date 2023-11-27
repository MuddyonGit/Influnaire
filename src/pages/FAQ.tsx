import { useNavigate } from "react-router-dom";
import FaqQuestions from "../components/faq-components/FaqQuestions";

const FAQ = () => {
  const navigate = useNavigate();
  const handleContactUsOnClick = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="bg-color-white px-4 md:px-10 xl:px-72 pt-28 pb-20 flex flex-col gap-8">
        <div className="text-center space-y-4">
          <h1 className="font-font-source-sans-pro text-color-969696 text-3xl md:text-5xl font-bold">
            Ask and we answer
          </h1>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-color-blueblack font-font-source-sans-pro text-color-white px-4 py-2 text-sm md:text-md rounded-full flex items-center gap-2"
              onClick={handleContactUsOnClick}
            >
              Contact Us
            </button>
          </div>
        </div>
        <div
          style={{
            boxShadow:
              "0px 12px 24px 0px rgba(20, 20, 43, 0.04), 0px -2px 4px 0px rgba(20, 20, 43, 0.02), 0px 3px 14px 0px rgba(74, 58, 255, 0.03)",
          }}
          className="rounded-2xl"
        >
          <h3 className="font-font-source-sans-pro text-lg font-bold text-color-blueblack p-4">
            1. FAQ Accordion V1
          </h3>
        </div>
        <FaqQuestions />
      </div>
    </>
  );
};

export default FAQ;
