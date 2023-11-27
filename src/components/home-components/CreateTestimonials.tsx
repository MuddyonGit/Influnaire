const CreateTestimonials = () => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(180deg, #F1B643 0%, #F9E000 100%)",
        }}
        className="flex items-end h-144 lg:h-120 justify-center  p-40 lg:p-10 translate-y-72 md:translate-y-96 lg:translate-y-28"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-color-dark-black font-Clash-Display font-bold text-5xl text-center">
            Creator Testimonials
          </h1>
          <p className="text-color-dark-black font-inter font-medium text-center w-80 md:w-120 lg:w-144">
            An all-in-one platform for programs and paid campaigns combined with
            exceptional customer experience.
          </p>
          <button className="bg-color-cyan text-color-black px-8 py-2 rounded-full  font-font-source-sans-pro w-40 mx-auto">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateTestimonials;
