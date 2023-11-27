import influnaireLogo from "../assets/InflunaireLogo.svg";
import { Link } from "react-router-dom";
import { useMyContext } from "../MyContext";
import topBorderBottomFooter from "../assets/TopBorderBottomFooter.svg";
import {
  FaRegEnvelope,
  FaRegClock,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const BottomFooter = () => {
  const { selectedMode } = useMyContext();
  return (
    <>
      <div
        className=""
        style={
          selectedMode === "brand"
            ? {
                background:
                  "linear-gradient(180deg,  #F9E000 0%, #F1B643 100%)",
              }
            : {
                background:
                  "linear-gradient(180deg, #F30000 12.5%,  #F36600 56.39%)",
              }
        }
      >
        <img src={topBorderBottomFooter} className="w-full" />
        <div className="bg-color-dark-blue p-20 md:p-28 rounded-b-0">
          {" "}
          <div className="flex flex-col items-center gap-20">
            <div className="">
              <img src={influnaireLogo} alt="Influnaire Logo" />
            </div>
            <div className="flex flex-col md:flex-row gap-20 md:gap-40">
              <div className="flex flex-col gap-6">
                <h1 className="text-color-white font-barlow font-bold text-1xl">
                  LIFT MEDIA
                </h1>
                <Link
                  to="/"
                  className="text-color-white font-barlow font-bold opacity-70 text-sm"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-color-white font-barlow font-bold opacity-70 text-sm"
                >
                  About Us
                </Link>
                <Link
                  to="/pricing"
                  className="text-color-white font-barlow font-bold opacity-70 text-sm"
                >
                  Pricing
                </Link>
                <Link
                  to="/faq"
                  className="text-color-white font-barlow font-bold opacity-70 text-sm"
                >
                  FAQ
                </Link>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="text-color-white font-barlow font-bold text-1xl">
                  LEGAL
                </h1>
                <Link
                  to="#"
                  className="text-color-white font-barlow font-bold opacity-70 text-sm"
                >
                  Terms and conditions
                </Link>
                <Link
                  to="#"
                  className="text-color-white font-barlow font-bold opacity-70 text-sm"
                >
                  Cookie policy
                </Link>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="text-color-white font-barlow font-bold text-1xl">
                  CONTACT
                </h1>
                <div className="flex items-center gap-2">
                  <div className="text-color-lift-blue text-2xl">
                    <FiPhone />
                  </div>
                  <p className="text-color-white font-bold opacity-70 text-sm">
                    123 456 789
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-color-lift-blue text-2xl">
                    <FaRegEnvelope />
                  </div>
                  <p className="text-color-white font-bold opacity-70 text-sm">
                    hola@Liftmedia.com
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-color-lift-blue text-2xl">
                    <FaRegClock />
                  </div>
                  <p className="text-color-white font-bold opacity-70 text-sm">
                    Lunes a Viernes 09:00 a 20:00 horas
                  </p>
                </div>
              </div>
            </div>
            <hr className="text-color-white w-4/5 opacity-40" />
            <div className="flex flex-col text-center gap-4 text-color-white">
              <div className="flex gap-6 text-color-white text-2xl justify-center">
                <Link to="#">
                  <FaTwitter />
                </Link>
                <Link to="#">
                  <FaLinkedin />
                </Link>
                <Link to="#">
                  {" "}
                  <FaFacebook />
                </Link>
              </div>
              <p className="font-bold opacity-70 text-sm">
                {" "}
                © 2019 Lift Media Online S.L.
              </p>
              <p className="font-bold opacity-70 text-sm">
                Ronda Sant Pere 52, 08010 Barcelona,{" "}
              </p>
              <p className="font-bold opacity-70 text-sm">
                Inscripción en el Registro Mercantil de Barcelona. Tomo 46606,
                Folio 37, Hoja 525271.{" "}
              </p>
              <p className="font-bold opacity-70 text-sm">
                Lift no cobra comisiones de ningún tipo
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-[700px] h-[300px] flex justify-center items-center border-2 border-red-500 m-10 rounded-b-0 rounded-t-[30%] ">
        <h1 className="">This is a dummy div.</h1>
      </div> */}
    </>
  );
};

export default BottomFooter;
