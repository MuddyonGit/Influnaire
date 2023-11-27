import AnyQuery from "../components/AnyQuery";

const Message = () => {
  return (
    <>
      <div className="bg-color-F5F5F5 px-4 lg:px-60 pt-20 pb-20">
        <div className="text-center py-6 lg:py-20">
          <h1 className="font-font-source-sans-pro text-5xl text-color-dark-gray">
            Any Queries
          </h1>
          <p className="font-font-source-sans-pro text-color-light-gray">
            We are here to assist you
          </p>
        </div>
        <AnyQuery />
      </div>
    </>
  );
};

export default Message;
