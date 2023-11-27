import { useFormik } from "formik";
import queryImage from "../assets/MessageImage.png";

const AnyQuery = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log("Form submitted:", values);
      // You can add logic to send the message
    },
  });

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/5">
          <img
            src={queryImage}
            alt="Query Image"
            className="object-cover w-full h-full rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl"
          />
        </div>
        <div className="w-full lg-w-full xl:w-3/5 p-4  bg-color-white rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none">
          <form onSubmit={formik.handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                onChange={formik.handleChange}
                value={formik.values.fullName}
                className="bg-color-F2F2F2  h-14 2xl:h-14 focus:outline-none w-full rounded-lg p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="bg-color-F2F2F2 h-14 focus:outline-none w-full rounded-lg p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
                placeholder="Write your message..."
                className="bg-color-F2F2F2 h-32 focus:outline-none w-full resize-none rounded-lg p-2"
              />
            </div>

            <button
              type="submit"
              className="bg-color-blueblack font-font-source-sans-pro text-color-white px-4 py-2 text-sm md:text-lg rounded-lg flex items-center gap-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AnyQuery;
