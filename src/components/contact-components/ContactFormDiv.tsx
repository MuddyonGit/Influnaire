import { Link } from "react-router-dom";
import { PiPhoneCallFill } from "react-icons/pi";
import { BiSolidEnvelope } from "react-icons/bi";
import {
  FaLocationDot,
  FaTwitter,
  FaInstagram,
  FaReddit,
} from "react-icons/fa6";
import ContactForm from "./ContactForm";

const ContactFormDiv = () => {
  return (
    <>
      <div
        className="flex flex-col-reverse xl:flex-row rounded-md"
        style={{ boxShadow: "0px 0px 60px 30px rgba(0, 0, 0, 0.03)" }}
      >
        <div className="w-full xl:w-2/5 flex flex-col justify-between gap-20 p-8 bg-color-hot-blue rounded-b-md xl:rounded-l-md xl:rounded-br-none">
          <div className="">
            <h1 className="text-color-white font-poppins font-semibold text-2xl">
              Contact Information
            </h1>
          </div>
          <div className="text-color-white font-poppins flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <PiPhoneCallFill />
              <p className="font-base">+1012 3456 789</p>
            </div>
            <div className="flex items-start gap-4">
              <BiSolidEnvelope />
              <p className="font-base">demo@gmail.com</p>
            </div>
            <div className="flex items-start gap-4">
              <FaLocationDot />
              <p className="font-base">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Link to="#">
              <div className="bg-color-08274D text-color-white rounded-full p-2 hover:bg-color-white hover:text-color-08274D">
                <FaTwitter />
              </div>
            </Link>
            <Link to="#">
              <div className="bg-color-08274D text-color-white rounded-full p-2 hover:bg-color-white hover:text-color-08274D">
                <FaInstagram />
              </div>
            </Link>
            <Link to="#">
              <div className="bg-color-08274D text-color-white rounded-full p-2 hover:bg-color-white hover:text-color-08274D">
                <FaReddit />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full xl:w-3/5">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactFormDiv;
