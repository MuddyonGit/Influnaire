import PricingCard from "../components/pricing-components/PricingCard";
import TopPricingComponent from "../components/pricing-components/TopPricingComponent";

const Pricing = () => {
  return (
    <>
      <TopPricingComponent />
      <PricingCard />
      <div className="bg-color-blue text-center p-10 space-y-4">
        <h1 className="text-color-white font-font-source-sans-pro font-bold text-5xl">
          Try product for free
        </h1>
        <p className="text-color-white font-font-source-sans-pro">
          Ut aliquip anim laboris deserunt do cillum id amet aute veniam do do.
        </p>
        <button className="text-color-white border border-color-white rounded-lg px-4 py-2">
          Get demo
        </button>
      </div>
    </>
  );
};

export default Pricing;
