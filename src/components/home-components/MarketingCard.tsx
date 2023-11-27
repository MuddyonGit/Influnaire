interface MarketingCardProps {
  title: string;
  description: string;
  onGetStartedClick: () => void;
}

function MarketingCard({
  title,
  description,
  onGetStartedClick,
}: MarketingCardProps) {
  return (
    <div className="mx-2 md:mx-0">
      <div className="bg-white p-6 shadow-sm rounded-3xl h-60 w-full md:w-56 space-y-2 lg:space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-color-dim-black font-Clash-display -leading-10">
            {title}
          </h2>
          <p className="text-color-gray-black font-font-source-sans-pro font-bold">
            {description}
          </p>
        </div>
        <button
          onClick={onGetStartedClick}
          className="text-color-dodgerblue border border-color-light-blue px-6 py-2 rounded-full font-font-source-sans-pro font-bold"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default MarketingCard;
